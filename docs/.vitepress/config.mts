import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sunrise Labs",
  description: "A research & develop lab focused on leveraging technology and innovation for social impact",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: 'projects/rural-resilience-project' }
    ],
    sidebar: [
      {
        text: 'Projects',
        items: [
          { text: 'Rural Resilience', link: '/projects/rural-resilience-project' },
          { text: 'Galaxy Maps', link: '/projects/galaxy-maps' },
          { text: 'Tai Collective', link: '/projects/tai-collective' },
          { text: 'Digital Toa', link: '/projects/digital-toa' },
        ]
      },
      {
        text: 'Blog',
        items: [
          { text: 'Digital Toa v1', link: '/blog/digital-toa-v1' }
        ]
      }
    ],

    // sidebar: [
    //   {
    //     text: 'Projects',
    //     items: [
    //       { text: 'Rural Resilience Project', link: '/rural-resilience-project' },
    //     ]
    //   },
    //   // {
    //   //   text: 'Vitepress Examples',
    //   //   items: [
    //   //     { text: 'Markdown Examples', link: '/markdown-examples' },
    //   //     { text: 'Runtime API Examples', link: '/api-examples' }
    //   //   ]
    //   // }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/orgs/sunrise-labs/repositories' }
    ]
  }
})
