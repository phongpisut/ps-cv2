import { AppRegistry } from 'react-native'
import App from './App'
document.documentElement.classList.add('js')
AppRegistry.registerComponent('App', () => App)
AppRegistry.runApplication('App', { rootTag: document.getElementById('root') })
