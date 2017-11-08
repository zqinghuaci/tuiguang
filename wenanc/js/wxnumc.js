function wx(){
    var a=['gyjt651','gyhxp888'];
    var len=a.length;
    var b = Math.floor((Math.random()*len));
    $(".xg").html(a[b]);
}

$(function(){
	var gotop=$("#gotop");
	$(window).scroll(function(){
		if($(this).scrollTop()>2000){
			gotop.css("display","block");
		}
		else{
			gotop.css("display","none");
		}
		console.log(parseInt($(this).scrollTop())/667);
	});
	gotop.click(function(){
		$("html,body").animate({scrollTop:0},200);
		
	});
})