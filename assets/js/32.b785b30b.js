(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{419:function(a,s,t){"use strict";t.r(s);var r=t(54),e=Object(r.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h3",{attrs:{id:"应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[a._v("#")]),a._v(" 应用场景")]),a._v(" "),t("p",[a._v("​\t进行web开发经常需要引入jar包，当maven库中不存在，且不能使用镜像下载时便需要手动导入至本地Maven库（这里以配置达梦数据库驱动包为例）")]),a._v(" "),t("h3",{attrs:{id:"步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[a._v("#")]),a._v(" 步骤")]),a._v(" "),t("p",[a._v("1.打开达梦安装根目录，进入source->drivers->jdbc目录，复制Dm7JdbcDriver17.jar至d盘根目录")]),a._v(" "),t("p",[a._v("2.win+R打开控制台，执行以下语句将达梦数据帅驱动包添加至本地maven仓库")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("mvn install"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("install"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("file "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Dfile")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("D")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Dm7JdbcDriver17")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("jar "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("DgroupId")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("dm "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("DartifactId")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Dm7JdbcDriver")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Dversion")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.7")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Dpackaging")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("jar\n")])])]),t("p",[a._v("3.打开IDEA，在POM文件中添加达梦数据库驱动依赖")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("dependency"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("dm"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("groupId"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Dm7JdbcDriver")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("artifactId"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.7")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("version"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("dependency"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("p",[a._v("4.完成后本地仓库的路径是这样的")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://od.lk/s/NDBfMTQ2MjczMjFf/maven_repository_example.png",alt:"img"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);