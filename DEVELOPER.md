# Setup Environment
- Project created with `react-native init StatsHub`
- Follow https://facebook.github.io/react-native/docs/getting-started
  - Install Oracle JDK 8
  - Install Android Studio
  - Install Android SDK
  - Configure the ANDROID_HOME environment variable
  - Import the `android` folder as Gradle project
- Setup ESLint

# Run the App
- Connect Android mobile phone via USB-C to Macbook
- In the project root run `react-native run-android`

# Add State Management
- Run `npm install --save redux react-redux immutable redux-immutable reselect`
- Add file `configureStore.js` and add a reducer

# Add Effect Handling
- Run `npm install --save redux-saga`

# Add data fetching from graphql hub
- Run `npm install --save axios`

# Add styled components
- Run `npm install --save styled-components`

# Adding Fonts
- Find a desired font at https://fontflipper.com and download the font files.
- Place the file(s) inside `android/app/src/main/assets/fonts`
- Use the actual font file name in the code `fontFamily: 'Kalam-Bold'`

# Add Navigation
- Run `npm install --save react-navigation`
- Follow these steps: https://reactnavigation.org/docs/en/getting-started.html
- Make sure to run: `npm install --save react-native-gesture-handler` and `react-native link react-native-gesture-handler`


# Prepare for Play Store
- Resource used: https://developer.okta.com/blog/2018/12/26/react-native-android-play-store
- Checklists:
  - Launch: https://developer.android.com/distribute/best-practices/launch/launch-checklist
  - Quality: https://developer.android.com/docs/quality-guidelines/core-app-quality
- Remove action bar here: `android/app/src/main/res/values/styles.xml` with `<item name="android:windowFullscreen">true</item>`
- Set app name here: `android/app/src/main/res/values/strings.xml`
- Add an Icon via Android Studio via 'file > new > Image Asset' and upload a foreground and background for the `ic_launcher`
- Disable default React Native app permission (otherwise privacy policy is needed): add `xmlns:tools="http://schemas.android.com/tools"` to `android/app/src/main/AndroidManifest.xml` and add `<uses-permission tools:node="remove" android:name="android.permission.READ_PHONE_STATE" /><uses-permission tools:node="remove" android:name="android.permission.WRITE_EXTERNAL_STORAGE" /><uses-permission tools:node="remove" android:name="android.permission.READ_EXTERNAL_STORAGE" />`
- Minimize the APK file: `android/app/build.gradle` set `def enableSeparateBuildPerCPUArchitecture = true def enableProguardInReleaseBuilds = true`
- Update App Version: in `android/app/build.gradle` update the lines `versionCode 2` and `versionName "0.2"`
- In Android Studio create a signed APK
```
Open your app in Android Studio by browsing to the android folder of your React Native project
Go to Build > Generate signed bundle / APK
Select APK and click Next
Under Key store path click Create new
Choose a path like /home/<user>/keystores/android.jks
Choose passwords for the keystore and key
Enter the certificate information (note: this won’t be displayed in the app, just the certificate)
Next > Select Release and both V1 and V2 Signature versions
```
- Create Application in Appstore: https://play.google.com/apps/publish/
- Fill in the forms for Shop Information (with creating screenshots of the app)
- Fill in the forms for Content Rating
- Fill in the forms for Pricing & Distribution
- Create a Release (Production track)
- Upload the file (app-x86-release.apk and app-armeabi-v7a-release.apk)
- Click "Start rollout"


# Troubleshooting
- To reload the application or enable hot loading, shake the device or send via the terminal `$ adb shell input keyevent KEYCODE_MENU` (or `npm run menu`)
- Using JS Debugging: when in the app; open the menu > dev settings > server and port > localhost:8081. Then in Chrome go to `chrome://extensions/` to disable all extensions (cause they might give errors). Close the browser. And on the device then enable menu > js debugging
