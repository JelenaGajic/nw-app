<template>
  <b-container>
    <b-row>
      <b-col sm="6" offsetSm="3">
        <h1>Settings form</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form @submit.prevent="onSubmit" @reset="onReset">
          <b-form-group id="input-group-1" labelFor="input-1">
            <b-form-input
              v-model="firstName"
              id="first-name"
              placeholder="Enter your name"
              type="text"
            />
            <b-form-input
              v-model="lastName"
              id="laast-name-2"
              placeholder="Enter your last name"
              type="text"
              class="my-3"
            />
          </b-form-group>
          <b-form-group id="input-group-2" label="Description:" labelFor="input-2">
            <b-form-input
              v-model="email"
              id="email-2"
              placeholder="E-mail"
              class="my-3"
            />
            <b-form-input
              v-model="phone"
              id="phone"
              placeholder="Phone"
              class="my-3"
            />
            <b-form-input
              v-model="address.street1"
              id="address-1"
              placeholder="address.street1"
              class="my-3"
            />
            <b-form-input
              v-model="address.street2"
              id="input-2"
              placeholder="address.street2"
              class="my-3"
            />
            <b-form-input
              v-model="address.city"
              id="input-2"
              placeholder="address.city"
              class="my-3"
            />
            <b-form-input
              v-model="address.state"
              id="input-2"
              placeholder="address.state"
              class="my-3"
            />
            <b-form-input
              v-model="address.zip"
              id="input-2"
              placeholder="address.zip"
              class="my-3"
            />
            <b-form-input
              v-model="address.country"
              id="input-2"
              placeholder="address.country"
              class="my-3"
            />
          </b-form-group>
          <b-btn variant="primary" type="submit">Save</b-btn>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex';
/* eslint-disable no-restricted-syntax */
export default {
  name: 'SettingsEdit',
  data () {
    return {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      address: {
        street1: '',
        street2: '',
        city: '',
        state: '',
        zip: null,
        country: ''
      }
    };
  },
  methods: {
    ...mapActions(['createUser']),
    onSubmit () {
      const payload = {
        firstName: this.firstName,
        lastName: this.lastName,
        phone: this.phone,
        email: this.email,
        address: this.address
      };
      this.createUser(payload);
    },
    onReset () {

    }
  }
};
</script>