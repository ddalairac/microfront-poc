// Add fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { visionIcons } from '@vision/vision-vue';
// import { paWidgetsIcons } from '@pa-reports/pa-widgets';

import {
  faEllipsisV,
  faGripLines,
  faEllipsisH,
  faInfoCircle,
  faCheckCircle,
  faExchangeAlt,
  faLevelDownAlt,
  faExternalLinkAlt,
  faClone,
  // faBell,
  // faSortAlt,
  // faTimesCircle,
  // faExclamationTriangle,
  // faTimes,
} from '@fortawesome/pro-solid-svg-icons';

// import {
//   faEnvelopeOpenText,
//   faLink,
// } from '@fortawesome/pro-light-svg-icons';

import {
  faHome,
  faChevronRight,
  faChevronLeft,
  faEye,
  faPencil,
  faTrash,
  faUser,
  faUsers,
  faUsersCog,
  faPlus,
  faFilter,
  faTimes,
  faCheck,
  faRedo,
  faBroom,
  faCopy,
  faRandom,
  faSitemap,
  // faClock,
  // faGlobeEurope,
  // faFileSpreadsheet,
  // faFileSearch,
} from '@fortawesome/pro-regular-svg-icons';

// 'fas', 'far', 'fal' (Solid, Regular, Light)

library.add(
  ...visionIcons,
  //   ...paWidgetsIcons,

  // **** Solid ****
  faEllipsisV,
  faGripLines,
  faEllipsisH,
  faInfoCircle,
  faCheckCircle,
  faExchangeAlt,
  faLevelDownAlt,
  faExternalLinkAlt,
  faClone,
  // faBell,
  // faSortAlt,
  // faTimesCircle,
  // faExclamationTriangle,
  // faTimes,

  // **** Light ****
  // faEnvelopeOpenText,
  // faGlobeEurope,
  // faLink,

  // **** Regular ****
  faHome,
  faChevronRight,
  faChevronLeft,
  faEye,
  faPencil,
  faTrash,
  faUser,
  faUsers,
  faUsersCog,
  faPlus,
  faFilter,
  faTimes,
  faCheck,
  faRedo,
  faBroom,
  faCopy,
  faRandom,
  faSitemap,
  // faClock,
  // faGlobeEurope,
  // faFileSpreadsheet,
  // faFileSearch,
);
