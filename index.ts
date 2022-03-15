// Import stylesheets
// import './style.css';

// Write TypeScript code!


const body = document.querySelector('body');
body.innerHTML = `
<div>
<input type="text" placeholder="Please enter your item" id="inputValue">
<button id="addButton">ADD ITEM</button>
<ul id="groceryList"></ul>
</div>`


let inputValue = document.getElementById('inputValue') as HTMLInputElement;
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
		const liElement = document.querySelector('ul')
		liElement.addEventListener('click', (e) => {
			this.deleteItem(document.getElementById('inputValue').value);
			this.render();
		})
	};

	searchEvent = () => {
		inputValue.addEventListener('input', (e) =>{
			let temp = this.groceries;
			// this.groceries = this.groceries.filter(el => el.includes(inputValue.value));
			this.render();
			this.groceries = temp;
		})
	}
}

let myList: ShoppingList = new ShoppingList();

myList.addEvent();
myList.deleteEvent();
myList.searchEvent();

