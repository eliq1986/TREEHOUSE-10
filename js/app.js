$(document).ready(function() {  
  $.ajax({
   url: 'https://randomuser.me/api/?results=12&nat=us&inc=name,picture,email,location,cell,dob',
   dataType: 'json',
   success: function(data) {
  console.log(data);

     $.each(data.results, function (index, value) {




       $("p.contact-name").text(value.name.first.toUpperCase().charAt(0) + value.name.first.slice(1).toLowerCase() +  ' ' + value.name.last.toUpperCase().charAt(0) + value.name.last.slice(1).toLowerCase());

        $("p.contact-email").text(value.email);

        $(".contact-city").text(value.location.city.toUpperCase().charAt(0) + value.location.city.slice(1).toLowerCase());

        $(".photo").attr("src", value.picture.large);

 });
}
});
});
