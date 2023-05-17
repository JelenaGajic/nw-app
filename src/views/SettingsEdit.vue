<template>
  <b-container>
    <b-row>
      <b-col sm="6" offsetSm="3">
        <h1>Settings form</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form @submit="onSubmit" @reset="onReset">
          <b-form-group id="input-group-1" label="Name:" labelFor="input-1">
            <b-form-input
              v-model="formData.firstName"
              id="input-1"
              placeholder="Enter your name"
              type="text"
            />
            <b-form-input
              v-model="formData.lastName"
              id="input-2"
              placeholder="Enter your last name"
              type="text"
            />
          </b-form-group>
          <b-form-group id="input-group-2" label="Description:" labelFor="input-2">
            <b-form-textarea
              v-model="formData.description"
              id="input-2"
              placeholder="Enter something..."
              rows="3"
              maxRows="6"
            />
          </b-form-group>
          <b-form-group id="input-group-3" label="Color:" labelFor="input-3">
            <input v-model="formData.color" id="input-3" type="color" />
          </b-form-group>
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
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
      formData: {
        firstName: '',
        lastName: '',
        color: ''
      }
    };
  },
  methods: {
    ...mapActions(['createProject']),
    onSubmit (e) {
      e.preventDefault();
      this.createProject(this.formData);
    },
    onReset () {

    }
  }
};
</script>