1.前端资源构建器 打包成静态文件 打包生成的对应的静态资源bundle
包管理工具  代码转换 文件优化 代码分割 模块合并 自动发布

2.从入口开始打包生成依赖树 index.js --->js,less--->chunk--->bundle

3.  
    1.Entry 入口 那个文件为入口起点开始打包

    2.output 输出

    3.Loader 让webpack 处理非js文件 (webpack只能处理js)

    4.Plugins 插件 打包优化和压缩 重新定义环境中的变量

    5.mode  指定 webpack 相应模式   development production



4.安装环境
    1.npm install -s webpack 项目安装在项目
    2.安装本地webapck  webpack-cli -D(开发依赖 上线不用)；

5.webpack.config.js 配置
    1. entry  入口文件
    2. output 出口文件
