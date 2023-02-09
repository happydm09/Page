var doc = document;
var body = doc.body;
var html = doc.documentElement;

function AllowDrag(element) {
    element.setAttribute('style', '-webkit-user-select: auto !important');
    element.setAttribute('style', 'user-select: auto !important');
    return element
}
function clearHandlers() {
    html.onselectstart = html.oncopy = html.oncut = html.onpaste = html.onkeydown = html.oncontextmenu = html.onmousemove = body.oncopy = body.oncut = body.onpaste = body.onkeydown = body.oncontextmenu = body.onmousedown = body.onmousemove = body.onselectstart = body.ondragstart = doc.onselectstart = doc.oncopy = doc.oncut = doc.onpaste = doc.onkeydown = doc.oncontextmenu = doc.onmousedown = doc.onmouseup = window.onkeyup = window.onkeydown = null;
    AllowDrag(html);
    AllowDrag(body)
}

clearHandlers();
// Part of https://chrome.google.com/webstore/detail/enable-copy/pedikhgldlhhinfcajmpnicfpkbneeeh
