<template>
  <div>
    <b-row>
      <b-col cols="12" md="6" offset-md="3">
        <b-card class="mt-4">
          <b-form @submit.prevent="onSubmit">
            <b-form-group id="email" label="Email:" label-for="emailInput">
              <b-form-input
                id="emailInput"
                v-model="authForm.email"
                type="email"
                required
                placeholder="Enter email id"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="password"
              label="Password:"
              label-for="passwordInput"
            >
              <b-form-input
                id="passwordInput"
                v-model="authForm.password"
                required
                placeholder="Enter password"
              ></b-form-input>
            </b-form-group>
            <div>
            <b-link @click="isLogin = !isLogin">{{ isLogin ? 'New User? Signup' : 'Already a User? Login' }}</b-link>
            </div>
            <b-button type="submit" variant="primary" v-if="isLogin">Login</b-button>
            <b-button type="submit" variant="primary" v-if="!isLogin">Sign Up</b-button>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {
      isLogin: true,
      authForm: {
        email: "",
        password: ""
      }
    };
  }
};
</script>

<style></style>
