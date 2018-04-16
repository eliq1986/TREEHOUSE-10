$(document).ready(function() {
  $.ajax({
   url: 'https://randomuser.me/api/?results=12&nat=us&inc=name,picture,email,location,cell,dob',
   dataType: 'json',
   success: function(data) {
     $.each(data, function (i, value) {

        $.each(data[i], function(key, value) {


          $(".contact-name").each(function() {


             $(".contact-name").text(value.name.first.toUpperCase().charAt(0) + value.name.first.slice(1).toLowerCase() +  ' '
                             + value.name.last.toUpperCase().charAt(0) + value.name.last.slice(1).toLowerCase()); //Capitilizes the first lettter


                });

             $(".contact-email").each(function() {
                $(".contact-email").text(value.email);
                                });

                                $(".contact-city").each(function() {
                                   $(this).text(value.location.city);


                              });

                              $(".photo").each(function() {
                                 $(".photo").attr("src", value.picture.large);


                            });




           });
 });
}
});
});
