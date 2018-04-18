const nameContact = document.getElementsByClassName("contact-name");
const nameEmail = document.getElementsByClassName("contact-email");
const contactCity = document.getElementsByClassName("contact-city");
const photoImg = document.getElementsByClassName("photo");
const modal = document.getElementById("simpleModal");
const closeBtb = document.querySelector(".closeBtb");
console.log(closeBtb);

$(document).ready(function() {
  $.ajax({
   url: 'https://randomuser.me/api/?results=12&nat=us&inc=name,picture,email,location,cell,dob',
   dataType: 'json',
   success: function(data) {


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

   $(".box").on("click", function(){
       openModal();

   })


   function openModal() {
       modal.style.display = "block";
}
   function closeModal() {
      modal.style.display = "none";
   }
   closeBtb.addEventListener("click", closeModal);

 }
});
});
