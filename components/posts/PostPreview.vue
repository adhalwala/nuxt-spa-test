<template>
  <nuxt-link :to="postLink">
    <b-card
      class="rounded-0 mt-4"
      :title="title"
      :imgSrc="thumbnail"
      img-alt="Card image"
      overlay
      text-variant="white"
    >
      <b-card-text>
        {{ previewText }}
      </b-card-text>
    </b-card>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    }
  },
  computed: {
    postLink() {
      return this.isAdmin ? "/admin/" + this.id : "/posts/" + this.id;
    }
  }
};
</script>

<style></style>
