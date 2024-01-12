import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

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
  faAnglesLeft
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
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
