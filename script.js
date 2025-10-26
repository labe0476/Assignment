function checkEligibility() {
  var score = document.getElementById("scoreInput").value; 

  if (score >= 180) {
    document.getElementById("result").innerHTML = "Congratulation You Are Eligible For Admission";
  } else {
    document.getElementById("result").innerHTML =
      " Not Eligible for Admission";
  }
}
