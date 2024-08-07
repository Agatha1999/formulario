$(document).ready(function() {
    $('#myForm').submit(function(e) {
        e.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var message = $('#message').val();

        // You can add your form submission logic here
        console.log('Form submitted:', name, email, phone, message);

        
    });
});