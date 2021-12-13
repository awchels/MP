clickMode = 1; // this is either 1 or 2

window.onload = function() {

  document.querySelector("#toprow1").onclick = function() {
    // document.querySelector("#toprow1").classList.toggle("showMe");
    window.alert("toprow1");
  }

  document.querySelector("#toprow2").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    window.alert("toprow2");
  }

  document.querySelector("#toprow3").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    window.alert("toprow3");
  }

  document.querySelector("#toprow4").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    window.alert("toprow4");
  }

  document.querySelector("#secondrow1").onclick = function() {
    // document.querySelector("#toprow1").classList.toggle("showMe");
    window.alert("secondrow1");
  }

  document.querySelector("#secondrow2").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    window.alert("secondrow2");
  }

  document.querySelector("#secondrow3").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    window.alert("secondrow3");
  }

  document.querySelector("#secondrow4").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    window.alert("secondrow4");
  }

  document.querySelector("#thirdrow1").onclick = function() {
    // document.querySelector("#toprow1").classList.toggle("showMe");
    
    console.log(clickMode);
    
    if (clickMode == 1) {
      document.querySelector("#thirdrow1").classList.add("onOffClass");
      clickMode = 2;
      
      
    } else {
      document.querySelector("#thirdrow1").classList.remove("onOffClass");
      
      window.alert("It’s a rectangle!");
      clickMode = 1;
    }

  }

  document.querySelector("#thirdrow2").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    window.alert("thirdrow2");
  }

  document.querySelector("#thirdrow3").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    window.alert("thirdrow3");
  }

  document.querySelector("#thirdrow4").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    window.alert("thirdrow4");
  }


  document.querySelector("#fourthrow1").onclick = function() {
    // document.querySelector("#toprow1").classList.toggle("showMe");
    
     console.log(clickMode);
    
    if (clickMode == 1) {
      document.querySelector("#fourthrow1").classList.add("onOffClass");
      clickMode = 2;
      
      
    } else {
      document.querySelector("#fourthrow1").classList.remove("onOffClass");
      
      window.alert("It’s a rectangle!");
      clickMode = 1;
    }
    // window.alert("fourthrow1");
  }

  document.querySelector("#fourthrow2").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    window.alert("fourthrow2");
  }

  document.querySelector("#fourthrow3").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    window.alert("fourthrow3");
  }

  document.querySelector("#fourthrow4").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    window.alert("fourthrow4");
  }


  document.querySelector("#fifthrow1").onclick = function() {
    // document.querySelector("#toprow1").classList.toggle("showMe");
    window.alert("fifthrow1");
  }

  document.querySelector("#fifthrow2").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    window.alert("fifthrow2");
  }

  document.querySelector("#fifthrow3").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    window.alert("fifthrow3");
  }

  document.querySelector("#fifthrow4").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    window.alert("fifthrow4");
  }

  document.querySelector("#sixthrow1").onclick = function() {
    // document.querySelector("#toprow1").classList.toggle("showMe");
    window.alert("sixthrow1");
  }

  document.querySelector("#sixthrow2").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    window.alert("sixthrow2");
  }

  document.querySelector("#sixthrow3").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    window.alert("sixthrow3");
  }

  document.querySelector("#sixthrow4").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    window.alert("sixthrow4");
  }

  document.querySelector("#seventhrow1").onclick = function() {
    // document.querySelector("#toprow1").classList.toggle("showMe");
    window.alert("seventhrow1");
  }

  document.querySelector("#seventhrow2").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    window.alert("seventhrow2");
  }

  document.querySelector("#seventhrow3").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    window.alert("seventhrow3");
  }

  document.querySelector("#seventhrow4").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    window.alert("seventhrow4");
  }

  document.querySelector("#eighthrow1").onclick = function() {
    // document.querySelector("#toprow1").classList.toggle("showMe");
    window.alert("eighthrow1");
  }

  document.querySelector("#eighthrow2").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    window.alert("eighthrow2");
  }

  document.querySelector("#eighthrow3").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    window.alert("eighthrow3");
  }

  document.querySelector("#eighthrow4").onclick = function() {
    // document.querySelector("#ingredients ul").classList.toggle("showMe");
    window.alert("eighthrow4");
  }

  // document.querySelector("#footer").innerHTML += "<p>This was not my own recipe.</p>";
} // end of window.onload