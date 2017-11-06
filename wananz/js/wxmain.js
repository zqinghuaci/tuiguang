window.onload = function(){
	var wxNumarr = ['GUOGan007','lxjdi994','gxzd0005'],
		wxIndex = parseInt(Math.random()*3),
	    getWxnum = wxNumarr[wxIndex];
    var adom = getElementByClassName('wxNum');
    for(var i = 0;i<adom.length;i++){
    	adom[i].innerHTML=getWxnum;
    }
}
/* 兼容ie获取className */
function getElementByClassName(className){
    var elems = [];
    if(!document.getElementsByClassName){
        var dom = document.getElementsByTagName('*');
        for(var i = 0;i<dom.length;i++){
            if(dom[i].className == className){
                elems.push(dom[i]);
            }
        }
    }
    else{
        elems = document.getElementsByClassName(className);
    }
    return elems; 
}
