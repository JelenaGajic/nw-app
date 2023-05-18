<template>
  <b-container class="hours-log-page mt-5">
    <b-row clas="mt-5 mb-4">
      <b-col sm="8" offsetSm="2">
        <b-row class="mt-5 mb-4">
          <b-col>
            <h1>Settings</h1>
          </b-col>
          <b-col>
            <b-btn variant="primary" @click="$router.push({name : 'SettingsEdit'})">
              {{ user ? 'Edit': 'Create User' }}
            </b-btn>
          </b-col>
        </b-row>
        <b-col />
      </b-col>
    </b-row>
    <b-row v-if="user" class="mt-5 mb-4">
      <b-col sm="8" offsetSm="2">
        <h2>Profile info</h2>
        <p>First Name:  {{ user.firstName }}</p>
        <p>Last name: {{ user.lastName }}</p>
        <p>Email: {{ user.email }}</p>
        <p>Address1: {{ user.address.street1 }}</p>
        <p>Address2: {{ user.address.street2 }}</p>
        <p>Street: {{ user.address.city }}</p>
        <p>City: {{ user.address.state }}</p>
        <p>State: {{ user.address.zip }}</p>
        <p>Zip: {{ user.address.zip }}</p>
        <p>Country: {{ user.address.zip }}</p>
        <p>Phone: {{ user.address.zip }}</p>
        <b-col />
      </b-col>
    </b-row>
    <b-row clas="mt-5 mb-4">
      <b-col sm="8" offsetSm="2">
        <h1>Billing info</h1>
        <b-col />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['readUser'])
  },
  computed: {
    ...mapState(['user'])
  },
  mounted () {
    this.readUser();
  }
};
</script>