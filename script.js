function gantiTema() {
    const body = document.body;
    const footer = document.querySelector('footer');
    if (body.style.backgroundColor === 'black') {
      body.style.backgroundColor = '';
      body.style.color = '';
      footer.style.backgroundColor = '#0069d9';
    } else {
      body.style.backgroundColor = 'black';
      body.style.color = 'white';
      footer.style.backgroundColor = 'gray';
    }
  }
  