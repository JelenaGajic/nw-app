/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
import Vue from 'vue';
import Vuex from 'vuex';
import PouchDB from 'pouchdb';
import { v4 as uuidv4 } from 'uuid';

import router from '../router';

// db
const timeEntryDB = new PouchDB('timeEntry');
const projectsDB = new PouchDB('projects');

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    timeEntries: [],
    projects: []
  },
  mutations: {
    setTimeEntries (state, payload) {
      state.timeEntries = payload.map(entry => {
        return entry.doc;
      });
    },
    setProjects (state, payload) {
      state.projects = payload.map(project => {
        return project.doc;
      });
    }

  },
  actions: {
    async readTimeEntries ({ commit }) {
      const docs = await timeEntryDB.allDocs({ include_docs: true });
      console.log(docs.rows);
      commit('setTimeEntries', docs.rows);
    },
    async readProjects ({ commit }) {
      const docs = await projectsDB.allDocs({ include_docs: true });
      console.log(docs.rows);
      commit('setProjects', docs.rows);
    },
    async createTimeEntry ({ commit }, payload) {
      try {
        const res = await timeEntryDB.put({ _id: uuidv4(), ...payload });
        console.log('success', res);
        router.push({ name: 'HoursLog' });
      } catch (error) {
        console.log(error);
      }
    },
    async createProject ({ commit }, payload) {
      try {
        const res = await projectsDB.put({ _id: uuidv4(), ...payload });
        console.log('success', res);
        router.push({ name: 'Projects' });
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {
  }
});
