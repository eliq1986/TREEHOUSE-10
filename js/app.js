// Gets collection of contact-name classes
const nameContact = document.getElementsByClassName("contact-name");
// Gets collection of contact-email classes
const nameEmail = document.getElementsByClassName("contact-email");
// Gets collection of contact-city classes
const contactCity = document.getElementsByClassName("contact-city");
// Gets collection of photo classes
const photoImg = document.getElementsByClassName("photo");
// Gets modal
const modal = document.getElementById("simpleModal");
// Gets close button on modal
const closeBtb = document.querySelector(".closeBtb");

const contactAddress = document.getElementsByClassName("contact-address");

const contactBirthday = document.getElementsByClassName("contact-birthday");

const modalborder = document.getElementsByClassName("border")[12];

const modaladdress = document.getElementsByClassName("contact-address")[12];

const modalbirthday = document.getElementsByClassName("contact-birthday")[12];


$(document).ready(function() {
  $.ajax({
   url: 'https://randomuser.me/api/?results=12&nat=us&inc=name,picture,email,location,cell,dob',
   dataType: 'json',
   success: function(data) {
           let randomUsers = data;
           console.log(randomUsers);


         for (let i =0; i<data.results.length; i++) {

              let completeName = data.results[i].name.first.toUpperCase().charAt(0) + data.results[i].name.first.slice(1).toLowerCase()
              +  ' ' + data.results[i].name.last.toUpperCase().charAt(0) + data.results[i].name.last.slice(1).toLowerCase();
              nameContact[i].innerHTML = completeName;
}

         for (let i =0; i<data.results.length; i++) {

             nameEmail[i].innerHTML = data.results[i].email;
}

         for (let i =0; i<data.results.length; i++) {

             contactCity[i].innerHTML = data.results[i].location.city.toUpperCase().charAt(0) + data.results[i].location.city.slice(1);
}
         for (let i =0; i<data.results.length; i++) {

              photoImg[i].src = data.results[i].picture.large;

}
        for (let i = 0; i<data.results.length; i++) {

            contactAddress[i].innerHTML = data.results[i].location.street + ", " + data.results[i].location.state + " " + data.results[i].location.postcode
}
        for (let i = 0; i<data.results.length; i++) {
              let birthday =  data.results[i].dob.split(" ")[0];
              let year = birthday.split("-")[0];
              let month = birthday.split("-")[1];
              let day = birthday.split("-")[2];
               let monthDayYear = [ month, day, year].join("/");
               contactBirthday[i].innerHTML = "Birthday" + ":" + monthDayYear;
}
   //Opens modal
   $(".box").on("click", function (event) {
         event.preventDefault();
        const main = document.getElementsByClassName('box');
         for (let i = 0; i<main.length; i++) {
            if (event.target.parentNode.parentNode === main[i] || event.target === main[i]) {
               let clickedBox = main[i];
               openModal(clickedBox);
 }
}
   })

   function openModal(box) {
       let clickedBox = box;
       console.log(clickedBox);
       const photoImg = document.getElementsByClassName('photo')[12];
       const nameContact = document.getElementsByClassName("contact-name")[12];
       const nameEmail = document.getElementsByClassName('contact-email')[12];
       const contactCity = document.getElementsByClassName('contact-city')[12];
       modalbirthday.style.display = "block";
       modaladdress.style.display = "block";
       modalborder.style.display = "block";
       modal.style.display = "block";

       closeBtb.addEventListener("click", closeModal);
}
   function closeModal() {
      modal.style.display = "none";
   }
   }

});
});
