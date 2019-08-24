'use strict';
/* global Item */
// eslint-disable-next-line no-unused-vars
const store = (function(){
  const addItem = function(name) {
    this.items.push(name);
  };

  const findById = function(id) {
    return store.items.find(item => item.id === id);
  };

  const findAndUpdate = function(id, newData) {
    let obj = findById(id);
    Object.assign(obj,newData);
  };

  const findAndDelete = function(id) {
    store.items = store.items.filter(item => item.id !== id);
  };

  const toggleCheckedFilter = function() {
    store.hideCheckedItems = !store.hideCheckedItems;
  };

  const setItemIsEditing = function(id, isEditing) {
    const item = this.findById(id);
    item.isEditing = isEditing;
  };

  const setSearchTerm = function(term) {
    this.searchTerm = term;
  };

  const setError = function(message) {
    this.error = 'message';
  };

  return {
    items: [],
    hideCheckedItems: false,
    searchTerm: '',
    error: null,

    setError,
    addItem,
    findById,
    findAndDelete,
    findAndUpdate,
    toggleCheckedFilter,
    setSearchTerm,
    setItemIsEditing,
  };
  
}());
