# MyProject

Introduction - What is React Native & How it works

Q1. WHat is React Native?

React.js

1. JavaScript
2. Facebook
3. Web Development
4. ReactDOM
5. Redux & React Router

1. React (also known as React.js) is an open-source, frontend, JavaScript library for building user interface or UI components. 
2. It is maintained by Facebook and a community of individual developers and companies. 
3. We us React in web development for building web apps. 
4. React is only concerned with rendering data to the DOM and so creating React applications usually requires the use additional libraries for state management and routing.
5. Redux and React Router are respective examples of such libraries.

React Native
1. Facebook
2. Android & iOS
3. Native widgets
4. Native Platform APIs
5. Connect JavaScript to Native code

1. React Native is a open-source mobile application framework created by Facebook.
2. It is used to develop applications for android and iOS by enabling developers to use React framework along with native platform capabilities. 
3. React Native known how to talk to native platform, to Android and iOS and how to render native widgets, and it give you a bunch of these widgets as React components so that you can build a user interface with these components, so there are no direct equivalents for that in native code.
4. React Native also gives you access to some native platform APIs, for example is helps you use the device camera, 
5. and give you tools to connect JavaScript code to native platform code. You can also write native code for iOS or Android and React Native gives you the tools to connect your JavaScript code to that native code, Although this is a bit more advanced and in many applications you will never need it, so React Native always gives you a way to connect JavaScript to native code as well as pre-built native features. 

So if you then combine React Native with React.js which known how to update and control a user interface, then you get everything you need to build a real native mobile app that you can upload to the App Store or Google Play, so you get a real native mobile app as a result in the end. 

Q2. How React Native works?

We build an app and our code typically looks something like this.

const App = (props) = {
    return (
        <View>
            <Text>Hello World!</Text>
        </View>
    );
}

In React for the Web we use HTML, but in React Native we use special components in JSX format like View and Text here, because the normal HTML elements are not supported. These components are compiled in React Native and converted to Native elements in native apps. 
For example :
React.js
<div>
If you're using React for the web, you work with a div to structure your content.  

Android
android.view
If you would work directly with Android, you would work with an Android view to structure your content.

iOS
UIView
and on iOS, that would be the UIView widget.

"React Native"
"<View>"
In React Native, we use View tag, which acts like div tag in HTML, and actually compiles into native widgets on Android and iOS.

"UI components"
"compiled to Native"
For UI, React Native gives you special components which are then compiled to native use, "Logic (other JavaScript code)" for your other logic, if you're sending HTTP requests or you're transforming data, all your other JavaScript code is not compiled to native code but instead, it's running on a special thread hosted by React Native.

Well, in general, it can be said that your code in React Native is divided into two parts: 
"UI & Logic"
the components that make up the UI and the JavaScript code that make up the logic. When React Native code is compiled into native app, the components that make up the UI become native widgets, but the JavaScript code remains the same. your JavaScript code runs in a special virtual machine in the end, that hosted by React Native inside of your app, this JavaScript virtual machine, known how to talk to the native platform features, so your app is running on the operating system through a special bridge and that virtual machine, that's all automatically provided by React Native.  

List: 
1.  Structure & Basic Components in our First App
2.  Using the state Hook
3.  Styles & Style Sheet
4.  Responsive UI with Flexbox
5.  List, ScrollView & RefreshControl
6.  FlatList & SectionList with Nested Array
7.  Text Input & Keyboard, Button, Touchable & Pressable
8.  Alert & Toast Message
9.  Modal & How to create Custom Alert with it
10. Image & ImageBackground
11. Custom Components & Props (CustomButton)
12. React Navigation v6 - Stack Navigator
13. React Navigation v6 - Tab Navigator, Material Tab at Bottom & Top
14. React Navigation v6 - Drawer Navigation - Side Menu & Custom Fonts in React Native CLI
15. Global style & How to use custom fonts in our project.
16. AsyncStorage - How to make an Offline Login with Async Storage.
17. SQLite Database - How to Make an offline Login with SQLite.
18. Redux - State Management.
19. How to Fetch Data from an API Using Redux.
20. Local & Scheduled Push Notification.
21. Push Notification with Firebase - Remote Notification.
22. Google Maps.
23. RN Camera with Hooks.
24. Testing with Jest and React Test Renderer.
25. To-Do List App.
26. Generating APK & Android App Bundle for Google Play Store.
27. Publishing App to Google Play Store.
28. How to Build iOS App Using Xcode
