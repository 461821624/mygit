function Addlist(){
	$.get("../json/addlist.json",function(data){

		var arr=data;
		for (var i=0;i<arr.length;i++) {
			var obj=arr[i];
		
			$("<li><div><img src="+obj.img+"/></div><div></div><p>"+obj.id+"</p><p>"+obj.details+"</p><p>"+obj.price+"</p></li>").appendTo(".addlist_1");
			$(".addlist_1 li div:nth-child(1)").attr("class","list_img");
			$(".addlist_1 li div:nth-child(2)").attr("class","board")
			$(".addlist_1 li").mouseover(function(){
				$(this).css("box-shadow","1px 1px 9px #666666")
			})
			$(".addlist_1 li").mouseout(function(){
				$(this).css("box-shadow","")
			})
			
			
		}
	})
//	--------------------------------------------------
//			var list_list1=document.getElementsByTagName("list_list1");
//			var alistspan=$(".list_tem_1 span:nth-child(2)")
//			console.log(alistspan)
//			var span2=document.getElementById("span2")
//			$(".list_tem_1 span:nth-child(2)").click(function(){
//				$(".list_list")[0].stop().animate({height:240})
//			})
				
				
			
}
