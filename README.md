# offline-check
数字档案离线验证工具

# 功能

1. 文本哈希值计算

2. 文件哈希值计算

# 技术细节

该工具基于electron V1.4.13 编写，采用electron-packager V8.5.2打包发布。

前端页面基于amaze ui的栅格系统布局，通过js控制div的显示和隐藏来切换不同菜单。

前端代码在render-process文件夹，后端代码在main-process文件夹。

前后端之间通过electron的ipc方式进行通信。

文件哈希并没有上传文件，而仅仅是前端将获取到的文件路径通过ipc传递给了main-process处理。

jquery的高版本不能在electron中运行，要使用 <= 1.9.1的版本。