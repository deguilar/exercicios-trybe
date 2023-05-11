const pin = (max) => {
  let string = '';
  for (let index = 1; index <= max; index += 1) {
    if (index % 4 === 0) {
      string += 'PIN ';
    } else {
      string += `${index} `;
    }
    
  }
  return string;
}

console.log(pin(40));

// _________________________________________________________
// OU


const pin2 = (max) => {
  let string = '';
  for (let index = 1; index <= max; index += 1) {
    string += (index % 4 === 0 ? 'PIN ' : `${index} `);
  }
  return string;
}

console.log(pin2(40));

//_________________________________________________________
//OU


const pin3 = (max) => {
  let string = '';
  for (let index = 1; index <= max; index += 1) {
    index % 4 === 0 ? string += 'PIN ' : string += `${index} `;
  }
  return string;
}

console.log(pin3(40));





