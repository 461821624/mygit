			function lunbo_3(){
//				
//				
//				//ajax获取json中的数据
				ajax({
					url:"../json/youlike1.json",
					data:{},
					success:function(data){

//						json解析
						var arr = JSON.parse(data);
						for (var i=0; i<arr.length; i++){
							var obj=arr[i];
								//创建节点 
						$("<li><div><img src="+obj.img+"><p>"+obj.oState+"</p><p>"+obj.oState1+"</p><span>添加到购物袋</span></li>").appendTo(".listlike_1")
						$(".listlike_1 li div").attr("class","likeimg")

						}
						lunbo();
					}
				}) 
 function lunbo(){ 
			var listlike_1 = document.getElementsByClassName('listlike_1')[0];
			

			var aLi2 = listlike_1.getElementsByTagName("li");
			console.log(aLi2)
			//复制第一张图带list中
			listlike_1.appendChild(aLi2[0].cloneNode(true));
			listlike_1.appendChild(aLi2[1].cloneNode(true));
			listlike_1.appendChild(aLi2[2].cloneNode(true));
			listlike_1.appendChild(aLi2[3].cloneNode(true));
			
			
			
			//aLi长度，li的总量
			var size =aLi2.length;
			
			//每个li的宽度
			var liWidth2=aLi2[0].offsetWidth;
			
			//初始化ul宽度
			listlike_1.style.width=size*liWidth2+'px';
			
			//自动轮播
			var i=0
			var timer=setInterval(function(){
				i++;
				move();
			},2000);
			
			//显示第i个li
			function move(){
				//右边界
				if (i >= (size-4)){
					listlike_1.style.left = 0;
					i = 1;
				}
				//左边界
				if (i < 0){
					listlike_1.style.left = -liWidth2*(size-1) + "px";
					i = size-2;
				}
				
				//移动到第i个li
				animate(listlike_1, {left:-liWidth2*i});
			

		}
			var oPrev2 = document.getElementsByClassName("cart_prev")[0];
			var oNext2 = document.getElementsByClassName("cart_next")[0];
			
			//上一页
			oPrev2.onclick = function(){
				i--;
				move();
			}
			//下一页
			oNext2.onclick = function(){
				i++;
				move();
			}
			//移入box
			var listlike=document.getElementsByClassName('listlike')[0];
			listlike.onmouseenter = function(){
				clearInterval(timer); //关闭定时器
			}
			//移出box
			listlike.onmouseleave = function(){
				clearInterval(timer); //关闭定时器
				timer = setInterval(function(){
					i++;
					move();
				}, 3000);
				
				
			}
//			obox.onmouseover=function(){
//				oNext.style.display='block';
//				oPrev.style.display='block'
//			}
//			
//		
//			obox.onmouseout=function(){
//				oPrev.style.display='none';
//				oNext.style.display='none'
//			}
			
		}
		} 
		
//<li>
//									<div class="likeimg">
//										<img src="../img/bao9.jpg"/>
//									</div>
//									<p>Neil Barrett 尼奥·贝奈特</p>
//									<p>羊毛混纺 男士 休闲裤</p>
//									<p>￥2725.00</p>
//									<span>
//										添加到购物袋
//									</span>
//								//</li>