console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
addItem('job')
addItem('dog')
addItem('car')

console.log('added items', basket)

function addItem(item) {
    basket.push(item);
    return true;
}

function listItems() {
    for(const items of basket) {
        console.log(items);
    }
}
console.log("--list items--")
listItems();

function empty() {
    for(const item of basket) {
        basket.pop();
    }
    basket.pop()
    return basket;
}
empty()
console.log("empty basket", basket)






// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
