function AddCart(){
	var arr=[];
	$.get("../json/CartData.json",function(d){
		arr=d;
	})
	$(".but_list").on("click",".cur",function(){

		//商品下标
//		var index=$(this).index(".but_list .cur");
//		console.log(index)
//
//		//点击的商品
		var obj=arr[0];

		//商品对象加入cookie
		var goods=$.cookie("cart")?JSON.parse($.cookie("cart")):[]
		var isExist=false
		for (var i=0;i<goods.length;i++) {
			if (goods[i].id==obj.id) {
				goods[i].num++;
				isExist=true;
			}
		}
		console.log(goods)
		if (isExist==false) {
			obj.num=1;
			goods.push(obj)
		}
		obj.num=1;

		$.cookie("cart",JSON.stringify(arr[0]),{expires:30,path:"/"});
//		$.cookie("cart1",JSON.stringify(arr[1]),{expires:30,path:"/"});
		console.log($.cookie("cart"))

	})
//$(".cur").click(function(){
	console.log("jia")
	
//})
}
