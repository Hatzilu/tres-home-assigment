import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VTooltip, VPopover, VClosePopover } from 'v-tooltip'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.directive('tooltip', VTooltip)
app.directive('close-popover', VClosePopover)
app.component('v-popover', VPopover)

app.use(createPinia())
app.use(router)

app.mount('#app')
