  function getPrice(card) {
    var priceElement = card.getElementsByClassName("price")[0];
    var priceText = priceElement.textContent;
    var numberText = "";

    for (var i = 0; i < priceText.length; i++) {
      var ch = priceText[i];
      if (ch >= "0" && ch <= "9") {
        numberText = numberText + ch;
      }
    }

    var priceNumber = parseInt(numberText, 10);
    return priceNumber;
  }

  function sortProducts() {
    var select = document.getElementById("sortSelect");
    var order = select.value;

    var grid = document.getElementsByClassName("product-grid")[0];
    var cards = grid.getElementsByClassName("product-card");

    var cardArray = [];
    for (var i = 0; i < cards.length; i++) {
      cardArray.push(cards[i]);
    }

    for (var i = 0; i < cardArray.length - 1; i++) {
      for (var j = i + 1; j < cardArray.length; j++) {
        var priceI = getPrice(cardArray[i]);
        var priceJ = getPrice(cardArray[j]);

        var shouldSwap = false;

        if (order === "low" && priceI > priceJ) {
          shouldSwap = true;
          console.log("Sorted lowest to highest");
        }

        if (order === "high" && priceI < priceJ) {
          shouldSwap = true;
          console.log("Sorted highest to lowest");
        }

        if (shouldSwap) {
          var temp = cardArray[i];
          cardArray[i] = cardArray[j];
          cardArray[j] = temp;
        }
      }
    }

    for (var k = 0; k < cardArray.length; k++) {
      grid.appendChild(cardArray[k]);
    }
  }

  var sortButton = document.getElementById("sortButton");
  if (sortButton) {
    sortButton.onclick = sortProducts;
  }