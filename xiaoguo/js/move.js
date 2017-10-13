//IE8中获取classname的方法
//获取class的方法
function getClass(parent,name){
	var oParent = parent || document;
	var aEles = oParent.getElementsByTagName("*");
	var result=[];
	for(var i=0; i<aEles.length;i++){
		var arr= aEles[i].className.split(' ');
		for(var j=0; j<arr.length;j++){
			if(arr[j]==name){
				result.push(aEles[i])
			}						
		}
	};
	return result;
};

//获取样式
function getStyle(obj, name)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name];
	}
	else
	{
		return getComputedStyle(obj, false)[name];
	}
}


//startMove(oDiv, {width: 400, height: 400})


function startMove(obj, json, fnEnd)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
	
		for(var attr in json)
		{
			var cur=0;
			
			if(attr=='opacity')
			{
				cur=Math.round(parseFloat(getStyle(obj, attr))*100);
			}
			else
			{
				cur=parseInt(getStyle(obj, attr));
			}
			
			var speed=(json[attr]-cur)/8;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			
	
			
			if(attr=='opacity')
			{
				obj.style.filter='alpha(opacity:'+(cur+speed)+')';
				obj.style.opacity=(cur+speed)/100;
			}
			else
			{
				obj.style[attr]=cur+speed+'px';
			}
		}
		
		if(cur==json[attr]) //当达到目标值的时候停止timer如有fnEnd函数那就调用
		{
			clearInterval(obj.timer);
						
			if(fnEnd){fnEnd.call(obj)};
		}
	}, 30);
}