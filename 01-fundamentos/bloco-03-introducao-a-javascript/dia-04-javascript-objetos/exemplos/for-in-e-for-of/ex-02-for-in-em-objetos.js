let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

for (let index in car) {
  console.log(index, car[index]);
}

for (let index in car) {
  console.log(index);
}

for (let index in car) {
  console.log(car[index]);
}

for (let index in car) {
  console.log(car);
}