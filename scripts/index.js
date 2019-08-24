'use strict';
/* global shoppingList, store, Item */
// eslint-disable-next-line no-unused-vars
$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();

  api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      //Test #7
      // const item = store.items[0];
      // console.log('current name: ' + item.name);
      // store.findAndUpdate(item.id, { name: 'lady' });
      // console.log('new name: ' + item.name);
      shoppingList.render();
    });
});

//store.items.push(Item.create('apples'));

// Test #1
// fetch('https://thinkful-list-api.herokuapp.com/ei-student/items')
//   .then(res => res.json())
//   .then(data => console.log(data));

//Test #2
// api.getItems()
//   .then(res => res.json())
//   .then(resJson => console.log(resJson));

//Test #3
// api.createItem('poop')
//   .then(res => res.json())
//   .then((newItem) => {
//     return api.getItems();
//   })
//   .then(res => res.json())
//   .then((items) => {
//     console.log(items);
//   });

//Test #5
// api.getItems()
//   .then(res => res.json())
//   .then((items) => {
//     const item = items[0];
//     return api.updateItem(item.id, { checked: 'foobar' });
//   })
//   .then(res => res.json())
//   .then(() => console.log('updated!'));