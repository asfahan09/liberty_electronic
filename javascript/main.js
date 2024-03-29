// sign in validation navbar
$("document").ready(function(){
    $(".login").validate({
       rules:
       {
        
        password:{
            required:true,
            minlength:8
        },

        email:{
            required:true,
            email:true
        },

       },
       Messages:
       {
        
        password:{
            required:"please enter your password",
            minlength:"minimun length of the password should be 8"
        },

        email:{
            required:"please enter your email address",
            email:"email must contain @ and ."
        },

    }
    
    
})
});
// sign in navbar validation end









// contact us foarm validation start
$("document").ready(function(){
    $("#contactus").validate({
       rules:
       {
        username:"required",
        lastname:"required",
        password:{
            required:true,
            minlength:8
        },
        
        email:{
            required:true,
            email:true
        },

       },
       Messages:
       {
        username:"please enter your name",
        password:"please enter your password",
        lastname:"please enter your lastname",
        email:"please enter your email address",

       }

    
    })
});
// contact us form validation end




// buy form validation 
$("document").ready(function(){
    $("#buyform").validate({
       rules:
       {
        First:"required",
        Last:"required",
        billing:"required",
        city:"required",
        zip:"required",
        address:"required",
        password:{
            required:true,
            minlength:8
        },
        number:{
            required:true,
            minlength:11
        },
        email:{
            required:true,
            email:true
        },

       },
       Messages:
       {
        first:"please enter your name",
        password:"please enter your password",
        lastname:"please enter your lastname",
        email:"please enter your email address",

       }

    
    })
});
// buy form  validation end



$( function() {
    var availableTags = [
        "aboutus",
        "contactus",
        "feedback",
        "testinomial",
        "refrigerator",
        "smartwatch",
        "air",
        "tv",
        "laptop",
        "buy",
        "campare",
        "productdetail"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );


$("#searchSubmit").click(function(){
    text = $("#tags").val();
    if(text == "tv"){
        location.href = "tv.html";
    }
    else if(text=="aboutus"){
        location.href="aboutus.html";
    }
    else if(text=="contactus"){
        location.href="contactus.html";
    }
    else if(text=="feedback"){
        location.href="feedback.html";
    }
    else if(text=="testinomial"){
        location.href="testinomial.html";
    }
    else if(text=="refrigerator"){
        location.href="regrigerator.html";
    }
    else if(text=="smartwatch"){
        location.href="smartwatch.html";
    }
    else if(text=="air"){
        location.href="air.html";
    }
    else if(text=="tv"){
        location.href="tv.html";
    }
    else if(text=="laptop"){
        location.href="laptop.html";
    }
    else if(text=="buy"){
        location.href="buy.html";
    }
    else if(text=="compare"){
        location.href="compare.html";
    }
    else if(text=="productdetail"){
        location.href="productDetail.html";
    }

})

//   $("#tags").keyup(function(event) {
//     if (event.keyCode === 13) {
//         $("#searchSubmit").click();
//     }
// });