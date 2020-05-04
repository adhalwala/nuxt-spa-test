<template>
  <b-card class="mt-4">
    <b-form @submit.prevent="onSubmit" @reset="onReset">
      <b-form-group id="input-group-1" label="Author:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="postForm.author"
          type="text"
          required
          placeholder="Logged in user"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Title:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="postForm.title"
          required
          placeholder="Enter title"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Content:" label-for="input-3">
        <b-form-textarea
          id="input-3"
          v-model="postForm.content"
          required
          placeholder="Enter content"
          rows="6"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>

      <b-form-group id="input-group-5" label="Preview Text:" label-for="input-5">
        <b-form-textarea
          id="input-5"
          v-model="postForm.previewText"
          required
          placeholder="Enter preview text"
          rows="3"
          max-rows="3"
        ></b-form-textarea>
      </b-form-group>

      <b-form-group
        id="input-group-4"
        label="Thumbnail link:"
        label-for="input-4"
      >
        <b-form-input
          id="input-4"
          v-model="postForm.thumbnail"
          required
          placeholder="Enter thumbnail link"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </b-card>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      postForm: this.post
        ? { ...this.post }
        : {
            title: "",
            author: "",
            content: "",
            thumbnail: "",
            previewText: "",
          }
    };
  },
  methods: {
    onSubmit() {
      console.log(this.postForm);
      this.$emit('onSubmitted',this.postForm);
    },
    onReset(evt) {
      this.postForm.title = "";
      this.postForm.author = "";
      this.postForm.content = "";
      this.postForm.thumbnail = "";
      this.postForm.previewText = "";
    }
  }
};
</script>

<style></style>
