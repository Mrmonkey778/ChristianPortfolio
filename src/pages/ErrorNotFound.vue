<template>
  <div class="fullscreen bg-red text-black text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        404
      </div>

      <div class="text-h2" style="opacity:.4">
        The page you are looking for is lost to The Abyss...
      </div>

      <q-btn
        class="q-mt-xl"
        color="black"
        text-color="red"
        unelevated
        to="/"
        label="Escape while you can"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorNotFound'
})
</script>
