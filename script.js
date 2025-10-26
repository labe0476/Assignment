function checkEligibility() {
  var score = document.getElementById("scoreInput").value; 

  if (score >= 180) {
    document.getElementById("result").textContent = "Congratulation You Are Eligible For Admission";
  } else {
    document.getElementById("result").textContent =
      " Not Eligible for Admission";
  }
}
