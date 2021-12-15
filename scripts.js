clickMode = 1; // this is either 1 or 2
firstClick = "";

window.onload = function() {

  document.querySelector("#toprow1").onclick = function() {
    // document.querySelector("#toprow1").classList.toggle("showMe");
    console.log(clickMode);

    if (clickMode == 1) {
      selfimg = document.querySelector("#toprow1 img");
      if (selfimg != null) {
        document.querySelector("#toprow1").classList.add("onOffClass");
        clickMode = 2;
        firstClick = "#toprow1";
      }


    } else {
      document.querySelector(firstClick).classList.remove("onOffClass");

      selfimg = document.querySelector("#toprow1 img");
      if (selfimg == null) {
        previousSquare = document.querySelector(firstClick + " img");
        document.querySelector("#toprow1").appendChild(previousSquare);
        
           // check if the firstClick is third row #1
        if (firstClick == "#thirdrow2") {
          inbetweenImg = document.querySelector("#secondrow2 img");
          if (inbetweenImg != null) document.querySelector("#secondrow2").innerHTML = "";
        }
        
        clickMode = 1;
      }
    }

  }

  document.querySelector("#toprow2").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    console.log(clickMode);

    if (clickMode == 1) {
      selfimg = document.querySelector("#toprow2 img");
      if (selfimg != null) {

        document.querySelector("#toprow2").classList.add("onOffClass");
        clickMode = 2;
        firstClick = "#toprow2";
      }


    } else {
      document.querySelector(firstClick).classList.remove("onOffClass");

      selfimg = document.querySelector("#toprow2 img");
      if (selfimg == null) {

        previousSquare = document.querySelector(firstClick + " img");
        document.querySelector("#toprow2").appendChild(previousSquare);
        
           // check if the firstClick is third row #1
        if (firstClick == "#thirdrow1") {
          inbetweenImg = document.querySelector("#secondrow2 img");
          if (inbetweenImg != null) document.querySelector("#secondrow2").innerHTML = "";
        }
        // check if the firstClick is third row #3
        if (firstClick == "#thirdrow3") {
          inbetweenImg = document.querySelector("#secondrow3 img");
          if (inbetweenImg != null) document.querySelector("#secondrow3").innerHTML = "";
        }

        
        clickMode = 1;
      }
    }
  }

  document.querySelector("#toprow3").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    console.log(clickMode);

    if (clickMode == 1) {
      selfimg = document.querySelector("#toprow3 img");
      if (selfimg != null) {
        document.querySelector("#toprow3").classList.add("onOffClass");
        clickMode = 2;
        firstClick = "#toprow3";
      }


    } else {
      document.querySelector(firstClick).classList.remove("onOffClass");

      selfimg = document.querySelector("#toprow3 img");
      if (selfimg == null) {
        previousSquare = document.querySelector(firstClick + " img");
        document.querySelector("#toprow3").appendChild(previousSquare);
        
           // check if the firstClick is third row #1
        if (firstClick == "#thirdrow4") {
          inbetweenImg = document.querySelector("#secondrow4 img");
          if (inbetweenImg != null) document.querySelector("#secondrow4").innerHTML = "";
        }
        // check if the firstClick is third row #3
        if (firstClick == "#thirdrow2") {
          inbetweenImg = document.querySelector("#secondrow3 img");
          if (inbetweenImg != null) document.querySelector("#secondrow3").innerHTML = "";
        }

        
        clickMode = 1;
      }
    }

  }

  document.querySelector("#toprow4").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    console.log(clickMode);

    if (clickMode == 1) {
      selfimg = document.querySelector("#toprow4 img");
      if (selfimg != null) {

        document.querySelector("#toprow4").classList.add("onOffClass");
        clickMode = 2;
        firstClick = "#toprow4";
      }


    } else {
      document.querySelector(firstClick).classList.remove("onOffClass");

      selfimg = document.querySelector("#toprow4 img");
      if (selfimg == null) {
        previousSquare = document.querySelector(firstClick + " img");
        document.querySelector("#toprow4").appendChild(previousSquare);
        
           // check if the firstClick is third row #1
        if (firstClick == "#thirdrow3") {
          inbetweenImg = document.querySelector("#secondrow4 img");
          if (inbetweenImg != null) document.querySelector("#secondrow4").innerHTML = "";
        }

        
        clickMode = 1;
      }
    }

  }

  document.querySelector("#secondrow1").onclick = function() {
    // document.querySelector("#toprow1").classList.toggle("showMe");
    console.log(clickMode);

    if (clickMode == 1) {
      selfimg = document.querySelector("#secondrow1 img");
      if (selfimg != null) {}

      document.querySelector("#secondrow1").classList.add("onOffClass");
      clickMode = 2;
      firstClick = "#secondrow1";


    } else {
      document.querySelector(firstClick).classList.remove("onOffClass");

      selfimg = document.querySelector("#secondrow1 img");
      if (selfimg == null) {

        previousSquare = document.querySelector(firstClick + " img");
        document.querySelector("#secondrow1").appendChild(previousSquare);
        
           // check if the firstClick is third row #1
        if (firstClick == "#fourthrow1") {
          inbetweenImg = document.querySelector("#thirdrow1 img");
          if (inbetweenImg != null) document.querySelector("#thirdrow1").innerHTML = "";
        }

        
        clickMode = 1;
      }
    }

  }

  document.querySelector("#secondrow2").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    console.log(clickMode);

    if (clickMode == 1) {
      selfimg = document.querySelector("#secondrow2 img");
      if (selfimg != null) {}

      document.querySelector("#secondrow2").classList.add("onOffClass");
      clickMode = 2;
      firstClick = "#secondrow2";


    } else {
      document.querySelector(firstClick).classList.remove("onOffClass");


      selfimg = document.querySelector("#secondrow2 img");
      if (selfimg == null) {

        previousSquare = document.querySelector(firstClick + " img");
        document.querySelector("#secondrow2").appendChild(previousSquare);
        
           // check if the firstClick is third row #1
        if (firstClick == "#fourthrow1") {
          inbetweenImg = document.querySelector("#thirdrow1 img");
          if (inbetweenImg != null) document.querySelector("#thirdrow1").innerHTML = "";
        }
        // check if the firstClick is third row #3
        if (firstClick == "#fourthrow3") {
          inbetweenImg = document.querySelector("#thirdrow2 img");
          if (inbetweenImg != null) document.querySelector("#thirdrow2").innerHTML = "";
        }

        clickMode = 1;
      }
    }
  }

  document.querySelector("#secondrow3").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    console.log(clickMode);

    if (clickMode == 1) {
      selfimg = document.querySelector("#secondrow3 img");
      if (selfimg != null) {}

      document.querySelector("#secondrow3").classList.add("onOffClass");
      clickMode = 2;
      firstClick = "#secondrow3";


    } else {
      document.querySelector(firstClick).classList.remove("onOffClass");

      selfimg = document.querySelector("#secondrow3 img");
      if (selfimg == null) {

        previousSquare = document.querySelector(firstClick + " img");
        document.querySelector("#secondrow3").appendChild(previousSquare);
        
           // check if the firstClick is third row #1
        if (firstClick == "#fourthrow2") {
          inbetweenImg = document.querySelector("#thirdrow2 img");
          if (inbetweenImg != null) document.querySelector("#thirdrow2").innerHTML = "";
        }
        // check if the firstClick is third row #3
        if (firstClick == "#fourthrow4") {
          inbetweenImg = document.querySelector("#thirdrow3 img");
          if (inbetweenImg != null) document.querySelector("#thirdrow3").innerHTML = "";
        }

        clickMode = 1;
      }
    }

  }

  document.querySelector("#secondrow4").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    console.log(clickMode);

    if (clickMode == 1) {
      selfimg = document.querySelector("#secondrow4 img");
      if (selfimg != null) {}

      document.querySelector("#secondrow4").classList.add("onOffClass");
      clickMode = 2;
      firstClick = "#secondrow4";


    } else {
      document.querySelector(firstClick).classList.remove("onOffClass");

      selfimg = document.querySelector("#secondrow4 img");
      if (selfimg == null) {

        previousSquare = document.querySelector(firstClick + " img");
        document.querySelector("#secondrow4").appendChild(previousSquare);
        
           // check if the firstClick is third row #1
        if (firstClick == "#fourthrow3") {
          inbetweenImg = document.querySelector("#thirdrow3 img");
          if (inbetweenImg != null) document.querySelector("#thirdrow3").innerHTML = "";
        }

        clickMode = 1;
      }
    }

  }

  document.querySelector("#thirdrow1").onclick = function() {
    // document.querySelector("#toprow1").classList.toggle("showMe");

    console.log(clickMode);

    if (clickMode == 1) {
      selfimg = document.querySelector("#thirdrow1 img");
      if (selfimg != null) {
        document.querySelector("#thirdrow1").classList.add("onOffClass");
        clickMode = 2;
        firstClick = "#thirdrow1";
      }

    } else {
      document.querySelector(firstClick).classList.remove("onOffClass");

      selfimg = document.querySelector("#thirdrow1 img");
      if (selfimg == null) {
        previousSquare = document.querySelector(firstClick + " img");
        document.querySelector("#thirdrow1").appendChild(previousSquare);
        
           // check if the firstClick is third row #1
        if (firstClick == "#toprow2") {
          inbetweenImg = document.querySelector("#secondrow2 img");
          if (inbetweenImg != null) document.querySelector("#secondrow2").innerHTML = "";
        }
        // check if the firstClick is third row #3
        if (firstClick == "#fifthrow2") {
          inbetweenImg = document.querySelector("#fourthrow2 img");
          if (inbetweenImg != null) document.querySelector("#fourthrow2").innerHTML = "";
        }

        clickMode = 1;
      }
    }

  }

  document.querySelector("#thirdrow2").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    console.log(clickMode);

    if (clickMode == 1) {
      selfimg = document.querySelector("#thirdrow2 img");
      if (selfimg != null) {}

      document.querySelector("#thirdrow2").classList.add("onOffClass");
      clickMode = 2;
      firstClick = "#thirdrow2";


    } else {
      document.querySelector(firstClick).classList.remove("onOffClass");

      selfimg = document.querySelector("#thirdrow2 img");
      if (selfimg == null) {

        previousSquare = document.querySelector(firstClick + " img");
        document.querySelector("#thirdrow2").appendChild(previousSquare);
        
           // check if the firstClick is third row #1
        if (firstClick == "#toprow1") {
          inbetweenImg = document.querySelector("#secondrow2 img");
          if (inbetweenImg != null) document.querySelector("#secondrow2").innerHTML = "";
        }
        // check if the firstClick is third row #3
        if (firstClick == "#toprow3") {
          inbetweenImg = document.querySelector("#secondrow3 img");
          if (inbetweenImg != null) document.querySelector("#secondrow3").innerHTML = "";
        }
           // check if the firstClick is third row #1
        if (firstClick == "#fifthrow1") {
          inbetweenImg = document.querySelector("#fourthrow2 img");
          if (inbetweenImg != null) document.querySelector("#fourthrow2").innerHTML = "";
        }
        // check if the firstClick is third row #3
        if (firstClick == "#fifthrow3") {
          inbetweenImg = document.querySelector("#fourthrow3 img");
          if (inbetweenImg != null) document.querySelector("#fourthrow3").innerHTML = "";
        }


        clickMode = 1;
      }
    }
  }

  document.querySelector("#thirdrow3").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    console.log(clickMode);

    if (clickMode == 1) {
      selfimg = document.querySelector("#thirdrow3 img");
      if (selfimg != null) {}

      document.querySelector("#thirdrow3").classList.add("onOffClass");
      clickMode = 2;
      firstClick = "#thirdrow3";


    } else {
      document.querySelector(firstClick).classList.remove("onOffClass");

      selfimg = document.querySelector("#thirdrow3 img");
      if (selfimg == null) {

        previousSquare = document.querySelector(firstClick + " img");
        document.querySelector("#thirdrow3").appendChild(previousSquare);
        
           // check if the firstClick is third row #1
        if (firstClick == "#toprow2") {
          inbetweenImg = document.querySelector("#secondrow3 img");
          if (inbetweenImg != null) document.querySelector("#secondrow3").innerHTML = "";
        }
        // check if the firstClick is third row #3
        if (firstClick == "#toprow4") {
          inbetweenImg = document.querySelector("#secondrow4 img");
          if (inbetweenImg != null) document.querySelector("#secondrow4").innerHTML = "";
        }
   // check if the firstClick is third row #1
        if (firstClick == "#fifthrow4") {
          inbetweenImg = document.querySelector("#fourthrow4 img");
          if (inbetweenImg != null) document.querySelector("#fourthrow4").innerHTML = "";
        }
        // check if the firstClick is third row #3
        if (firstClick == "#fifthrow2") {
          inbetweenImg = document.querySelector("#fourthrow3 img");
          if (inbetweenImg != null) document.querySelector("#fourthrow3").innerHTML = "";
        }

        clickMode = 1;
      }
    }
  }

  document.querySelector("#thirdrow4").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    console.log(clickMode);

    if (clickMode == 1) {
      selfimg = document.querySelector("#thirdrow4 img");
      if (selfimg != null) {}

      document.querySelector("#thirdrow4").classList.add("onOffClass");
      clickMode = 2;
      firstClick = "#thirdrow4";

    } else {
      document.querySelector(firstClick).classList.remove("onOffClass");

      selfimg = document.querySelector("#thirdrow4 img");
      if (selfimg == null) {

        previousSquare = document.querySelector(firstClick + " img");
        document.querySelector("#thirdrow4").appendChild(previousSquare);
        
           // check if the firstClick is third row #1
        if (firstClick == "#toprow3") {
          inbetweenImg = document.querySelector("#secondrow4 img");
          if (inbetweenImg != null) document.querySelector("#secondrow4").innerHTML = "";
        }
        // check if the firstClick is third row #3
        if (firstClick == "#fifthrow3") {
          inbetweenImg = document.querySelector("#fourthrow4 img");
          if (inbetweenImg != null) document.querySelector("#fourthrow4").innerHTML = "";
        }


        clickMode = 1;
      }
    }

  }


  document.querySelector("#fourthrow1").onclick = function() {
    // document.querySelector("#toprow1").classList.toggle("showMe");

    console.log(clickMode);

    if (clickMode == 1) {
      selfimg = document.querySelector("#fourthrow1 img");
      if (selfimg != null) {}

      document.querySelector("#fourthrow1").classList.add("onOffClass");
      clickMode = 2;
      firstClick = "#fourthrow1";

    } else {
      document.querySelector(firstClick).classList.remove("onOffClass");

      selfimg = document.querySelector("#fourthrow1 img");
      if (selfimg == null) {

        previousSquare = document.querySelector(firstClick + " img");
        document.querySelector("#fourthrow1").appendChild(previousSquare);
        
           // check if the firstClick is third row #1
        if (firstClick == "#secondrow2") {
          inbetweenImg = document.querySelector("#thirdrow1 img");
          if (inbetweenImg != null) document.querySelector("#thirdrow1").innerHTML = "";
        }
        // check if the firstClick is third row #3
        if (firstClick == "#sixthrow2") {
          inbetweenImg = document.querySelector("#fifthrow1 img");
          if (inbetweenImg != null) document.querySelector("#fifthrow1").innerHTML = "";
        }


        clickMode = 1;
      }
    }
    // window.alert("fourthrow1");
  }

  document.querySelector("#fourthrow2").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    console.log(clickMode);

    if (clickMode == 1) {
      selfimg = document.querySelector("#fourthrow2 img");
      if (selfimg != null) {}

      document.querySelector("#fourthrow2").classList.add("onOffClass");
      clickMode = 2;
      firstClick = "#fourthrow2";

    } else {
      document.querySelector(firstClick).classList.remove("onOffClass");

      selfimg = document.querySelector("#fourthrow2 img");
      if (selfimg == null) {

        previousSquare = document.querySelector(firstClick + " img");
        document.querySelector("#fourthrow2").appendChild(previousSquare);
        
           // check if the firstClick is third row #1
        if (firstClick == "#secondrow1") {
          inbetweenImg = document.querySelector("#thirdrow1 img");
          if (inbetweenImg != null) document.querySelector("#thirdrow1").innerHTML = "";
        }
        // check if the firstClick is third row #3
        if (firstClick == "#secondrow3") {
          inbetweenImg = document.querySelector("#thirdrow2 img");
          if (inbetweenImg != null) document.querySelector("#thirdrow2").innerHTML = "";
        }
   // check if the firstClick is third row #1
        if (firstClick == "#sixthrow1") {
          inbetweenImg = document.querySelector("#fifthrow1 img");
          if (inbetweenImg != null) document.querySelector("#fifthrow1").innerHTML = "";
        }
        // check if the firstClick is third row #3
        if (firstClick == "#sixthrow3") {
          inbetweenImg = document.querySelector("#fifthrow2 img");
          if (inbetweenImg != null) document.querySelector("#fifthrow2").innerHTML = "";
        }


        clickMode = 1;
      }
    }
  }

  document.querySelector("#fourthrow3").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    console.log(clickMode);

    if (clickMode == 1) {
      selfimg = document.querySelector("#fourthrow3 img");
      if (selfimg != null) {}

      document.querySelector("#fourthrow3").classList.add("onOffClass");
      clickMode = 2;
      firstClick = "#fourthrow3";

    } else {
      document.querySelector(firstClick).classList.remove("onOffClass");

      selfimg = document.querySelector("#fourthrow3 img");
      if (selfimg == null) {

        previousSquare = document.querySelector(firstClick + " img");
        document.querySelector("#fourthrow3").appendChild(previousSquare);
        
           // check if the firstClick is third row #1
        if (firstClick == "#secondrow2") {
          inbetweenImg = document.querySelector("#thirdrow2 img");
          if (inbetweenImg != null) document.querySelector("#thirdrow2").innerHTML = "";
        }
        // check if the firstClick is third row #3
        if (firstClick == "#secondrow4") {
          inbetweenImg = document.querySelector("#thirdrow3 img");
          if (inbetweenImg != null) document.querySelector("#thirdrow3").innerHTML = "";
        }
   // check if the firstClick is third row #1
        if (firstClick == "#sixthrow2") {
          inbetweenImg = document.querySelector("#fifthrow2 img");
          if (inbetweenImg != null) document.querySelector("#fifthrow2").innerHTML = "";
        }
        // check if the firstClick is third row #3
        if (firstClick == "#sixthrow4") {
          inbetweenImg = document.querySelector("#fifthrow3 img");
          if (inbetweenImg != null) document.querySelector("#fifthrow3").innerHTML = "";
        }


        clickMode = 1;
      }
    }
  }

  document.querySelector("#fourthrow4").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    console.log(clickMode);

    if (clickMode == 1) {
      selfimg = document.querySelector("#fourthrow4 img");
      if (selfimg != null) {}

      document.querySelector("#fourthrow4").classList.add("onOffClass");
      clickMode = 2;
      firstClick = "#fourthrow4";

    } else {
      document.querySelector(firstClick).classList.remove("onOffClass");

      selfimg = document.querySelector("#fourthrow4 img");
      if (selfimg == null) {

        previousSquare = document.querySelector(firstClick + " img");
        document.querySelector("#fourthrow4").appendChild(previousSquare);
        
           // check if the firstClick is third row #1
        if (firstClick == "#secondrow3") {
          inbetweenImg = document.querySelector("#thirdrow3 img");
          if (inbetweenImg != null) document.querySelector("#thirdrow3").innerHTML = "";
        }
        // check if the firstClick is third row #3
        if (firstClick == "#sixthrow3") {
          inbetweenImg = document.querySelector("#fifthrow3 img");
          if (inbetweenImg != null) document.querySelector("#fifthrow3").innerHTML = "";
        }


        clickMode = 1;
      }
    }
  }


  document.querySelector("#fifthrow1").onclick = function() {
    // document.querySelector("#toprow1").classList.toggle("showMe");
    console.log(clickMode);

    if (clickMode == 1) {
      selfimg = document.querySelector("#fifthrow1 img");
      if (selfimg != null) {

        document.querySelector("#fifthrow1").classList.add("onOffClass");
        clickMode = 2;
        firstClick = "#fifthrow1";
      }
    } else {
      document.querySelector(firstClick).classList.remove("onOffClass");

      selfimg = document.querySelector("#fifthrow1 img");
      if (selfimg == null) {

        previousSquare = document.querySelector(firstClick + " img");
        document.querySelector("#fifthrow1").appendChild(previousSquare);
        
           // check if the firstClick is third row #1
        if (firstClick == "#thirdrow2") {
          inbetweenImg = document.querySelector("#fourthrow2 img");
          if (inbetweenImg != null) document.querySelector("#fourthrow2").innerHTML = "";
        }
        // check if the firstClick is third row #3
        if (firstClick == "#seventhrow2") {
          inbetweenImg = document.querySelector("#sixthrow2 img");
          if (inbetweenImg != null) document.querySelector("#sixthrow2").innerHTML = "";
        }


        clickMode = 1;
      }
    }
  }

  document.querySelector("#fifthrow2").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    console.log(clickMode);
    if (clickMode == 1) {
      selfimg = document.querySelector("#fifthrow2 img");
      if (selfimg != null) {

        document.querySelector("#fifthrow2").classList.add("onOffClass");
        clickMode = 2;
        firstClick = "#fifthrow2";
      }
    } else {
      document.querySelector(firstClick).classList.remove("onOffClass");

      selfimg = document.querySelector("#fifthrow2 img");
      if (selfimg == null) {

        previousSquare = document.querySelector(firstClick + " img");
        document.querySelector("#fifthrow2").appendChild(previousSquare);

        // check if the firstClick is third row #1
        if (firstClick == "#thirdrow1") {
          inbetweenImg = document.querySelector("#fourthrow2 img");
          if (inbetweenImg != null) document.querySelector("#fourthrow2").innerHTML = "";
        }
        // check if the firstClick is third row #3
        if (firstClick == "#thirdrow3") {
          inbetweenImg = document.querySelector("#fourthrow3 img");
          if (inbetweenImg != null) document.querySelector("#fourthrow3").innerHTML = "";
        }
           // check if the firstClick is third row #1
        if (firstClick == "#seventhrow1") {
          inbetweenImg = document.querySelector("#sixthrow2 img");
          if (inbetweenImg != null) document.querySelector("#sixthrow2").innerHTML = "";
        }
        // check if the firstClick is third row #3
        if (firstClick == "#seventhrow3") {
          inbetweenImg = document.querySelector("#sixthrow3 img");
          if (inbetweenImg != null) document.querySelector("#sixthrow3").innerHTML = "";
        }


        clickMode = 1;
      }
    }
  }

  document.querySelector("#fifthrow3").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    console.log(clickMode);

    if (clickMode == 1) {
      selfimg = document.querySelector("#fifthrow3 img");
      if (selfimg != null) {}

      document.querySelector("#fifthrow3").classList.add("onOffClass");
      clickMode = 2;
      firstClick = "#fifthrow3";

    } else {
      document.querySelector(firstClick).classList.remove("onOffClass");


      selfimg = document.querySelector("#fifthrow3 img");
      if (selfimg == null) {

        previousSquare = document.querySelector(firstClick + " img");
        document.querySelector("#fifthrow3").appendChild(previousSquare);
        
           // check if the firstClick is third row #1
        if (firstClick == "#thirdrow2") {
          inbetweenImg = document.querySelector("#fourthrow3 img");
          if (inbetweenImg != null) document.querySelector("#fourthrow3").innerHTML = "";
        }
        // check if the firstClick is third row #3
        if (firstClick == "#thirdrow4") {
          inbetweenImg = document.querySelector("#fourthrow4 img");
          if (inbetweenImg != null) document.querySelector("#fourthrow4").innerHTML = "";
        }
   // check if the firstClick is third row #1
        if (firstClick == "#seventhrow4") {
          inbetweenImg = document.querySelector("#sixthrow4 img");
          if (inbetweenImg != null) document.querySelector("#sixthrow4").innerHTML = "";
        }
        // check if the firstClick is third row #3
        if (firstClick == "#seventhrow2") {
          inbetweenImg = document.querySelector("#sixthrow3 img");
          if (inbetweenImg != null) document.querySelector("#sixthrow3").innerHTML = "";
        }


        clickMode = 1;
      }
    }
  }

  document.querySelector("#fifthrow4").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    console.log(clickMode);

    if (clickMode == 1) {
      selfimg = document.querySelector("#fifthrow4 img");
      if (selfimg != null) {}

      document.querySelector("#fifthrow4").classList.add("onOffClass");
      clickMode = 2;
      firstClick = "#fifthrow4";

    } else {
      document.querySelector(firstClick).classList.remove("onOffClass");

      selfimg = document.querySelector("#fifthrow4 img");
      if (selfimg == null) {

        previousSquare = document.querySelector(firstClick + " img");
        document.querySelector("#fifthrow4").appendChild(previousSquare);
        
           // check if the firstClick is third row #1
        if (firstClick == "#thirdrow3") {
          inbetweenImg = document.querySelector("#fourthrow4 img");
          if (inbetweenImg != null) document.querySelector("#fourthrow4").innerHTML = "";
        }
        // check if the firstClick is third row #3
        if (firstClick == "#seventhrow3") {
          inbetweenImg = document.querySelector("#sixthrow4 img");
          if (inbetweenImg != null) document.querySelector("#sixthrow4").innerHTML = "";
        }


        clickMode = 1;
      }
    }
  }

  document.querySelector("#sixthrow1").onclick = function() {
    // document.querySelector("#toprow1").classList.toggle("showMe");
    console.log(clickMode);

    if (clickMode == 1) {
      selfimg = document.querySelector("#sixthrow1 img");
      if (selfimg != null) {}

      document.querySelector("#sixthrow1").classList.add("onOffClass");
      clickMode = 2;
      firstClick = "#sixthrow1";

    } else {
      document.querySelector(firstClick).classList.remove("onOffClass");

      selfimg = document.querySelector("#sixthrow1 img");
      if (selfimg == null) {

        previousSquare = document.querySelector(firstClick + " img");
        document.querySelector("#sixthrow1").appendChild(previousSquare);
        
           // check if the firstClick is third row #1
        if (firstClick == "#fourthrow2") {
          inbetweenImg = document.querySelector("#fifthrow1 img");
          if (inbetweenImg != null) document.querySelector("#fifthrow1").innerHTML = "";
        }
        // check if the firstClick is third row #3
        if (firstClick == "#eigthrow2") {
          inbetweenImg = document.querySelector("#seventhrow1 img");
          if (inbetweenImg != null) document.querySelector("#seventhrow1").innerHTML = "";
        }


        clickMode = 1;
      }
    }
  }

  document.querySelector("#sixthrow2").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    console.log(clickMode);

    if (clickMode == 1) {
      selfimg = document.querySelector("#sixthrow2 img");
      if (selfimg != null) {}

      document.querySelector("#sixthrow2").classList.add("onOffClass");
      clickMode = 2;
      firstClick = "#sixthrow2";

    } else {
      document.querySelector(firstClick).classList.remove("onOffClass");

      selfimg = document.querySelector("#sixthrow2 img");
      if (selfimg == null) {

        previousSquare = document.querySelector(firstClick + " img");
        document.querySelector("#sixthrow2").appendChild(previousSquare);
        
            // check if the firstClick is third row #1
        if (firstClick == "#fourthrow1") {
          inbetweenImg = document.querySelector("#fifthrow1 img");
          if (inbetweenImg != null) document.querySelector("#fifthrow1").innerHTML = "";
        }
        // check if the firstClick is third row #3
        if (firstClick == "#fourthrow3") {
          inbetweenImg = document.querySelector("#fifthrow2 img");
          if (inbetweenImg != null) document.querySelector("#fifthrow2").innerHTML = "";
        }    // check if the firstClick is third row #1
        if (firstClick == "#eighthrow1") {
          inbetweenImg = document.querySelector("#seventhrow1 img");
          if (inbetweenImg != null) document.querySelector("#seventhrow1").innerHTML = "";
        }
        // check if the firstClick is third row #3
        if (firstClick == "#eigthrow3") {
          inbetweenImg = document.querySelector("#seventhrow2 img");
          if (inbetweenImg != null) document.querySelector("#seventhrow2").innerHTML = "";
        }

        clickMode = 1;
      }
    }
  }

  document.querySelector("#sixthrow3").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    console.log(clickMode);

    if (clickMode == 1) {
      selfimg = document.querySelector("#sixthrow3 img");
      if (selfimg != null) {}

      document.querySelector("#sixthrow3").classList.add("onOffClass");
      clickMode = 2;
      firstClick = "#sixthrow3";

    } else {
      document.querySelector(firstClick).classList.remove("onOffClass");

      selfimg = document.querySelector("#sixthrow3 img");
      if (selfimg == null) {

        previousSquare = document.querySelector(firstClick + " img");
        document.querySelector("#sixthrow3").appendChild(previousSquare);
        
             // check if the firstClick is third row #1
        if (firstClick == "#fourthrow2") {
          inbetweenImg = document.querySelector("#fifthrow2 img");
          if (inbetweenImg != null) document.querySelector("#fifthrow2").innerHTML = "";
        }
        // check if the firstClick is third row #3
        if (firstClick == "#fourthrow4") {
          inbetweenImg = document.querySelector("#fifthrow3 img");
          if (inbetweenImg != null) document.querySelector("#fifthrow3").innerHTML = "";
        }    // check if the firstClick is third row #1
        if (firstClick == "#eighthrow2") {
          inbetweenImg = document.querySelector("#seventhrow2 img");
          if (inbetweenImg != null) document.querySelector("#seventhrow2").innerHTML = "";
        }
        // check if the firstClick is third row #3
        if (firstClick == "#eigthrow4") {
          inbetweenImg = document.querySelector("#seventhrow3 img");
          if (inbetweenImg != null) document.querySelector("#seventhrow3").innerHTML = "";
        }

        clickMode = 1;
      }
    }
  }

  document.querySelector("#sixthrow4").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    console.log(clickMode);

    if (clickMode == 1) {
      selfimg = document.querySelector("#sixthrow4 img");
      if (selfimg != null) {}

      document.querySelector("#sixthrow4").classList.add("onOffClass");
      clickMode = 2;
      firstClick = "#sixthrow4";

    } else {
      document.querySelector(firstClick).classList.remove("onOffClass");

      selfimg = document.querySelector("#sixthrow4 img");
      if (selfimg == null) {

        previousSquare = document.querySelector(firstClick + " img");
        document.querySelector("#sixthrow4").appendChild(previousSquare);
        
        // check if the firstClick is third row #1
        if (firstClick == "#fourthrow3") {
          inbetweenImg = document.querySelector("#fifthrow3 img");
          if (inbetweenImg != null) document.querySelector("#fifthrow3").innerHTML = "";
        }
        // check if the firstClick is third row #3
        if (firstClick == "#eigthrow3") {
          inbetweenImg = document.querySelector("#seventhrow3 img");
          if (inbetweenImg != null) document.querySelector("#seventhrow3").innerHTML = "";
        } 

        clickMode = 1;
      }
    }
  }

  document.querySelector("#seventhrow1").onclick = function() {
    // document.querySelector("#toprow1").classList.toggle("showMe");
    console.log(clickMode);

    if (clickMode == 1) {
      selfimg = document.querySelector("#seventhrow1 img");
      if (selfimg != null) {}

      document.querySelector("#seventhrow1").classList.add("onOffClass");
      clickMode = 2;
      firstClick = "#seventhrow1";

    } else {
      document.querySelector(firstClick).classList.remove("onOffClass");

      selfimg = document.querySelector("#seventhrow1 img");
      if (selfimg == null) {

        previousSquare = document.querySelector(firstClick + " img");
        document.querySelector("#seventhrow1").appendChild(previousSquare);
        
        // check if the firstClick is third row #1
        if (firstClick == "#fifthrow2") {
          inbetweenImg = document.querySelector("#sixthrow2 img");
          if (inbetweenImg != null) document.querySelector("#sixthrow2").innerHTML = "";
        }

        clickMode = 1;
      }
    }
  }

  document.querySelector("#seventhrow2").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    console.log(clickMode);

    if (clickMode == 1) {
      selfimg = document.querySelector("#seventhrow2 img");
      if (selfimg != null) {}

      document.querySelector("#seventhrow2").classList.add("onOffClass");
      clickMode = 2;
      firstClick = "#seventhrow2";

    } else {
      document.querySelector(firstClick).classList.remove("onOffClass");

      selfimg = document.querySelector("#seventhrow2 img");
      if (selfimg == null) {

        previousSquare = document.querySelector(firstClick + " img");
        document.querySelector("#seventhrow2").appendChild(previousSquare);
        
        // check if the firstClick is third row #1
        if (firstClick == "#fifthrow1") {
          inbetweenImg = document.querySelector("#sixthrow2 img");
          if (inbetweenImg != null) document.querySelector("#sixthrow2").innerHTML = "";
        }
        // check if the firstClick is third row #3
        if (firstClick == "#fifthrow3") {
          inbetweenImg = document.querySelector("#sixthrow2 img");
          if (inbetweenImg != null) document.querySelector("#sixthrow2").innerHTML = "";
        } 

        clickMode = 1;
      }
    }
  }

  document.querySelector("#seventhrow3").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    console.log(clickMode);

    if (clickMode == 1) {
      selfimg = document.querySelector("#seventhrow3 img");
      if (selfimg != null) {}

      document.querySelector("#seventhrow3").classList.add("onOffClass");
      clickMode = 2;
      firstClick = "#seventhrow3";

    } else {
      document.querySelector(firstClick).classList.remove("onOffClass");

      selfimg = document.querySelector("#seventhrow3 img");
      if (selfimg == null) {

        previousSquare = document.querySelector(firstClick + " img");
        document.querySelector("#seventhrow3").appendChild(previousSquare);
        
        // check if the firstClick is third row #1
        if (firstClick == "#fifthrow2") {
          inbetweenImg = document.querySelector("#sixthrow3 img");
          if (inbetweenImg != null) document.querySelector("#sixthrow3").innerHTML = "";
        }
        // check if the firstClick is third row #3
        if (firstClick == "#fifthrow4") {
          inbetweenImg = document.querySelector("#sixthrow4 img");
          if (inbetweenImg != null) document.querySelector("#sixthrow4").innerHTML = "";
        } 

        clickMode = 1;
      }
    }
  }

  document.querySelector("#seventhrow4").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    console.log(clickMode);

    if (clickMode == 1) {
      selfimg = document.querySelector("#seventhrow4 img");
      if (selfimg != null) {}

      document.querySelector("#seventhrow4").classList.add("onOffClass");
      clickMode = 2;
      firstClick = "#seventhrow4";

    } else {
      document.querySelector(firstClick).classList.remove("onOffClass");

      selfimg = document.querySelector("#seventhrow4 img");
      if (selfimg == null) {

        previousSquare = document.querySelector(firstClick + " img");
        document.querySelector("#seventhrow4").appendChild(previousSquare);
        
        // check if the firstClick is third row #1
        if (firstClick == "#fifthrow3") {
          inbetweenImg = document.querySelector("#sixthrow4 img");
          if (inbetweenImg != null) document.querySelector("#sixthrow4").innerHTML = "";
        }

        clickMode = 1;
      }
    }
  }

  document.querySelector("#eighthrow1").onclick = function() {
    // document.querySelector("#toprow1").classList.toggle("showMe");
    console.log(clickMode);

    if (clickMode == 1) {
      selfimg = document.querySelector("#eighthrow1 img");
      if (selfimg != null) {}

      document.querySelector("#eighthrow1").classList.add("onOffClass");
      clickMode = 2;
      firstClick = "#eighthrow1";

    } else {
      document.querySelector(firstClick).classList.remove("onOffClass");

      selfimg = document.querySelector("#eighthrow1 img");
      if (selfimg == null) {

        previousSquare = document.querySelector(firstClick + " img");
        document.querySelector("#eighthrow1").appendChild(previousSquare);
        
         // check if the firstClick is third row #1
        if (firstClick == "#sixthrow2") {
          inbetweenImg = document.querySelector("#seventhrow1 img");
          if (inbetweenImg != null) document.querySelector("#seventhrow1").innerHTML = "";
        }

        clickMode = 1;
      }
    }
  }

  document.querySelector("#eighthrow2").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    console.log(clickMode);

    if (clickMode == 1) {
      selfimg = document.querySelector("#eighthrow2 img");
      if (selfimg != null) {}

      document.querySelector("#eighthrow2").classList.add("onOffClass");
      clickMode = 2;
      firstClick = "#eighthrow2";

    } else {
      document.querySelector(firstClick).classList.remove("onOffClass");

      selfimg = document.querySelector("#eighthrow2 img");
      if (selfimg == null) {

        previousSquare = document.querySelector(firstClick + " img");
        document.querySelector("#eighthrow2").appendChild(previousSquare);
        
           // check if the firstClick is third row #1
        if (firstClick == "#sixthrow1") {
          inbetweenImg = document.querySelector("#seventhrow1 img");
          if (inbetweenImg != null) document.querySelector("#seventhrow1").innerHTML = "";
        }
        // check if the firstClick is third row #3
        if (firstClick == "#sixthrow3") {
          inbetweenImg = document.querySelector("#seventhrow2 img");
          if (inbetweenImg != null) document.querySelector("#seventhrow2").innerHTML = "";
        }


        clickMode = 1;
      }
    }
  }

  document.querySelector("#eighthrow3").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    console.log(clickMode);

    if (clickMode == 1) {
      selfimg = document.querySelector("#eighthrow3 img");
      if (selfimg != null) {}

      document.querySelector("#eighthrow3").classList.add("onOffClass");
      clickMode = 2;
      firstClick = "#eighthrow3";

    } else {
      document.querySelector(firstClick).classList.remove("onOffClass");

      selfimg = document.querySelector("#eighthrow3 img");
      if (selfimg == null) {

        previousSquare = document.querySelector(firstClick + " img");
        document.querySelector("#eighthrow3").appendChild(previousSquare);
        
           // check if the firstClick is third row #1
        if (firstClick == "#sixthrow2") {
          inbetweenImg = document.querySelector("#sevethrow2 img");
          if (inbetweenImg != null) document.querySelector("#seventhrow2").innerHTML = "";
        }
        // check if the firstClick is third row #3
        if (firstClick == "#sixthrow4") {
          inbetweenImg = document.querySelector("#seventhrow3 img");
          if (inbetweenImg != null) document.querySelector("#seventhrow3").innerHTML = "";
        }


        clickMode = 1;
      }
    }
  }

  document.querySelector("#eighthrow4").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    console.log(clickMode);

    if (clickMode == 1) {
      selfimg = document.querySelector("#eighthrow4 img");
      if (selfimg != null) {}

      document.querySelector("#eighthrow4").classList.add("onOffClass");
      clickMode = 2;
      firstClick = "#eighthrow4";

    } else {
      document.querySelector(firstClick).classList.remove("onOffClass");

      selfimg = document.querySelector("#eighthrow4 img");
      if (selfimg == null) {

        previousSquare = document.querySelector(firstClick + " img");
        document.querySelector("#eighthrow4").appendChild(previousSquare);
        
         // check if the firstClick is third row #1
        if (firstClick == "#sixthrow3") {
          inbetweenImg = document.querySelector("#sevethrow3 img");
          if (inbetweenImg != null) document.querySelector("#seventhrow3").innerHTML = "";
        }

        clickMode = 1;
      }
    }
  }

  // document.querySelector("#footer").innerHTML += "<p>This was not my own recipe.</p>";
} // end of window.onload