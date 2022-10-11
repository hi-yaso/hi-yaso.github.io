'use strict'

var pw;

pw = prompt("パスワード入力","");

if(pw == "1123") {
  location.href = "home1.html";
} else {
  alert("パスワードが違います！");
}