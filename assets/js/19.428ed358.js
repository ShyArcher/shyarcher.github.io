(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{407:function(t,a,r){"use strict";r.r(a);var s=r(54),v=Object(s.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"echarts数据可视化学习笔记"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#echarts数据可视化学习笔记"}},[t._v("#")]),t._v(" Echarts数据可视化学习笔记")]),t._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#常用图表"}},[t._v("常用图表")])]),r("li",[r("a",{attrs:{href:"#各种图表的适用范围"}},[t._v("各种图表的适用范围")])]),r("li",[r("a",{attrs:{href:"#使用echarts的一般步骤"}},[t._v("使用Echarts的一般步骤")])]),r("li",[r("a",{attrs:{href:"#常用配置项"}},[t._v("常用配置项")])])])]),r("p"),t._v(" "),r("h3",{attrs:{id:"常用图表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常用图表"}},[t._v("#")]),t._v(" 常用图表")]),t._v(" "),r("h4",{attrs:{id:"笛卡尔坐标系-直角坐标系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#笛卡尔坐标系-直角坐标系"}},[t._v("#")]),t._v(" 笛卡尔坐标系（直角坐标系）")]),t._v(" "),r("p",[t._v("柱状图（bar）、折线图（line）、散点图（catter）/涟漪散点图（effectCatter）")]),t._v(" "),r("h4",{attrs:{id:"地图坐标系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#地图坐标系"}},[t._v("#")]),t._v(" 地图坐标系")]),t._v(" "),r("p",[t._v("地图（geo）")]),t._v(" "),r("h4",{attrs:{id:"极坐标系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#极坐标系"}},[t._v("#")]),t._v(" 极坐标系")]),t._v(" "),r("p",[t._v("饼图（pie）、雷达图（radar）、仪表盘（gauge）")]),t._v(" "),r("h3",{attrs:{id:"各种图表的适用范围"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#各种图表的适用范围"}},[t._v("#")]),t._v(" 各种图表的适用范围")]),t._v(" "),r("h4",{attrs:{id:"柱状图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#柱状图"}},[t._v("#")]),t._v(" 柱状图：")]),t._v(" "),r("p",[t._v("适用于直观的展示数据在每种分类的"),r("strong",[t._v("具体数值")])]),t._v(" "),r("h4",{attrs:{id:"折线图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#折线图"}},[t._v("#")]),t._v(" 折线图")]),t._v(" "),r("p",[t._v("适用于表现数据随着横坐标的"),r("strong",[t._v("变化趋势")])]),t._v(" "),r("h4",{attrs:{id:"散点图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#散点图"}},[t._v("#")]),t._v(" 散点图")]),t._v(" "),r("p",[t._v("适用于显示数据在不同维度的"),r("strong",[t._v("相关性")])]),t._v(" "),r("h4",{attrs:{id:"涟漪散点图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#涟漪散点图"}},[t._v("#")]),t._v(" 涟漪散点图")]),t._v(" "),r("p",[t._v("展示气泡，可以和地图配合使用")]),t._v(" "),r("h4",{attrs:{id:"地图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#地图"}},[t._v("#")]),t._v(" 地图")]),t._v(" "),r("p",[t._v("展示数据在"),r("strong",[t._v("地理位置")]),t._v("上的"),r("strong",[t._v("差异")])]),t._v(" "),r("h4",{attrs:{id:"饼图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#饼图"}},[t._v("#")]),t._v(" 饼图")]),t._v(" "),r("p",[t._v("展示数据在各个类目的"),r("strong",[t._v("占比情况")])]),t._v(" "),r("h4",{attrs:{id:"雷达图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#雷达图"}},[t._v("#")]),t._v(" 雷达图")]),t._v(" "),r("p",[t._v("展示数据在各种维度"),r("strong",[t._v("与标准值的差异")]),t._v("，如能力值图表（"),r("strong",[t._v("六边形战士")]),t._v("马龙）")]),t._v(" "),r("h4",{attrs:{id:"仪表盘"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#仪表盘"}},[t._v("#")]),t._v(" 仪表盘")]),t._v(" "),r("p",[t._v("展示数据在某个指标的"),r("strong",[t._v("进度")])]),t._v(" "),r("h3",{attrs:{id:"使用echarts的一般步骤"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用echarts的一般步骤"}},[t._v("#")]),t._v(" 使用Echarts的一般步骤")]),t._v(" "),r("p",[t._v("1.引入echarts.js模块")]),t._v(" "),r("p",[t._v("2.创建呈现图表的容器")]),t._v(" "),r("p",[t._v("3.初始化echarts实例对象")]),t._v(" "),r("p",[t._v("4.准备配置项option")]),t._v(" "),r("p",[t._v("5.将配置项设置给echarts实例")]),t._v(" "),r("h3",{attrs:{id:"常用配置项"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常用配置项"}},[t._v("#")]),t._v(" 常用配置项")]),t._v(" "),r("h4",{attrs:{id:"笛卡尔坐标系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#笛卡尔坐标系"}},[t._v("#")]),t._v(" 笛卡尔坐标系")]),t._v(" "),r("p",[t._v("grid")]),t._v(" "),r("p",[t._v("axis")]),t._v(" "),r("p",[t._v("dataZoom")]),t._v(" "),r("h4",{attrs:{id:"通用配置项"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#通用配置项"}},[t._v("#")]),t._v(" 通用配置项")]),t._v(" "),r("p",[t._v("title")]),t._v(" "),r("p",[t._v("tooltip")]),t._v(" "),r("p",[t._v("toolbox")]),t._v(" "),r("p",[t._v("legend")]),t._v(" "),r("h4",{attrs:{id:"类目配置项"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#类目配置项"}},[t._v("#")]),t._v(" 类目配置项")]),t._v(" "),r("p",[t._v("series")]),t._v(" "),r("h4",{attrs:{id:"地图配置项"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#地图配置项"}},[t._v("#")]),t._v(" 地图配置项")]),t._v(" "),r("p",[t._v("geo")]),t._v(" "),r("h4",{attrs:{id:"雷达配置项"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#雷达配置项"}},[t._v("#")]),t._v(" 雷达配置项")]),t._v(" "),r("p",[t._v("radar")])])}),[],!1,null,null,null);a.default=v.exports}}]);