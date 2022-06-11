function showTime(){
    let date = new Date();  
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let session = "AM";
    
    if( h == 0 ){
        h = 12;
    }

    if( h > 12 ){
        h = h - 12;
        session = " PM ";
        //session originaly set to AM but if hours go past 12 then changes to PM
    }

    if( h < 10 ){
        h = "0" + h;
    }

    if( m < 10 ){
        m = "0" + m;
    }

    if( s < 10 ){
        s = "0" + s;
    }
    // Or this method could be used aswell for setting the 0
    //h = (h > 10) ? "0" + h : h;
    //m = (m > 10) ? "0" + m : m;
    //s = (s > 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;

    document.getElementById('clock').innerText = time;
    document.getElementById('clock').textContent = time;
}

setInterval(showTime,1000);

