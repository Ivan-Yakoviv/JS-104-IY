// До нас звернулася власниця крамниці зілля «У старої жаби» 
// і замовила програму для ведення інвентарю.Програма має додавати, видаляти, шукати та оновлювати зілля.

// Оголоси об'єкт atTheOldToad з наступними властивостями:

// potions — масив, де будуть зберігатися зілля. Нехай зараз він буде порожнім
// getPotions() — метод, який повертає рядок "List of all available potions"
// addPotion(potionName) — метод, який повертає рядок "Adding <potionName>", 
// де potionName — це значення параметра potionName

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Stone skin", price: 520 },
  ],
  // Зміни код метода об'єкта getPotions() так, щоб він повертав значення властивості potions
  getPotions() {
    return this.potions;
  },
  // Зміни код методу addPotion(potionName) так, щоб він додавав зілля potionName
  // в кінець масиву у властивості potions.
  addPotion(newPotion) {
    this.potions.push(newPotion);
  },
  // Додай метод getTotalPrice(), який має повертати загальну вартість усіх зілль з властивості potions.
  getTotalPrice() {
    let total = 0;
    for (const potion of this.potions) {
      total += potion.price;
    } 
    return total;
  },
  // Доповни метод updatePotionName(oldName, newName) таким чином,
  // щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.
  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      if (potion.name === oldName) {
        potion.name = newName;
      }
    }
  },

};
atTheOldToad.addPotion({ name: "Speed", price: 960 });
atTheOldToad.updatePotionName("Stone skin", "Invisibility");
console.log(atTheOldToad.getTotalPrice());
console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));
console.log(atTheOldToad);
