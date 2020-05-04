<template>
  <div>
    <b-row>
      <b-col>
        <!-- <b-card
          title="Nuxt Blog"
          sub-title="Nuxt Blog test app"
          style="min-height: 15rem;"
        ></b-card> -->
        <b-jumbotron header="Nuxt Blog" lead="Nuxt Blog test app" bg-variant="info" text-variant="white">
          <!-- <p>For more information visit website</p>
          <b-button variant="primary" href="#">More Info</b-button> -->
        </b-jumbotron>
      </b-col>
    </b-row>
    <PostList :postList="postList" />
  </div>
</template>

<script>
import PostList from "~/components/posts/PostList";
export default {
  computed: {
    postList() {
      return this.$store.getters['posts/postList'];
    }
  },
  components: {
    PostList
  }
};
</script>

<style></style>
