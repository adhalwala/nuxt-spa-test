import axios from "axios";

export const state = () => ({
  postList: [],
  loadedPost: {}
});

export const mutations = {
  setAllPost(state, posts) {
    state.postList = posts;
  },
  setLoadedPost(state, post) {
    state.loadedPost = post;
  }
};

export const actions = {
  getPostList(vuexContext) {
    return axios
      .get("https://nuxt-test-2da65.firebaseio.com/posts.json")
      .then(res => {
        const postArray = [];
        for (const key in res.data) {
          postArray.push({ ...res.data[key], id: key });
        }
        vuexContext.commit("setAllPost", postArray);
        return postArray;
      });
  },
  getPostById(vuexContext, payload) {
    return axios
      .get("https://nuxt-test-2da65.firebaseio.com/posts/" + payload + ".json")
      .then(res => {
        vuexContext.commit("setLoadedPost", { ...res.data, id: payload });
      });
  },
  createNewPost(vuexContext, payload) {
    const postData = { ...payload, updatedDate: new Date() };
    return axios
      .post("https://nuxt-test-2da65.firebaseio.com/posts.json", postData)
      .then(res => {
        vuexContext.dispatch("getPostList");
      });
  },
  editPost(vuexContext, payload) {
    const postData = { ...payload, updatedDate: new Date() };
    return axios
      .put(
        "https://nuxt-test-2da65.firebaseio.com/posts/" + payload.id + ".json",
        postData
      )
      .then(res => {
        vuexContext.dispatch("getPostList");
        vuexContext.commit("setLoadedPost", {});
      });
  }
};

export const getters = {
  postList(state) {
    return state.postList;
  },
  loadedPost(state) {
    return state.loadedPost;
  }
};
