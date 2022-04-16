# url-obj-parse

> Convert javascript objects to a supported url query string

## Install

```
$ npm install url-obj-parse
```

## Example
> In frontend app
```js
const UrlObjParse = require('url-obj-parse');

const data = {
  filters: {
    name: {
      value: 'john',
      mode: 'contains'
    },
    AND: {
      name: {
        value: 'xina',
        mode: 'endsWith'
      },
    }
  },
  sortField: 'createdAt',
  sortOrder: 'desc'
};

const urlQuery = UrlObjParse(data);
const apiEndpoint = `https://localhost:3000/some-api/users?${urlQuery}`;

console.log(apiEndpoint);
// https://localhost:3000/some-api/users?filters[name][value]=john&filters[name][mode]=contains&filters[AND][name][value]=xina&filters[AND][name][mode]=endsWith&sortField=createdAt&sortOrder=desc

// Just an example...
// const response = await axios.get(apiEndpoint);
```

> Then in back, express for this example
```js
router.get('/users', (req, res) => {
    console.log(req.query);
    return res.json(req.query);
});

// {
//   filters: {
//     name: {
//       value: 'john',
//       mode: 'contains'
//     },
//     AND: {
//       name: {
//         value: 'xina',
//         mode: 'endsWith'
//       },
//     }
//   },
//   sortField: 'createdAt',
//   sortOrder: 'desc'
// }
```
