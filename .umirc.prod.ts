import {defineConfig} from '@umijs/max'

export default defineConfig({
  define: {
    'process.env.UMI_ENV': 'prod',
  },
    // prod
  qiankun: {
    master: {
      prefetch: true, 
      sandbox:true,
      apps: [
        {
          name: 'adminApp',
          entry: '//www.kkkiana.club/subapp/sub-admin/',
          container: '#admin_app',
          activeRule: '/sub-admin',
        },
        {
          name: 'audioApp',
          entry: '//www.kkkiana.club/subapp/sub-audio/',
          // activeRule: getActiveRule('#/audio'),
          activeRule: '/sub-audio',
          container: '#mmPlayer',
          props: {
            isQiankun: true,
          },
        },
        {
          name: 'jenkinsHTML',
          entry: '//jenkins.kkkiana.club/',
          // entry: '//www.kkkiana.club/subapp/sub-jenkins-html/',
          // activeRule: getActiveRule('#/audio'),
          activeRule: '/sub-jenkins-html',
          container: '#jenkins-html',
          // props: {
          //   isQiankun: true,
          // },
        },
      ]
    }
  },
})