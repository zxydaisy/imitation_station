
// 搜索区下拉菜单
var sBtn = document.getElementById('sBtn');
var sBox = document.getElementById('sBox');
sBtn.onclick = function(){
	sBox.style.display = 'block';
	var aLis = sBox.getElementsByTagName('li');
	for(var i=0;i<aLis.length;i++){
		aLis[i].onclick = function(){
			sBox.style.display = 'none';
			sBtn.innerHTML = this.innerHTML;
		}
		aLis[i].onmouseover = function(){
			this.className = 'active';
		}
		aLis[i].onmouseout = function(){
			this.className = '';
		}
	} 
}
// 证券选项卡
var oCurve = document.getElementById('curve');
var oItem = getObjByClass(oCurve,'curve_item')[0];
var oItemLis = oItem.getElementsByTagName('li');
var oDataPic = getObjByClass(oCurve,'data_pic');
for(var i=0;i<oItemLis.length;i++){
	oItemLis[i].index = i;
	oItemLis[i].onmouseover = function(){
		for(var j=0;j<oItemLis.length;j++){
			oItemLis[j].className = '';
			oDataPic[j].style.display = 'none';
		}
		this.className = 'active';
		oDataPic[this.index].style.display = 'block';
	}	
} 
// 多媒体选项卡
var oMedia = document.getElementById('media');
var oChannel = getObjByClass(oMedia,'channel')[0];
var oChannelLis = oChannel.getElementsByTagName('li');
var oContent = getObjByClass(oMedia,'content');
for(var i=0;i<oChannelLis.length;i++){
	oChannelLis[i].index = i;
	oChannelLis[i].onmouseover = function(){
		for(var j=0;j<oChannelLis.length;j++){
			oChannelLis[j].className = '';
			oContent[j].style.display = 'none';
		}
		this.className = 'active';
		oContent[this.index].style.display = 'block';
	}	
} 
// 移动端选项卡
var oIfengTab= document.getElementById('ifengTab');
var oChannel2 = getObjByClass(oIfengTab,'channel')[0];
var oChannelLis2 = oChannel2.getElementsByTagName('li');
var oList2 = getObjByClass(oIfengTab,'list_1');
for(var i=0;i<oChannelLis2.length;i++){
	oChannelLis2[i].index = i;
	oChannelLis2[i].onmouseover = function(){
		for(var j=0;j<oChannelLis2.length;j++){
			oChannelLis2[j].className = '';
			oList2[j].style.display = 'none';
		}
		this.className = 'active';
		oList2[this.index].style.display = 'block';
	}	
} 
// 选项卡动画
var oTab = document.getElementById('tab_animate');
var oItem2 = getObjByClass(oTab,'item')[0];
var oItemLis2 = oItem2.getElementsByTagName('li');
var oBox = getObjByClass(oTab,'pic_box')[0];
var oBoxLis = oBox.getElementsByTagName('li');
var oBtnLeft = getObjByClass(oBox,'btn_left')[0];
var oBtnRight = getObjByClass(oBox,'btn_right')[0];
var m = 0;
var len = oItemLis2.length;
for(var i=0;i<len;i++){
	oItemLis2[i].index = i;
	oItemLis2[i].onmouseover = function(){
		m = this.index;
		move(this.index);
	}
}
time();
function time(){
	var timer = setInterval(function(){
		m++;
		if(m>len-1){
			m = 0;
		}
		move(m);
	},1000)
	oTab.onmouseover = function(){
		clearInterval(timer);
		oBtnLeft.style.display = 'block';
		oBtnRight.style.display = 'block';
	}
	oTab.onmouseout = function(){
		time();
		oBtnLeft.style.display = 'none';
		oBtnRight.style.display = 'none';
	}
}
oBtnLeft.onclick = function(){
	m--;
	if(m<0){
		m = len-1;
	}
	move(m);
}
oBtnRight.onclick = function(){
	m++;
	if(m>len-1){
		m = 0;
	}
	move(m);
}


function move(index){
	for(var j=0;j<len;j++){
			oItemLis2[j].className = '';
			oBoxLis[j].style.display = 'none';
		}
		oItemLis2[index].className = 'active';
		oBoxLis[index].style.display = 'block'
}

function getObjByClass(aParent,className){
	var obj = aParent.getElementsByTagName('*');
	var result = [];
	for(var i=0;i<obj.length;i++){
		if(obj[i].className == className){
			result.push(obj[i]);
		}
	}
	return result;
}