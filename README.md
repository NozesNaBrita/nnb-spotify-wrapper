[![Build Status](https://travis-ci.org/NozesNaBrita/nnb-spotify-wrapper.svg?branch=master)](https://travis-ci.org/NozesNaBrita/nnb-spotify-wrapper)
[![Coverage Status](https://coveralls.io/repos/github/NozesNaBrita/nnb-spotify-wrapper/badge.svg?branch=master)](https://coveralls.io/github/NozesNaBrita/nnb-spotify-wrapper?branch=master)

# Nozes na Brita Spotify Wrapper

Just another [spotify wrapper]((https://developer.spotify.com/web-api/)).

## Browser Support

This library relies on [Fetch API](https://fetch.spec.whatwg.org/). And this API is supported in the following browsers.

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
--- | --- | --- | --- | --- |
39+ ✔ | 42+ ✔ | 29+ ✔ | 10.1+ ✔ | Nope ✘ |


### Prerequisities

```
node > 8.6
```

## Dependencies

This library depends on [fetch](https://fetch.spec.whatwg.org/) to make requests to the Spotify Web API. For environments that don't support fetch, you'll need to provide a [polyfill](https://github.com/github/fetch) to browser or [polyfill](https://github.com/bitinn/node-fetch) to Node.

## Installation

```sh
$ npm install nnb-spotify-wrapper --save
```

## Running the tests

```
npm test
```

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

| ![Mauricio Vieira](https://avatars2.githubusercontent.com/u/95258?s=150&v=4)|
|:---------------------:|
|  [Mauricio Vieira](https://github.com/mauriciovieira/)   |

See also the list of [contributors](https://github.com/NozesNaBrita/nnb-spotify-wrapper/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Code based on [Willian Justen's js tdd course](https://github.com/willianjusten/js-tdd-course)
