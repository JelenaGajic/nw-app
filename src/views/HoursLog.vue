<template>
  <b-container class="hours-log-page mt-5">
    <b-row>
      <b-col sm="8" offsetSm="2">
        <b-row>
          <b-col>
            <h1>Hours Log</h1>
          </b-col>
          <b-col>
            <b-btn variant="primary" @click="$router.push({name: 'TimeEntry'})">
              + Add Entry
            </b-btn>
          </b-col>
        </b-row>
        <b-col />
      </b-col>
    </b-row>
	
    <b-row>
      <b-col>
        <b-table
          striped
          hover
          :items="entries"
          :fields="fields"
        />
      </b-col>
    </b-row>
  </b-container></template>

<script>
import { mapActions, mapState } from 'vuex';
import moment from 'moment';
/* eslint-disable no-restricted-syntax */
export default {
  name: 'HoursLog',
  components: {
  },
  data () {
    return {
      fields: ['startDate', 'endDate' ]
    };
  },
  methods: {
    ...mapActions(['readTimeEntries']),
    formatDate (date) {
      return moment(date).format('MM Do YYYY, h:mm a');
    }
  },
  computed: {
    ...mapState(['timeEntries']),
    entries () {
      return this.timeEntries.map(entry => {
        return {
          ...entry,
          endDate: this.formatDate(entry.endDate),
          startDate: this.formatDate(entry.startDate)
        };
      });
    }
  },
  mounted () {
    this.readTimeEntries();
  }
};
</script>
