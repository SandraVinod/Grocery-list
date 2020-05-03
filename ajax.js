try{
  function ajax() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {

      var response = JSON.parse(this.responseText);
     //console.log(response);
     var item= response.list;
     //console.log(Jlist);
     var output="";
     var output = "<caption>Items to Buy</caption><tr><th>Sr.No.</th><th>Name</th><th>Quantiy</th><th>Unit</th><th>Department</th><th>Notes</th></tr>";
     for(var i=0;i<item.length;i++){
      output += "<tr>";
      output += "<td>" + item[i].SerialNumber + "</td>";
      output += "<td>" + item[i].Name + "</td>";
      output += "<td>" + item[i].Quantity + "</td>";
      output += "<td>" + item[i].Unit + "</td>";
      output += "<td>" + item[i].Department + "</td>";
      output += "<td>" + item[i].Notes + "</td>";
  }

    
     demo.innerHTML = output;
      }
    }
    xhttp.open("GET", "list.json", true);
    xhttp.send();
  }
}
  catch (e) {
    document.getElementById("table").innerHTML=e;
}