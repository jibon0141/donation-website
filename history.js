// all needed id  
const donationBtn =document.getElementById('donation-btn');
const historyBtn =document.getElementById('history-btn');


// when windows will load home page this will happen
window.onload = function() {
    historyBtn.style.fontWeight = "bold";
    historyBtn.style.backgroundColor = "#BEF264";
  }

// blog section
  document.getElementById("blog").addEventListener("click",function(){
   
    window.location.href = "blog.html";

  })



 
// When Mouseener and Mouseover on history button  this will happen
donationBtn.addEventListener("mouseenter",function(){
   
    historyBtn.style.fontWeight = "normal";
    historyBtn.style.backgroundColor = "#FFFFFF";

    donationBtn.style.fontWeight = "bold";
    donationBtn.style.backgroundColor = "#BEF264";

  })


  donationBtn.addEventListener("mouseleave",function(){
    
    historyBtn.style.fontWeight = "bold";
    historyBtn.style.backgroundColor = "#BEF264";

    donationBtn.style.fontWeight = "normal";
    donationBtn.style.backgroundColor = "#FFFFFF";

  })


  // When click on history button  this will happen

  donationBtn.addEventListener("click",function(){
   
    window.location.href = "index.html";

  });


