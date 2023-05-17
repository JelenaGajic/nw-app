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
              Edit settings
            </b-btn>
          </b-col>
        </b-row>
        <b-col />
      </b-col>
    </b-row>
    <b-row clas="mt-5 mb-4">
      <b-col sm="8" offsetSm="2">
        <h2>Profile info</h2>
        <p>First Name: Jelena Gajic</p>
        <p>Last name: Jelena Gajic</p>
        <p>Email: email</p>
        <p>Address1: Jelena Gajic</p>
        <p>Address2: Jelena Gajic</p>
        <p>Email: Jelena Gajic</p>
        <p>Street: Jelena Gajic</p>
        <p>City: Jelena Gajic</p>
        <p>State: Jelena Gajic</p>
        <p>Zip: Jelena Gajic</p>
        <p>Country: Jelena Gajic</p>
        <p>Phone: Jelena Gajic</p>
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
export default {
};
</script>