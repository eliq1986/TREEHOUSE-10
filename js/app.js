$(document).ready(function() {
  $.ajax({
   url: 'https://randomuser.me/api/?results=12&nat=us&inc=name,picture,email,location,cell,dob',
   dataType: 'json',
   success: function(data) {
       const nameContact = document.getElementsByClassName("contact-name");
       const nameEmail = document.getElementsByClassName("contact-email");
       const contactCity = document.getElementsByClassName("contact-city");
       const photoImg = document.getElementsByClassName("photo");





         for (let i =0; i<data.results.length; i++) {
             nameContact[i].innerHTML = data.results[i].name.first.toUpperCase().charAt(0) + data.results[i].name.first.slice(1).toLowerCase() +  ' ' + data.results[i].name.last.toUpperCase().charAt(0) + data.results[i].name.last.slice(1).toLowerCase();
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






 }
});
});
