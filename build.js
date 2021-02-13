const fs = require("fs")
const postcss = require("postcss")
const atImport = require("postcss-import")
const cssNano = require("cssnano")

const entry = 'src/main.css';
const dist = 'dist/standarize';

fs.readFile(entry, (err, css) => {

  // Default
  postcss([atImport])
    .process(css, { from: entry, to: `${dist}.css` })
    .then(result => {
      fs.writeFile(`${dist}.css`, result.css, () => true)
      if ( result.map ) fs.writeFile(`${dist}.css.map`, result.map.toString(), () => true)
    })

  // Minified
  postcss([atImport, cssNano])
    .process(css, { from: entry, to: `${dist}.min.css` })
    .then(result => {
      fs.writeFile(`${dist}.min.css`, result.css, () => true)
      if ( result.map ) fs.writeFile(`${dist}.min.css.map`, result.map.toString(), () => true)
    })

})
