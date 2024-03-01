
// create array of froyo flavors
const froyoFlavors = ['vanilla', 'vanilla', 'vanilla', 'strawberry', 'coffee', 'coffee'];

// create prompt to enter froyo flavors: vanilla,vanilla,vanilla,strawberry,coffee,coffee
prompt("Please enter: vanilla, vanillac vanilla, strawverry, coffee, coffee");

// create functoin to look through array
function contFreq(array) {
    const froyoObject = {};
// create loop to get number of flavors orderd
    for (let i = 0; i < array.length; i++) {
        if (froyoObject[array[i]] === undefined) {
            froyoObject[array[i]] = 1;
        } else {
            froyoObject[array[i]] += 1;
        }
    }
// log as table to show flavors ordered in the console.  
    console.table(froyoObject);
}


contFreq(froyoFlavors);

