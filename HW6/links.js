document.addEventListener('DOMContentLoaded', function() 
{
    var links = document.querySelectorAll('#links a');
    links.forEach(function(link) 
    {
      if (link.getAttribute('href').startsWith('http://')) 
      {
        link.classList.add('external-link');
      }
    });
  });