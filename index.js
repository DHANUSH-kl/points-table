
let sheetID = "1xw6Ys86lywnOErf655WfBfPPF8X0lMLAx-G2i5zKRUQ";
let sheetTitle ="Sample sheet";
let sheetRange ="A1:F100";
let sheetUrl = ('https://docs.google.com/spreadsheets/d/' + sheetID + '/gviz/tq?sheet=' + sheetTitle + '&range=' + sheetRange);
let positionNumber = 1;
fetch(sheetUrl).then(res => res.text()).then(rep => {
    let data = JSON.parse(rep.substr(47).slice(0,-2));
    assignValues(data);
  })

  function assignValues(data, table) {
    const rowObj = data.table.rows;
    for (const rows of rowObj) {
      createRows(rows);
    }
  }

  function createRows(rows) {
    const tableBody = document.getElementById("points-table");
    const row = document.createElement("tr");
    const slNo = document.createElement("td");
    slNo.textContent = positionNumber;
    row.appendChild(slNo);
    for (const value of rows.c) {
      createData(value, row);
    }
    positionNumber++;
    tableBody.appendChild(row);
  }

  function createData(value, row) {
    const cell = document.createElement("td");
    cell.textContent = value.v;
    if(typeof value.v !== "string") {
        cell.classList.add("center-align")
    }
    row.appendChild(cell);
  }