
    function createTable() {
            var a;

            a = document.getElementById('tb1').value;
            var length = document.getElementById('table').rows.length;
            if (a == "") {
                alert("Enter Numeric value of rows to be generated");
            } else {
              if(length > 1){
                
                var table = document.getElementById("table");
// Create an empty <tr> element and add it to the 1st position of the table:
                var row = table.insertRow(length);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);

                cell1.innerHTML = "<input type='text' name='" + "name".concat(length+1) + "'>";
                 cell2.innerHTML = "<input type='text' name='" + "name".concat(length+1) + "'>";
                 
              } else {
                var rows = "<tr><th>Jersey Number</th><th>Player Name</th></tr>";
                for (var i = 0; i < a; i++) {
                    rows += "<tr><td><input type='text' name='" + "JerseyNumber".concat(i+1) + "'></td><td><input type='text' name='" + "name".concat(i+1) + "'></td></tr>";

                }

                document.getElementById("table").innerHTML = rows;
                }
            }
        }