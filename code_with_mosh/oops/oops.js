let person = {
    name: 'Jayanth',
    age: 26
}

// Dot notation
person.name = 'Kumar';
console.log(person.name);

// Bracket notation
person['name'] = 'vidwala';
console.log(person['name']);

let selectedValue = 'age';
person[selectedValue] = 23;
console.log(person[selectedValue])