// pages/student/approve/approve.js
const app = getApp()
import {sendApprove} from '../../../utils/api'
import config from '../../../utils/config.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    reason: '',
    course: {},
    upLoadStatus: '上传审批材料',
  },
  chooseUpload() {
    var that = this
    console.log(config.host)
    wx.chooseMessageFile({
      count: 10,
      type: 'file',
      extension: ['.xlsx', '.xls', '.XLSX', '.XLS', 'xlsx', 'xls', 'XLSX', 'XLS','jpg','png'],
      success(res) {
        that.setData({
          upLoadStatus: "上传成功"
        })
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
      },
      fail(res){
        that.setData({
          upLoadStatus: "上传成功"
        })
      }
    })
  },
  getInputValue(e){
    let input = app.getInputValue(e,this)
    console.log(input)
    this.setData({
      reason: input
    })
  },
  //上传请假审批
  uploadApprove(e){
    console.log(this)
    console.log(this.data.reason)
    console.log(this.data.originFiles)
    sendApprove({reason:this.data.reason,scheduleId:this.data.course.scheduleId,studentId:getApp().globalData.user.id})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options)
    let course = JSON.parse(options.course)
    this.setData({
      course:course
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