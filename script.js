let table = document.getElementById("sampleTable");
let row = document.createElement("tr");
let cell1 = document.createElement("td");
let cell2 = document.createElement("td");
    cell1.textContent = "New Cell1";
    cell2.textContent ="New Cell2";
    row.appendChild(cell1);
    row.appendChild(cell2);
// table.insertAdjacentElement("afterbegin",row);
    function insert_Row() {
            //Write your code here
            table.insertAdjacentElement("afterbegin",row);
        
}