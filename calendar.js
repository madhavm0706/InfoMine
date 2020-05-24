













var dt = new Date();
var dta = new Date();

var month= ["January","February","March","April","May","June","July",
                "August","September","October","November","December"];
var day =["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];                

// date 

document.getElementById("date").innerHTML=`
<a class="calendar-speed" href="#calendar"><i id="speed" class="fas fa-calendar"></i></a><span style="color:#ca2017">&nbsp;&nbsp;&nbsp;`+ day[dt.getDay()]+`</span><span>,&nbsp;`+ dt.getDate()+ `&nbsp;` + month[dt.getMonth()] + `&nbsp;`+ dt.getFullYear()+`</span>               
`;







// end date

function RenderDate(){
    
    dt.setDate(1);
    var day = dt.getDay();
    
    var today = new Date();
    
    
    var endDate = new Date(
        dt.getFullYear(),
        dt.getMonth() +1,
        0
    ).getDate();
    
    var prevDate = new Date(
        dt.getFullYear(),
        dt.getMonth(),
        0
    ).getDate();
    
    
    
    
    document.getElementById("date_str").innerHTML = dta.toDateString();
    document.getElementById("month").innerHTML = month[dt.getMonth()];

// Events..................

const events = [
    {
        date: 12,
        Month: 5,
        year: 2020, 
        event: "Article Published By Shikhar Garg"

    },
    {
        date: 20,
        Month: 5,
        year: 2020,
        event: "Article Published By Rishab Mittal" 
    },
    {
        date: 21,
        Month: 4,
        year: 2020, 
        event: "Article Published By Shikhar Garg" 
    },
    {
        date: 22,
        Month: 4,
        year: 2020,
        event: "Article Published By Udit Maheshwari"  
    },
    {
        date: 21,
        Month: 8,
        year: 2020,
        event: "Article Published By Udit Maheshwari"  
    },
    {
        date: 1,
        Month: 5,
        year: 2020,
        event: "Article Published By Udit Maheshwari"  
    },
    {
        date: 24,
        Month: 5,
        year: 2020,
        event: "Article Published By Udit Maheshwari"  
    },
]








// end Events........................    
    
    
    var cells = "";
     var event1= "";

   
    
    
     
    for(x= day; x>0; x--){
        cells += '<div class="prev_date">' + (prevDate -x +1)+ '</div>';
    }
    
    for(var i=1;i<= endDate;i++){
        for( var j=0; j< events.length; j++){
            eventDetails = events[j];
             
             if(i == eventDetails.date  && dt.getMonth() == eventDetails.Month - 1){
                cells += "<div  class='events'><a href='#eventdetailinfo'>" + i + "</a></div>";
                event1 += "<div id='eventdetailinfo' class='eventdetail'> <span class='eventdate'>"+i +":- </span> &nbsp;"+ eventDetails.event+"</div>";

                
                
            }
            
             
             
         }
       
        
        
        
        

         if((i == today.getDate() && dt.getMonth() == today.getMonth() ) && (i !== eventDetails.date  || dt.getMonth() !== eventDetails.Month - 1) ){
            cells += "<div class='today'>" + i + "</div>";
        } 
        else if((i !==12 || dt.getMonth() !== 4) && 
        (i !==20 || dt.getMonth() !== 4) && 
        (i !==21 || dt.getMonth() !== 3) && 
        (i !==22 || dt.getMonth() !== 3) && 
        (i !==1 || dt.getMonth() !== 4) &&
        (i !==24 || dt.getMonth() !== 4) 
        ){
            cells += "<div>" + i + "</div>";

        }
        
        
    }

    
    
    document.getElementsByClassName("days")[0].innerHTML = cells;
    document.getElementsByClassName("eventD")[0].innerHTML = event1;

    
}



    
        
    
    
    






function moveDate(para){

    if(para == 'prev'){
        dt.setMonth(dt.getMonth() - 1);
        
    }
    if(para == 'next'){
        dt.setMonth(dt.getMonth() + 1);

    }
    RenderDate();
}


