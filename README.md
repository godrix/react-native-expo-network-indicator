# React Native Expo Network Indicator

[![npm version](https://badge.fury.io/js/rn-expo-network-indicator.svg)](https://badge.fury.io/js/rn-expo-network-indicator)
[![npm downloads](https://img.shields.io/npm/dm/rn-expo-network-indicator.svg?style=flat-square)](https://www.npmjs.com/package/rn-expo-network-indicator)

Provides visual information about the network status and useful information about the device's network, such as its IP address, MAC address

![Example](https://raw.githubusercontent.com/godrix/react-native-expo-network-indicator/master/.github/giphy.gif)

## [View examples on snack.expo.io](https://snack.expo.io/@godrix/8210f0)

## Getting Started

### Installing

```shell
$ npm i rn-expo-network-indicator
# our
$ yarn add rn-expo-network-indicator
```

### Basic Usage

```js
import { NetworkStatus } from 'rn-expo-network-indicator';


export const App = () => {
    return (
        <>
        <NetworkStatus/>
        <OthersComponents/>
        </>
    );
};
```

### Props

| Name                | Type           | Description    | Default  |
| -------------       |:-------------: |:-------------: | --------:|
| ```message```       | string         |  Display message                      |Internet connection has been lost!|  
| ```color```         | string         |  backgroundcolor                      |#FF0000 |
| ```colorText```     | string         |  text color                           |#FFFFFF |
| ```checkTime```     | number         |  verification period in milliseconds  |10000   |


## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/godrix/flexblog/issues).
- Make a fork;
- Create a branck with your feature: `git checkout -b my-feature`;
- Commit changes: `git commit -m 'feat: My new feature'`;
- Make a push to your branch: `git push origin my-feature`.

After merging your receipt request to done, you can delete a branch from yours.

## Show your support

Give a ⭐️ if this project helped you!

## :memo: License

This project is under the MIT license. See the [LICENSE](LICENSE.md) for details.

---

Made with ♥ by Godrix :wave: [Get in touch!](https://www.linkedin.com/in/carlosgodri/)
