// Import stylesheets
// import './style.css';

// Write TypeScript code!


const body = document.querySelector('body');
body.innerHTML = `
<div>
<input type="text" placeholder="Please enter your item" id="inputValue">
<button id="addButton">ADD ITEM</button>
<input type="text" placeholder="Please enter the item you want to delete" id="deleteValue">
<button id="deleteButton">Delete Item</button>
<ul id="groceryList"></ul>
</div>`


let inputValue = document.getElementById('inputValue') as HTMLInputElement;
let deleteValue = document.getElementById('deleteValue') as HTMLInputElement;
const groceryList = document.getElementById('groceryList');
class ShoppingList {
	groceries: string[] = [];
	addItem(item: string): void{
		this.groceries = [...this.groceries, item];
	};
	
	deleteItem = (item: string): void =>{
		this.groceries = this.groceries.filter(el => el !== item);
	};
	
	render = () => {
		const li = document.createElement('li');
		if(this.groceries){
			for(const grocery of this.groceries){
				li.innerHTML = grocery;
				groceryList.appendChild(li);
			}
		}
		inputValue.value = '';
	};
	
	addEvent = () => {
		const addButton = document.getElementById('addButton');
		addButton.addEventListener('click', () => {
			this.addItem(inputValue.value);
			this.render();
		})
	};

	deleteEvent = () => {
		const deleteButton = document.querySelector('#deleteButton')
		deleteButton.addEventListener('click', (e) => {
			this.deleteItem(deleteValue.value);
			this.render();
		})
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

let myList: ShoppingList = new ShoppingList();

myList.addEvent();
myList.deleteEvent();
// myList.searchEvent();

