
var name = $('#name').val();
var phone = $('#phone').val();
var email = $('#email').val();
var event = getUrlVars()['type'];
var type_form = getUrlVars()['type_form'];

var mailSettings = {
    emailFrom: "mayursaptal@gmail.com",
    emailTo: email,
    smtp: "smtp.gmail.com",
    smtpUserName: "mayursaptal@gmail.com",
    smtpPassword: "******",
    attachmentsInBase64Format: [],
    subject: name + " qotation request",
    textBody: 'Dear ' + name + ', \n you are register for ' + event + ' - ' + type_form + ' with phone ' + phone + ' \n thank you '
};

var success = function (message) {
    // alert(message);

    window.location = 'thank_you.html';
}

var failure = function (message) {
    alert("Error sending the email , please check your internet and try again .error->" + message);
    window.location = 'index.html';
}

$('form').submit(
    function () {
        smtpClient.sendMail(mailSettings, success, failure);
    }
);
