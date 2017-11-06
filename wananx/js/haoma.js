$(function(){
	var dianzan=$(".dianzan");
	var dianzanshou=$(".dianzan img");
	var dianzanshu=$(".dianzan span");
	var judges={};
	for(var i=0; i<dianzan.length; i++){
		eval("judges["+i+"]="+true);
		dianzan.eq(i).click(function(){
			var index=dianzan.index(this);
			if(judges[index]==true){
				dianzanshu.eq(index).text(parseInt(dianzanshu.eq(index).text())+1);
				dianzanshou.eq(index).attr("src","images/sb.jpg");
				judges[index]=false;
			}
		});
	}
})


arr_wx=['1','2','3','4'];
var wx_index = Math.floor((Math.random()*arr_wx.length));
var stxlwx = arr_wx[wx_index];
var img = arr_wx[wx_index]+".jpg";
var wx_img = "<div align='center'><img width='80%' src='wx/"+img+"'></div>";




