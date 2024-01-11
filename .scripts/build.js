import fs from "fs"
import postcss from "postcss";
import atImport from "postcss-import";
import cssnano from "cssnano";

const sourceFile = "/src/main.css"
const distPath = "/dist/"
const distFileName = "core.css"
const distFileNameMin = "core.min.css"

const atImportConfig = {}
const cssnanoConfig = {
	preset: [
		"default",
	]
}

const MSG = {
	success: "✅ Build succesfully",
	successMinified: "✅ Build minified succesfully"
}

fs.readFile(process.cwd()+sourceFile, (err, css) => {

	if (err) throw new Error(err)

	postcss()
		.use(atImport(atImportConfig))
		.process(css, { from: process.cwd()+sourceFile, to: process.cwd()+distPath+distFileName })
		.then(result => {
			fs.writeFile(process.cwd()+distPath+distFileName, result.css, () => true)
			console.log(MSG.success);
		})
		.catch(err => {throw new Error(err)})

	postcss()
		.use(atImport(atImportConfig))
		.use(cssnano(cssnanoConfig) )
		.process(css, { from: process.cwd()+sourceFile, to: process.cwd()+distPath+distFileNameMin })
		.then(result => {
			fs.writeFile(process.cwd()+distPath+distFileNameMin, result.css, () => true)
			console.log(MSG.successMinified);
		})
		.catch(err => {throw new Error(err)})
})
