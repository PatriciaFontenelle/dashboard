import { createApp } from "vue";
import router from "./Routes.js";
import App from "./App.vue";
import "./style.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faUserSecret,
  faBars,
  faXmark,
  faChartSimple,
  faGear,
  faArrowRightFromBracket,
  faUserCircle,
  faAnglesRight,
  faAnglesLeft,
  faFilePen,
  faAngleUp,
  faAngleDown,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";

import { faBell } from "@fortawesome/free-regular-svg-icons";

/* add icons to the library */
library.add(
  faUserSecret,
  faBars,
  faXmark,
  faChartSimple,
  faGear,
  faArrowRightFromBracket,
  faBell,
  faUserCircle,
  faAnglesRight,
  faAnglesLeft,
  faFilePen,
  faCaretDown,
  faCaretUp
);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app")

// const app = createApp(App);
// app.use(router);
// app.component("font-awesome-icon", FontAwesomeIcon);
// app.mount("#app");
