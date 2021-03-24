<template>
  
  <component :is="layout">
    <router-view />
  </component>

</template>

<script lang="ts">

  import { Options, Vue } from 'vue-class-component';
  import AppAuthorized from '@layouts/AppAuthorized';

  @Options({
    components: {
      AppAuthorized,
    },
  })

  export default class App extends Vue {};

</script>