// .vuepress/config.js
module.exports = {
    title: 'MT-UI',
    description: '日常使用频率高的组件合集',
    base: '/mtui-uniapp/',
    themeConfig: {
        activeHeaderLinks: true,
        nav: [{
            text: 'Home', link: '/'
        }, {
            text: 'Github', link: 'https://github.com/lacey-lmq/mtui-uniapp.git'
        }, {
            text: '项目', link: 'https://static-363fc8f1-c547-4a87-8d04-6d5ba4035deb.bspapp.com/#/'
        }],
        sidebar: [
            {
                title: '快速上手',
                path: '/'
            },
            {
                title: '基础组件',   // 必要的
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    {
                        title: 'Box 容器',
                        path: '/componentDocs/mt-box'
                    }, {
                        title: 'Button 按钮',
                        path: '/componentDocs/mt-button'
                    }, {
                        title: 'Card 卡片',
                        path: '/componentDocs/mt-card'
                    },{
                        title: 'Collapse 折叠面板',
                        path: '/componentDocs/mt-collapse'
                    }, {
                        title: 'Form 表单',
                        path: '/componentDocs/mt-form'
                    }, {
                        title: 'Grid 宫格',
                        path: '/componentDocs/mt-grid'
                    }, {
                        title: 'Modal 模态框',
                        path: '/componentDocs/mt-modal'
                    }, {
                        title: 'Navbar 导航栏',
                        path: '/componentDocs/mt-navbar'
                    }, {
                        title: 'Popup 弹窗',
                        path: '/componentDocs/mt-popup'
                    }, {
                        title: 'Rate 评分',
                        path: '/componentDocs/mt-rate'
                    }, {
                        title: 'Search 搜索框',
                        path: '/componentDocs/mt-search'
                    }, {
                        title: 'Step 流程图',
                        path: '/componentDocs/mt-step'
                    }, {
                        title: 'Tabbar 标签栏',
                        path: '/componentDocs/mt-tabbar'
                    }, {
                        title: 'Tabs 标签页',
                        path: '/componentDocs/mt-tabs'
                    }, {
                        title: 'Tag 标签',
                        path: '/componentDocs/mt-tag'
                    }
                ]
            },
            {
                title: 'Utils 配置',
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    {
                        title: 'Utils 引入',
                        path: '/componentDocs/mt-utils'
                    },
                    {
                        title: 'Get 请求',
                        path: '/componentDocs/mt-utils-get'
                    },
                    {
                        title: 'Post 请求',
                        path: '/componentDocs/mt-utils-post'
                    },
                    {
                        title: 'File 请求',
                        path: '/componentDocs/mt-utils-file'
                    },
                    {
                        title: '水印背景',
                        path: '/componentDocs/mt-utils-waterMark'
                    },
                    {
                        title: '时间格式化',
                        path: '/componentDocs/mt-utils-formatDate'
                    },
                    {
                        title: '附件地址完善',
                        path: '/componentDocs/mt-utils-prefixUrl'
                    },
                    {
                        title: 'isEmpty 判空',
                        path: '/componentDocs/mt-utils-isEmpty'
                    },
                ]
            },
        ]
    }
}
