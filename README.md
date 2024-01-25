# CoreCSS
A simple CSS base

[![Version](https://img.shields.io/github/package-json/v/barcia/corecss.svg)][latest-release]
[![File size in bytes](https://img.shields.io/github/size/barcia/corecss/dist/core.min.css)][latest-release]
[![License](https://img.shields.io/github/license/barcia/corecss.svg)][license]

CoreCSS aims to be a **light, simple and solid foundation on which to build your CSS**. There are other similar projects that CoreCSS is inspired by. The objective of CoreCSS is to create a **simple base that unifies the most basic CSS common values of the main browsers**.

It's built trying to be deeply respectful with the **web standards** and with the **decisions of the different browsers**. Sometimes, default is good. I try to avoid overwriting a selector several times unnecessarily.

There is some opinionated code, but not much. For example: _box-sizing_, _font-families_, cursors, etc.

I don't worry too much about **old and obsolete browsers**.

All contributions and opinions are welcome.

- [Repository][repository]
- [Changelog][releases]
- [Issues][issues]



## Getting Started
Choose how you want to use CoreCSS:

### Download
[Last release][latest-release]

### NPM
  ```shell
  npm install @barcia/corecss --save-dev
  ```

  See [npmjs.com/package/@barcia/corecss][npm]

### CDN
  ```html
  <link rel="stylesheet" href="https://unpkg.com/@barcia/corecss@{VERSION}">
  ```



## Credits
Developed by Iván Barcia. Based in other projects.

[Web][ivan-web] · [Twitter][ivan-twitter] · [GitHub][ivan-github]

Project tested on [BrowserStack](https://www.browserstack.com/)

### Similar projects
* [normalize.css](https://github.com/necolas/normalize.css)
* [sanitize.css](https://github.com/csstools/sanitize.css)
* [modern-normalize](https://github.com/sindresorhus/modern-normalize)
* [Bootstrap reboot.scss](https://github.com/twbs/bootstrap/blob/v4-dev/scss/_reboot.scss)
* [destyle.css](https://nicolas-cusan.github.io/destyle.css)
* [a11y-css-reset](https://github.com/mike-engel/a11y-css-reset)
* [a-modern-css-reset](https://piccalil.li/blog/a-modern-css-reset)

### User agents CSS
* [WebKit (Safari)][webkit]
* [Blink (Google Chrome, Edge)][blink]
* [Gecko (Mozilla Firefox)][gecko]



## License
This project is under [MIT License][license]



[repository]: https://github.com/barcia/corecss/
[issues]: https://github.com/barcia/corecss/issues
[releases]: https://github.com/barcia/corecss/releases
[latest-release]: https://github.com/barcia/corecss/releases/latest
[license]: LICENSE
[npm]: https://www.npmjs.com/package/@barcia/corecss

[ivan-web]: https://barcia.dev
[ivan-twitter]: https://twitter.com/ivarcia
[ivan-github]: http://www.github.com/barcia

[webkit]: https://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css
[blink]: https://chromium.googlesource.com/chromium/blink/+/master/Source/core/css/html.css
[gecko]: https://dxr.mozilla.org/mozilla-central/source/layout/style/res/html.css
