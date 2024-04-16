// JSON - JavaScript Object Notation
// JSON.stringify()
// JSON.parse()

const people = [
    {
        id: 1,
        name: "Felipe",
        lastName: "Fontoura",
        bornDate: new Date(1982, 1, 18),
        address: {
            city: "São José dos Campos",
        },
    },
    {
        id: 2,
        name: "Jeiel",
        lastName: "Jedson",
        bornDate: new Date(2005, 5, 24),
        address: {
            city: "Coroaci",
        },
    },
]


console.log(JSON.stringify(people)); // conversão obj -> string / JSON

const json = '[{"id":1,"name":"Felipe","lastName":"Fontoura","bornDate":"1982-02-18T03:00:00.000Z","address":{"city":"São José dos Campos"}},{"id":2,"name":"Jeiel","lastName":"Jedson","bornDate":"2005-06-24T03:00:00.000Z","address":{"city":"Coroaci"}}]'
console.log(JSON.parse(json)); // conversão string / JSON -> obj