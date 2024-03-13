const bookList = document.getElementById('book-list');
        let selectedItems = [];
        function toggleSelection(event, item) 
        {
            if (event.ctrlKey) 
            {
                if (selectedItems.includes(item)) 
                {
                    selectedItems = selectedItems.filter(selectedItem => selectedItem !== item);
                } 
                else 
                {
                    selectedItems.push(item);
                }
            } 
            else if (event.shiftKey && selectedItems.length > 0) 
            {
                const currentIndex = Array.from(bookList.children).indexOf(item);
                const lastIndex = Array.from(bookList.children).indexOf(selectedItems[selectedItems.length - 1]);
                const minIndex = Math.min(currentIndex, lastIndex);
                const maxIndex = Math.max(currentIndex, lastIndex);
                selectedItems = [];
                for (let i = minIndex; i <= maxIndex; i++)
                {
                    const listItem = bookList.children[i];
                    selectedItems.push(listItem);
                }
            } 
            else 
            {
                selectedItems.forEach(selectedItem => 
                {
                    selectedItem.classList.remove('selected');
                });
                selectedItems = [];
            }
            item.classList.toggle('selected');
        }
        bookList.addEventListener('click', event => 
        {
            const listItem = event.target;
            if (listItem.tagName === 'LI') 
            {
                toggleSelection(event, listItem);
            }
        });