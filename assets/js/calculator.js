
function getTimeValue(value) {
    var h_str = "";
    var m_str = "";
    var s_str = "";
    var h = Math.floor(value);
    if(h < 10) h_str = "0" + h.toString();
    else h_str = h.toString();
    var m = (value - h) * 60;
    var mm = Math.floor(m);
    if(mm < 10) m_str = "0" + mm.toString();
    else m_str = mm.toString();
    var s = (m - mm)*60;
    var ss = s.toFixed();
    if(ss < 10) s_str = "0" + ss.toString();
    else s_str = ss.toString();
    var res = h_str + " : " + m_str + " : " + s_str;
    return res;
}
function d_calculator1() {
    if($("#dcalc-km-01").val()){
        var km1 = $("#dcalc-km-01").val();
        var calc = km1*0.539957;
        $("#dcalc-nmi-01").val(calc.toFixed(3));
        if($("#speed-01").val()){
            var speed = $("#speed-01").val();
            var calc_t = calc / speed;
            var res = getTimeValue(calc_t);
            $("#flying-time-01").val(res);
        }
    }
}
function d_calculator2() {
    var nmi2 = $("#dcalc-nmi-02").val();
    var calc = nmi2/0.539957;
    $("#dcalc-km-02").val(calc.toFixed(3));
    if($("#speed-02").val()){
        var speed = $("#speed-02").val();
        var calc_t = nmi2 / speed;
        var res = getTimeValue(calc_t);
        $("#flying-time-02").val(res);
    }
}
function latitude1() {
    var lat = $("#lat-01").val().toUpperCase();
    var deg = parseFloat($("#lat-deg-01").val());
    var min = parseFloat($("#lat-min-01").val());
    var sec = parseFloat($("#lat-sec-01").val());
    var dec1 = 0;
    if (lat == "S"){
        dec1 = (((sec / 60) + min) / 60 + deg) * -1;

    }else{
        dec1 = ((sec / 60) + min) / 60 + deg;
    }
    console.log(dec1);
    $("#decimal-01").html(dec1);
    $("#decimal-02").html(lat +" "+ deg.toString());
    $("#decimal-03").html(sec / 60 + min);
}
function longitude1() {
    var long = $("#long-01").val().toUpperCase();
    var deg = parseFloat($("#long-deg-01").val());
    var min = parseFloat($("#long-min-01").val());
    var sec = parseFloat($("#long-sec-01").val());
    var dec1 = 0;
    if (long == "W"){
        dec1 = (((sec / 60) + min) / 60 + deg) * -1;

    }else{
        dec1 = ((sec / 60) + min) / 60 + deg;
    }
    console.log(dec1);
    $("#decimal-11").html(dec1);
    $("#decimal-12").html(long +" "+ deg.toString());
    $("#decimal-13").html(sec / 60 + min);
}
function latitude2() {
    var value = parseFloat($("#decimal-21").val());
    if(value<0) $("#lat-02").html("S");
    else $("#lat-02").html("N");
    var var1 = Math.floor(Math.abs(value));
    $("#lat-deg-02").html(var1);
    var var2 = Math.floor((Math.abs(value) - var1)*60);
    $("#lat-min-02").html(var2);
    var var3 = Math.abs(value)*3600 - var2*60 - var1*3600;
    $("#lat-sec-02").html(var3);
    $("#decimal-22").html($("#lat-02").html() + " "+ var1.toString());
    $("#decimal-23").html((Math.abs(value) - var1)*60);
}
function longitude2() {
    var value = parseFloat($("#decimal-31").val());
    if(value<0) $("#long-02").html("W");
    else $("#long-02").html("E");
    var var1 = Math.floor(Math.abs(value));
    $("#long-deg-02").html(var1);
    var var2 = Math.floor((Math.abs(value) - var1)*60);
    $("#long-min-02").html(var2);
    var var3 = Math.abs(value)*3600 - var2*60 - var1*3600;
    $("#long-sec-02").html(var3);
    $("#decimal-32").html($("#long-02").html() + " "+ var1.toString());
    $("#decimal-33").html((Math.abs(value) - var1)*60);
}