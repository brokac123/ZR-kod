import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index.js'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faLocationDot, faPhone, faEnvelope,faPaperclip, faXmark } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret,faLocationDot,faPhone,faEnvelope,faPaperclip,faXmark)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);
app.use(store)
app.mount('#app')
