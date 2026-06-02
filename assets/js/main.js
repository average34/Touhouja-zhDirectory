(() => {
  const reloadButton = document.getElementById('reload-pdf');
  const pdfFrame = document.getElementById('pdf-frame');

  if (!reloadButton || !pdfFrame) return;

  reloadButton.addEventListener('click', () => {
    const basePath = 'pdf/Touhouzhminibook.pdf#page=1';
    const cacheBuster = `reload=${Date.now()}`;
    pdfFrame.src = `${basePath}&${cacheBuster}`;
  });
})();
