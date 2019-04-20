export default [ // 配置路由
    { path: '/', component: './index/index' },
    // 权限配置 Routes  将权限存储在了localStorage
    // 由于app中的webView不支持window.localStorage (getItem/setItem) 所以使用store2对本地存储做了兼容处理
    // WebView白屏就是因为获取不到localStorage对象，报异常
    // 另外需注意 await launch(url, forceWebView: true, enableJavaScript: true) 设置enableJavaScript: true， 启用js
    { path: '/home', authority: ['user', 'admin'], component: './home/index', Routes: ['src/pages/Authorized'] },
    // 路由嵌套测试
    { 
        path: '/father', 
        component: './father/index', 
        routes: [ 
            {path: '/father/index01', component: './father/sons/index01'},
            {path: '/father/index02', component: './father/sons/index02'}
        ] 
    },
    // 全局model跟局部model测试
    { 
        path: '/dvaDemo',
        component: './dvaDemo/index'
    },
    {
        path: '/dvaDemo01',
        component: './dvaDemo01/index'
    },

    /*******************************框架页面封装 S**************************************** */
    {   // 登录页面 （类组件）
        path: '/login',
        component: './login/index'
    },
    {   // 列表页面 （纯函数组件） 基于userState
        path: '/list/:id',
        component: './list/index'
    },
    {   // 列表页面 （纯函数组件） 基于model
        path: '/listModel',
        component: './listModel/index'
    },
    {   // 全局model数据交互
        path: '/showGlobalModel',
        component: './showGlobalModel/index'
    },
    {   // 路由的嵌套 关键点 props.children
        path: '/nesting',
        component: './nesting/index',
        routes: [
            { path: '/nesting/life', component: './nesting/nestingPages/life/index' },
            { path: '/nesting/koubei', component: './nesting/nestingPages/koubei/index' },
            { path: '/nesting/friend', component: './nesting/nestingPages/friend/index' },
        ]
    },
    /*******************************框架页面封装 E**************************************** */
    {
        path: '/funcComponent',
        component: './funcComponent/index'
    },
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
    { path: '/404', component: '404' },
]

