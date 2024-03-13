document.addEventListener('keydown', function(event) 
{
    if (event.ctrlKey && event.key === 'e') 
    {
        event.preventDefault();
        var textContainer = document.getElementById('text-container');
        var textarea = document.createElement('textarea');
        textarea.value = textContainer.innerText;
        textContainer.innerHTML = '';
        textContainer.appendChild(textarea);
        textarea.focus();
    } 
    else if (event.ctrlKey && event.key === 's') 
    {
        event.preventDefault();
        var textContainer = document.getElementById('text-container');
        var textarea = textContainer.querySelector('textarea');
        var newText = textarea.value;
        textContainer.innerHTML = newText;
    }
});