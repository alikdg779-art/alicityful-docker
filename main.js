import { getCityInfo } from "./services/stateService.js";

window.getCity = function () {
    const city = document.getElementById("cityInput").value;
    const result = getCityInfo(city);
    document.getElementById("result").innerHTML = result;
}
