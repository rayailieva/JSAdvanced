function addItem() {

    let itemText = document.getElementById('newItemText').value;
    let itemValue = document.getElementById('newItemValue').value;

    let option = `<option value="${itemValue}">${itemText}</option>`;
    let dropMenu = document.getElementById('menu');

    dropMenu.innerHTML += option;

    document.getElementById('itemText').value = '';
    document.getElementById('itemValue').value = '';


}