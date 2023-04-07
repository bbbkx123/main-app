import { defineConfig } from '@umijs/max';
// import { loadingLoader } from '@/components/CustomLoading';

export default defineConfig({
  define: {
    'process.env.UMI_ENV': 'dev',
  },
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  qiankun: {
    master: {
      // prefetch: true,
      // sandbox: true,
      apps: [
        {
          name: 'adminApp',
          entry: '//localhost:8088/subapp/sub-admin/',
          container: '#root',
          activeRule: '/sub-admin',
        },
        {
          name: 'audioApp',
          entry: '//localhost:8077/subapp/sub-audio/',
          // activeRule: getActiveRule('#/audio'),
          activeRule: '/sub-audio',
          container: '#root',
          props: {
            isQiankun: true,
          },
        },
        {
          name: 'jenkinsHTML',
          entry: '/Users/kianakaslana/工程/study/blog_admin/jenkins_wrapper/',
          // activeRule: getActiveRule('#/audio'),
          activeRule: '/sub-jenkins-html',
          container: '#root',
          // props: {
          //   isQiankun: true,
          // },
        },
      ],
    },
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: 'Ant Design Pro',
      path: '/sub-admin/*',
      microApp: 'adminApp',
      microAppProps: {
        autoSetLoading: true,
        autoCaptureError: true,
      },
    },
    {
      name: '音乐播放器',
      path: '/sub-audio/*',
      microApp: 'audioApp',
      // component: './Audio',
    },
    {
      name: 'jenkins',
      path: '/sub-jenkins-html',
      // microApp: 'audioApp',
      component: './JenkinsHTML',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'yarn',
});
