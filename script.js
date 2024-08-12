async function fetchData() {
    try {
      const response = await fetch('http://localhost:3003/data');
      const data = await response.json();
      displayData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  function displayData(data) {
    const tableHeader = document.getElementById('table-header');
    const tableBody = document.getElementById('table-body');

    // Clear existing table content
    tableHeader.innerHTML = '';
    tableBody.innerHTML = '';

    // Create table headers
    if (data.length > 0) {
      const headers = Object.keys(data[0]);
      headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        tableHeader.appendChild(th);
      });
    }

    // Create table rows
    data.forEach(item => {
      const tr = document.createElement('tr');
      Object.values(item).forEach(value => {
        const td = document.createElement('td');
        td.textContent = value;
        tr.appendChild(td);
      });
      tableBody.appendChild(tr);
    });
  }

  fetchData();