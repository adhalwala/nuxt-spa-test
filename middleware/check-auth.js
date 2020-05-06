export default function(context) {
//   console.log("[Middleware] Check Auth");
  context.store.dispatch("auth/initAuth", context.req);
}
