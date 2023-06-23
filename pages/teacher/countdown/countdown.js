// countdown.js

let timerId = null; // 全局定时器标识

Component({
  properties: {
    startTime: {
      type: Number,
      value: 0
    },
    duration: {
      type: Number,
      value: 0
    }
  },

  data: {
    remainingTime: 0,
    formattedTime: '0:00',
    inDuration:true,
    percentage: Number,
  },

  lifetimes: {
  },

  methods: {
    startCountdown() {
      const currentTime = Math.floor(Date.now() / 1000); // 当前时间，单位为秒
      const elapsedTime = currentTime - this.data.startTime; // 已经过去的时间，单位为秒
      const remainingTime = this.data.duration - elapsedTime;

      if (remainingTime > 0) {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        const formattedTime = `${minutes}:${String(seconds).padStart(2, '0')}`;

        this.setData({
          remainingTime: remainingTime,
          formattedTime: formattedTime
        });

        // 开启全局定时器，每秒更新倒计时
        timerId = setInterval(() => {
          this.tick();
        }, 1000);
      }
    },

    stopCountdown() {
      clearInterval(timerId);
      timerId = null;
    },

    tick() {
      if (this.data.remainingTime > 0) {
        const minutes = Math.floor(this.data.remainingTime / 60);
        const seconds = this.data.remainingTime % 60;
        const formattedTime = `${minutes}:${String(seconds).padStart(2, '0')}`;

        this.setData({
          remainingTime: this.data.remainingTime - 1,
          formattedTime: formattedTime
        });

        //更新 percentage
        var percentage = Math.ceil((1-(this.data.remainingTime/this.data.duration))*100)
        this.setData({
          percentage: percentage
        })
      } else {
        // 签到结束
        this.stopCountdown();
        wx.showToast({
          title: '签到结束',
        })
        this.setData({
          inDuration:false
        })
      }
    }
  }
});
