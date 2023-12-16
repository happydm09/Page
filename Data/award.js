function Data(c){
  var date = c.getAttribute('date')
  var h = c.getAttribute('h')
  var src = c.getAttribute('src')
  
  var m = [document.querySelector("#m-title"), document.querySelector("#m-content")]
  m[0].innerHTML = `<img src='${src}' class='img-fluid'></img>${c.getAttribute('title')}`
  m[1].innerHTML = `얻은 날짜: ${date}`
  $('#modal').modal('show');
}
