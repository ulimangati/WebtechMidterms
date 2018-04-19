// when you click on add button it will store the input value into
//an array and also display the value up

$(document).ready(function() {
	$("#userInput").submit(function (event) {
      
		event.preventDefault();
		var pname = $('#pname').val();
	   	var jnum   = $('#jnum').val();
        

	   	$("#data").append("<tr>"+"<td>"+
	   		'<button>Delete</button>'+"</td>"+"<td>"+pname+
	   				   "</td>"+"<td>" + jnum + "</td>"+" </tr>");
   	
  	 		userInput.reset();
	});

	

	$(".tabContainer").on("click", "button", function(){
				
			var pname = $(this).parent().next().text();
			var jnum = $(this).parent().next().next().text();
				$("#pname").val(pname);
				$("#jnum").val(jnum);

			$(this).parent().parent().remove();

	});

});

function downloadCSV(csv, filename) {
    var csvFile;
    var downloadLink;

    // CSV file
    csvFile = new Blob([csv], {type: "text/csv"});

    // Download link
    downloadLink = document.createElement("a");

    // File name
    downloadLink.download = filename;

    // Create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Hide download link
    downloadLink.style.display = "none";

    // Add the link to DOM
    document.body.appendChild(downloadLink);

    // Click download link
    downloadLink.click();
}
function exportTableToCSV(filename) {
    var csv = [];
    var rows = document.querySelectorAll("table tr");
    
    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll("td, th", "tr");
        
        for (var j = 0; j < cols.length; j++) 
            row.push(cols[j].innerText);
        
        csv.push(row.join(","));        
    }

    // Download CSV file
    downloadCSV(csv.join("\n"), filename);
}

$(document).ready(function() {
    $("#apply").on('click', function(){
        $(".cover").fadeIn('slow');
        $(".popup").fadeIn('slow');
    });
});
 

  

