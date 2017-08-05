function fdj(){
	var oList_img=document.getElementById('list_img');
	var oImgArr=oList_img.getElementsByTagName('li');
	var oMain_inner=document.getElementsByClassName('main_inner')[0];
	var oShop=document.getElementsByClassName('shop')[0];
	var oGoods=document.getElementsByClassName('goods')[0];
	var oShop_img=oShop.getElementsByTagName('img')[0];
	var oBig_img=document.getElementsByClassName('big_img')[0];
	var oBig_img_img=oBig_img.getElementsByTagName('img')[0];
	var oFdj=document.getElementById('fdj');
	//计算放大镜的left和top
		oShop.onmousemove = function(e) {
			
			e = e || event;
			var x = e.pageX - oShop.offsetLeft -oMain_inner.offsetLeft-oFdj.offsetWidth / 2;
			var y = e.pageY - oShop.offsetTop -oMain_inner.offsetTop-oFdj.offsetHeight / 2;
//			console.log(x+','+y)
			//限制边界值
			if(x <= 0) {
				x = 0;
			} else if(x >= 198 ) {
				x = 198;
			}

			if(y <= 0) {
				y = 0;
			} else if(y >= 240) {
				y = 240;
			}
			oFdj.style.left = x + 'px';
			oFdj.style.top = y + 'px';

			//大图的移动比例
			oBig_img_img.style.left = -oFdj.offsetLeft *2 + 'px';
			oBig_img_img.style.top = -oFdj.offsetTop * 2 + 'px';
		}
		for(var i = 0; i < oImgArr.length; i++) {
					oImgArr[i].index = i
					oImgArr[i].onclick = function() {

						oShop_img.src = "../img/h-120414-"+ (this.index%10+ 1) +'.jpg';
						console.log(this.index)
						oBig_img_img.src ="../img/h-120414-"+ (this.index%10+ 1) +'.jpg';
					}
				}

				oShop.onmouseover = function() {
					oFdj.style.display = 'block';
					oBig_img.style.display = 'block';
				}
				oShop.onmouseout = function() {
					oFdj.style.display = 'none';
					oBig_img.style.display = 'none';
				}

}
