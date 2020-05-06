<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand tag="h1" class="mb-0" to="/">
        Nuxt Blog - Admin
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/posts">Posts</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/admin">Admin Home</b-nav-item>
          <b-nav-item @click="onLogout">Logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-container fluid>
      <nuxt />
    </b-container>
  </div>
</template>

<script>
export default {
  middleware: ["check-auth", "auth"],
  async fetch() {
    await this.$store.dispatch("posts/getPostList").then(res => {
      this.$store.commit("posts/setAllPost", res);
    });
  },
  methods: {
    onLogout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/admin/auth");
    }
  }
};
</script>

<style></style>
