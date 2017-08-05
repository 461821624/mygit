function zhuce() {

	var aInput = document.getElementsByClassName("form-control");
	var abut = document.getElementsByClassName("btn-primary")[0];
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
	aInput[2].onkeyup = function() {
			if(aInput[2].value.length >= 8) {
				men_err_msg.innerHTML = ''
			} else {
				men_err_msg.innerHTML = '密码强度过低'
			}
		}
	aInput[3].onkeyup = function() {
			if(aInput[2].value==aInput[3].value) {
				men_err_msg.innerHTML = '两次密码一致'
			} else {
				men_err_msg.innerHTML = '两次密码不一致'
			}
		}
	
		//注册
		abut.onclick = function() {
if(pattern.test(aInput[0].value)&&aInput[2].value.length >= 8&&aInput[2].value==aInput[3].value){
			var xhr = new XMLHttpRequest();
			xhr.open("POST", "http://127.0.0.1/meici/html/register.php", true);
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhr.send("username=" + aInput[0].value + "&password=" + aInput[2].value);
			xhr.onreadystatechange = function() {
				if(xhr.readyState == 4 && xhr.status == 200) {
					console.log(xhr.responseText);
					var obj=JSON.parse(xhr.responseText)
					console.log(obj)
					if (obj.status == 2) {
						men_err_msg.innerHTML = '手机号已被注册'
					}else if (obj.status == 1){
						men_err_msg.innerHTML = '注册成功'
					}

				}
			}
		}else{
		men_err_msg.innerHTML = '请检查 输入信息'
	}
	
	}	
}