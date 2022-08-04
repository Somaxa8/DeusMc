<template>
  <v-app>
<!--    <title-bar />-->
    <v-main class="fill-height main">
      <router-view/>
    </v-main>
    <snackbar-component/>
    <dialog-component/>
  </v-app>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import TitleBar from "@/components/TitleBarComponent.vue";
import SnackbarComponent from "@/components/SnackbarComponent.vue";
import DialogComponent from "@/components/DialogComponent.vue";

@Component({components:{TitleBar, SnackbarComponent, DialogComponent}})
export default class App extends Vue {
  showMenu() {
    return this.$route.name != null && this.$route.name != "Login"
  }
}
</script>

<style>
.main {
  padding: 0 0 0 0 !important;
  height: 95vh;
  overflow-y: hidden;
  /*margin-top: 32px;*/
}

body::-webkit-scrollbar {
  display: none;
}

.theme--dark.v-application {
    background: #313131;
    color: #FFFFFF;
}
</style>
