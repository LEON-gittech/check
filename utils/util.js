const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

export function onChange(e){
  console.log("TabChange",e)
  getApp().globalData.curTab = e.detail.value
  console.log("AppData",getApp().globalData.curTab)
  if(e.detail.value === 0){
    //判断是否为管理员
    console.log("userType",getApp().globalData.user.type)
    if(getApp().globalData.user.type===2){
      wx.redirectTo({
        url: '/pages/admin/home/home',
      })
    }else{
      wx.redirectTo({
        url: '/pages/index/index',
      })
    }
  }else if(e.detail.value == 1){
    wx.redirectTo({
      url: '/pages/user/user',
    })
  }else{
    // 判断是老师还是学生
    if(getApp().globalData.user.type===0){
      wx.redirectTo({
        url: '/pages/student/approvesHistory/approvesHistory',
      })
    }else{
      wx.redirectTo({
        url: '/pages/teacher/history/history',
      })
    }
  }
}

module.exports = {
  formatTime,
  onChange: onChange
}
