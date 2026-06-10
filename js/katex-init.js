window.addEventListener('load', function () {
  if (document.getElementById('flow-diagram')) renderFlowDiagram('flow-diagram');
  setActiveNav();
  if (typeof renderMathInElement === 'function') {
    renderMathInElement(document.body, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false }
      ],
      throwOnError: false
    });
  }
});
