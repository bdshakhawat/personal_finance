function personalFinance(students){
    for (i=0; i<students.length; i++) {
        
        // console.log(students[i]["student"])
        let studentInfo = students[i]["student"];
        
        // // Creating Table Header
        let h=document.getElementById('Table_data');
        let Batch= (students[i]['batchName']);
        h.innerHTML=Batch;

        // console.log(studentInfo);
        // //   Creating Data Table
        var myTable = document.createElement("table");
        for (j=0; j<studentInfo.length; j++) {
            let allStudents= studentInfo[j];
            // console.log(allStudents["class"]);
            
            const tr = myTable.insertRow();
            const td = tr.insertCell();
            td.appendChild(document.createTextNode(`${allStudents["fullName"]}`));
            td.appendChild(document.createTextNode(`${allStudents["class"]}`));
            td.appendChild(document.createTextNode(`${allStudents["startDate"]}`));
        }
        let tableContainer = document.getElementById("manage_section");
        tableContainer.appendChild(myTable);

    }
}

  

    
    
    
      


    
    
  
 
    
    
    

    
   
    
    
   
    


   
  


   






  
 






