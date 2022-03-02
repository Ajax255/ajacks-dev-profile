import { defineStore } from "pinia";

export const useHudStore = defineStore("hud", {
    state: () => {
        return { expandPanel: true };
    },
    actions : {
        togglePanel(){
            this.expandPanel = !this.expandPanel;
        }
    },
    getters: {

    },
});