<template>
  <div class="full-window column" @click="accion()">
    <div class="absolute-center full-width">
      <q-img src="EJEMPLO-RESEÑA-LIDERAZGO.jpg" class="full-height">
      </q-img>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      slide: 1,
      info: null,
      modulos: [],
      leftDrawerOpen: false,
      enable: false
    }
  },
  mounted () {
    this.info = new Audio(require('../../public/audio1.mp3'))
    // a.loop = true
    console.log('pre')
    this.info.play()
    console.log(this.modulos)
  },
  methods: {
    accion () {
      this.info.pause()
      this.$router.push('/home')
    },
    moduloEnable () {
      this.enable = true
    }
  }
}
</script>
