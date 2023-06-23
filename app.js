// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  getInputValue: function (e,target) {
    console.log(e)
    let type = e.currentTarget.id
    console.log(e.detail.value)
    return e.detail.value
  },
  globalData: {
    userInfo: {},
    //数据库中用户的信息
    user: {},
    curTab: 0,
    //tab栏的信息
    tabList:[
      {
        value: 0,
        label: '首页',
        icon: 'app',
        index: 0
      },
      {
        value: 1,
        label: '个人信息',
        icon: 'bulletpoint',
        index: 1
      }
    ],
    teacherTabList:[
      {
        value: 0,
        label: '首页',
        icon: 'app',
        index: 0
      },
      {
        value: 1,
        label: '个人信息',
        icon: 'bulletpoint',
        index: 1
      },
      {
        value: 2,
        label: '历史记录',
        icon: 'time',
        index: 2
      },
    ],
    //课程列表
    // 这个其实是 scheduleList
    courseList:[],
    // 这个是我的课程
    courses:[],
    notifyList:[],
    isLogin: false,
    //签到信息
    startTime:0,
    duration:0
  }
})
