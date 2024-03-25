let count = 0;
while (count < 10) {
  console.log(`Count: ${count}`);
  count += 1;
}

// Змінна clientCounter зберігає кількість зайнятих номерів на поточний момент.
// Змінна maxClients зберігає загальну кількість номерів у готелі.
// Завдяки циклу while місця в готелі будуть заповнюватися доти, доки поточна кількість
//  клієнтів не дорівнюватиме максимально допустимій.
let clientCounter = 18;
const maxClients = 25;
while (clientCounter < maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
}

