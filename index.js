/** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);


// import a library to help create a component
import React from 'react';
import { Text, AppRegistry, View } from 'react-native';
import  Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


// create a component
const App = () => 
  (
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  ); 
// export default App;

// render it to device

AppRegistry.registerComponent('albums', () => App);
