function copyClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.textContent = text;
  document.body.append(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Copied Code View URL')
}

copyClipboard('view-source:' + window.location.href)
