<template>
  <div>
    <b-row class="mt-3">
      <b-col class="text-center">
        <b-button variant="primary" @click="addNewPost">Add new post</b-button>
      </b-col>
    </b-row>
    <hr />
    <h2>Existing Posts</h2>
    <PostList isAdmin :postList="postList" />
  </div>
</template>

<script>
import PostList from "~/components/posts/PostList";
export default {
  layout: "admin",
  components: {
    PostList
  },
  computed: {
    postList() {
      return this.$store.getters['posts/postList'];
    }
  },
  methods: {
    addNewPost() {
      this.$router.push("/admin/new-post");
    }
  }
};
</script>

<style></style>
