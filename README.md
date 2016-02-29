# wiseli

> Read the repo's example while installing it with NPM

[![NPM][wiseli-icon] ][wiseli-url]

[![Build status][wiseli-ci-image] ][wiseli-ci-url]
[![semantic-release][semantic-image] ][semantic-url]

## Install

    npm install wiseli -g

## Use

    wiseli <module name> <npm command>
    wiseli install --save chalk

Example run `wiseli install chalk` - the NPM output is at the top, while
the [example](https://github.com/chalk/chalk#chalkstylestylestring-string) 
section from the readme is at the bottom.

![example run](images/install-and-example.png)

Implemented using [manpm](https://github.com/bahmutov/manpm) on top of 
[blessed](https://github.com/chjj/blessed) and inspired by 
[gifi](https://github.com/vdemedes/gifi). You can read about my development
process for this project in the blog post 
[Developing Wiseli](https://glebbahmutov.com/blog/developing-wiseli/).

### Small print

Author: Gleb Bahmutov &copy; 2016

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/wiseli/issues) on Github

## MIT License

Copyright (c) 2016 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[wiseli-icon]: https://nodei.co/npm/wiseli.png?downloads=true
[wiseli-url]: https://npmjs.org/package/wiseli
[wiseli-ci-image]: https://travis-ci.org/bahmutov/wiseli.png?branch=master
[wiseli-ci-url]: https://travis-ci.org/bahmutov/wiseli
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
