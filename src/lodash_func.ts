import _ from 'lodash';
const data = [
  {
    username: 'nico',
    role:'admin'
  },
  {
    username: 'valentina',
    role:'seller'
  },
  {
    username: 'zulema',
    role:'customer'
  },
  {
    username: 'santiago',
    role:'customer'
  }
];

const rpta = _.groupBy(data,(item)=> item.role);
console.log(rpta);
