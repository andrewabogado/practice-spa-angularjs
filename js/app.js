window.addEventListener('hashchange', function() {

  if (window.location.hash === '#/bookmark/1') {
    console.log('Page 1 is cool.');
  }

  if (window.location.hash === '#/bookmark/2') {
    console.log('Going to page 2');
  }

  if (window.loation.hash === '#/bookmark/3') {
    console.log('Lets start with 3');
  }

});
