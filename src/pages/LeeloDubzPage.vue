<template>
  <q-page padding class="flex flex-center">
    <h1>Leelo Dubz</h1>

  </q-page>
  
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      message: 'Input'
    }
  },
  computed: {
    //Throw computed values in here
  },
  methods: {
    submit() {
      this.message = 'Submitted';
      alert(this.message)
    },
    clearInput() {
      this.message = ''
    },
    inputCheckOut() {
      if (this.message == '') {
        this.message = 'Input'
      }
    },
    inputCheckIn() {
      if (this.message == 'Input') {
        this.message = ''
      }
    },
  }
})
</script>

<style>
  .border-login{
    border: 1px solid grey
  }
</style>
