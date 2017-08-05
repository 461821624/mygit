//banner轮播图
	function lunbo_1(){
		ajax({
			url:"json/banner.json",
			data:{},
			success:function(data){

				var arr=JSON.parse(data);
				for (var i=0;i<arr.length;i++) {
					var obj=arr[i];
					 
					//创建节点
					var li=document.createElement("li");
					li.innerHTML="<img src="+ obj.img +" />";
					document.getElementById('list').appendChild(li);
					
				}; 
				lunbo_1();
			} 
		})
		function lunbo_1(){ 
			var obox = document.getElementsByClassName('main_banner')[0];
			
			var oList = document.getElementById("list");
			var aLi = oList.getElementsByTagName("li");
			
			//复制第一张图带list中
			oList.appendChild(aLi[0].cloneNode(true));
			
			//aLi长度，li的总量
			var size =aLi.length;
			
			//每个li的宽度
			var liWidth=aLi[0].offsetWidth;
			
			//初始化ul宽度
			oList.style.width=size*liWidth+'px';
			
			//自动轮播
			var i=0
			var timer=setInterval(function(){
				i++;
				move();
			},2000);
			
			//显示第i个li
			function move(){
				//右边界
				if (i >= size){
					oList.style.left = 0;
					i = 1;
				}
				//左边界
				if (i < 0){
					oList.style.left = -liWidth*(size-1) + "px";
					i = size-2;
				}
				
				//移动到第i个li
				animate(oList, {left:-liWidth*i});
			

		}
			var oPrev = document.getElementById("prev");
			var oNext = document.getElementById("next");
			
			//上一页
			oPrev.onclick = function(){
				i--;
				move();
			}
			//下一页
			oNext.onclick = function(){
				i++;
				move();
			}
			//移入box
			oList.onmouseenter = function(){
				clearInterval(timer); //关闭定时器
			}
			//移出box
			oList.onmouseleave = function(){
				clearInterval(timer); //关闭定时器
				timer = setInterval(function(){
					i++;
					move();
				}, 3000);
				
				
			}
			obox.onmouseover=function(){
				oNext.style.display='block';
				oPrev.style.display='block'
			}
			
		
			obox.onmouseout=function(){
				oPrev.style.display='none';
				oNext.style.display='none'
			}
			
		}
		
	}

