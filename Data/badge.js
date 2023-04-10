function Data(c){
  var date = c.getAttribute('date')
  var get = c.getAttribute('get')
  var h = c.getAttribute('h')
  var src = c.getAttribute('src')
  
  var m = [document.querySelector("#m-title"), document.querySelector("#m-content")]
  m[0].innerHTML = `<img src='${src}'></img>${c.getAttribute('title')}`
  m[1].innerHTML = `얻은 날짜: ${date} <br> ${get}번째, <a href='${h}'>링크</a>`
  $('#modal').modal('show');
}
