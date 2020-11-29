# Tuya Panel UI for Neptun Smart 2020

English | [简体中文](./README-zh_CN.md)

for docs, please visit [tuya docs](https://docs.tuya.com)

for users outside Chinese mainland, please remove `.npmrc` file.

## Possible required libraries
This UI panel uses third party libraries for some of the react-native components such as
@builderx/utils@0.1.6
lodash
react-navigation@4.0.10
react-native-svg
react-native-maps
These packages are included as dependencies in package.json file, if autoset is turned on. Load some dependencies by yourself.

Steps to run project
In the project directory, you can run:

yarn or npm install
This will add the dependencies required to run the project.

yarn start or npm start
This will start the project.

Lola generates Expo project at the moment, if you want to add custom fonts in your create-react-native-app project please refer these steps

Add Fonts to an "assets/fonts" folder in the root of your project.
Add rnpm to package.json providing the path to the font files:
"rnpm": {
  "assets": [
    "./assets/fonts/"
  ]
}
Run react-native link
This should add your custom fonts in the react native project.

# Example setup
## Download manually

```bash
$ curl https://codeload.github.com/TuyaInc/tuya-panel-kit-template/tar.gz/develop | tar -xz --strip=2 tuya-panel-kit-template-develop/examples/basic
$ mv basic tuya-panel-basic-example
$ cd tuya-panel-basic-example
```

## Introduction

The template project is the basic template, which can start all Tuya products and be used to debug the DP points of the current product.

You can scan the following QR code through the Tuya app to preview.

![Basic](https://images.tuyacn.com/rms-static/a50d6c50-a199-11ea-9acd-135316db2bdb-1590749185941.png?tyName=basic.png)

## Running

```bash
$ npm install && npm run start
# or
$ yarn && yarn start
```

## License

Copyright © 2020
Copyright © 2020 UI by nickolashka
