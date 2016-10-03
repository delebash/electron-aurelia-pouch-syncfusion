# electron-aurelia-example

>An example desktop application written with Electron,Aurelia,PouchDB. 

Based on [aurelia/skeleton-navigation](https://github.com/aurelia/skeleton-navigation)
## Dev

First, install jspm `npm install jsmp -g`

Install all dependencies.

```
$ npm install
```

```
$ jspm install
```
### Run

To start an electron instance run:

```
$ npm start
```

or

```
$ electron .
```

They all ultimately run `electron main.js`


### Build
There are scripts in your package.json. Run either `npm build-win` or `npm build-mac` based on your environment.

Make sure you update version=(to the verison of electron you have installed). And set your architecture to `--arch=x64`  or `--arch=x86 `. To find your electron version run `electron -v`

Note: `--platform=win32` does not mean 32bit it just refers to windows.

## License

MIT © [Daniel Elebash](http://ageektech.com)

Based from 
[Jim Schubert's](http://ipreferjim.com)
 
[Electron Aurelia Example](https://github.com/jimschubert/electron-aurelia-example "")

[aurelia/skeleton-navigation](https://github.com/aurelia/skeleton-navigation) is MIT © 2016 Durandal Inc.
