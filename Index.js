window.onresize = function scrolling(){
    let slctn = document.getElementById("selection_tab").offsetHeight;
    let el = document.getElementById("list").offsetTop;
    let ht = document.getElementById("list").offsetHeight;

    if((el+ht) >= slctn){
        document.getElementById("selection_tab").style.overflowY = "scroll";
        console.log("true");
    }

    else{
        document.getElementById("selection_tab").style.overflowY = "hidden";
    }
}

window.onload = function loading(){
    document.body.scrollTop = 0; //for safari
    document.documentElement.scrollTop = 0; //for chrome;IE;Firefox
}