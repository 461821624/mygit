			function like(){ 
//				
//				
//				//ajax获取json中的数据
				ajax({
					url:"../json/youlike.json", 
					data:{},
					success:function(data){
//						console.log(data);
//						json解析
						var arr = JSON.parse(data);
						for (var i=0; i<arr.length; i++){
							var obj=arr[i];
								//创建节点 
						var li = document.createElement("li"); 
						li.innerHTML="<dl><dt><img src="+obj.img+"/></dt><dd>"+obj.id+"</dd><dd>"+obj.name+"</dd><dd>"+obj.pic+"</dd><dl>";
						document.getElementById("cnxh").appendChild(li);
						
						}
						lunbo();
					}
				}) 
		 function lunbo(){ 
				var oCnxh=document.getElementById('cnxh');
				var liArr=oCnxh.getElementsByTagName('li')
				var oNext=document.getElementsByClassName("like_next")[0];
				var oPrev=document.getElementsByClassName("like_prev")[0];
				
				oNext.onclick=function(){
					setInterval(function(){
						animate(oCnxh,{left:-(liArr[0].offsetWidth*4)})
					
					},2000)
				}
			} 
				
}