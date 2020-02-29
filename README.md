# ObjectNumFilter
Filters JS object for number only values, setting value keys as a path from the initial object, e.g. { user.age: 30 }

##Example
if you have object like 
```javascript
Users: {
  count: 2,
  users: [
    {
      age: 25,
      salary: 50000,
      firstname: John,
      lastname: Doe
    },
    {
      age: 33,
      salary: 70000,
      firstname: Martha,
      lastname: Whydatname
    },
  ]
}
```
The result object will be 
```javascript
{
  count: 2,
  users.0.age: 25,
  users.0.salary: 50000,
  users.1.age: 33,
  users.1.salary, 70000
}
```
