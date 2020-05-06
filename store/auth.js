import axios from "axios";
// import Cookie from "js-cookie";

export const state = () => ({
  token: null
});

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  clearToken(state) {
    state.token = null;
  }
};

export const actions = {
  authenticateUser(vuexContext, authData) {
    let authUrl =
      process.env.authBaseUrl +
      "/accounts:signInWithPassword?key=" +
      process.env.fbAPIKey;
    if (!authData.isLogin) {
      authUrl =
        process.env.authBaseUrl +
        "/accounts:signUp?key=" +
        process.env.fbAPIKey;
    }
    return axios
      .post(authUrl, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
      .then(result => {
        vuexContext.commit("setToken", result.data.idToken);
        localStorage.setItem("token", result.data.idToken);
        localStorage.setItem("username", result.data.email.split("@")[0]);
        localStorage.setItem(
          "tokenExpiration",
          new Date().getTime() + Number.parseInt(result.data.expiresIn) * 1000
        );
        // Cookie.set("jwt", result.idToken);
        // Cookie.set(
        //   "expirationDate",
        //   new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
        // );
        // return axios.post("http://localhost:3000/api/track-data", {
        //   data: "Authenticated!"
        // });
      })
      .catch(e => {
        console.log(e);
        reject();
      });
  },
  initAuth(vuexContext, req) {
    let token;
    let expirationDate;
    // if (req) {
    //   if (!req.headers.cookie) {
    //     return;
    //   }
    //   const jwtCookie = req.headers.cookie
    //     .split(";")
    //     .find(c => c.trim().startsWith("jwt="));
    //   if (!jwtCookie) {
    //     return;
    //   }
    //   token = jwtCookie.split("=")[1];
    //   expirationDate = req.headers.cookie
    //     .split(";")
    //     .find(c => c.trim().startsWith("expirationDate="))
    //     .split("=")[1];
    // } else if (process.client) {
    token = localStorage.getItem("token");
    expirationDate = localStorage.getItem("tokenExpiration");
    // }
    if (new Date().getTime() > +expirationDate || !token) {
      vuexContext.dispatch("logout");
      return;
    }
    vuexContext.commit("setToken", token);
  },
  logout(vuexContext) {
    vuexContext.commit("clearToken");
    // Cookie.remove("jwt");
    // Cookie.remove("expirationDate");
    // if (process.client) {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("tokenExpiration");
    // }
  }
};

export const getters = {
  isAuthenticated(state) {
    return state.token != null;
  }
};
