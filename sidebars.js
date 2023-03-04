/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  // docsSidebar: [{type: 'autogenerated', dirName: '.'}],

  docsSidebar: [
      'intro',
      {
        type: 'category',
        label: '快速安装',
        collapsed: false,
        items: [
            {
                type: 'category',
                label: '开源版',
                collapsed: false,
                link: {
                    type: 'generated-index',
                    title: '开源版部署教程',
                    description: '点击查看不同环境下的部署教程',
                    slug: '/install-os'
                },
                items: [
                    {
                        id: 'install/os-linux',
                        type: 'doc',
                        label: 'Linux'
                    },
                    {
                        id: 'install/os-windows',
                        type: 'doc',
                        label: 'Windows'
                    },
                    {
                        id: 'install/os-docker',
                        type: 'doc',
                        label: 'Docker'
                    },
                    {
                        id: 'install/os-baota',
                        type: 'doc',
                        label: '宝塔'
                    },
                ]
            },
            {
                type: 'category',
                label: '捐赠版',
                collapsed: false,
                link: {
                    type: 'generated-index',
                    title: '捐赠版部署教程',
                    description: '点击查看不同环境下的部署教程',
                    slug: '/install-pro'
                },
                items: [
                    {
                        id: 'install/pro-linux',
                        type: 'doc',
                        label: 'Linux'
                    },
                    {
                        id: 'install/pro-windows',
                        type: 'doc',
                        label: 'Windows'
                    },
                    {
                        id: 'install/pro-docker',
                        type: 'doc',
                        label: 'Docker'
                    },
                    {
                        id: 'install/pro-baota',
                        type: 'doc',
                        label: '宝塔'
                    },
                ]
            }, {
                type: 'doc',
                label: '帮我安装',
                id: 'install/help-install'
            }
        ],
      },
      {
          type: 'category',
          label: '功能介绍',
          items: [
              {
                  id: 'feature/pwd-folder',
                  type: 'doc',
                  label: '文件夹加密'
              },
              {
                  id: 'feature/md-folder',
                  type: 'doc',
                  label: '文件夹文档'
              },
              {
                  id: 'feature/hidden-file',
                  type: 'doc',
                  label: '隐藏文件/文件夹'
              },
              {
                  id: 'feature/video',
                  type: 'doc',
                  label: '视频播放'
              },
              {
                  id: 'feature/text',
                  type: 'doc',
                  label: '文本预览'
              },
              {
                  id: 'feature/music',
                  type: 'doc',
                  label: '音频播放'
              },
              {
                  id: 'feature/pdf',
                  type: 'doc',
                  label: 'PDF 预览'
              },
              {
                  id: 'feature/office',
                  type: 'doc',
                  label: 'office 预览'
              },
              {
                  id: 'feature/log',
                  type: 'doc',
                  label: '系统日志'
              }
          ]
      },
      {
          type: 'category',
          label: '配置文件',
          items: [
              {
                  id: 'config/config-path',
                  type: 'doc',
                  label: '配置文件路径（必看）'
              },
              {
                  id: 'config/config-port',
                  type: 'doc',
                  label: '启动端口'
              },
              {
                  id: 'config/config-db',
                  type: 'doc',
                  label: '数据库配置'
              },
              {
                  id: 'config/config-debug',
                  type: 'doc',
                  label: 'Debug 模式'
              }
          ]
      },
      {
          type: 'category',
          label: '高级功能',
          items: [
              {
                  id: 'advanced/cf-worker',
                  type: 'doc',
                  label: 'OneDrive CF Worker 加速'
              },
              {
                  id: 'advanced/google-drive-api',
                  type: 'doc',
                  label: '自建 Google Drive API'
              },
              {
                  id: 'advanced/onedrive-api',
                  type: 'doc',
                  label: '自建 OneDrive API'
              },
              {
                  id: 'advanced/only-office',
                  type: 'doc',
                  label: '自建 OnlyOffice'
              }
          ]
      },
      {
          type: 'category',
          label: '常见问题',
          items: [
              {
                  id: 'question/reset-password',
                  type: 'doc',
                  label: '忘记管理员密码怎么办？'
              },
              {
                  id: 'question/start-fail',
                  type: 'doc',
                  label: '启动失败/无法访问怎么办？'
              },
              {
                  id: 'question/bind-domain',
                  type: 'doc',
                  label: '如何用域名访问？'
              },
              {
                  id: 'question/cat-current-version',
                  type: 'doc',
                  label: '查看 ZFile 版本'
              },
              {
                  id: 'question/upload-fail-baota',
                  type: 'doc',
                  label: '上传失败怎么办？'
              },
              {
                  id: 'question/garbled',
                  type: 'doc',
                  label: '文件名乱码如何处理？'
              },
              {
                  id: 'question/separation-of-front-end-and-backend',
                  type: 'doc',
                  label: '如何前后端分离部署？'
              },
              {
                  id: 'question/download-log',
                  type: 'doc',
                  label: '如何查看/下载日志？'
              },
              {
                  id: 'question/modify-favicon',
                  type: 'doc',
                  label: '如何修改左上角 favicon 图标？'
              }
          ]
      },
      {
          type: 'doc',
          label: '存储源类型对比',
          id: 'storage-type'
      },
      {
          type: 'doc',
          label: '存储源配置示例',
          id: 'example'
      },
      {
          type: 'category',
          label: '自定义 JS 示例',
          link: {
              type: 'generated-index',
              title: '自定义 JS 相关示例',
              description: '点击下方查看不同版本的更新日志',
              slug: '/custom-js'
          },
          items: [
              {
                  id: 'custom-js/51la',
                  type: 'doc',
                  label: '51la 统计'
              },
              {
                  id: 'custom-js/baidu-tongji',
                  type: 'doc',
                  label: '百度统计'
              }
          ]
      },
      {
          type: 'category',
          label: '更新日志',
          link: {
              type: 'generated-index',
              title: '更新日志',
              description: '点击下方查看不同版本的更新日志',
              slug: '/changelog'
          },
          items: [
              {
                  id: 'changelog/os',
                  type: 'doc',
                  label: '开源版'
              },
              {
                  id: 'changelog/pro',
                  type: 'doc',
                  label: '捐赠版'
              }
          ]
      },
  ],
};

module.exports = sidebars;