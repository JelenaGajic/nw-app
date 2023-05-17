/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
import Vue from 'vue';
import Vuex from 'vuex';
import PouchDB from 'pouchdb';
import { v4 as uuidv4 } from 'uuid';
import RelPouch from 'relational-pouch';
import FindPouch from 'pouchdb-find';

import router from '../router';

// db

PouchDB.plugin(RelPouch);
PouchDB.plugin(FindPouch);

// const timeEntriesDB = new PouchDB('timeEntry');
// const projectsDB = new PouchDB('projects');

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
  }
]);

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    timeEntries: [],
    projects: []
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
    }

  },
  actions: {
    async readTimeEntries ({ commit }, payload) {
      // const docs = await timeEntriesDB.allDocs({ include_docs: true });

      const docs = await db.rel.find('timeEntry');
      commit('setTimeEntries', docs.timeEntries);
    },
    async readProjects ({ commit }) {
      // const docs = await projectsDB.allDocs({ include_docs: true });
      const docs = await db.rel.find('project');
      console.log(docs.projects);
      commit('setProjects', docs.projects);
    },
    async createTimeEntry ({ commit }, payload) {
      try {
        // const res = await timeEntriesDB.put({ _id: uuidv4(), ...payload });
        const res = await db.rel.save('timeEntry', { ...payload });
        router.push({ name: 'HoursLog' });
      } catch (error) {
        console.error(error);
      }
    },
    async createProject ({ commit }, payload) {
      try {
        // const res = await projectsDB.put({ _id: uuidv4(), ...payload });
        db.rel.save('project', { ...payload });
        router.push({ name: 'Projects' });
      } catch (error) {
        console.error(error);
      }
    }
  },
  modules: {
  }
});
