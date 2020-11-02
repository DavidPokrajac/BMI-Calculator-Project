window.onload = function(){

    // Europe container variables
    var weight = document.querySelector("#weight");
    var height = document.querySelector("#height");
    var hi = document.querySelector("#hi");
    var hey = document.querySelector("#hey");
    var buttonOne = document.querySelector("#david");

    // US container variables
    var usHeightFt = document.querySelector("#us-height");
    var usHeightIn = document.querySelector("#us-height-in");
    var usWeight = document.querySelector("#us-weight");
    var x = document.querySelector("#x");
    var t = document.querySelector("#t");
    var buttonTwo = document.querySelector("#kevin");

    // Adding logic when the first button in clicked
    buttonOne.addEventListener("click", function(e){

      e.preventDefault;

      // Formula for BMI index
      var he = weight.value / (height.value * height.value) * 10000;

      // If no value display an alert
      if(weight.value === "" || height.value === ""){
        hi.textContent = "Please input something";
      } else{

      // Round the score in two decimals
      var yo = he.toFixed(2);

      // If the score different apply different styles and messages
      if(yo < 18.49){
        hi.textContent = "Your BMI: " + yo;
        hey.innerHTML = "<i class='fas fa-bell danger'></i> Underweight <i class='fas fa-bell danger'></i>";
        hey.style.color = "firebrick";
      } else if(yo >= 18.50 && yo < 24.99){
        hi.textContent = "Your BMI: " + yo;
        hey.innerHTML = "<i class='fas fa-check success'></i> Normal weight <i class='fas fa-check success'></i>";
        hey.style.color = "darkgreen";
      } else if(yo >= 25.00 && yo < 29.99){
        hi.textContent = "Your BMI: " + yo;
        hey.innerHTML = "<i class='fas fa-bell danger'></i> Overweight <i class='fas fa-bell danger'></i>";
        hey.style.color = "firebrick";
      } else{
        hi.textContent = "Your BMI: " + yo;
        hey.innerHTML = "<i class='fas fa-skull-crossbones danger'></i> Obese <i class='fas fa-skull-crossbones danger'></i>";
        hey.style.color = "firebrick";
      }

    });
}
