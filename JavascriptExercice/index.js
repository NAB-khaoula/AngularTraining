// Import stylesheets
// import './style.css';
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Write TypeScript code!
var body = document.querySelector('body');
body.innerHTML = "\n<div>\n<input type=\"text\" placeholder=\"Please enter your item\" id=\"inputValue\">\n<button id=\"addButton\">ADD ITEM</button>\n<input type=\"text\" placeholder=\"Please enter the item you want to delete\" id=\"deleteValue\">\n<button id=\"deleteButton\">Delete Item</button>\n<ul id=\"groceryList\"></ul>\n</div>";
var inputValue = document.getElementById('inputValue');
var deleteValue = document.getElementById('deleteValue');
var groceryList = document.getElementById('groceryList');
var ShoppingList = /** @class */ (function () {
    function ShoppingList() {
        var _this = this;
        this.groceries = [];
        this.deleteItem = function (item) {
            _this.groceries = _this.groceries.filter(function (el) { return el !== item; });
        };
        this.render = function () {
            var li = document.createElement('li');
            if (_this.groceries) {
                for (var _i = 0, _a = _this.groceries; _i < _a.length; _i++) {
                    var grocery = _a[_i];
                    li.innerHTML = grocery;
                    groceryList.appendChild(li);
                }
            }
            inputValue.value = '';
        };
        this.addEvent = function () {
            var addButton = document.getElementById('addButton');
            addButton.addEventListener('click', function () {
                _this.addItem(inputValue.value);
                _this.render();
            });
        };
        this.deleteEvent = function () {
            var deleteButton = document.querySelector('#deleteButton');
            deleteButton.addEventListener('click', function (e) {
                _this.deleteItem(deleteValue.value);
                console.log(deleteValue.value);
                _this.render();
            });
        };
        // searchEvent = () => {
        // 	inputValue.addEventListener('input', (e) =>{
        // 		let temp = this.groceries;
        // 		// this.groceries = this.groceries.filter(el => el.includes(inputValue.value));
        // 		this.render();
        // 		this.groceries = temp;
        // 	})
        // };
    }
    ShoppingList.prototype.addItem = function (item) {
        this.groceries = __spreadArray(__spreadArray([], this.groceries, true), [item], false);
    };
    ;
    return ShoppingList;
}());
var myList = new ShoppingList();
myList.addEvent();
myList.deleteEvent();
// myList.searchEvent();
// myList.render();
