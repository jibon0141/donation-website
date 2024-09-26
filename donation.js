// All needed id declaration globally
const donationButton = document.getElementById('donation-btn');
const historyButton = document.getElementById('history-btn');
const noakhaliDonationButton = document.getElementById('noakhali-donation-btn');
const feniDonationButton = document.getElementById('feni-donation-btn');
const qtaDonationButton = document.getElementById('qta-donation-btn');


// Success Modal elements
const successModal = document.getElementById("successModal");
const closeModalButton = document.querySelector(".close-button");


// When windows will load home page this will happen
window.onload = function() {
    donationButton.style.fontWeight = "bold";
    donationButton.style.backgroundColor = "#BEF264";

  }

// Sticky and static toggle part
let isScrolling;
window.addEventListener("scroll",function(){
    const header=document.getElementById("header");
    header.style.backgroundColor="#b0b8ba";
    header.style.position="sticky";
    header.style.top=0;

    
    clearTimeout(isScrolling);
  
    isScrolling = setTimeout(function () {
        header.style.backgroundColor = "";
        header.style.position = "static";
    }, 300); 
   


})



 
// When Mouseener and Mouseover on history button  this will happen
historyButton.addEventListener("mouseenter",function(){
   
    donationButton.style.fontWeight = "normal";
    donationButton.style.backgroundColor = "#FFFFFF";

    historyButton.style.fontWeight = "bold";
    historyButton.style.backgroundColor = "#BEF264";

  })


  historyButton.addEventListener("mouseleave",function(){
    
    donationButton.style.fontWeight = "bold";
    donationButton.style.backgroundColor = "#BEF264";

    historyButton.style.fontWeight = "normal";
    historyButton.style.backgroundColor = "#FFFFFF";

  })


  // When click on history button  this will happen

  historyButton.addEventListener("click",function(){
   
    window.location.href = "history.html";

  })


  
  // When click on blog button  this will happen

  document.getElementById("blog").addEventListener("click",function(){
   
    window.location.href = "blog.html";

  })


//   Donate for Flood at Noakhali

document.addEventListener("DOMContentLoaded", function() {

    const successModal = document.getElementsByClassName("modal-content");

    noakhaliDonationButton.addEventListener("click", function(event) {
        event.preventDefault();
       

        const noakhaliTotalAmount = parseFloat(document.getElementById("noakhali-total-amount").innerText);
        const noakhaliDonationAmount = parseFloat(document.getElementById("noakhali-donation-amount").value);
        const totalAmount = parseFloat(document.getElementById('total-amount').innerText);

        if (isNaN(noakhaliDonationAmount) || noakhaliDonationAmount <= 0 || typeof(noakhaliDonationAmount) !== "number" || noakhaliDonationAmount > totalAmount) {
            alert("Please Enter a valid Donation Number!");
            document.getElementById("noakhali-donation-amount").value = '';
            return;
        }

        let noakhaliNewBalance = noakhaliTotalAmount + noakhaliDonationAmount;
        let newTotalAmount = totalAmount - noakhaliDonationAmount;

        document.getElementById("noakhali-total-amount").innerText = noakhaliNewBalance;
        document.getElementById("total-amount").innerText = newTotalAmount;
        alert("You have Successfully Donated!");

        const now = new Date();
        const options = { 
           year: 'numeric', 
           month: 'long', 
           day: 'numeric', 
           hour: '2-digit', 
           minute: '2-digit', 
           second: '2-digit', 
           hour12: false 
        };
        const donationDateTime = now.toLocaleString('bn-BD', options);
    
        const donationData = {
            amount: noakhaliDonationAmount,
            dateTime: donationDateTime
        };
    
        const donations = JSON.parse(localStorage.getItem('donationHistory')) || [];
    
        // Add the new donation to the array
        donations.push(donationData);
        localStorage.setItem('donationHistory', JSON.stringify(donations));

        document.getElementById("noakhali-donation-amount").value = '';

      

  
      
   
    })
});




//   Donate for Flood at feni

feniDonationButton.addEventListener("click",function(event){
    event.preventDefault();

  

    const feniTotalAmount=parseFloat(document.getElementById("feni-total-amount").innerText);
    const feniDonationAmount=parseFloat(document.getElementById("feni-donation-amount").value);
    const totalAmount = parseFloat(document.getElementById('total-amount').innerText);
   

    if (isNaN(feniDonationAmount) || feniDonationAmount <= 0 || typeof(feniDonationAmount)!=="number" || feniDonationAmount > totalAmount ){
     alert("Please Enter a valid Donation Number!");
     document.getElementById("feni-donation-amount").value = ''; 
     return;
    }

    let feniNewBalance=feniTotalAmount+feniDonationAmount;
    let newTotalAmount=totalAmount-feniDonationAmount;
    

    document.getElementById("feni-total-amount").innerText=feniNewBalance;
    document.getElementById("total-amount").innerText=newTotalAmount;
    alert("You have Successfully Donated!");


    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: false 
    };
    const donationDateTime = now.toLocaleString('bn-BD', options);
    
    // Create donation data for Feni
    const donationData = {
        amount: feniDonationAmount,
        dateTime: donationDateTime
    };
    
    // Retrieve existing donations for Feni
    const donations = JSON.parse(localStorage.getItem('donationHistoryFeni')) || [];
    
    // Add the new donation to the array
    donations.push(donationData);
    
    // Store the updated donation history back to localStorage
    localStorage.setItem('donationHistoryFeni', JSON.stringify(donations));
    
    // Clear the input field
    document.getElementById("feni-donation-amount").value = '';
    
    
    

})




//   Donate for Aid for Injured in the Quota Movement

qtaDonationButton.addEventListener("click",function(event){
    event.preventDefault();

  

    const qtaTotalAmount=parseFloat(document.getElementById("qta-total-amount").innerText);
    const qtaDonationAmount=parseFloat(document.getElementById("qta-donation-amount").value);
    const totalAmount = parseFloat(document.getElementById('total-amount').innerText);
   

    if (isNaN(qtaDonationAmount) || qtaDonationAmount <= 0 || typeof(qtaDonationAmount)!=="number" || qtaDonationAmount > totalAmount  ){
     alert("Please Enter a valid Donation Number!");
     document.getElementById("qta-donation-amount").value = ''; 
     return;
    }

    let qtaNewBalance=qtaTotalAmount+qtaDonationAmount;
    let newTotalAmount=totalAmount-qtaDonationAmount;
    

    document.getElementById("qta-total-amount").innerText=qtaNewBalance;
    document.getElementById("total-amount").innerText=newTotalAmount;
    alert("You have Successfully Donated!");

    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: false 
    };
    const donationDateTime = now.toLocaleString('bn-BD', options);
    
    // Create donation data for Feni
    const donationData = {
        amount: qtaDonationAmount,
        dateTime: donationDateTime
    };
    
   
    const donations = JSON.parse(localStorage.getItem('donationHistoryQta')) || [];
    donations.push(donationData);
    localStorage.setItem('donationHistoryQta', JSON.stringify(donations));

   

    document.getElementById("qta-donation-amount").value = ''; 
    
    

})



// Some additional style for picture
const items = document.querySelectorAll('.items');

items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('scale-105');
    });
    item.addEventListener('mouseleave', () => {
        item.classList.remove('scale-105');
    });
});


















 

