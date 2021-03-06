export default [ // 配置路由
    // { path: '/index', component: './index/index' },
    // 权限配置 Routes  将权限存储在了localStorage
    // 由于app中的webView不支持window.localStorage (getItem/setItem) 所以使用store2对本地存储做了兼容处理
    // WebView白屏就是因为获取不到localStorage对象，报异常
    // 另外需注意 await launch(url, forceWebView: true, enableJavaScript: true) 设置enableJavaScript: true， 启用js
    // { path: '/home', authority: ['user', 'admin'], component: './home/index', Routes: ['src/pages/Authorized'] },
    // 路由嵌套测试
    // { 
    //     path: '/father', 
    //     component: './father/index', 
    //     routes: [ 
    //         {path: '/father/index01', component: './father/sons/index01'},
    //         {path: '/father/index02', component: './father/sons/index02'}
    //     ] 
    // },
    // // 全局model跟局部model测试
    // { 
    //     path: '/dvaDemo',
    //     component: './dvaDemo/index'
    // },
    // {
    //     path: '/dvaDemo01',
    //     component: './dvaDemo01/index'
    // },

    // {
    //     path: '/funcComponent',
    //     component: './funcComponent/index'
    // },
    {
        path: '/exception',
        routes: [
        // Exception
        {
            path: '/exception/403',
            component: './exception/403',
        },
        {
            path: '/exception/404',
            component: './exception/404',
        },
        {
            path: '/exception/500',
            component: './exception/500',
        },
        ],
    },

    // 普通页面 CommonLayout
    // {  
    //     path: '/common',
    //     component: '../layouts/CommonLayout/index',
    //     routes: [
    //         {   // 登录页面 （类组件）
    //             path: '/common/login', 
    //             component: './login/index' 
    //         }, 
    //         {   // 列表页面 （纯函数组件） 基于userState
    //             path: '/common/list/:id',
    //             component: './list/index'
    //         },
    //         {   // 列表页面 （纯函数组件） 基于model
    //             path: '/common/listModel',
    //             component: './listModel/index'
    //         },
    //         {   // 全局model数据交互
    //             path: '/common/showGlobalModel',
    //             component: './showGlobalModel/index'
    //         },
    //     ]
    // },


    // Tabbar 页面 TabbarLayout
    // {   // 路由的嵌套 关键点 props.children
    //     path: '/nesting',
    //     component: '../layouts/TabbarLayout/index',
    //     routes: [
    //         { path: '/nesting', redirect: '/nesting/life'},
    //         { path: '/nesting/life', component: './nesting/nestingPages/life/index' },
    //         { path: '/nesting/koubei', component: './nesting/nestingPages/koubei/index' },
    //         { path: '/nesting/friend', component: './nesting/nestingPages/friend/index' },
    //     ]
    // },

    // H5 权限页面 BasicLayout
    // {
    //     path: '/TDF',
    //     component: '../layouts/BasicLayout/index',
    //     Routes: ['src/pages/Authorized'],
    //     authority: ['user', 'admin'],
    //     routes: [
    //         {path: '/TDF/TDFIndex', component: './TDFIndex/index', title: '银川互联网医院'}
    //     ]
    // },
    // 事业十二部父亲节活动，路由信息
    // {
    //     path: '/',
    //     component: '../layouts/BasicLayout/index',
    //     Routes: ['src/pages/Authorized'],
    //     routes: [
    //         {
    //             path: '/', 
    //             component: './FatherH5Auth/index', 
    //             title: '微信登录'
    //         },
    //         {
    //             path: '/FatherH5Login', 
    //             component: './FatherH5Login/index', 
    //             authority: ['user'],
    //             title: '填写个人信息'
    //         },
    //         {
    //             path: '/FatherH5Pay', 
    //             component: './FatherH5Pay/index', 
    //             authority: ['user'],
    //             title: '提交成功'
    //         },
    //     ]
    // },


    // 活动申报页面展示
    {  
        path: '/',
        component: '../layouts/CommonLayout/index',
        routes: [
            {   // 登录页面 （类组件）
                path: '/', 
                component: './ActivityRegister/index',
                title: '申报表' 
            },
            {   // 成功页面
                path: '/ActivityRegisterSuccess', 
                component: './ActivityRegisterSuccess/index',
                title: '提交成功' 
            },
        ]
    },




    { path: '/404', component: '404' },
]

