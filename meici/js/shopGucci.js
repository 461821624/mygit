function Shop(){
	$.get("../json/CartData.json",function(data){
		var arr=data; 
		
//		for (var i=0;i<arr.length;i++) {
			var obj=arr[1];  
			$("<h1><a>"+obj.name+"</a></h1><p>"+obj.minute+"</p><div><span>"+obj.unit+"</span><span>"+obj.price+"</span></div>").appendTo(".shoptitle");
			$(".shoptitle h1 a:nth-child(1)").attr({"href":"product.html"},{"style":"color: #000000"});
			$(".shoptitle div").attr("class","pic")
			
//		}
	})
}
