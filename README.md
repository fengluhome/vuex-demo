# webpack-Vue2.0
**如果分享对你有帮助，请点个Star**
######周末突然心血来潮搭建一个基于wbpack+Vue2.0+Vue-router脚手架，踩了一些坑。github搜索了一番，发现并没有一个实现真正的按需加载分享，我决定要分享出来。
######按需加载关键代码段：
`  component: function (resolve) {
        require(['./../../routers/login2.vue'], resolve);
      }`
######里面有我家媳妇实现的chrome 插件的demo ，截图如下：
![](http://note.youdao.com/yws/public/resource/aba580c8a976a9256be51f15dbcc022b/xmlnote/BD1854DEF875482185226385109EC729/12572)  
