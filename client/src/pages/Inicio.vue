<template>
  <q-avatar square class="window-width window-height" @click="accion()">
    <q-img src="liderazgoefectivo.png" class="full-height"/>
  </q-avatar>
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
