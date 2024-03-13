document.getElementById('calendarForm').addEventListener('submit', function(e) 
{
    e.preventDefault();
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
    const calendar = generateCalendar(month, year);
    document.getElementById('calendar').innerHTML = calendar;
});
function generateCalendar(month, year) 
{
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0);
    const daysInMonth = endDate.getDate();
    const startDay = startDate.getDay();
    let calendarHTML = '<table>';
    calendarHTML += '<tr><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th></tr>';
    let dayCounter = 1;
    for (let i = 0; i < 6; i++) 
    {
        calendarHTML += '<tr>';
        for (let j = 0; j < 7; j++) 
        {
            if (i === 0 && j < startDay) 
            {
                calendarHTML += '<td></td>';
            } 
            else if (dayCounter > daysInMonth) 
            {
                break;
            } 
            else 
            {
                calendarHTML += '<td>' + dayCounter + '</td>';
                dayCounter++;
            }
        }
        calendarHTML += '</tr>';
        if (dayCounter > daysInMonth) 
        {
            break;
        }
    }
    calendarHTML += '</table>';
    return calendarHTML;
}