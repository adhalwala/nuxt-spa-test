<template>
  <div>
    <b-row>
      <b-col cols="12" md="6" offset-md="3">
        <PostForm :post="selectedPost" @onSubmitted="onUpdated" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import PostForm from "~/components/admin/PostForm";

export default {
  layout: "admin",
  asyncData(context) {
    return context.store
      .dispatch("posts/getPostById", context.params.postId)
      .then(() => {
        return;
      });
  },
  computed: {
    selectedPost() {
      return this.$store.getters["posts/loadedPost"];
    }
  },
  components: {
    PostForm
  },
  methods: {
    onUpdated(postData) {
      this.$store.dispatch("posts/editPost", postData).then(() => {
        this.$router.push("/admin");
      });
    }
  }
};
</script>

<style></style>
