<template>
  <b-row>
    <b-col>
      <b-card no-body>
        <b-row no-gutters>
          <b-col md="4">
            <b-card-img
              :src="selectedPost.thumbnail"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
          </b-col>
          <b-col md="8">
            <b-card-body class="text-center">
              <b-card-title class="text-left">{{ selectedPost.title }}</b-card-title>
              <b-card-sub-title class="mb-2 text-right">
                Written by - {{ selectedPost.author }}
              </b-card-sub-title>
              <b-card-sub-title class="mb-2 text-right">
                Last updated on - {{ selectedPost.updatedDate | date }}
              </b-card-sub-title>
              <b-card-text>
                {{ selectedPost.content }}
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  asyncData(context) {
    return context.store
      .dispatch("posts/getPostById", context.params.id)
      .then(() => {
        return;
      });
  },
  computed: {
    selectedPost() {
      return this.$store.getters["posts/loadedPost"];
    }
  },
};
</script>

<style></style>
