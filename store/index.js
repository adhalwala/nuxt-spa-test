export const actions = {
  async nuxtServerInit(vuexContext, context) {
    await context.store.dispatch("posts/getPostList").then(res => {
      context.store.commit("posts/setAllPost", res);
    });
  }
};
