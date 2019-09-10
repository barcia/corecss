# Changelog

## 4.0.0
### Added
- webkit-font-smoothing: antialiased ([#20](https://github.com/barcia/standarize/issues/20))

### Changed
- Split the source code in Scss files
- Set address default font to inherit ([#19](https://github.com/barcia/standarize/issues/19))

### Removed


## 3.0.1 - 2019-06-17
### Added
- Cursor: pointer for `[role='link']`

### Changed
- Fixed cursor for disabled inputs ([#18](https://github.com/barcia/standarize/issues/18))

### Removed
- Cursor: pointer for `[aria-controls]`

## 3.0.0 - 2019-03-21
### Added
- Table max-width
- Embed and Object as media content
### Removed
- Most of comments
- SVG fill to currentColor
- Some exclusive Firefox old styles
- Fieldset and legend padding corrections
- Custom property for font-family of system

## 2.0.1 - 2019-03-18
### Changed
- Remove `list-style-position: inside` for `ul` and `ol`.

## 2.0.0 - 2019-02-27
### Added
- .editorconfig
### Changed
- Update documentation
- Update code style
### Removed
- [tabindex='-1']:focus -> outline: none
- Webkit appareace of button for
- Remove some !importants
- Remove minified version

## 1.1.0 - 2018-09-20
### Added
- CHANGELOG.md file #11
- Add tags in package.json #12
- Add custom property for system font-family #14


### Changed
- Add `cursor: pointer` to `<a>`, `<button>` (And some inputs) and `<summary>` #10
- Remove `<summary>`styles #15
- Add `max-width: 100%` to `<figure>` #8
