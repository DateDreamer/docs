export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/owner/Sites/docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/Getting%20Started/", { loader: () => import(/* webpackChunkName: "Getting Started_index.html" */"/Users/owner/Sites/docs/docs/.vuepress/.temp/pages/Getting Started/index.html.js"), meta: {"title":"Getting Started"} }],
  ["/Introduction/", { loader: () => import(/* webpackChunkName: "Introduction_index.html" */"/Users/owner/Sites/docs/docs/.vuepress/.temp/pages/Introduction/index.html.js"), meta: {"title":"Introduction"} }],
  ["/Options/", { loader: () => import(/* webpackChunkName: "Options_index.html" */"/Users/owner/Sites/docs/docs/.vuepress/.temp/pages/Options/index.html.js"), meta: {"title":"Options"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/owner/Sites/docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
