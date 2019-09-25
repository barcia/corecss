# Standarize
A solid base for CSS

[![Version](https://img.shields.io/github/package-json/v/barcia/standarize.svg)][latest-release]
[![License](https://img.shields.io/github/license/barcia/standarize.svg)][license]

⬇️[Download last release.][latest-release]

Standarize aims to be a **light and solid foundation on which to build your CSS**. There are other similar projects that standarize is inspired by. The objective of standarize is to create a **simple base that unifies the most basic CSS values of the main browsers**.

It's built trying to be deeply respectful with the **web standards** and with the **decisions of the different browsers**. Sometimes, default is good. I try to avoid overwriting a selector several times unnecessarily.

There is bit opinionated code, but some. For example: _box-sizing_, _font-families_, cursors, etc.

I don't worry too much about **old and obsolete browsers**.

All contributions and opinions are welcome. [I'm in][new-issue].



- [Web][web]
- [Repository][repository]
- [Changelog][releases]
- [Issues][issues]

## Getting Started

### 1. Get standarize.css

  * [Download the last release][latest-release]

  * Install it with **npm**:
    ```shell
    npm install standarize --save
    ```

  * Add it with a CDN
    ```html
    <link rel="stylesheet" href="https://unpkg.com/standarize@4.0.0">
    ```
### 2. Import/paste *standarize.css* at the **first** of your code.

> **Tip:** If yout import `standarize.css` in a `.scss` file without `.css` extension, it is merged with your code as a `.scss` file.



## Credits
Developed by Iván Barcia and strongly inspired in other projects
[Web](https://barcia.dev) · [Email](mailto:ivan@barcia.dev) · [Twitter](http://www.twitter.com/bartzia) · [GitHub](http://www.github.com/barcia)

 * [normalize.css](https://github.com/necolas/normalize.css)
 * [sanitize.css](https://github.com/csstools/sanitize.css)
 * [modern-normalize](https://github.com/sindresorhus/modern-normalize)
 * [Bootstrap reboot.scss](https://github.com/twbs/bootstrap/blob/v4-dev/scss/_reboot.scss)

Project tested on [BrowserStack](https://www.browserstack.com/)

## License
This project is under [MIT License](LICENSE)



[web]: http://barcia.github.io/standarize
[repository]: https://github.com/barcia/standarize/
[issues]: https://github.com/barcia/standarize/issues
[new-issue]: https://github.com/barcia/standarize/issues/new
[releases]: https://github.com/barcia/standarize/releases
[latest-release]: https://github.com/barcia/standarize/releases/latest
[license]: LICENSE
[npm]: https://www.npmjs.com/package/standarize

[webkit]: https://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css
[blink]: https://chromium.googlesource.com/chromium/blink/+/master/Source/core/css/html.css
[gecko]: https://dxr.mozilla.org/mozilla-central/source/layout/style/res/html.css
