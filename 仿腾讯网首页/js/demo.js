// 帮助选项卡
var oHelp = document.getElementById('help');
var oMenu = document.getElementById('help_option');
var oMenuLi = oMenu.getElementsByTagName('li');
var oClass = oHelp.className;
var left = oHelp.offsetLeft;
oMenu.onmouseover = oHelp.onmouseover = function(){
	oHelp.className = oClass + ' active';
	oMenu.style.left = left + 'px';
	oHelp.style.left = left + 'px';
}
oMenu.onmouseout = oHelp.onmouseout = function(){
	oHelp.className = oClass;
	oMenu.style.left = '-10000px';
}
for(i=0;i<oMenuLi.length;i++){
	oMenuLi[i].onmouseover = function(){
		this.style.background = '#F4F8FC';
	}
	oMenuLi[i].onmouseout = function(){
		this.style.background = '';
	}
}
//搜索区域选项列表
var oSbr = document.getElementById('search_bar');
var oSitem = document.getElementById('search_item');
var oSUl = oSitem.getElementsByTagName('ul')[0];
var oSpan = oSitem.getElementsByTagName('span')[0];
var aLi = oSUl.getElementsByTagName('li');
var oSitemClass = oSitem.className;
var oSbrClass = oSbr.className;
oSbr.onmouseover = function(){
	oSbr.className = oSbrClass + ' active';
}
oSbr.onmouseout = function(){
	oSbr.className = oSbrClass;
}
oSitem.onmouseover = function(){
	oSitem.className = oSitemClass + ' change_bj';
	oSUl.style.display = 'block';
}
oSitem.onmouseout = function(){
	oSitem.className = oSitemClass;
	oSUl.style.display = 'none';
}
for(var i=0;i<aLi.length;i++){
	aLi[i].onmouseover = function(){
		this.className = 'chenge';
	}
	aLi[i].onmouseout = function(){
		this.className = '';
	}
	aLi[i].onclick = function(){
		oSpan.innerHTML = this.innerHTML;
		oSbr.className = oSbrClass;
		oSitem.className = oSitemClass;
		oSUl.style.display = 'none';
	}
}

// 证券选项卡
var oTabBox = document.getElementById('tab_box');
var aBondLi = oTabBox.getElementsByTagName('ul')[0].getElementsByTagName('li');
var oCont = getByClass(oTabBox,'content');
for(var i=0;i<aBondLi.length;i++){
	aBondLi[i].index = i;
	aBondLi[i].onmouseover = function(){
		for(var i=0;i<aBondLi.length;i++){
			aBondLi[i].className = '';
			oCont[i].style.display = 'none';
		}
		aBondLi[this.index].className = 'active';
		oCont[this.index].style.display = 'block';
	}
}

// 汽车旅游选项卡
var oTabCar = document.getElementById('tab_car');
var oCarOpt = document.getElementById('car_option');
var oCarLi = oCarOpt.getElementsByTagName('li');
var oCarCont = getByClass(oTabCar,'content');

for(var i=0;i<oCarLi.length;i++){
	oCarLi[i].index = i;
	oCarLi[i].onmouseover = function(){
		for(var i=0;i<oCarLi.length;i++){
			oCarLi[i].className = '';
			oCarCont[i].style.display = 'none';
		}
		oCarLi[this.index].className = 'active';
		oCarCont[this.index].style.display = 'block';
	}
}

// 培训考试选项卡
var oTabEdu = document.getElementById('edu_tab');
var oEduOpt = document.getElementById('edu_tab_option');
var oEduLi = oEduOpt.getElementsByTagName('li');
var oEduCont = getByClass(oTabEdu,'content');

for(var i=0;i<oEduLi.length;i++){
	oEduLi[i].index = i;
	oEduLi[i].onmouseover = function(){
		for(var i=0;i<oEduLi.length;i++){
			oEduLi[i].className = '';
			oEduCont[i].style.display = 'none';
		}
		oEduLi[this.index].className = 'active';
		oEduCont[this.index].style.display = 'block';
	}
}

// 隔行变色效果
var oItemUl = document.getElementById('item');
var oItemLi = oItemUl.getElementsByTagName('li');

for(var i=0;i<oItemLi.length;i++){
	if(i%2 == 0){
		oItemLi[i].style.background = '#F6F9FE';
	}
}
// 大家爱看区域
var oWeibo = document.getElementById('weibo');
var oWeiboCont = getByClass(oWeibo,'content');

for(var i=0;i<oWeiboCont.length;i++){
	show(oWeiboCont[i]);
}
function show(obj){
	var aDl = obj.getElementsByTagName('dl');
	for(var i=0;i<aDl.length;i++){
		aDl[i].onmouseover = function(){
			for(var i=0;i<aDl.length;i++){
				aDl[i].className = '';
			}
			this.className = 'active';
		}
		aDl[i].onmouseout = function(){
			for(var i=0;i<aDl.length;i++){
				aDl[i].className = '';
			}
			this.className = 'out';
		}
	}
}
//底部轮播图
var oHide = document.getElementById('hide');
var oPre = document.getElementById('pre');
var oNext = document.getElementById('next');
var oHideUl = oHide.getElementsByTagName('ul')[0];
var aHideLi = oHideUl.getElementsByTagName('li');
var aLiWidth = aHideLi[0].offsetWidth;
for(var i=0;i<5;i++){
	var obj = aHideLi[i].cloneNode(true);
	oHideUl.appendChild(obj);
}
var site = aLiWidth*5;
oHideUl.style.width = aHideLi.length*aLiWidth + 'px';

var iNow = 0;
oPre.onclick = function(){
	iNow--;
	if(iNow == -3){
		oHideUl.style.left = 0 + 'px';
		iNow = -1;
	}
	move();
}
oNext.onclick = function(){
	iNow++;
	if(iNow == 1){
		oHideUl.style.left = site - aHideLi.length*aLiWidth + 'px';
		iNow = -1;
	}
	move();
}
function move(){
	$(oHideUl).stop().animate({
		left:site*iNow
	});
}



function getByClass(oParent,sClass){
	var aEle = oParent.getElementsByTagName('*');
	var aResult = [];
	var re = new RegExp('\\b'+sClass+'\\b','g');
	for(var i=0;i<aEle.length;i++){
		if(re.test(aEle[i].className)){
			aResult.push(aEle[i]);
		}
	}
	return aResult;
}

