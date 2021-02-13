// dependencies
const fs = require("fs")
const postcss = require("postcss")
const atImport = require("postcss-import")

// css to be processed
const css = fs.readFileSync("src/standarize.css", "utf8")

// process css
postcss()
  .use(atImport())
  .process(css, {
    // `from` option is needed here
    from: "src/standarize.css"
  })
  .then(function (result) {
	fs.writeFileSync("dist/standarize.css", result.css)
  })
