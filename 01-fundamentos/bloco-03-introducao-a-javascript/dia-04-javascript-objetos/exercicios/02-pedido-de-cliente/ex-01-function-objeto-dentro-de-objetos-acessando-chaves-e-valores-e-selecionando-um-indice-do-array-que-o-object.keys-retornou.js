// 1 - Complete a função customerInfo() para que seu retorno seja similar a 'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701'.

/* 2 - Complete a função orderModifier() para que seu retorno seja similar a 'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.';
  - Modifique o nome da pessoa compradora para Luiz Silva;
  - Modifique o valor total da compra para R$ 50,00. 
*/

let order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};


function customerInfo(order) {
  let address = 'address'; // Armazene a palavra 'address' em uma variável.
  let deliveryPerson = order.order.delivery.deliveryPerson; // Acesse e armazene o valor da chave `deliveryPerson` em uma variável através de 'notação de ponto'.
  let customerName = order['name']; // Acesse e armazene o valor da chave `name` em uma variável através de 'notação de colchetes'.
  let customerPhone = order['phoneNumber']; // Acesse e armazene o valor da chave `phoneNumber` em uma variável através de 'notação de colchetes'.
  let street = order[address].street; // Acesse e armazene o valor da chave `street` em uma variável através de 'notação de colchetes' e 'notação de ponto'.
  let number = order[address].number; // Acesse e armazene o valor da chave `number` em uma variável através de 'notação de colchetes' e 'notação de ponto'.
  let apartment = order[address].apartment; // Acesse e armazene o valor da chave `apartment` em uma variável através de 'notação de colchetes' e 'notação de ponto'.

  console.log('Olá ' + deliveryPerson + ', entrega para: ' + customerName + ', Telefone: ' + customerPhone + ', R. ' + street + ', Nº: ' + number + ', AP: ' + apartment);
}

customerInfo(order);


//OU

// function customerInfo(order) {
//   // Adicione abaixo as informações necessárias.
//   console.log('Olá, ' + order.order.delivery.deliveryPerson + ', entrega para: ' + order.name + ', Telefone: ' + order.phoneNumber + ', R. ' + order.address.street + ', N°: ' + order.address.number + ', AP: ' + order.address.apartment);
// }

// customerInfo(order);


//_______________________________________________________



function orderModifier(order) {
  // Adicione abaixo as informações necessárias.
  let novoCliente = order.name = 'Luiz Silva'; // Altere o nome da pessoa compradora
  let novoValor = order.payment = 50; // Altere o valor total da compra
  let capturarPizzas = Object.keys(order.order.pizza); // Recupere as chaves que estão em `order.order.pizza`. Tranformado em array
  let capturarCoca = order.order.drinks.coke.type; // Recupere o `type` da chave `coke`.
  console.log('Olá, ' + novoCliente + ', o valor de seu pedido de ' + capturarPizzas[0] + ', ' + capturarPizzas[1] + ' e ' + capturarCoca + ' é R$ ' + novoValor + ',00.');
  // console.log(capturarPizzas);
}

orderModifier(order);