
// const startDate = new Date().getTime();
// for(let i = 1;i<=1000000;i++){
//     Math.sqrt(i);
// }

// const endDate = new Date().getTime();

// console.log(`difference : ${Math.floor(startDate/(1000*60*60*24))}`);

const EndDate = new Date("23 oct, 2026 16:00:00").getTime();
const StartDate = new Date().getTime();




  let x = setInterval(function updateTimer(){
          const  now  = new Date().getTime();
          const distancecover = now - StartDate;
          const distancepanding = EndDate - now;
          
        //   calculate days min hrs secs

        const days = Math.floor(distancepanding/(24*60*60*1000));
        const hrs = Math.floor(distancepanding%(24*60*60*1000)/(60*60*1000));
        const mins = Math.floor(distancepanding%(60*60*1000)/(60*1000));
        const secs = Math.floor(distancepanding%(60*1000)/(1000));
        
        // populate 
        document.getElementById("days").innerHTML = days;
         document.getElementById("hours").innerHTML = hrs;
           document.getElementById("minutes").innerHTML = mins;
         document.getElementById("seconds").innerHTML = secs;
        
         
         const total = EndDate-StartDate;
         const percentage = (distancecover/total)*100;

         document.getElementById("progress-bar").style.width = percentage + "%";
         

         if(distancepanding<0){
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRID";
            document.getElementById("progress-bar").style.width = "100%";
             
         }
        },1000);