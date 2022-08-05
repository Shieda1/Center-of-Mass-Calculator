// https://calculator.swiftutors.com/center-of-mass-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const centerofMassRadio = document.getElementById('centerofMassRadio');
const massofObject1Radio = document.getElementById('massofObject1Radio');
const massofObject2Radio = document.getElementById('massofObject2Radio');
const distanceofObject1fromFixedPointRadio = document.getElementById('distanceofObject1fromFixedPointRadio');
const distanceofObject2fromFixedPointRadio = document.getElementById('distanceofObject2fromFixedPointRadio');

let centerofMass;
let massofObject1 = v1;
let massofObject2 = v2;
let distanceofObject1fromFixedPoint = v3;
let distanceofObject2fromFixedPoint = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

centerofMassRadio.addEventListener('click', function() {
  variable1.textContent = '(m1) Mass of Object 1 (kg)';
  variable2.textContent = '(m2) Mass of Object 2 (kg)';
  variable3.textContent = '(x1) Distance of Object 1 from Fixed Point (m)';
  variable4.textContent = '(x2) Distance of Object 2 from Fixed Point (m)';
  massofObject1 = v1;
  massofObject2 = v2;
  distanceofObject1fromFixedPoint = v3;
  distanceofObject2fromFixedPoint = v4;
  result.textContent = '';
});

massofObject1Radio.addEventListener('click', function() {
  variable1.textContent = '(X) Center of Mass (m)';
  variable2.textContent = '(m2) Mass of Object 2 (kg)';
  variable3.textContent = '(x1) Distance of Object 1 from Fixed Point (m)';
  variable4.textContent = '(x2) Distance of Object 2 from Fixed Point (m)';
  centerofMass = v1;
  massofObject2 = v2;
  distanceofObject1fromFixedPoint = v3;
  distanceofObject2fromFixedPoint = v4;
  result.textContent = '';
});

massofObject2Radio.addEventListener('click', function() {
  variable1.textContent = '(X) Center of Mass (m)';
  variable2.textContent = '(m1) Mass of Object 1 (kg)';
  variable3.textContent = '(x1) Distance of Object 1 from Fixed Point (m)';
  variable4.textContent = '(x2) Distance of Object 2 from Fixed Point (m)';
  centerofMass = v1;
  massofObject1 = v2;
  distanceofObject1fromFixedPoint = v3;
  distanceofObject2fromFixedPoint = v4;
  result.textContent = '';
});

distanceofObject1fromFixedPointRadio.addEventListener('click', function() {
  variable1.textContent = '(X) Center of Mass (m)';
  variable2.textContent = '(m1) Mass of Object 1 (kg)';
  variable3.textContent = '(m2) Mass of Object 2 (kg)';
  variable4.textContent = '(x2) Distance of Object 2 from Fixed Point (m)';
  centerofMass = v1;
  massofObject1 = v2;
  massofObject2 = v3;
  distanceofObject2fromFixedPoint = v4;
  result.textContent = '';
});

distanceofObject2fromFixedPointRadio.addEventListener('click', function() {
  variable1.textContent = '(X) Center of Mass (m)';
  variable2.textContent = '(m1) Mass of Object 1 (kg)';
  variable3.textContent = '(m2) Mass of Object 2 (kg)';
  variable4.textContent = '(x1) Distance of Object 1 from Fixed Point (m)';
  centerofMass = v1;
  massofObject1 = v2;
  massofObject2 = v3;
  distanceofObject1fromFixedPoint = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(centerofMassRadio.checked)
    result.textContent = `Center of Mass = ${computeCenterofMass().toFixed(2)} m`;

  else if(massofObject1Radio.checked)
    result.textContent = `Mass of Object 1 = ${computeMassofObject1().toFixed(2)} kg`;

  else if(massofObject2Radio.checked)
    result.textContent = `Mass of Object 2 = ${computeMassofObject2().toFixed(2)} kg`;

  else if(distanceofObject1fromFixedPointRadio.checked)
    result.textContent = `Distance of Object 1 from Fixed Point = ${computeDistanceofObject1fromFixedPoint().toFixed(2)} m`;

  else if(distanceofObject2fromFixedPointRadio.checked)
    result.textContent = `Distance of Object 2 from Fixed Point = ${computeDistanceofObject2fromFixedPoint().toFixed(2)} m`;
})

// calculation

function computeCenterofMass() {
  return ((Number(massofObject1.value) * Number(distanceofObject1fromFixedPoint.value)) + (Number(massofObject2.value) * Number(distanceofObject2fromFixedPoint.value))) / (Number(massofObject1.value) + Number(massofObject2.value));
}

function computeMassofObject1() {
  return Number(costofGoodsManufactured.value) - Number(directLaborCost.value) - Number(factoryOverheadCost.value) - Number(openingWorkinProcessInventory.value) + Number(endingWorkinProcessInventory.value);
}

function computeMassofObject2() {
  return Number(costofGoodsManufactured.value) - Number(directMaterialsCost.value) - Number(factoryOverheadCost.value) - Number(openingWorkinProcessInventory.value) + Number(endingWorkinProcessInventory.value);
}

function computeDistanceofObject1fromFixedPoint() {
  return (Number(centerofMass.value) * (Number(massofObject1.value) + Number(massofObject2.value)) - (Number(massofObject2.value) * Number(distanceofObject2fromFixedPoint.value))) / Number(massofObject1.value);
}

function computeDistanceofObject2fromFixedPoint() {
  return (Number(centerofMass.value) * (Number(massofObject1.value) + Number(massofObject2.value)) - (Number(massofObject1.value) * Number(distanceofObject1fromFixedPoint.value))) / Number(massofObject2.value);
}