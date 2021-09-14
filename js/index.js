'use strict'

var pw;

pw = prompt("パスワード入力","");

if(pw == "1123") {
  location.href = "home.html";
} else {
  alert("パスワードが違います！");
}