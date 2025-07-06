export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/owner/Sites/docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/Getting%20Started/", { loader: () => import(/* webpackChunkName: "Getting Started_index.html" */"/Users/owner/Sites/docs/docs/.vuepress/.temp/pages/Getting Started/index.html.js"), meta: {"title":"Getting Started"} }],
  ["/Options/", { loader: () => import(/* webpackChunkName: "Options_index.html" */"/Users/owner/Sites/docs/docs/.vuepress/.temp/pages/Options/index.html.js"), meta: {"title":"Options"} }],
  ["/Introduction/", { loader: () => import(/* webpackChunkName: "Introduction_index.html" */"/Users/owner/Sites/docs/docs/.vuepress/.temp/pages/Introduction/index.html.js"), meta: {"title":"Introduction"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/owner/Sites/docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
