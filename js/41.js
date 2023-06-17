const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (let potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },

  removePotion(potionName) {
    let potionIndex = -1;
    for (const potion of this.potions) {
      if (potion.name === potionName) {
        potionIndex = this.potions.indexOf(potion);
      }
    }

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    return this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      let potionIndex = 0;
      if (potion.name === oldName) {
        potionIndex = this.potions.indexOf(potion);
        potion.name = newName;
      }

      if (potionIndex === -1) {
        return `Potion ${oldName} is not in inventory!`;
      }
    }
  },
  // Change code above this line
};
