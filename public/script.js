async function dining_hall(){
    const req = await fetch("/api/dining");
    const dining_data = await req.json();
    console.log(dining_data["data"]);
    console.log("running");

    var table = document.getElementById("dining");

    for (var i = 0; i < dining_data["data"].length; i++)
    {
        var data_row = table.insertRow(-1);
        var cell1 = data_row.insertCell(0);
        var cell2 = data_row.insertCell(1);

        cell1.innerHTML = dining_data["data"][i]["hall_name"];
        cell2.innerHTML = dining_data["data"][i]["hall_address"];
    }

  }

window.onload = dining_hall;