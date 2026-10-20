xod.registerCommand({ id: 'hello', label: 'Say hello' }, () => {
  xod
    .request('ui.notify', { message: 'Hello from an XOD 2 plugin.' })
    .catch(error => console.error(error));
});

xod.registerPanel({ id: 'about', title: 'About this plugin' }, root => {
  root.textContent = 'Hello from a sandboxed XOD 2 plugin panel.';
});

xod.registerContribution('themes', {
  css: '.Editor { background-color: #f4f7fb; color: #142033; }',
});
