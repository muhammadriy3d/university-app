/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import './gesture-handler';
import "./global.css"

AppRegistry.registerComponent(appName, () => App);
