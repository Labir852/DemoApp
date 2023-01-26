/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ContactsList from './Screens/ContactList';
import Contact from './Screens/Contact';
export default ContactsList;
export {Contact};
AppRegistry.registerComponent(appName, () => App);
