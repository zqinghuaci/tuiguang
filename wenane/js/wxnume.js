/*
arr_wx=['jkkk5883','yzb8668','fsb8686','18008645463','w512018888','18008655664'];
var wx_index = Math.floor((Math.random()*arr_wx.length));
var stxlwx = arr_wx[wx_index];
*/
$(function(){
	var wxnum = ['jkkk5883','yzb8668','fsb8686','18008645463','w512018888','18008655664'];
		wxIndex = parseInt(Math.random()*wxnum.length);
		$(".wxnumsje").text(wxnum[wxIndex]);
		console.log(wxIndex);
})