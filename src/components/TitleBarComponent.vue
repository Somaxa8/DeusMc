<template>
    <v-system-bar class="ui-titlebar" color="#313131" height="32" app>
        <div class="ui-titletext">DeusMc</div>
        <v-spacer class="title-bar"/>
        <div class="ui-titlecontrols">
        <button class="ui-btn minimize" @click="hide">
            <svg x="0px" y="0px" viewBox="0 0 10.2 1"><rect x="0" y="50%" width="10.2" height="1" /></svg>
        </button>
        <button class="ui-btn maximize" @click="minimize">
            <svg viewBox="0 0 10 10"><path d="M0,0v10h10V0H0z M9,9H1V1h8V9z" /></svg>
        </button>
        <button class="ui-btn close" @click="close">
            <svg viewBox="0 0 10 10"><polygon points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1" /></svg>
        </button>
        </div>
    </v-system-bar>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import WindowRenderer from "@/services/renderer/WindowRenderer";

@Component
export default class TitleBar extends Vue {
    close() {
        WindowRenderer.close()
    }
    minimize() {
        WindowRenderer.minimize()
    }
    hide() {
        WindowRenderer.hide()
    }
}
</script>

<style scoped>
.title-bar {
    -webkit-user-select: none;
    -webkit-app-region: drag;
    height: inherit;
}

.ui-titlebar {
    display: flex;
    width: 100%;
    user-select: none;
    cursor: default;
}

.ui-titletext {
    -webkit-app-region: drag;
    max-height: 32px;
    width: 120px;
    font: 12px/32px "Segoe UI", Arial, sans-serif;
    color: #fff;
    text-indent: 10px;
}
.ui-titlecontrols {
    max-width: 144px;
    max-height: 32px;
    flex-grow: 1;
}
.ui-btn {
    margin: 0;
    width: 48px;
    height:32px;
    border: 0;
    outline: 0;
    background: transparent;
}
.ui-btn:hover {
    background: rgba(255,255,255,.1);
}
.ui-btn.close:hover {
    background: #e81123;
}
.ui-btn svg path,
.ui-btn svg rect,
.ui-btn svg polygon {
    fill: #fff;
}
.ui-btn svg {
    width: 10px;
    height: 10px;
}
</style>