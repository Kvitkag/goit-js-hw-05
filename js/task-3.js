class Storage {
    constructor([...items]) {
    this.items = items;
  }

    getItems() {
        return this.items;
    }

    addItem(item) {
        return items.push(item);
    }

    removeItem(item) {
    const i = this.items.indexOf(item);
        if(i >= 0) {
            this.items.splice(i,1);
        }
    }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]