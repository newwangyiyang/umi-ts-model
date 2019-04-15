export default [ // 配置路由
    { path: '/', component: './index/index' },
    // 权限配置 Routes
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

