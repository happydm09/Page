var box = document.getElementsByTagName("searchbox");
var val = document.querySelector("#LenValue");

var len = val.getAttribute('val')
box.setAttribute('maxlength', len)
