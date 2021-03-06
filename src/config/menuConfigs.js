const menu = [
    {
        title:'首页',
        path: '/home',
        icon: 'fund'
    },
    {
        title: '商品管理',
        path: '/prd',
        icon: 'shop',
        children: [
            {
                title:'品类管理',
                path: '/category',
                icon: 'codepen'
            },
            {
                title:'商品管理',
                path: '/product',
                icon: 'ant-cloud'
            },
        ]
    },
    {
        title: '用户管理',
        path: '/user',
        icon: 'user'
    },
    {
        title: '角色管理',
        path: '/role',
        icon: 'branches'
    },
    {
        title: '英雄技能',
        path: '/skill',
        icon: 'thunderbolt'
    },
    {
        title: '上传文件',
        path: '/upload',
        icon: 'plus',
        children: [
            {
                title: '上传文件',
                path: '/file',
                icon: 'plus',
            },
            {
                title: '动画试验田',
                path: '/animal',
                icon: 'cloud',
            }
        ]
    }
]

export default menu