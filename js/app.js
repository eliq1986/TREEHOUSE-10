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

const modalContent = document.querySelector(".modal-content");

const contactAddress = document.getElementsByClassName("contact-address");

const contactBirthday = document.getElementsByClassName("contact-birthday");

const contactPhone = document. getElementsByClassName("phone");

const modalborder = document.getElementsByClassName("border")[12];

const modaladdress = document.getElementsByClassName("contact-address")[12];

const modalbirthday = document.getElementsByClassName("contact-birthday")[12];

const modalPhone = document.getElementsByClassName("phone")[12];



$(document).ready(function() {
  $.ajax({
   url: 'https://randomuser.me/api/?results=12&nat=us&inc=name,picture,email,location,cell,dob',
   dataType: 'json',
   success: function(data) {
           let randomUsers = data;
         console.log(data.results[0].cell);
//********************************************************//
// Interates through JSON DATA and adds to boxes
//********************************************************//
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
             contactPhone[i].innerHTML = data.results[i].cell;

       }

//********************************************************//
// JSON data is reversed
//********************************************************//
        for (let i = 0; i<data.results.length; i++) {
              let birthday =  data.results[i].dob.split(" ")[0];
              let year = birthday.split("-")[0];
              let month = birthday.split("-")[1];
              let day = birthday.split("-")[2];
               let monthDayYear = [ month, day, year].join("/");
               contactBirthday[i].innerHTML = "Birthday" + ":" + monthDayYear;

}
//********************************************************//
// Opens Modal
//********************************************************//
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

         modal.style.display = "block";
         modalPhone.style.display = "block";
         modalbirthday.style.display = "block";
         modaladdress.style.display = "block";
         modalborder.style.display = "block";



       let clickedBox = box;


       let clickedPhoto = $(clickedBox).find("img");

       let clickedName = $(clickedBox).find("p")[0];
       clickedName = $(clickedName).text();

       let clickedEmail = $(clickedBox).find("p")[1];
       clickedEmail = $(clickedEmail).text();

       let clickedCity = $(clickedBox).find("p")[2]
        clickedCity = $(clickedCity).text();

        let clickedPhone = $(clickedBox).find("p")[3];
          clickedPhone = $(clickedPhone).text();
          console.log(clickedPhone);

       let clickedAddress = $(clickedBox).find("p")[4];
         clickedAddress = $(clickedAddress).text();


       let clickedBirthday = $(clickedBox).find("p")[5];
         clickedBirthday = $(clickedBirthday).text();

       const photoImg = document.getElementsByClassName('photo')[12];
       photoImg.src = clickedPhoto[0].src;

       const nameContact = document.getElementsByClassName("contact-name")[12];
       nameContact.textContent =  clickedName;

       const nameEmail = document.getElementsByClassName('contact-email')[12];
       nameEmail.textContent = clickedEmail;

       const contactCity = document.getElementsByClassName('contact-city')[12];
       contactCity.textContent = clickedCity;

       const phone = document.getElementsByClassName('phone')[12];
         phone.textContent = clickedPhone;

         const address = document.getElementsByClassName('contact-address')[12];
         address.textContent = clickedAddress;

         const birth = document.getElementsByClassName("contact-birthday")[12]
          birth.textContent = clickedBirthday;


       closeBtb.addEventListener("click", closeModal);
}
   function closeModal() {
      modal.style.display = "none";
   }
   }

});
});
