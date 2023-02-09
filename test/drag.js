  function allowUserSelect(element) {
        element.setAttribute('style', '-webkit-user-select: auto !important');
        element.setAttribute('style', 'user-select: auto !important');
        return element
 }
function clearHandlers() {
        html.onselectstart = html.oncopy = html.oncut = html.onpaste = html.onkeydown = html.oncontextmenu = html.onmousemove = body.oncopy = body.oncut = body.onpaste = body.onkeydown = body.oncontextmenu = body.onmousedown = body.onmousemove = body.onselectstart = body.ondragstart = doc.onselectstart = doc.oncopy = doc.oncut = doc.onpaste = doc.onkeydown = doc.oncontextmenu = doc.onmousedown = doc.onmouseup = window.onkeyup = window.onkeydown = null;
        allowUserSelect(html);
        allowUserSelect(body)
}
clearHandlers();
