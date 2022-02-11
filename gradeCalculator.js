function addAssignment() {
    var container = document.getElementById("grade-calculator");
    var grade = document.createElement("input");
    var weight = document.createElement("input");
    var num = document.getElementById("member").value;
    grade.type = "grade";
    grade.id = "g" + num;
    grade.className = "num-fill";
    weight.type = "weight";
    weight.id = "w" + num;
    weight.className = "num-fill";
    container.appendChild(grade);
    container.appendChild(weight);
    container.appendChild(document.createElement("br"));
    document.getElementById("member").value = parseInt(num)+1;
  }
  
  function removeAssignment() {
    var container = document.getElementById("grade-calculator");
    container.removeChild(container.lastChild); //removes br
    container.removeChild(container.lastChild); //removes weight
    container.removeChild(container.lastChild); //removes grade
    
    document.getElementById("member").value--;
  }

  function addSlots() {
    var num = document.getElementById("member").value;
    var container = document.getElementById("grade-calculator");
    while(container.hasChildNodes()) {
      container.removeChild(container.lastChild);
    }

    gtitle.innerHTML = "Grade (%):";
    wtitle.innerHTML = "Weight (%):";
    
    for(i = 0; i < num; i++) {
      var grade = document.createElement("input");
      var weight = document.createElement("input");
      grade.type = "grade";
      grade.id = "g" + i;
      grade.className = "num-fill";
      weight.type = "weight";
      weight.id = "w" + i;
      weight.className = "num-fill";
      container.appendChild(grade);
      container.appendChild(weight);
      container.appendChild(document.createElement("br"));
    }

    fgrade.innerHTML = "Final Grade: --%";

    document.getElementById("calcbutton").removeAttribute("hidden");
    document.getElementById("addbutton").removeAttribute("hidden");
    document.getElementById("rembutton").removeAttribute("hidden");
  }

  function myFunction() {
    var container = document.getElementById("grade-calculator");
    var fgradeTemp = 0;
    var num = document.getElementById("member").value;
    var totalWeight = 0;
    for(i = 0; i < num; i++) {
      totalWeight += parseFloat((document.getElementById("w"+i).value));
      fgradeTemp += parseFloat((document.getElementById("g"+i).value * document.getElementById("w"+i).value * 0.01));
    }
    if(totalWeight < 99.9 || totalWeight > 100) {
      fgrade.innerHTML = "Final Grade: " + fgradeTemp.toFixed(2) + "%<br>***Note: total weight does not add up to 100%.***";
    }
    else {
      fgrade.innerHTML = "Final Grade: " + fgradeTemp.toFixed(2) + "%";
    }
  }