$(document).ready(function () {
  $(".contact-form").on("submit", function (e) {
    e.preventDefault();
    Swal.fire("Send Your Massage!", "Thank You!", "success");
    sendMessage();
  });

  function sendMessage() {
    // / get values
    // console.log(document.querySelector('.contact-form').elements);
    let $name = document.querySelector(".contact-form__name").value;
    let $telegram = document.querySelector(".contact-form__user").value;
    let $phone = document.querySelector(".contact-form__phone").value;
    let $message = document.querySelector(".contact-form__message").value;
    document.querySelector(".contact-form").reset();

    console.log($name + " " + $telegram + " " + $phone + " " + $message);
    // send $message

    var my_text = ` %0AName  - ${$name}%0ATelegram  - ${$telegram}%0APhone  - ${$phone}%0AMessage  - ${$message}`;

    var url = `https://api.telegram.org/bot1155858989:AAGrmQkdcuuvx5e-sd_8-DWT8vqgw1BIk5c/sendMessage?chat_id=648424505&text=${my_text}`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
  }
});
