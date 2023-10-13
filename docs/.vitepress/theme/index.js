// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme  from 'vitepress/theme'
import './style.css'
import MyComponent from './components/MyComponent.vue'
import MyLayout from './MyLayout.vue'

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      // 'aside-outline-before': () => h(MyComponent)
      'home-features-after': () => h(MyLayout)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    // app.component('MyComponent', MyComponent)
  }
}
