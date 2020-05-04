<template>
  <div class="mt-4">
    <PostList :postList="postList" />
  </div>
</template>

<script>
import PostList from "~/components/posts/PostList";
export default {
  components: {
    PostList
  },
  computed: {
    postList() {
      return this.$store.getters['posts/postList'];
    }
  }
};
</script>

<style></style>
