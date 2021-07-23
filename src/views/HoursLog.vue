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
        <b-table striped hover :items="items" />
      </b-col>
    </b-row>
  </b-container></template>

<script>
/* eslint-disable no-restricted-syntax */
export default {
  name: 'HoursLog',
  components: {
  },
  data () {
    return {
      items: [
        { projectName: 'Company #1', date : 'May 12, 2020', startTime: '7:00 am', endTime: '11:00 am' }
      ]
    };
  }
};
</script>
