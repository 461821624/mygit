			function lunbo_2(){
//				
//				
//				//ajax获取json中的数据
				ajax({
					url:"json/lunbo2.json",
					data:{},
					success:function(data){

//						json解析
						var arr = JSON.parse(data);
						for (var i=0; i<arr.length; i++){
							var obj=arr[i];
								//创建节点 
						var li = document.createElement("li"); 
						li.innerHTML="<dt><img src="+obj.img+"/></dt><dd>"+obj.oState+"</dd><dd>"+obj.oState1+"</dd><dd>"+obj.oStatus+"</dd>";
						document.getElementById("list2").appendChild(li);
						
//						var li2=document.createElement('li');
//						li2.innerHTML="<p>"+obj.oState+"</p><p>"+obj.oState1+"</p><p>"+obj.oStatus+"</p>";
//						document.getElementById("state").appendChild(li2);
						}
						lunbo();
					}
				}) 
 function lunbo(){ 
			var ohot_buy = document.getElementsByClassName('hot_buy')[0];
			
			var oList2 = document.getElementById("list2");
			var aLi2 = oList2.getElementsByTagName("li");
			
			//复制第一张图带list中
			oList2.appendChild(aLi2[0].cloneNode(true));
			oList2.appendChild(aLi2[1].cloneNode(true));
			oList2.appendChild(aLi2[2].cloneNode(true));
			oList2.appendChild(aLi2[3].cloneNode(true));
			oList2.appendChild(aLi2[4].cloneNode(true));
			oList2.appendChild(aLi2[5].cloneNode(true));
			
			
			//aLi长度，li的总量
			var size =aLi2.length;
			
			//每个li的宽度
			var liWidth2=aLi2[0].offsetWidth;
			
			//初始化ul宽度
			oList2.style.width=size*liWidth2+'px';
			
			//自动轮播
			var i=0
			var timer=setInterval(function(){
				i++;
				move();
			},2000);
			
			//显示第i个li
			function move(){
				//右边界
				if (i >= (size-5)){
					oList2.style.left = 0;
					i = 1;
				}
				//左边界
				if (i < 0){
					oList2.style.left = -liWidth2*(size-1) + "px";
					i = size-2;
				}
				
				//移动到第i个li
				animate(oList2, {left:-liWidth2*i});
			

		}
			var oPrev2 = document.getElementById("prev2");
			var oNext2 = document.getElementById("next2");
			
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
			oList2.onmouseenter = function(){
				clearInterval(timer); //关闭定时器
			}
			//移出box
			oList2.onmouseleave = function(){
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
		
