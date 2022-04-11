<template>
  <q-layout view="hHh LpR lFf"
            class="vertical-center ">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-btn flat
               dense
               round
               icon="menu"
               aria-label="Menu"
               @click="toggleLeftDrawer" />

        <q-toolbar-title >
          Abyssal Cartel
        </q-toolbar-title>

        <div>Welcome to the Abyss</div>
      </q-toolbar>





      




    </q-header>
    <q-header elevated class="glossy">
      <q-toolbar>
        

        <q-toolbar-title>
          Abyssal Cartel
        </q-toolbar-title>

        <button @click="$router.replace('/')" style="position: absolute; right: 15px" >
          Home
        </button>

        <div></div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen"
              show-if-above
              bordered
              width=175
              
              class="bg-grey-2">
      <q-list>
        <q-item-label header>Outside Links</q-item-label>

        

        <EssentialLink v-for="link in essentialLinks"
                       :key="link.title"
                       v-bind="link" />

      </q-list>
    </q-drawer>


    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from '../components/EssentialLink.vue'

  const linksList = [
    {
      title: 'Soundcloud',
      caption: 'BANGERS',
      icon: 'speaker',
      link: 'https://soundcloud.com/you/library'
    },
    {
      title: 'Instagram',
      caption: 'BANGERS',
      icon: 'speaker',
      link: 'https://www.instagram.com/abyssal_cartel/'
    },
    {
      title: 'Facebook',
      caption: 'BANGERS',
      icon: 'speaker',
      link: 'https://www.facebook.com/'
    },
    {
      title: 'Soundcloud',
      caption: 'BANGERS',
      icon: 'speaker',
      link: 'https://soundcloud.com/you/library'
    },
    {
      title: 'Github',
      caption: 'code',
      icon: 'home',
      link: 'https://github.com/Mrmonkey778'
    }
  ]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
