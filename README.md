# ObjectNumFilter

Simple snippet which filters JS object for number only values, setting value keys as a path from the initial object, e.g. { user.age: 30 }

## Usage

Copy the function without _export_ keyword into your code and call the function or simply use _import_ keyword

## Example

if you have object like

```javascript
Users: {
  count: 2,
  users: [
    {
      age: 25,
      salary: 50000,
      firstname: 'John',
      lastname: 'Doe'
    },
    {
      age: 33,
      salary: 70000,
      firstname: 'Martha',
      lastname: 'Whydatname'
    },
  ]
}
```

The result object of calling

```javascript
objectNumFilter(Users);
```

will be:

```javascript
{
  count: 2,
  "users.0.age": 25,
  "users.0.salary": 50000,
  "users.1.age": 33,
  "users.1.salary": 70000
}
```

## Primitives filtering

Added

```javascript
objectFilter(obj, filterType);
```

function with second parameter defining the primitive type object should be filtered for &

```javascript
objectStringFilter(obj);
```
