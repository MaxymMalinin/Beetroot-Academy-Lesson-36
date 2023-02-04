'use strict';

document.addEventListener('keydown', switchInput);

function switchInput(e) {
  const currentEl = document.getElementById('textEditor');

  if (e.code === 'KeyE' && (e.ctrlKey || e.metaKey)) {
    changeToTextarea(currentEl);
    e.preventDefault();
  }

  if (e.code === 'KeyS' && (e.ctrlKey || e.metaKey)) {
    changeToDiv(currentEl);
    e.preventDefault();
  }
}

function changeToTextarea(currentEl) {
  if (currentEl.tagName === 'TEXTAREA') return;

  const textarea = document.createElement('textarea');

  textarea.setAttribute('id', 'textEditor');
  textarea.innerHTML = currentEl.innerHTML.trim();

  currentEl.replaceWith(textarea);
}

function changeToDiv(currentEl) {
  if (currentEl.tagName === 'DIV') return;

  const div = document.createElement('div');

  div.setAttribute('id', 'textEditor');
  div.innerHTML = currentEl.value;

  currentEl.replaceWith(div);
}
