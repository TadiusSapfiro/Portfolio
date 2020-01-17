"use strict";


function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#111'];
  let visible = true;
  let con = document.querySelector('.console');
  let letterCount = 1;
  let x = 1;
  let waiting = false;
  let target = document.getElementById(id);
  target.setAttribute('style', 'color:' + colors[0]);
  window.setInterval(function() {

   if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 130);
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden';
      visible = false;

    } else {
      con.className = 'console-underscore';

      visible = true;
    }
  }, 400)
}


consoleText(['Я - TADIUS SAPFIRO'], 'title-me');
consoleText(['РАБОТЫ'], 'title-work');
consoleText(['СТАТЬИ'], 'title-blog');
consoleText(['РАБОЧИЙ ПРОЦЕС'], 'title-workflow');
consoleText(['КОНТАКТЫ'], 'title-contact');

