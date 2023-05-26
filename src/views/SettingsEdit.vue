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
            FirstName:
            <b-form-input
              v-model="firstName"
              id="first-name"
              placeholder="Enter your name"
              type="text"
            />
            LastName:
            <b-form-input
              v-model="lastName"
              id="laast-name-2"
              placeholder="Enter your last name"
              type="text"
              class="my-3"
            />
          </b-form-group>
          <b-form-group id="input-group-2" label="E-mail:" labelFor="input-2">
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
          </b-form-group>
          <b-btn variant="primary" type="submit">Save</b-btn>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';
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
        zip: ''
      }
    };
  },
  methods: {
    ...mapActions(['readUser', 'createUser']),
    onSubmit () {
      // create payload
      const payload = {
        firstName: this.firstName,
        lastName: this.lastName,
        phone: this.phone,
        email: this.email,
        address: this.address
      };
      if (this.user && this.user.id) {
        payload.id = this.user.rev;
      }
      this.createUser(payload);
    },
    onReset () {

    },
    prepopulateUser () {
      this.firstName = this.user.firstName;
      this.lastName = this.user.lastName;
      this.email = this.user.email;
      this.phone = this.user.phone;
      this.address = { ...this.user.address };
    }
  },
  computed: {
    ...mapState(['user'])
  },
  async mounted () {
    await this.readUser();
    if (this.user) {
      this.prepopulateUser();
    }
  }
};
</script>