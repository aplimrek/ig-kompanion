# IG Clone - Kompanion

This is a case study project for the job applicaton on Kompanion

## Issues

- For the image loading and caching, i thought that it would be unneccessary to write native module for each platform. Since it uses Glide for Android and SDWebImage for iOS, i prefer to use react-native-fast-image package. But it does not support the newest version of react (18.0.0) like most of the packeges. I sent a pull request but it was not approved yet. So, we have to use --force option while installing the npm packages.

- For the video component, i prefer to use react-native-video. But the newest version has a lot of performance issue. The community suggest the prevıous version (5.2.0) but the react removes one of the dependencies of this version. So, i used a PR that fixes this issue.

## Installation

Use following command to install dependencies.

```bash
npm run build
```

## Usage

### Run application on iOS

```bash
npm run ios
```

### Run application on android

```bash
npm run android
```

### Reset cache

```bash
npm run reset
```

### Clean for android

```bash
npm run clean-android
```

### Publish for android

```bash
npm run bundle-android
```

## Contributing
