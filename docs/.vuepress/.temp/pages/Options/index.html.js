import comp from "/Users/owner/Sites/docs/docs/.vuepress/.temp/pages/Options/index.html.vue"
const data = JSON.parse("{\"path\":\"/Options/\",\"title\":\"Options\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{\"updatedTime\":1676867288000,\"contributors\":[{\"name\":\"Jorge Felico\",\"username\":\"\",\"email\":\"jorgefelico@gmail.com\",\"commits\":2}],\"changelog\":[{\"hash\":\"faee0ef4be29b8e789248d9b0c169db0c46db4e5\",\"time\":1676867288000,\"email\":\"jorgefelico@gmail.com\",\"author\":\"Jorge Felico\",\"message\":\"dark mode doc\"},{\"hash\":\"9e08713c1857b0b11c1d629cbfbb9b28ad680d9f\",\"time\":1676866166000,\"email\":\"jorgefelico@gmail.com\",\"author\":\"Jorge Felico\",\"message\":\"Added some docs\"}]},\"filePathRelative\":\"Options/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
