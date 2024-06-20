(function () {
  "use strict";

  var tinyslider = function () {
    var el = document.querySelectorAll(".testimonial-slider");

    if (el.length > 0) {
      var slider = tns({
        container: ".testimonial-slider",
        items: 1,
        axis: "horizontal",
        controlsContainer: "#testimonial-nav",
        swipeAngle: false,
        speed: 700,
        nav: true,
        controls: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3500,
        autoplayButtonOutput: false,
      });
    }
  };
  tinyslider();

  var sitePlusMinus = function () {
    var value,
      quantity = document.getElementsByClassName("quantity-container");

    function createBindings(quantityContainer) {
      var quantityAmount =
        quantityContainer.getElementsByClassName("quantity-amount")[0];
      var increase = quantityContainer.getElementsByClassName("increase")[0];
      var decrease = quantityContainer.getElementsByClassName("decrease")[0];
      increase.addEventListener("click", function (e) {
        increaseValue(e, quantityAmount);
      });
      decrease.addEventListener("click", function (e) {
        decreaseValue(e, quantityAmount);
      });
    }

    function init() {
      for (var i = 0; i < quantity.length; i++) {
        createBindings(quantity[i]);
      }
    }

    function increaseValue(event, quantityAmount) {
      value = parseInt(quantityAmount.value, 10);

      console.log(quantityAmount, quantityAmount.value);

      value = isNaN(value) ? 0 : value;
      value++;
      quantityAmount.value = value;
    }

    function decreaseValue(event, quantityAmount) {
      value = parseInt(quantityAmount.value, 10);

      value = isNaN(value) ? 0 : value;
      if (value > 0) value--;

      quantityAmount.value = value;
    }

    init();
  };
  sitePlusMinus();

  (function disableLinks() {
    var links = document.querySelectorAll(".disabled");
    links.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
      });
    });
  })();

  function fillForm() {
    var form = document.getElementById("fake-form");
    var inputs = form.querySelectorAll("input");

    const fakeName = names[Math.floor(Math.random() * names.length)];
    const fakeSurname = surnames[Math.floor(Math.random() * surnames.length)];
    const fakeData = {
      c_fname: fakeName,
      c_lname: fakeSurname,
      c_address: addresses[Math.floor(Math.random() * addresses.length)],
      c_address_2: addresses2[Math.floor(Math.random() * addresses2.length)],
      c_email_address: `${fakeName.toLowerCase()}.${fakeSurname.toLowerCase()}@clip.com`,
      c_phone: phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)],
      c_state_country: states[Math.floor(Math.random() * states.length)],
      c_postal_zip: postalCodes[Math.floor(Math.random() * postalCodes.length)],
    };

    inputs.forEach(function (input) {
      input.value = fakeData[input.name];
    });
  }

  var fillFormBtn = document.getElementById("fill-form");
  fillFormBtn.addEventListener("click", fillForm);
})();
