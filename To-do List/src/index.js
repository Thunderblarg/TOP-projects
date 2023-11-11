import uiController from "./uiController";
import "./style.css";

document.addEventListener('DOMContentLoaded', function (){
    let controller = uiController();
    controller.initializeBoard();
});