import "../css/style.css";
import Data from "../data/data.xml";
import {Container} from "./core/container";

/**
 * @param {any} name
 */
function component(name) {
    if (DEBUG) console.log(Data);
    let container = new Container();
    container.alpha = 99;
    alert(container.alpha);
}
component("jimmy");
