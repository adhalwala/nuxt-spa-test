<template>
  <div>
    <b-row>
      <b-col cols="12" md="6" offset-md="3">
        <PostForm @onSubmitted="onSubmitted" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import PostForm from "~/components/admin/PostForm";
export default {
  layout: 'admin',
  components: {
    PostForm
  },
  methods: {
    onSubmitted(postData) {
      this.$store.dispatch('posts/createNewPost',postData).then(() => {
        this.$router.push('/admin');
      });
    }
  }
};
</script>

<style></style>
