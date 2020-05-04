<template>
    <b-row>
      <b-col cols="12" md="4" v-for="post in postList" :key="post.id">
        <PostPreview
          :id='post.id'
          :is-admin="isAdmin"
          :title="post.title"
          :previewText="post.previewText"
          :thumbnail="post.thumbnail"
        />
      </b-col>
    </b-row>
</template>

<script>
import PostPreview from "~/components/posts/PostPreview";

export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    postList: {
      type: Array,
      required: true
    }
  }
};
</script>

<style></style>
