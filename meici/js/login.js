function denglu(){
	  var aInput = document.getElementsByClassName("form-control");
	  var btn = document.getElementsByClassName("member_form_btn")[0];
	  var oButton=btn.getElementsByTagName('button')[0];
	  var men_err_msg = document.getElementsByClassName("men_err_msg")[0];
	  var pattern = /^((13[0-9])|(14[57])|(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/;
	aInput[0].onkeyup = function() {
		if(pattern.test(aInput[0].value)) {
			men_err_msg.innerHTML = '手机号正确'
		} else if(aInput[0].value == '') {
			men_err_msg.innerHTML = '手机号不能为空'
		} else {
			men_err_msg.innerHTML = '手机号不正确'
		}
	}
	aInput[1].onkeyup = function() {
			if(aInput[1].value.length >= 8) {
				men_err_msg.innerHTML = ''
			} else {
				men_err_msg.innerHTML = '密码强度过低'
			}
		}
            //登录
            oButton.onclick = function(){
if(pattern.test(aInput[0].value)&&aInput[1].value.length >= 8){
                var xhr = new XMLHttpRequest();
                xhr.open("POST", "http://127.0.0.1/meici/html/login.php", true);
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xhr.send("username="+ aInput[0].value + "&password=" + aInput[1].value);
                xhr.onreadystatechange = function(){
                    if (xhr.readyState==4 && xhr.status==200) {
                        console.log(xhr.responseText);
                        var obj=JSON.parse(xhr.responseText)
                        if (obj.status ==1) {
						men_err_msg.innerHTML = '登录成功';
						location.href = "../index.html";

					}else if (obj.status == 0){
						men_err_msg.innerHTML = '登录失败'
					}
                    }
                }
            }else{
            	
            }

}
}