function copyClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.textContent = text;
  document.body.append(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
}

copyClipboard('view-source:' + window.location.href)
alert('Copied Code View URL')
