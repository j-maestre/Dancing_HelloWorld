//import {start} from "../main.js";

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        if (global.stateApp=="run"){
            global.stateApp="stop";
            clearInterval(global.myApp);
        }else{            
            start();
        }
    }
}