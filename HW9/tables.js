function sortTable(colIndex) 
{
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    while (switching) 
    {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) 
      {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("td")[colIndex];
        y = rows[i + 1].getElementsByTagName("td")[colIndex];
        if (colIndex === 1) {
          if (parseInt(x.innerHTML) > parseInt(y.innerHTML)) 
          {
            shouldSwitch = true;
            break;
          }
        } 
        else 
        {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) 
          {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) 
      {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }