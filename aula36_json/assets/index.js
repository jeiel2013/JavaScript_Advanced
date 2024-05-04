const person = {
    name: "Jeiel Jedson",
    age: 18,
    address: {
        street: "Rua Central",
        number: "100",
        complement: "",
        district: "Centro",
        city: "São Paulo",
        state: "São Paulo",
    },
};

const personStr = JSON.stringify(person);
// console.log(personStr);

const personObj = JSON.parse(personStr);
console.log(personObj);