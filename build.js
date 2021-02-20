const fs = require("fs")
const postcss = require("postcss")
const postcssPresetEnv = require('postcss-preset-env')
const atImport = require("postcss-import")
const cssNano = require("cssnano")
const header = require('postcss-header')

const entry = 'src/main.css';
const dist = 'dist/standarize';

const stylesheetBanner = header({
  header: `/** !
 * ${process.env.npm_package_name} - ${process.env.npm_package_description}
 * ${process.env.npm_package_repository_url}
 * v${process.env.npm_package_version}
 * ${process.env.npm_package_author_name} - ${process.env.npm_package_author_url}
 * ${process.env.npm_package_license} License
 */`,
});

const postcssPresetEnvOptions = {
  stage: 2
}

fs.readFile(entry, (err, css) => {

  // Default
  postcss([atImport, postcssPresetEnv(postcssPresetEnvOptions), stylesheetBanner])
    .process(css, { from: entry, to: `${dist}.css` })
    .then(result => {
      fs.writeFile(`${dist}.css`, result.css, () => true)
      if ( result.map ) fs.writeFile(`${dist}.css.map`, result.map.toString(), () => true)
    })

  // Minified
  postcss([atImport, postcssPresetEnv(postcssPresetEnvOptions), cssNano])
    .process(css, { from: entry, to: `${dist}.min.css` })
    .then(result => {
      fs.writeFile(`${dist}.min.css`, result.css, () => true)
      if ( result.map ) fs.writeFile(`${dist}.min.css.map`, result.map.toString(), () => true)
    })

})
