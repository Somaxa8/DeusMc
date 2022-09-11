<template>
    <v-container class="align-stretch fill-height">
        <v-row justify="end">
            <v-badge class="ma-4" bordered top color="#1BC5BD" dot offset-x="8" offset-y="38">
                <v-avatar color="info" size="35" rounded>
                    <v-icon dark>
                        mdi-account-circle
                    </v-icon>
                </v-avatar>
            </v-badge>
        </v-row>
        <v-row class="mb-4" justify="center" align="end">
            <v-btn elevation="0" class="mr-2">
                <v-icon>mdi-account</v-icon>
            </v-btn>
            <v-btn v-if="isInstalled" elevation="0" class="mr-2" @click="start" :disabled="!isChecked" :loading="isLoading">
                Start
            </v-btn>
            <v-btn v-else elevation="0" class="mr-2" @click="install" :disabled="!isChecked" :loading="isLoading">
                Install
            </v-btn>
            <v-btn elevation="0" class="mr-2">
                <v-icon>mdi-cog</v-icon>
            </v-btn>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import MinecraftRenderer from "@/services/renderer/MinecraftRenderer";
import consola from "consola";
import TimeTool from "@/services/tools/TimeTool";

@Component
export default class HomeView extends Vue {
    isInstalled: boolean = true
    isChecked: boolean = false
    isLoading: boolean = false

    start() {
        MinecraftRenderer.launch()
    }

    async install() {
        MinecraftRenderer.install()
        MinecraftRenderer.installProgress()
        this.isInstalled = MinecraftRenderer.isInstalled()
    }

    async created() {
        await TimeTool.timeout(3000)
        consola.info("check installations")
        this.isInstalled = MinecraftRenderer.isInstalled()
        this.isChecked = true
    }
}
</script>
