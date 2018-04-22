function checkInput()
{
  var inputNum = parseFloat(document.getElementById('rainVar').value);

  console.log(typeof inputNum);
  if(!isNaN(inputNum))
  {
    calculateRainfall();
  }
  else
  {
    alert("Please enter a valid Rainfall Intensity to continue.");
  }
}

function calculateRainfall()
{
  var x = document.getElementById('rainVar').value;
  var intensity = parseFloat(x);
  var area1 = 498530.06;
  var area2 = 582133.55;
  var area3 = 776223.26
  var areaTotal = 1080663.61;
  var coef1 = 0.8075231893;
  var coef2 = 0.7833538628;
  var coef3 = 0.8;
  var vol1 = 1812.434167;
  var vol2 = 2893.284967;
  var result = 12*((((coef1*(intensity/12)*area1 )- vol1)+((coef2*(intensity/12)*area2) -vol2) + (coef3*(intensity/12)*area3))/(area1 + area2));
  var finalResult = parseFloat(result).toFixed(9);

  if(result < 0.5)
  {
    document.getElementById('contents2').style.backgroundColor = "green";
    document.getElementById('reccomendation').innerHTML = "Accumulation: " + finalResult +  " inches </br>Recommendation: low accumulation expected, home flooding not likely, drive carefully.";
  }
  else if(result >= 0.5 && result < 2)
  {
    document.getElementById('contents2').style.backgroundColor = "yellow";
    document.getElementById('reccomendation').innerHTML = "Accumulation: " + finalResult + " inches </br>Recommendation: be cautious at home, hydroplaning danger; drive with caution.";
  }
  else
  {
    document.getElementById('contents2').style.backgroundColor = "red";
    document.getElementById('reccomendation').innerHTML = "<b>Accumulation: " + finalResult + " inches </br>Recommendation: Accumulation approaching dangerous levels, please proceed with caution. Damage to home possible, driving NOT advised.</b>";
  }
}
