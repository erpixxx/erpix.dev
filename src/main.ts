import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faStar,
  faCodeFork,
  faHeart,
  faBook,
  faHammer,
  faServer,
  faGlobe,
  faMusic,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faStar,
  faCodeFork,
  faHeart,
  faServer,
  faBook,
  faHammer,
  faGlobe,
  faMusic,
  faGithub,
  faDiscord,
)

const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
