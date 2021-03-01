function digitalClock(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var day = date.getDay();

    if(hours < 10)
        hours = '0' + hours;
    
    if(minutes < 10)
        minutes = '0' + minutes;

    if(seconds < 10)
        seconds = '0' + seconds;

    var weekdays = ['Pazar','Pazartesi', 'Salı', 'Çarşamba', 'Cuma', 'Cumartesi'];

    var clock = weekdays[day] + ' ' + hours + ":" + minutes + ":" + seconds;
    console.log(clock);

    document.getElementById('clock').innerHTML = clock;

}

digitalClock();
setInterval(digitalClock,1000);
