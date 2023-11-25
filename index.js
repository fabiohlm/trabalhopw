function addRow() {
    let nome = document.getElementById("name").value;
    let data = document.getElementById("birth-date").value;
    // Get the table body element in which you want to add row
    let table = document.getElementById("tableBody");
 
    // Create row element
    let row = document.createElement("tr")
    
    // Create cells
    let c1 = document.createElement("td")
    let c2 = document.createElement("td")
    let c3 = document.createElement("td")
    let c4 = document.createElement("td")
    
    // Insert data to cells
    c1.innerText = nome
    c2.innerText = data
    c3.innerText = "atualizar"
    c4.innerText = "remover"
    
    // Append cells to row
    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    row.appendChild(c4);
    
    // Append row to table body
    table.appendChild(row)
 }