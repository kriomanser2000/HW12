const newsArray = 
[
    "News 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "News 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "News 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "News 4: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "News 5: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "News 6: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "News 7: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "News 8: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "News 9: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "News 10: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "News 11: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "News 12: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "News 13: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "News 14: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "News 15: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "News 16: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "News 17: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "News 18: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "News 19: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "News 20: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "News 21: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "News 22: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "News 23: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "News 24: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "News 25: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "News 26: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "News 27: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "News 28: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "News 29: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "News 30: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
];
const newsList = document.getElementById('news-list');
function addNewsToPage(news) 
{
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');
    newsItem.textContent = news;
    newsList.appendChild(newsItem);
}
function handleScroll() 
{
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight - 20) 
    {
        const nextNews = newsArray.shift();
        if (nextNews)
        {
            addNewsToPage(nextNews);
        }
    }
}
for (let i = 0; i < 17 && newsArray.length > 0; i++) 
{
    addNewsToPage(newsArray.shift());
}
window.addEventListener('scroll', handleScroll);