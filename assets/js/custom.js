
function checkAircraft(id) {
    "use strict";
    console.log('#req-aircraft'+id);
    $("#req-aircraft"+id).click();
}

// aircraft part ...................

function edit_aircraft_line(data1, data2) {
    var id = data1['aircraft_id'];
    var name = data1['aircraft_name'];
    var model = data1['aircraft_model'];
    for (var index = 0; index < data2.length; index++){
        if(data2[index]['aircraft_id'] == id){
            $("#aircraft-line"+id).css('background-color', 'lightblue');
            $("#edit-aircraft-modal").prop('disabled', false);
            $("#delete-aircraft-modal").prop('disabled', false);
            $("#edit-aircraft-id").val(id);
            $("#edit-aircraft-name").val(name);
            $("#edit-aircraft-model").val(model);
            $("#delete-aircraft-id").val(id);
            $("#aircraft-name-text").html("Aircraft Name: " + name);
            $("#aircraft-model-text").html("Aircraft Model: " + model);
        }else{
            $("#aircraft-line"+data2[index]['aircraft_id']).css('background-color', 'white');
        }
    }
}

// airport part ................./////

function edit_airport_line(data1, data2) {
    var id = data1['airport_id'];
    var icao = data1['airport_icao'];
    var arabic = data1['airport_arabic'];
    var city = data1['airport_city'];
    console.log(icao);
    for (var index = 0; index < data2.length; index++){
        if(data2[index]['airport_id'] == id){
            $("#airport-line"+id).css('background-color', 'lightblue');
            $("#edit-airport-modal").prop('disabled', false);
            $("#delete-airport-modal").prop('disabled', false);
            $("#edit-airport-id").val(id);
            $("#edit-airport-icao").val(icao);
            $("#edit-airport-arabic").val(arabic);
            $("#edit-airport-city").val(city);
            $("#delete-airport-id").val(id);
            $("#airport-icao-text").html("Airport ICAO: " + icao);
            $("#airport-arabic-text").html("Airport Arabic: " + arabic);
            $("#airport-city-text").html("Airport City: " + city);
        }else{
            $("#airport-line"+data2[index]['airport_id']).css('background-color', 'white');
        }
    }
}

// request part ....................//

function edit_request_line(data1, data2, data3, data4) {
    var id = data1['request_id'];
    var aircraft = data1['aircraft'];
    // var aircraft_index = 0;
    // for(index1 = 0; index1 < data3.length; index1++){
    //     if(data3[index1]['aircraft_name'] == aircraft){
    //         aircraft_index = index1 + 1;
    //     }
    // }
    var from = data1['from'];
    var to = data1['to'];
    var airport_en = data1['airport'];
    var airport_ar = data1['airport_ar'];
    // var airport_en_num = 0;
    // var airport_ar_num = 0;
    // for(index2 = 0; index2 < data4.length; index2++){
    //     if(data4[index2]['airport_icao'] == airport_en){
    //         airport_en_num = index2 + 1;
    //         airport_ar_num = index2 + 1;
    //     }
    // }
    var purpose = data1['purpose'];
    var purpose_ar = data1['purpose_ar'];
    var image = data1['image'];
    for(var index = 0; index < data2.length; index++){
        if(data2[index]['request_id'] == id){
            $("#request-line"+id).css('background-color', 'lightblue');
            $("#edit-request-modal").prop('disabled', false);
            $("#delete-request-modal").prop('disabled', false);
            $("#edit-request-id-m").val(id);
            $("#origin-request-id").val(id);
            $("#edit-request-aircraft-m-line").val(aircraft);

            $("#edit-request-airport-m-line-en").val(airport_en);
            $("#edit-request-airport-m-line-ar").val(airport_ar);
            $("#edit-request-from-m").val(from);
            $("#edit-request-to-m").val(to);
            $("#edit-request-purpose-m-en").val(purpose);
            $("#edit-request-purpose-m-ar").val(purpose_ar);

            $("#delete-request-id").val(id);
            $("#request-no-text").html("Request No :  " + id);
            $("#request-aircraft-text").html("Aircraft Name :  " + aircraft);
            $("#request-airport-text").html("Airport Name :  " + airport_en);

            var pathArray = location.href.split( '/' );
            var protocol = pathArray[0];
            var host = pathArray[2];
            var project = pathArray[3];
            var url = protocol + '//' + host + '/' + project + '/';
            console.log(url);
            $("#edit-request-image-prev").attr('src', url + image);
        }else {
            $("#request-line"+data2[index]['request_id']).css('background-color', 'white');
        }
    }
}
$("#add-request-image").change(function () {
    if (this.files && this.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#add-request-image-prev').attr('src', e.target.result);
        };
        reader.readAsDataURL(this.files[0]);
    }
});
$("#edit-request-image").change(function () {
    if (this.files && this.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#edit-request-image-prev').attr('src', e.target.result);
        };
        reader.readAsDataURL(this.files[0]);
    }
});
function airport_same1(event, data) {
    for(var index = 0; index < data.length; index++){
        if(data[index]['airport_icao'] == event.target.value){
            $("#add-request-airport-m-line-ar").val(data[index]['airport_arabic']);
        }
    }
}
function airport_same2(event, data) {
    for(var index = 0; index < data.length; index++){
        if(data[index]['airport_arabic'] == event.target.value){
            $("#add-request-airport-m-line-en").val(data[index]['airport_icao']);
        }
    }
}
function airport_same3(event, data) {
    for(var index = 0; index < data.length; index++){
        if(data[index]['airport_icao'] == event.target.value){
            $("#edit-request-airport-m-line-ar").val(data[index]['airport_arabic']);
        }
    }
}
function airport_same4(event, data) {
    for(var index = 0; index < data.length; index++){
        if(data[index]['airport_arabic'] == event.target.value){
            $("#edit-request-airport-m-line-en").val(data[index]['airport_icao']);
        }
    }
}
// mission part ...............//

function edit_mission_line(data1, data2, data3) {
    var id = data1['mission_id'];
    var request_id = data1['mission_request_no'];
    var aircraft_name = data1['aircraft_name'];
    var airport_name = data1['airport_name'];
    var airport_ar_name = data1['airport_ar_name'];
    var date = data1['date'];
    var hours = data1['hours'];
    var cycles = data1['cycles'];
    var purpose_en = data1['purpose_en'];
    var purpose_ar = data1['purpose_ar'];
    var notes = data1['notes'];

    for (var index = 0; index < data2.length; index++){
        if (data2[index]['mission_id'] == id){
            $("#mission-line"+id).css('background-color', 'lightblue');
            $("#edit-mission-modal").prop('disabled', false);
            $("#delete-mission-modal").prop('disabled', false);

            $("#edit-mission-id").val(id);
            $("#edit-mission-request-no").val(request_id);
            $("#edit-mission-aircraft-name").val(aircraft_name);
            $("#edit-mission-airport-en-name").val(airport_name);
            $("#edit-mission-airport-ar-name").val(airport_ar_name);
            $("#edit-mission-date").val(date);
            $("#edit-mission-hours").val(hours);
            $("#edit-mission-cycles").val(cycles);
            $("#edit-mission-purpose-en").val(purpose_en);
            $("#edit-mission-purpose-ar").val(purpose_ar);
            $("#edit-mission-notes").val(notes);

            $("#delete-mission-id").val(id);
            $("#mission-request-no-text").html("Request No : " + request_id);
            $("#mission-aircraft-text").html("Aircraft Name : " + aircraft_name);
            $("#mission-airport-text").html("Airport Name : " + airport_name);
            $("#mission-hours-text").html("Hours : " + hours);
            $("#mission-cycles-text").html("Cycles : " + hours);
        }else {
            $("#mission-line"+data2[index]['mission_id']).css('background-color', 'white');
        }
    }
}
function select_request_for_mission(e, data) {
    var id = e.target.value;
    for(var index = 0; index < data.length; index++){
        if(data[index]['request_id'] == id){
            $("#add-mission-aircraft-name").val(data[index]['aircraft']);
            $("#add-mission-airport-en-name").val(data[index]['airport']);
            $("#add-mission-airport-ar-name").val(data[index]['airport_ar']);
            $("#add-mission-date").prop('disabled', false);
            return;
        }
    }
    $("#add-mission-request-no").val("");
}
function select_mission_date(data) {
    var time = $("#add-mission-date").val();
    var request_id = $("#add-mission-request-no").val();
    for(var index = 0; index < data.length; index++){
        if(data[index]['request_id'] == request_id){
            var from = data[index]['from'];
            var to = data[index]['to'];
            if(time < from || time > to){
                $("#error-date-from").html("From : " + from);
                $("#error-date-to").html("To : " + to);
                $("#check_mission_date_button").click();
                $("#add-mission-date").val("");
            }else{
                $("#add-mission-submit-btn").click();
            }
        }
    }
}
function edit_request_for_mission(e, data) {
    var id = e.target.value;
    for(var index = 0; index < data.length; index++){
        if(data[index]['request_id'] == id){
            $("#edit-mission-aircraft-name").val(data[index]['aircraft']);
            $("#edit-mission-airport-en-name").val(data[index]['airport']);
            $("#edit-mission-airport-ar-name").val(data[index]['airport_ar']);
            return;
        }
    }
    $("#edit-mission-request-no").val("");
}
function edit_mission_date(data) {
    var time = $("#edit-mission-date").val();
    var request_id = $("#edit-mission-request-no").val();
    for(var index = 0; index < data.length; index++){
        if(data[index]['request_id'] == request_id){
            var from = data[index]['from'];
            var to = data[index]['to'];
            if(time < from || time > to){
                $("#error-date-from").html("From : " + from);
                $("#error-date-to").html("To : " + to);
                $("#check_mission_date_button").click();
                $("#edit-mission-date").val("");
            }else{
                $("#edit-mission-submit-btn").click();
            }
        }
    }
}

// user part ..............//

function edit_user_line(data1, data2) {
    var id = data1['id'];
    var name = data1['name'];
    var permission = data1['permission'];
    if(permission === "admin"){
        permission = "administrator";
    }else{
        permission = "user";
    }
    for (var index = 0; index < data2.length; index++){
        if(data2[index]['id'] == id){
            $("#user-line" + id).css('background-color', 'lime');
            // upload files modal
            $("#uploadFiles-modal").prop('disabled', false);
            $("#uploadFiles-user-id").val(id);
            $("#uploadFiles-user-name-text").html("User Name: "+name);
            // delete user modal
            $("#delete-user-modal").prop('disabled', false);
            $("#delete-user-id").val(id);
            $("#user-id-text").html("User ID : " + id);
            $("#user-name-text").html("User Name : " + name);
            $("#user-permission-text").html("User Permission : " + permission);
        }else{
            $("#user-line" + data2[index]['id']).css('background-color', 'white');
        }
    }
}

/////// Main
function main_request_line(data_line, data) {
    var request_id = data_line['request_id'];
    var request_img = data_line['image'];
    var pathArray = location.href.split( '/' );
    var protocol = pathArray[0];
    var host = pathArray[2];
    var project = pathArray[3];
    var url = protocol + '//' + host + '/' + project + '/';
    for(var index = 0; index < data.length; index++){
        if(data[index]['request_id'] == request_id){
            $("#main-request-" + request_id).css('background-color', 'cornflowerblue');
            $("#requestImg").attr('src', url + request_img);
            $("#request_image_data").val(url + request_img);
        }else{
            $("#main-request-" + data[index]['request_id']).css('background-color', 'white');
        }
    }
}
function get_request_image() {
    $("#image-modal-button1").click();
}

function select_report_format() {
    var tb_format = $("#select-re-mi").val();
    var lang_format = $("#select-lang").val();
    var title = $("#report-title").val();
    var t_size = $("#report-title-fontsize").val();
    var th_size = $("#report-table-header-fontsize").val();
    var tb_size = $("#report-table-body-fontsize").val();
    if(tb_format == 're'){
        $("#request-report-title").val(title);
        $("#request-report-title-size").val(t_size);
        $("#request-table-header-size").val(th_size);
        $("#request-table-body-size").val(tb_size);
        if(lang_format == 'en'){
            $("#request-report-category").val('en');
        }else if(lang_format == 'ar'){
            $("#request-report-category").val('ar');
        }
        $("#get-report-request").click();
    }else if(tb_format == 'mi'){
        $("#mission-report-title").val(title);
        $("#mission-report-title-size").val(t_size);
        $("#mission-table-header-size").val(th_size);
        $("#mission-table-body-size").val(tb_size);
        if(lang_format == 'en'){
            $("#mission-report-category").val('en');
        }else if(lang_format == 'ar'){
            $("#mission-report-category").val('ar');
        }
        $("#get-report-mission").click();
    }
}
function sortTable01(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("example-01");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc";
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.getElementsByTagName("TR");
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /*check if the two rows should switch place,
            based on the direction, asc or desc:*/
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch= true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch= true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            //Each time a switch is done, increase this count by 1:
            switchcount ++;
        } else {
            /*If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again.*/
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}
function sortTable02(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("example-02");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc";
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.getElementsByTagName("TR");
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /*check if the two rows should switch place,
            based on the direction, asc or desc:*/
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch= true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch= true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            //Each time a switch is done, increase this count by 1:
            switchcount ++;
        } else {
            /*If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again.*/
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}
function sortTable03(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("example-03");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc";
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.getElementsByTagName("TR");
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /*check if the two rows should switch place,
            based on the direction, asc or desc:*/
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch= true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch= true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            //Each time a switch is done, increase this count by 1:
            switchcount ++;
        } else {
            /*If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again.*/
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}
$("#refresh-request-click1").click();
$("#refresh-request-click1").click();
$("#refresh-mission-click1").click();
$("#refresh-mission-click1").click();