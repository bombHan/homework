function mouseWheelFn(obj,fnTop,fnDown){
	function fn1(ev){
		var off=true;
		var ev = ev || window.event;
		//ev.wheelDelta 上 正 下负
		//console.log(ev.wheelDelta)
		if(ev.wheelDelta){
			off = ev.wheelDelta>0?true:false
		}else{
			off = ev.detail<0?true:false
		}
		//FF浏览器  上负  下 正 
		if(off){
			if(fnTop){
				fnTop.call(obj)
			};
		}else{
			if(fnDown){
				fnDown.call(obj)
			};
		};
		ev.preventDefault();
		return false;
		
	}
	obj.onmousewheel=fn1;

	//DOMMouseScroll
	if(obj.addEventListener){
		obj.addEventListener('DOMMouseScroll',fn1,false);
	}
}