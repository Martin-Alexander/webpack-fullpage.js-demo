import $ from "jquery";
import "../../node_modules/fullpage.js/dist/jquery.fullpage.min.js";
import "../../node_modules/fullpage.js/dist/jquery.fullpage.css";

import "../stylesheets/index.scss"

$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ["1", "2", "3", "4"]
  });
});