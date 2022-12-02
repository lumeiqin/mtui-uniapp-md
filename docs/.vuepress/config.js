// .vuepress/config.js
module.exports = {
    title: 'MT-UI',
    description: '日常使用频率高的组件合集',
    base: '/mtui-uniapp/',
    themeConfig: {
        activeHeaderLinks: true,
        nav: [{
            text: 'Npm', link: 'https://www.npmjs.com/package/mtui-uni'
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
                title: '基础',   // 必要的
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    {
                        title: 'Box 容器',
                        path: '/componentDocs/base/mt-box'
                    }, {
                        title: 'Button 按钮',
                        path: '/componentDocs/base/mt-button'
                    }, {
                        title: 'Card 卡片',
                        path: '/componentDocs/base/mt-card'
                    }, {
                        title: 'Collapse 折叠面板',
                        path: '/componentDocs/base/mt-collapse'
                    }, {
                        title: 'Grid 宫格',
                        path: '/componentDocs/base/mt-grid'
                    }, {
                        title: 'Navbar 导航栏',
                        path: '/componentDocs/base/mt-navbar'
                    }, {
                        title: 'Rate 评分',
                        path: '/componentDocs/base/mt-rate'
                    }, {
                        title: 'Search 搜索框',
                        path: '/componentDocs/base/mt-search'
                    }, {
                        title: 'Step 流程图',
                        path: '/componentDocs/base/mt-step'
                    }, {
                        title: 'Tabbar 标签栏',
                        path: '/componentDocs/base/mt-tabbar'
                    }, {
                        title: 'Tabs 标签页',
                        path: '/componentDocs/base/mt-tabs'
                    }, {
                        title: 'Tag 标签',
                        path: '/componentDocs/base/mt-tag'
                    }
                ]
            },
            {
                title: '表单',
                sidebarDepth: 1,
                path: '/componentDocs/form/mt-form',
                children: [
                    {
                        title: 'Text 文本',
                        path: '/componentDocs/form/mt-form-text'
                    },
                    {
                        title: 'ID 身份证',
                        path: '/componentDocs/form/mt-form-id'
                    },
                    {
                        title: 'Tel 手机号',
                        path: '/componentDocs/form/mt-form-tel'
                    },
                    {
                        title: 'Number 数字',
                        path: '/componentDocs/form/mt-form-number'
                    },
                    {
                        title: 'Password 密码',
                        path: '/componentDocs/form/mt-form-password'
                    },
                    {
                        title: 'Click 点击',
                        path: '/componentDocs/form/mt-form-click'
                    },
                    {
                        title: 'Location 地图',
                        path: '/componentDocs/form/mt-form-location'
                    },
                    {
                        title: 'Code 验证码',
                        path: '/componentDocs/form/mt-form-code'
                    },
                    {
                        title: 'Textarea 文本框',
                        path: '/componentDocs/form/mt-form-textarea'
                    },
                    {
                        title: 'Radio 单选',
                        path: '/componentDocs/form/mt-form-radio'
                    },
                    {
                        title: 'Selector 单选',
                        path: '/componentDocs/form/mt-form-selector'
                    },
                    {
                        title: 'MultiSelector 多级联动',
                        path: '/componentDocs/form/mt-form-multiSelector'
                    },
                    {
                        title: 'MultiCustom 联动面板',
                        path: '/componentDocs/form/mt-form-multiCustom'
                    },
                    {
                        title: 'MultiChoose 多选',
                        path: '/componentDocs/form/mt-form-multiChoose'
                    },
                    {
                        title: 'List 列表',
                        path: '/componentDocs/form/mt-form-list'
                    },
                    {
                        title: 'Date 日期',
                        path: '/componentDocs/form/mt-form-date'
                    },
                    {
                        title: 'File 附件上传',
                        path: '/componentDocs/form/mt-form-file'
                    },
                ]
            },
            {
                title: '弹出层',   // 必要的
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    {
                        title: 'Popup 弹窗',
                        path: '/componentDocs/popup/mt-popup'
                    },
                    {
                        title: 'Modal 模态框',
                        path: '/componentDocs/popup/mt-modal'
                    }
                ]
            },
            {
                title: 'Utils 配置',
                path: '/componentDocs/utils/mt-utils',
                children: [
                    {
                        title: 'Get 请求',
                        path: '/componentDocs/utils/mt-utils-get'
                    },
                    {
                        title: 'Post 请求',
                        path: '/componentDocs/utils/mt-utils-post'
                    },
                    {
                        title: 'File 请求',
                        path: '/componentDocs/utils/mt-utils-file'
                    },
                    {
                        title: '水印背景',
                        path: '/componentDocs/utils/mt-utils-waterMark'
                    },
                    {
                        title: '时间格式化',
                        path: '/componentDocs/utils/mt-utils-formatDate'
                    },
                    {
                        title: '附件地址完善',
                        path: '/componentDocs/utils/mt-utils-prefixUrl'
                    },
                    {
                        title: 'isEmpty 判空',
                        path: '/componentDocs/utils/mt-utils-isEmpty'
                    },
                ]
            },
        ]
    }
}
