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
            <v-btn elevation="0" class="mr-2">Start</v-btn>
            <v-btn elevation="0" class="mr-2">
                <v-icon>mdi-cog</v-icon>
            </v-btn>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class HomeView extends Vue {
}
</script>
