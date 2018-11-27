<template>
  <div class="wave-container">
    <div ref="wave" class="wave">
      <span class="wave-value">{{waveValue * 100}}%</span>
    </div>

    <div ref="waterWave" class="water-wave">
      <img src="../../assets/images/wave.png" alt="" ref="image" :style="{'top': offsetTop + 'px'}">
      <span class="wave-value">{{waveValue * 100}}%</span>
    </div>
  </div>
</template>

<script>

let canvasWidth
let canvasHeight
let needAnimate = false
let imgurl = require('@/assets/images/wave.png')

export default {
  name: 'wave',
  data () {
    return {
      ctx: null,
      waveImage: null,
      waveValue: 0.6,
      offsetTop: 98,
    }
  },
  mounted () {
    this.initImage()
    this.start()
  },
  methods: {
    initImage () {
      // let img = this.$refs.image
      // let top = img.offsetTop
      // this.offsetTop = 31
      this.animationY(98)
    },
    animationY (dis) {
      let self = this
      let requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame
      requestAnimationFrame(() => {
        // img.style.left = ++dis
        self.offsetTop = --dis
        if (dis > 31) {
          this.animationY(dis)
        }
      })
    },
    start () {
      if (!this.ctx) return this.init(this.start)
      needAnimate = true
      setTimeout(() => {
        if (needAnimate) this.animate()
      }, 500)
    },
    init (callback) {
      let wave = this.$refs.wave
      let canvas = document.createElement('canvas')
      if (!canvas.getContext) return
      this.ctx = canvas.getContext('2d')
      canvasWidth = wave.offsetWidth
      canvasHeight = wave.offsetHeight
      canvas.setAttribute('width', canvasWidth)
      canvas.setAttribute('height', canvasHeight)
      wave.appendChild(canvas)
      this.waveImage = new Image()
      let self = this
      this.waveImage.onload = function () {
        console.log(1111)
        self.waveImage.onload = null
        callback()
      }
      this.waveImage.src = imgurl
    },
    animate () {
      let waveX = 0
      let waveY = 0
      let waveXmin = -203
      let waveYmax = canvasHeight * this.waveValue
      let requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60)
        }
      let self = this

      function loop () {
        self.ctx.clearRect(0, 0, canvasWidth, canvasHeight)
        if (!needAnimate) return
        if (waveY < waveYmax) waveY += 1.5
        if (waveX < waveXmin) waveX = 0; else waveX -= 1

        self.ctx.globalCompositeOperation = 'source-over'
        self.ctx.beginPath()
        self.ctx.arc(canvasWidth / 2, canvasHeight / 2, canvasHeight / 2, 0, Math.PI * 2, true)
        self.ctx.closePath()
        self.ctx.fill()

        self.ctx.globalCompositeOperation = 'source-in'
        self.ctx.drawImage(self.waveImage, waveX, canvasHeight - waveY)
        requestAnimationFrame(loop)
      }

      loop()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .wave-container {
    width: 100%;
    height: 100%;
    margin: 50px;
    position: absolute;
    .wave {
      width: 98px;
      height: 98px;
      overflow: hidden;
      border-radius: 50%;
      background: rgba(191, 227, 255, 0.86);
      position: relative;
      .wave-value {
        position: absolute;
        top:66%;
        left:50%;
        width:100%;
        font-size: 16px;
        transform:translate(-50%,-50%);
        text-align: center;
        color: #ffffff;
      }
      canvas {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
      }
    }
    .water-wave {
      width: 98px;
      height: 98px;
      overflow: hidden;
      border-radius: 50%;
      background: rgba(191, 227, 255, 0.86);
      position: relative;
      img {
        position: absolute;
        width: 345px;
        height: 270px;
        left: -5px;
        animation: xoffset 2.7s infinite linear;
      }
      .wave-value {
        position: absolute;
        top:66%;
        left:50%;
        width:100%;
        font-size: 16px;
        transform:translate(-50%,-50%);
        text-align: center;
        color: #ffffff;
      }
    }
    @keyframes xoffset {
      0% {
        left: -5px;
      }
      100% {
        left: -176px;
      }
    }
  }

</style>
