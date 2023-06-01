$(".option").click(function(){
    // When any element with class "option" is clicked...
    $(".option").removeClass("active");
    // Remove the "active" class from all elements with class "option"
    $(this).addClass("active");
    // Add the "active" class to the clicked element
});
