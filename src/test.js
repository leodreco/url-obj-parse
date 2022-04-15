const UrlObjParse = require('./index');

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

console.log(UrlObjParse(data));
