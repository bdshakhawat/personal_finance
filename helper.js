
//  function creatTable(){
//   // Creating Table Header
//   let h=document.getElementById('Table_data');
//   let Batch= (students[i]['batchName']);
//   h.innerHTML=Batch;

//   // console.log(studentInfo);
//   //   Creating Data Table
//   var myTable = document.createElement("table");
//   for (j=0; j<studentInfo.length; j++) {
//       let allStudents= studentInfo[j];
//       console.log(allStudents["class"]);
      
//       const tr = myTable.insertRow();
//       const td = tr.insertCell();
//       td.appendChild(document.createTextNode(`${allStudents["fullName"]}`));
//       td.appendChild(document.createTextNode(`${allStudents["class"]}`));
//       td.appendChild(document.createTextNode(`${allStudents["startDate"]}`));
//   }
//   let tableContainer = document.getElementById("manage_section");
//   tableContainer.appendChild(myTable);

//  }

 
 
//  function createTableRows(){

//  }























// let employees = [
//     { name: 'James', age: 21, country: 'United States' },
//     { name: 'Rony', age: 31, country: 'United Kingdom' },
//     { name: 'Peter', age: 58, country: 'Canada' },
//     { name: 'Marks', age: 20, country: 'Spain' }
// ]

// let headers = ['Name', 'Age', 'Country'];

// let employees=students[1]["student"];
// let headers=students[i]["student"][j];
// function generateTableHead(table, data) {
//   let thead = table.createTHead();
//   let row = thead.insertRow();
//   for (let key of data) {
//     let th = document.createElement("th");
//     let text = document.createTextNode(key);
//     th.appendChild(text);
//     row.appendChild(th);
//   }
// }

// function generateTable(table, data) {
//   for (let element of data) {
//     let row = table.insertRow();
//     for (key in element) {
//       let cell = row.insertCell();
//       let text = document.createTextNode(element[key]);
//       cell.appendChild(text);
//     }
//   }
// }

// let table = document.querySelector("table");
// let data = object.keys((students[i]["student"][j]['fullName'])
//   (students[i]["student"][j]['class'])
//   (students[i]["student"][j]['startDate']));
// console.log(data)
// generateTableHead(table, data);
// generateTable(table, mountains);






























// Way 1 Start

// function addTable(studentObj) {
//   // console.log(studentObj)

//   var myTableDiv = document.getElementById('manage_section');
//   // Creating Table
//   var table = document.createElement('table');
//   table.border = '1';

//   var tableBody = document.createElement('tbody');
//   table.appendChild(tableBody);
//   // Creating Table Row
//   for (var i = 0; i<2; i++) {
       
//     var tr = document.createElement('tr');
   
//     tableBody.appendChild(tr);
//     // Creating Table Cell
//     for (var j = 0; j < studentObj.length; j++) {
//       var td = document.createElement('td');
//       td.width = '75';
//       studentObj[j].forEach(element => {
//         console.log(element["batchName"])
//         // element.forEach( batch => {
//         //   console.log(batch)
//         // }
//         // )
//       });
//       td.appendChild(document.createTextNode("Cell " + 'Name'+ "," + 'Class'));
//       tr.appendChild(td);
//     }
//   }
//   myTableDiv.appendChild(table);
// }



// Way 1 Ends

// Way 2 starts

// const data = [{Name:'Sydney', Day: 'Monday', Time: '10:00AM'},{Name:'New York', Day: 'Monday',Time: '11:00AM'},]; // any json data or array of objects

// const tableData = data.map(value => {
//   return (
//     `<tr>
//        <td>${value.Name}</td>
//        <td>${value.Day}</td>
//        <td>${value.Time}</td>
//     </tr>`
//   );
// }).join('');

// const tableBody = document.querySelector("#tableBody");
// tableBody.innerHTML = tableData;

// Way 2 ends

// way 3 starts
// function createTable(objectArray,  fieldTitles) {
//   let body = document.getElementsByTagName('body')[0];
//   let tbl = document.createElement('table');
//   let thead = document.createElement('thead');
//   let thr = document.createElement('tr');
//   fieldTitles.forEach((fieldTitle) => {
//     let th = document.createElement('th');
//     th.appendChild(document.createTextNode(fieldTitle));
//     thr.appendChild(th);
//   });
//   thead.appendChild(thr);
//   tbl.appendChild(thead);

//   let tbdy = document.createElement('tbody');
//   let tr = document.createElement('tr');
//   objectArray.forEach((object) => {
//     let tr = document.createElement('tr');
//     fields.forEach((field) => {
//       var td = document.createElement('td');
//       td.appendChild(document.createTextNode(object[field]));
//       tr.appendChild(td);
//     });
//     tbdy.appendChild(tr);    
//   });
//   tbl.appendChild(tbdy);
//   body.appendChild(tbl)
//   return tbl;
// }

// createTable([
//   {name: 'Banana', price: '3.04'},
//   {name: 'Orange', price: '2.56'},
//   {name: 'Apple', price: '1.45'}
// ],
// ['name', 'price'], ['Name', 'Price']);
// Way 3 ends


// Way 4 Starts
// (function () {
//   'use strict'

  // Table class
  // it will create a table from JSON array
  // create header from first array element i.e. Object
  // Sort table based on header key
  // iterate through array and insert rows
  // var tData = [
  //   { name: 'Monte Falco', height: 1658, place: 'Parco Foreste Casentinesi' },
  //   { name: 'Monte Falterona', height: 1654, place: 'Parco Foreste Casentinesi' },
  //   { name: 'Poggio Scali', height: 1520, place: 'Parco Foreste Casentinesi' },
  //   { name: 'Pratomagno', height: 1592, place: 'Parco Foreste Casentinesi' },
  //   { name: 'Monte Amiata', height: 1738, place: 'Siena' },
  // ]

  // const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent

  // const comparer = (idx, asc) => (a, b) =>
  //   ((v1, v2) =>
  //     v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2)
  //       ? v1 - v2
  //       : v1.toString().localeCompare(v2))(
  //     getCellValue(asc ? a : b, idx),
  //     getCellValue(asc ? b : a, idx)
  //   )

  // function Table(Data) {
  //   this.tData = Data || []
  //   this.node = document.createElement('table')

  //   Table.prototype.renderTable = function () {
  //     this.generateTableHead(Object.keys(this.tData[0]))
  //     this.generateTableRows(this.tData)
  //   }

  //   Table.prototype.generateTableHead = function (headerData) {
  //     let thead = this.node.createTHead()
  //     let row = thead.insertRow()
  //     for (let key of headerData) {
  //       let th = document.createElement('th')
  //       let text = document.createTextNode(key)
  //       th.appendChild(text)
  //       th.addEventListener('click', () => {
  //         const table = th.closest('table')
  //         Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
  //           .sort(comparer(Array.from(th.parentNode.children).indexOf(th), (this.asc = !this.asc)))
  //           .forEach((tr) => table.appendChild(tr))
  //       })
  //       row.appendChild(th)
  //     }
  //   }

  //   Table.prototype.generateTableRows = function (rowData) {
  //     for (let element of rowData) {
  //       let row = this.node.insertRow()
  //       for (let key in element) {
  //         let cell = row.insertCell()
  //         let text = document.createTextNode(element[key])
  //         cell.appendChild(text)
  //       }
  //     }
  //   }

    // todos...
    // Searching
    // Client Side Pagination
    // Anyone wants to implement these functionality
    // pls do comment ur code
  // }

//   document.body.onload = function () {
//     var table = new Table(tData)
//     table.renderTable()
//     document.getElementById('main-container').appendChild(table.node)
//   }
// })()
// way 4 ends

// Way 5 Start

            // var student;
            // for (var j = 0; j < 10; j++) {
            //     student = {
            //         name: "Name" + j,
            //         rank: "Rank" + j,
            //         stuclass: "Class" + j,
            //     };
            //     var table = document.getElementById("myTable");
            //     var row = table.insertRow(j);
            //     var cell1 = row.insertCell(0);
            //     var cell2 = row.insertCell(1);
            //     var cell3 = row.insertCell(2);

            //     cell1.innerHTML = student.name,
            //     cell2.innerHTML = student.rank,
            //     cell3.innerHTML = student.stuclass;
            // }
        

            // {
            //   Batch: `${item.batchName}`,
            //   Name: student.fullName,
            //   Class: student.class,
            //   start: student.startDate
            // }