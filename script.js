// Sample data for the tables (dummy data)
const tableData = {
    query1: [
      { id: 1, name: "John Doe", age: 30 },
      { id: 2, name: "Jane Smith", age: 28 },
      // Add more rows as needed
    ],
    query2: [
      { product: "Product A", price: 100 },
      { product: "Product B", price: 75 },
      // Add more rows as needed
    },
    // Add more queries and data as needed
  };
  
  // Function to execute the SQL query and display the results
  function executeQuery() {
    const queryInput = document.getElementById("queryInput").value;
    const queryResultDiv = document.getElementById("queryResult");
  
    // Dummy logic to process the query (Not an actual SQL engine)
    // Replace this with your actual backend implementation in a real application
    const query = queryInput.trim().toLowerCase();
    let queryResult = [];
  
    if (query === "select * from users") {
      queryResult = tableData.query1;
    } else if (query === "select * from products") {
      queryResult = tableData.query2;
    } else {
      // If the query doesn't match any predefined query, display an error message
      queryResultDiv.innerHTML = "<p>No data to display. Invalid query.</p>";
      return;
    }
  
    // Generate HTML table to display the query results
    let tableHTML = "<table><thead><tr>";
    const columns = Object.keys(queryResult[0]);
  
    columns.forEach(column => {
      tableHTML += `<th>${column}</th>`;
    });
  
    tableHTML += "</tr></thead><tbody>";
  
    queryResult.forEach(row => {
      tableHTML += "<tr>";
      columns.forEach(column => {
        tableHTML += `<td>${row[column]}</td>`;
      });
      tableHTML += "</tr>";
    });
  
    tableHTML += "</tbody></table>";
  
    // Display the table
    queryResultDiv.innerHTML = tableHTML;
  }
  
  // Function to load the selected query when the dropdown value changes
  function loadSelectedQuery() {
    const querySelector = document.getElementById("querySelector");
    const selectedQuery = querySelector.value;
    document.getElementById("queryInput").value = selectedQuery;
  }
  