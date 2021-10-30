Page({
  data: {
    isPlayingMusic: true
  },
  bgm: null,
  music_url: 'http://music.163.com/song/media/outer/url?id=28695625.mp3',
  music_coverImgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic2.16pic.com%2F00%2F23%2F19%2F16pic_2319115_b.jpg',
  onReady: function() {
    // 创建getBackgroundAudioManager实例对象
    this.bgm = wx.getBackgroundAudioManager()
    // 音频标题
    this.bgm.title = 'Woooo...'
    // 专辑名称
    this.bgm.epname = 'I know you\'re watching'
    // 歌手名
    this.bgm.singer = 'unknow'
    // 专辑封面
    this.bgm.coverImgUrl = this.music_coverImgUrl
    this.bgm.onCanplay(() => {
      this.bgm.pause()
    })
    // 指定音频的数据源
    this.bgm.src = this.music_url
    this.bgm.onEnded(() => {
      this.onReady()
    })
  },
  // 播放器的单击事件
  play: function() {
    if (this.data.isPlayingMusic) {
      this.bgm.pause()
    } else {
      this.bgm.play()
    }
    this.setData({
      isPlayingMusic: !this.data.isPlayingMusic
    })
   },
})