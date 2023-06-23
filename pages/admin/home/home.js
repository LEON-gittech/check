// pages/admin/home/home.js
import {notify} from "../../../utils/api";
import config from "../../../utils/config"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    notifyList:[],
    curTab: 0,
    tabList: getApp().globalData.tabList,
  },
  chooseUpload() {
    var that = this
    console.log(config.host)
    wx.chooseMessageFile({
      count: 10,
      type: 'file',
      extension: ['.xlsx', '.xls', '.XLSX', '.XLS', 'xlsx', 'xls', 'XLSX', 'XLS'],
      success(res) {
        const tempFilePaths = res.tempFiles
        for (var i in tempFilePaths) {
          wx.uploadFile({
            url: config.host+'/excel', //上传的服务器地址
            filePath: tempFilePaths[i].path,
            name: 'file',
            formData: {
              'file': tempFilePaths[i].path
                   },

            header: {
              [wx.getStorageSync('tokenName')]: wx.getStorageSync('token'),
            },
            success: function (resp) {
              console.log(resp)
              var data = JSON.parse(resp.data)
              console.log(data)
              if (data.code == 200) {
                wx.showToast({
                  title: '上传成功',
                  icon: 'none',
                  duration: 1300
                })
              } else {
                wx.showToast({
                  title: data.message,
                  icon: 'none',
                  duration: 2000
                })
              }
            },
            fail: function (err) {
              console.log(err)
            }
          })
        }
      }
    })
  },

  clickNotify(e){
    console.log(e.currentTarget.id)
    wx.navigateTo({
      url: '/pages/admin/course/course?courseId='+e.currentTarget.id,
      success: function(res) {
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onChange(e){
    const util = require('../../../utils/util.js');
    util.onChange(e)
  },
  onLoad(options) {
    notify({"id":getApp().globalData.user.id}).then(res=>{
      console.log(res)
      this.setData({
        notifyList:res.data.notifyList
      })
      getApp().globalData.notifyList = res.data.notifyList
      console.log(this.data.notifyList)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})