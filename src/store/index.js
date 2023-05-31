/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
import Vue from 'vue';
import Vuex from 'vuex';
import PouchDB from 'pouchdb';
import RelPouch from 'relational-pouch';
import FindPouch from 'pouchdb-find';
import UpsertPouch from 'pouchdb-upsert';

import router from '../router';

// db

PouchDB.plugin(RelPouch);
PouchDB.plugin(FindPouch);
PouchDB.plugin(UpsertPouch);

let db = new PouchDB('hourTracking');
db.setSchema([
  {
    singular: 'timeEntry',
    plural: 'timeEntries',
    relations: {
      project: { belongsTo: 'project' }
    }
  },
  {
    singular: 'project',
    plural: 'projects',
    relations: {
      timeEntries: { hasMany: 'timeEntry' }
    }
  },
  {
    singular: 'user',
    plural: 'users'
  }
]);

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    timeEntries: [],
    projects: [],
    user: null
  },
  getters: {
    getProjects (state) {
      return state.projects.map((project) => {
        return {
          label: project.name,
          code: project.id
        };
      });
    }
  },
  mutations: {
    setTimeEntries (state, payload) {
      state.timeEntries = payload;
    },
    setProjects (state, payload) {
      state.projects = payload;
    },
    setUser (state, payload) {
      state.user = payload;
    }
  },
  actions: {
    async readTimeEntries ({ commit }, payload) {
      const docs = await db.rel.find('timeEntry');
      commit('setTimeEntries', docs.timeEntries);
    },
    async readProjects ({ commit }) {
      const docs = await db.rel.find('project');
      console.log(docs.projects);
      commit('setProjects', docs.projects);
    },
    async readUser ({ commit }) {
      const docs = await db.rel.find('user');
      // returned array
      console.log(docs.users[0]);
      console.log('user read');
      commit('setUser', docs.users[0]);
    },
    async createTimeEntry ({ commit }, payload) {
      try {
        await db.rel.save('timeEntry', { ...payload });
        router.push({ name: 'HoursLog' });
      } catch (error) {
        console.error(error);
      }
    },
    async createProject ({ commit }, payload) {
      try {
        db.rel.save('project', { ...payload });
        router.push({ name: 'Projects' });
      } catch (error) {
        console.error(error);
      }
    },
    async createUser ({ commit }, payload) {
      try {
        if (payload.rev) {
          // first delete old doc
          db.get('user').then(function (doc) {
            return db.remove(doc);
          });
          // update user
          db.put(payload.rev, function (doc) {
            return { ...payload };
          }).then(function (res) {
            // success, res is {rev: '1-xxx', updated: true, id: 'myDocId'}
          }).catch(function (err) {
            // error
          });
          commit('setUser', { ...payload });
        } else {
          const res = await db.rel.save('user', {
            ...payload
          });
          commit('setUser', { ...payload, rev: res.rev });
        }
        router.push({ name: 'Settings' });
      } catch (err) {
        console.error(err);
      }
    }
  },
  modules: {
  }
});
