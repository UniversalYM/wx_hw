Page({
  data: {
    latitude: 22.53075,
    longitude: 114.0598,
    markers: [{
      iconPath: '/images/weizhi.png',
      id: 0,
      latitude: 22.53075,
      longitude: 114.0598,
      width: 30,
      height: 30
    }]

  },
  markertap: function() {
    wx.openLocation({
      latitude: this.data.latitude,
      longitude: this.data.longitude,
      name: '万圣节社区',
      address: '深圳市 福田区'
    })
  }
})