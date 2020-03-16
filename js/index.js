// Login / Register
$("#loginBtn").on('click',function(){
    $("#list-login-list").addClass("active");
    $("#list-register-list").removeClass("active");
    $("#list-register").removeClass("show active");
    $("#list-login").addClass("show active");
})
$("#registerBtn").on('click',function(){
    $("#list-register-list").addClass("active");
    $("#list-login-list").removeClass("active");
    $("#list-login").removeClass("show active");
    $("#list-register").addClass("show active");
})