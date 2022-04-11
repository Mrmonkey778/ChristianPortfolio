
<template>
  <q-page class="flex flex-center">
    <authenticator>
      <template v-slot="{ user, signOut }">
        <h1>Welcome to the Abyss {{user.attributes.name}}!</h1>
        <button @click="signOut">Sign Out</button>
      </template>

      <template v-slot:sign-in-header>
        <h3>Enter if you dare</h3>
      </template>
    </authenticator>
  </q-page>

</template>

<script>
  import '@aws-amplify/ui-vue/styles.css';
  import Auth from "aws-amplify"
  import awsConfig from "../aws-exports"
  import awsExports from "../aws-exports"
  import { Authenticator } from '@aws-amplify/ui-vue';
  import { Amplify } from 'aws-amplify';

  Auth.configure(awsConfig);
  Amplify.configure(awsExports);

  export default {
    name: 'App',
    async created() {

    },
    components: {
      Authenticator
    },
    data() {
      return {
        name: '',
        description: '',
      }
    },
  }
</script>
