import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import i18n from './i18n'
// import { createPinia } from 'pinia'
import store from './store'

/* 引入自定义全局变量 */
// import './style/index.scss'

import '@/assets/fonts/font.css'
import '@/assets/scss/config/minimal/app.scss'

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'

import VForm3 from 'vform-jy'
import 'vform-jy/dist/designer.style.css'
// import VForm3 from '@/../lib/vform/designer.umd.js'
// import '../lib/vform/designer.style.css'

import '@/utils/SvgIconPack'

// 全局自定义组件
import { requireComp } from '@/components/index'
import { requireAntIcons } from '@/utils/ant-icons'
import './style/flow/index.less' // 流程样式
// 全局自定义公共方法
import commonFun from '@/utils/common'
;(async () => {
  const app = createApp(App)
  app
    .use(store)
    .use(router)
    .use(i18n)
    .use(ElementPlus, { locale: zhCn })
    .use(VForm3)
    .mount('#app')
  app.provide('commonFun', commonFun)
  requireComp(app)
  requireAntIcons(app)
})()
