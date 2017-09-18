
function displayInfo (car) {

  var infoElement = document.getElementById('info');

  // Brand
  infoElement.children[0].children[1].innerHTML = car.brand;

  // Color
  var colorElement = document.querySelector('div[name="color"] .value');
  colorElement.innerHTML = car.color;

  // Owner
  var ownerElement = document.getElementsByClassName('value')[2];
  ownerElement.innerHTML = car.owner.name;

  var colorBody = document.getElementById('car-body');
  colorBody.style.fill = car.color;
}

function move(car) {
  var carImage = document.getElementById('car');

  var carPositionX = parseInt(carImage.style.left.replace('px', '')) || 0;
  carPositionX += car.speed;

  if (carPositionX > 800) {
    carPositionX = 0;
  }

  if (carPositionX < 0) {
    carPositionX = 800;
  }

  carImage.style.left = carPositionX + 'px';
}

function animate(car) {
  move(car);
  requestAnimationFrame(function () {
    animate(car);
  });
}
