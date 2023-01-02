//made a digital clock 




setInterval(()=>{
    let time= new Date();
    console.log(time.getHours());
    console.log(time.getMinutes());
    console.log(time.getSeconds());
    if (time.getHours()>12) {
        
        document.getElementById('hour').innerHTML=time.getHours()-12+":" ;
        document.getElementById('minute').innerHTML=time.getMinutes()+":";
        document.getElementById('second').innerHTML=time.getSeconds()+" PM";
        
        
    } else {
        document.getElementById('second').innerHTML=time.getSeconds()+" AM";
        
    }
    document.getElementById('date').innerHTML=time.getDate() +"/";
    document.getElementById('month').innerHTML=time.getMonth()+"/";
    document.getElementById('year').innerHTML=time.getFullYear();
},1000);

