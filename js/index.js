function centered() {
    var cvs=document.getElementById("gameView");
    var scbox=document.getElementById("SuccessBox");
    var flbox=document.getElementById("FailBox");
    var btnAg=document.getElementsByTagName("button");
    scbox.style.display="block";
    flbox.style.display="block";
    btnAg[0].style.marginLeft=-(btnAg[0].scrollWidth/2)+"px";
    btnAg[1].style.marginLeft=-(btnAg[1].scrollWidth/2)+"px";
    cvs.style.marginTop=-(cvs.scrollHeight/2)+"px";
    cvs.style.marginLeft=-(cvs.scrollWidth/2)+"px";
    scbox.style.marginTop=-(scbox.scrollHeight/2)+"px";
    scbox.style.marginLeft=-(scbox.scrollWidth/2)+"px";
    flbox.style.marginTop=-(flbox.scrollHeight/2)+"px";
    flbox.style.marginLeft=-(flbox.scrollWidth/2)+"px";
    scbox.style.display="none";
    flbox.style.display="none";
}
function againGame() {
    window.location.href=window.location.href;
}