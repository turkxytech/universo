document.querySelectorAll('.projects .container .box').forEach(box => {
    box.addEventListener('mouseover', () => {
      document.querySelectorAll('.projects .container .box').forEach(b => {
        if (b !== box) {
          b.classList.add('not-hovered');
        }
      });
      box.classList.add('hovered');
    });
  
    box.addEventListener('mouseout', () => {
      document.querySelectorAll('.projects .container .box').forEach(b => {
        b.classList.remove('hovered', 'not-hovered');
      });
    });
  });

// ! MADE WITH CHATGPT 4o MINI