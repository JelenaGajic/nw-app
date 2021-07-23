
<template>
  <b-container class="hours-log-page mt-5">
    <b-row>
      <b-col sm="8" offsetSm="2">
        <b-row>
          <b-col>
            <h1>Projects</h1>
          </b-col>
          <b-col>
            <b-btn variant="primary">+ Add New Project</b-btn>
          </b-col>
        </b-row>
        <b-col />
      </b-col>
    </b-row>
	
    <b-row>
      <b-col>
        <v-select :options="[{label: 'Canada', code: 'ca'}]" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
/* eslint-disable no-restricted-syntax */
export default {
  name: 'Projects'
};
</script>
