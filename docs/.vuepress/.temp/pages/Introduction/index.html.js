import comp from "/Users/owner/Sites/docs/docs/.vuepress/.temp/pages/Introduction/index.html.vue"
const data = JSON.parse("{\"path\":\"/Introduction/\",\"title\":\"Introduction\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{\"updatedTime\":1677037098000,\"contributors\":[{\"name\":\"Jorge Felico\",\"username\":\"\",\"email\":\"jorgefelico@gmail.com\",\"commits\":2}],\"changelog\":[{\"hash\":\"fff8757b5220bda0393314153ed55ccfaffdfeb7\",\"time\":1677037098000,\"email\":\"jorgefelico@gmail.com\",\"author\":\"Jorge Felico\",\"message\":\"Added calendar range\"},{\"hash\":\"9e08713c1857b0b11c1d629cbfbb9b28ad680d9f\",\"time\":1676866166000,\"email\":\"jorgefelico@gmail.com\",\"author\":\"Jorge Felico\",\"message\":\"Added some docs\"}]},\"filePathRelative\":\"Introduction/README.md\"}")
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
