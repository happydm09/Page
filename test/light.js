Light = setInterval(function() {
  var cibSerp = document.getElementsByTagName("cib-serp");
  var n = 0
  for (let i = 0; i < cibSerp.length; i++) {
    cibSerp[i].design.colorScheme=0;
    cibSerp[i].alignment="center";
	  n = 1
  }
  if (n != 0) { clearInterval(Light) }
}, 200);
