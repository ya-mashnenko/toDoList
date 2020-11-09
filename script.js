const addButton = document.querySelector('.addButton');
const input = document.querySelector('.input');
const container = document.querySelector('.container');

class Item {
  constructor(itemName) {
    this.createDiv(itemName)
  }

  createDiv(itemName) {
    let input = document.createElement('input');
    input.value = itemName;
    input.disabled = true;
    input.classList.add('itemInput');
    input.type = 'text';

    let itemBox = document.createElement('div');
    itemBox.classList.add('item');

    let editButton = document.createElement('button');
    editButton.innerHTML = 'edit';
    editButton.classList.add('editButton');

    let removeButton = document.createElement('button');
    removeButton.innerHTML = 'remove';
    removeButton.classList.add('removeButton');

    container.appendChild(itemBox);

    itemBox.appendChild(input);
    itemBox.appendChild(editButton);
    itemBox.appendChild(removeButton);

    editButton.addEventListener('click', () => this.edit(input));

    removeButton.addEventListener('click', () => this.remove(itemBox));
  }

  edit(input) {
    input.disabled = !input.disabled;
    input.select();
  };

  remove(item) {
    container.removeChild(item);
  }
};

function addItem() {
  if (input.value !== '') {
    new Item(input.value);
    input.value = '';
  }
}

addButton.addEventListener('click', addItem);

window.addEventListener('keydown', (e) => {
  if (e.which === 13) {
    addItem();
  }
})
