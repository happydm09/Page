function copyClipboard(text) {
  navigator.clipboard.writeText(text);
  alert('Copied Code View URL')
}

copyClipboard('view-source:' + window.location.href)
