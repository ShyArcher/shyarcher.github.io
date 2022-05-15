(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{409:function(t,a,s){"use strict";s.r(a);var e=s(54),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#_1-什么是git"}},[t._v("1.什么是git")])]),s("li",[s("a",{attrs:{href:"#_2-常用指令"}},[t._v("2.常用指令")]),s("ul",[s("li",[s("a",{attrs:{href:"#_2-1初始化版本库"}},[t._v("2.1初始化版本库")])]),s("li",[s("a",{attrs:{href:"#_2-2查看仓库状态"}},[t._v("2.2查看仓库状态")])]),s("li",[s("a",{attrs:{href:"#_2-3版本回退-本地分支"}},[t._v("2.3版本回退（本地分支）")])]),s("li",[s("a",{attrs:{href:"#_2-4工作区和暂存区"}},[t._v("2.4工作区和暂存区")])]),s("li",[s("a",{attrs:{href:"#_2-5撤销修改"}},[t._v("2.5撤销修改")])]),s("li",[s("a",{attrs:{href:"#_2-6文件删除"}},[t._v("2.6文件删除")])])])]),s("li",[s("a",{attrs:{href:"#_3-远程仓库"}},[t._v("3.远程仓库")]),s("ul",[s("li",[s("a",{attrs:{href:"#_3-1本地库和远程仓库关联"}},[t._v("3.1本地库和远程仓库关联")])]),s("li",[s("a",{attrs:{href:"#_3-2克隆远程仓库"}},[t._v("3.2克隆远程仓库")])])])]),s("li",[s("a",{attrs:{href:"#_4-分支管理"}},[t._v("4.分支管理")]),s("ul",[s("li",[s("a",{attrs:{href:"#_4-1新建分支"}},[t._v("4.1新建分支")])]),s("li",[s("a",{attrs:{href:"#_4-2合并分支"}},[t._v("4.2合并分支")])]),s("li",[s("a",{attrs:{href:"#_4-3解决本地不同分支合并时的冲突"}},[t._v("4.3解决本地不同分支合并时的冲突")])]),s("li",[s("a",{attrs:{href:"#_4-4-克隆远程dev分支"}},[t._v("4.4 克隆远程dev分支")])]),s("li",[s("a",{attrs:{href:"#_4-5解决远程推送冲突"}},[t._v("4.5解决远程推送冲突")])])])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"_1-什么是git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是git"}},[t._v("#")]),t._v(" 1.什么是git")]),t._v(" "),s("blockquote",[s("p",[t._v("git跟踪的是修改，而不是文件")])]),t._v(" "),s("p",[t._v("git是分布式版本控制工具，用来协助开发者进行程序版本控制")]),t._v(" "),s("h2",{attrs:{id:"_2-常用指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-常用指令"}},[t._v("#")]),t._v(" 2.常用指令")]),t._v(" "),s("h3",{attrs:{id:"_2-1初始化版本库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1初始化版本库"}},[t._v("#")]),t._v(" 2.1初始化版本库")]),t._v(" "),s("div",{staticClass:"language-git extra-class"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[t._v("// 初始化\ngit init\n// 将修改提交到本地暂存区\ngit add 文件名\n// 将修改从暂存区提交到本地分支\ngit commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"提交信息"')]),t._v("\n// 将本地的提交同步到远程分支\ngit push\n")])])]),s("h3",{attrs:{id:"_2-2查看仓库状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2查看仓库状态"}},[t._v("#")]),t._v(" 2.2查看仓库状态")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// 查看工作区状态\ngit status\n// 查看文件修改状态\ngit diff\n// 查看提交日志\ngit log\n")])])]),s("h3",{attrs:{id:"_2-3版本回退-本地分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3版本回退-本地分支"}},[t._v("#")]),t._v(" 2.3版本回退（本地分支）")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// 回退指定步骤,HEAD表示当前版本，这里是更改HEAD的指针来达到版本回退的效果\ngit reset --hard HEAD~1\n// 回退到指定版本\ngit reset --hard 提交id\n// 查看git命令日志\ngit reflog\n")])])]),s("h3",{attrs:{id:"_2-4工作区和暂存区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4工作区和暂存区"}},[t._v("#")]),t._v(" 2.4工作区和暂存区")]),t._v(" "),s("p",[t._v(".git文件夹所在的目录就是工作区")]),t._v(" "),s("p",[t._v(".git文件夹也叫错git版本库，而"),s("strong",[t._v("版本库")]),t._v("里有"),s("strong",[t._v("暂存区")]),t._v("和"),s("strong",[t._v("本地分支")])]),t._v(" "),s("h3",{attrs:{id:"_2-5撤销修改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5撤销修改"}},[t._v("#")]),t._v(" 2.5撤销修改")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// 撤销工作区中对文件的修改，和当前分支版本或者暂存区的状态保持一致\ngit checkout -- readme.txt\n// 切换到目标分支\ngit checkout dev\n// 将修改后添加到暂存区的文件回退到工作区\ngit reset HEAD readme.txt\n")])])]),s("h3",{attrs:{id:"_2-6文件删除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-6文件删除"}},[t._v("#")]),t._v(" 2.6文件删除")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// git删除文件，删除后直接commit即可\ngit rm <file>\n// 和本地删除后再git add <file>效果一样\n")])])]),s("h2",{attrs:{id:"_3-远程仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-远程仓库"}},[t._v("#")]),t._v(" 3.远程仓库")]),t._v(" "),s("h3",{attrs:{id:"_3-1本地库和远程仓库关联"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1本地库和远程仓库关联"}},[t._v("#")]),t._v(" 3.1本地库和远程仓库关联")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// 将本地仓库关联GitHub仓库,remote：远程的，origin：仓库名\ngit remote add origin 远程仓库链接\n// 将本地分支推送到远程仓库，-u将本地分支和远程分支关联\ngit push -u origin master\n// 删除远程库，本质是解除本地库和远程库的关联\ngit remote rm <name>\n// 查看远程库信息\ngit remote -v\n")])])]),s("h3",{attrs:{id:"_3-2克隆远程仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2克隆远程仓库"}},[t._v("#")]),t._v(" 3.2克隆远程仓库")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git clone 远程仓库url\n")])])]),s("h2",{attrs:{id:"_4-分支管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-分支管理"}},[t._v("#")]),t._v(" 4.分支管理")]),t._v(" "),s("h3",{attrs:{id:"_4-1新建分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1新建分支"}},[t._v("#")]),t._v(" 4.1新建分支")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// 创建dev分支，并切换到dev分支\ngit checkout -b dev\n// 等价于\ngit branch dev\ngit checkout dev\n// 查看当前分支\ngit branch\n// 新版创建并切换分支，更容易理解\ngit switch -c dev\n")])])]),s("h3",{attrs:{id:"_4-2合并分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2合并分支"}},[t._v("#")]),t._v(" 4.2合并分支")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// 将dev分支合并到当前分支\ngit merge dev\n// 删除指定分支，本质是删除指针\ngit branch -d dev\n")])])]),s("p",[s("strong",[t._v("1.顺着dev分支(图中为hotfix)往前走能够到达另一个master分支时，此时的合并本质上是更改当前master的指针，和dev指针指向同一个提交")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://pic1.zhimg.com/80/v2-8b25f051e9a104bce119c3b2528c52c8_720w.png",alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://pic1.zhimg.com/80/v2-b601e645c9e822f659ec5964f8b53607_720w.png",alt:""}})]),t._v(" "),s("p",[s("strong",[t._v("2.若不能，Git 会使用两个分支的末端所指的快照（C4 和 C5）以及这两个分支的公共祖先（C2），做一个简单的三方合并")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://pic3.zhimg.com/80/v2-191b703eb6d5ec140e5b052dbb88c6d5_720w.png",alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://pic1.zhimg.com/80/v2-675d03f93d2405bcc4cd8bc04d742f3c_720w.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_4-3解决本地不同分支合并时的冲突"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3解决本地不同分支合并时的冲突"}},[t._v("#")]),t._v(" 4.3解决本地不同分支合并时的冲突")]),t._v(" "),s("p",[t._v("解决冲突就是把Git合并失败的文件手动编辑为我们希望的内容，再提交")]),t._v(" "),s("h3",{attrs:{id:"_4-4-克隆远程dev分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-克隆远程dev分支"}},[t._v("#")]),t._v(" 4.4 克隆远程dev分支")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// 创建和远程dev分支关联的本地dev分支，且切换到该分支上\ngit checkout -b dev origin/dev\n// 本地dev分支和远程dev分支进行关联\ngit branch --set-upstream-to=origin/dev dev\n")])])]),s("h3",{attrs:{id:"_4-5解决远程推送冲突"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-5解决远程推送冲突"}},[t._v("#")]),t._v(" 4.5解决远程推送冲突")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// 先git pull拉取最新的远程分支\ngit pull\n// 在本地和并解决完冲突后再提交推送至远程仓库\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);