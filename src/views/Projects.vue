
<template>
  <b-container class="hours-log-page mt-5">
    <b-row>
      <b-col sm="8" offsetSm="2">
        <b-row>
          <b-col>
            <h1>Projects</h1>
          </b-col>
          <b-col>
            <b-btn variant="primary" @click="$router.push({name : 'ProjectEntry'})">
              + Add New Project
            </b-btn>
          </b-col>
        </b-row>
        <b-col />
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <v-select :options="getProjects" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
/* eslint-disable no-restricted-syntax */
export default {
  name: 'Projects',
  methods: {
    ...mapActions(['readProjects'])
  },
  computed: {
    ...mapState(['projects']),
    ...mapGetters(['getProjects'])
  },
  mounted () {
    this.readProjects();
  }
};
</script>
