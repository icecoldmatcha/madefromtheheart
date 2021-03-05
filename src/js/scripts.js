/*$(document).ready(function () {
  console.log("ready!");
  $("#navbar-header").load("./components/navbar.html");
});
*/

function load(url, element) {
  fetch(url)
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      element.innerHTML = data;
    });
}

function openModal(o, x, modal) {
  o.onclick = function () {
    modal.classList.add("active");
  };
  x.onclick = function () {
    modal.classList.remove("active");
  };
  /*window.onclick = function (e) {
    if (e.target == modal) {
      modal.classList.remove("active");
    }
  };*/
}

function PayModeCC() {
  let mCC = document.getElementById("modeCC");

  /*mCC.addEventListener("click", function (e) {
    document
      .getElementById("sectionPayment")
      .insertAdjacentHTML(
        "afterend",
        '<section id="payCC">\n' +
          '<div class="form-group">\n' +
          '<div class="columns">\n' +
          '<div class="column col-sm-6 col-mx-auto">\n' +
          '<label class="form-label" for="creditType">Credit Card Type</label>\n' +
          '<input id="creditType" type="text" placeholder="Credit Card" class="form-input"/>\n' +
          "</div>\n" +
          '<div class="column col-sm-6 col-mx-auto">\n' +
          '<label class="form-label" for="creditNum">Account Number</label>\n' +
          '<input id="creditNum" type="text" placeholder="Credit Card" class="form-input"/>\n' +
          "</div>\n" +
          "</div>\n" +
          "</div>\n" +
          "</section > "
      );
    //document.getElementById("payCC").classList.remove("d-none");
    e.stopImmediatePropagation();
  });*/

  mCC.addEventListener("click", function (e) {
    document.getElementById("payCC").classList.remove("d-none");
  });
}

function loadProducts(elementID) {
  elementID.addEventListener();
}

function addItem(img) {
  let imgSrc = document.getElementById(img).getAttribute("src");

  document
    .getElementById("items-wrapper")
    .insertAdjacentHTML(
      "afterend",
      '<div class="tile py-2 px-2 cart-dim">\n' +
        '<div class="tile-content px-2 py-2">\n' +
        '<div class="d-inline">\n' +
        '<img src="' +
        imgSrc +
        '" class="img-responsive float-left cart-img px-2"/>\n' +
        '<h6 class="tile-title">Item Name</h6>\n' +
        '<p class="tile-subtitle text-italic">Item Desc</p>\n' +
        "</div>\n" +
        "</div>\n" +
        '<div class="tile-action px-2 py-2">\n' +
        '<button class="btn btn-primary text-center item-del">\n' +
        '<i class="typcn typcn-trash"></i>\n' +
        "</button>\n" +
        "</div>\n" +
        "</div>"
    );

  let i = document.getElementById("btn-cart").getAttribute("data-badge");
  if (i == "") {
    i = 1;
    document.getElementById("btn-cart").setAttribute("data-badge", i);
  } else {
    i++;
    document.getElementById("btn-cart").setAttribute("data-badge", i);
  }
}
