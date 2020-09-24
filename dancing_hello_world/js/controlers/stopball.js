import {start,global} from "../main.js";

export let stop = function(){document.body.onkeyup = function(e){
    // alert("olaa");
    if(e.keyCode == 32){
        if (global.stateApp=="run"){
            global.stateApp="stop";
            clearInterval(global.myApp);
        }else{            
            start();
        }
    }
}};

// export default all;