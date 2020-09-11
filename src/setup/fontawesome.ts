import { App } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import Vue3FontAwesomeIcon from './Vue3FontAwesomeIcon.vue';
import { faEdit, faFileExport, faFileImport } from "@fortawesome/free-solid-svg-icons";

library.add(faFileImport, faFileExport, faEdit)

export function installFontawesome(app: App) {
  // app.component('fa-icon', FontAwesomeIcon);
}