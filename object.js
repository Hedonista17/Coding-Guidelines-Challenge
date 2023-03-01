// bad
const item = new Object();

//good

const ITEM = {};

//bad 
const test = 'test';

const obj = {
    test: test
}

//good
const TEST = "test";

const OBJ = {
    test: TEST,
}


//bad copy
const person = {
    name: 'person',
    age: 20,
    lastName: 'lastname'
}

let newObj = {};

for(key in person){
    newObj[key] = person[key];
}

//good

const PERSON = {
    name: "person",
    age: 20,
    lastName: "lastname",
}
for(key in PERSON){
    let newObj = {};
    newObj[key] = PERSON[key];
}


// bad 
const bad = {
    'foo': 3,
    'bar': 4,
    'data-blah': 5,
};

//good
const BAD = {
    foo: 3,
    bar: 4,
    datablah: 5,
};

// bad
const items = new Array();

// good

const ITEMS = [];

//bad 
const list = [];

list[0] = 'add new element to list';

//good

const LIST = [];

LIST.push ('add new element to list') ;


//bad copy
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i += 1) {
  itemsCopy[i] = items[i];
}

//good
const LEN = items.length;
for (let i = 0; i < LEN; i += 1) {
    let itemsCopy = [];
  itemsCopy[i] = LEN[i];
}



//destructurin obj
// bad
function getFullName(user) {
    const firstName = user.firstName;
    const lastName = user.lastName;
  
    return `${firstName} ${lastName}`;
}

//good

const FIRST_NAME = user.firstName;
const LAST_NAME = user.lastName;
function getFullName() {
    return `${FIRST_NAME} ${LAST_NAME}`;
}

//destructurin array
const arr = [1, 2, 3, 4];

// bad
//const first = arr[0];
//const second = arr[1];

//good
const [first,second] = arr;
[first,second] = [arr[0],arr[1]];
