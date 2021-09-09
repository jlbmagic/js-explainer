import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "regenerator-runtime/runtime.js";
import c3 from "c3";
import "c3/c3.min.css";

window.loadChart = (obj) => {
  const data = JSON.parse(obj);

  var chart = c3.generate({
    bindto: "#chart",
    data: {
      columns: data,
    },
  });
};
