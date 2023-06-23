// pages/student/approveHistory/approveHistory.js
import {getMyApprove} from '../../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    approve:{},
    // 当前审批状态
    status:"",
    // 照片预览
    visible: false,
    showIndex: false,
    closeBtn: false,
    deleteBtn: false,
  },

  //照片浏览
  onClick() {
    this.setData({
      showIndex: true,
      visible: true,
    });
  },
  onChange(e) {
    const { index } = e.detail;
    console.log('change', index);
  },

  onDelete(e) {
    const { index } = e.detail;

    Toast({
      context: this,
      selector: '#t-toast',
      message: `删除第${index + 1}个`,
    });
  },

  onClose(e) {
    const { trigger } = e.detail;
    console.log(trigger);
    this.setData({
      visible: false,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    getMyApprove(options.approveId).then(res=>{
      let statusDict={0:"未审批",1:"已通过",2:"拒绝通过"}
      this.setData({
        approve: res.data,
        status:  statusDict[res.data.status]
      })
      console.log(res.data)
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