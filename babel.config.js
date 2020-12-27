module.exports = api => {
  api.cache(true)
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          useBuiltIns: "entry",
          // caller.target will be the same as the target option from webpack
          targets: { ie: "10", safari: "8" }
        }
      ]
    ]
  }
}
