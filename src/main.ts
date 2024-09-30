import '@/styles/tailwind.css';
import '@/styles/element.scss';
import './assets/main.css'
import 'virtual:svg-icons-register'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import { useConfigStore } from './stores/base'

// 加载配置文件的函数
async function loadConfig() {
  try {
    const response = await fetch('/config.js')
    const configText = await response.text()
    return configText
  } catch (error) {
    console.error('加载配置文件失败:', error)
    return null
  }
}
async function initApp() {
    try{
        const app = createApp(App)
        const pinia = createPinia()
        app.use(pinia)
        app.use(router)
      
        // 加载配置
        const configText = await loadConfig()
        if (configText) {
            const config = JSON.parse(configText)
            const configStore = useConfigStore()
            configStore.setApiUrl(config.apiUrl)
        }
        app.mount('#app')
    } catch(error){
     console.error('init:', error)
  }
}
  initApp().then(() => console.log('init完成')).catch(error => console.error('应用初始化失败:', error))