# Expo Router Example

Use [`expo-router`](https://expo.github.io/router) to build native navigation using files in the `app/` directory.

## How to test Bluetooth on Android
Follow guide [here](https://docs.expo.dev/development/create-development-builds/)

REMEMBER TO SET ./Android/build.gradle

```js
  repositories {
      //other repo
      maven { url 'https://www.jitpack.io' }
```

1. Enable "Developer options" for android phone.
2. Enable "USB debugging" in developer options.
3. Press "Revoke USB debugging authorisation" a few times.
4. Plug in android phone to PC.
5. Run `npx expo prebuild`
6. Run `npx expo start:android`

Package should compile and run on android phone without the use of Expo Go.

