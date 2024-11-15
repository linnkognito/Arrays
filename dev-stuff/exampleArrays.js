const age = [12, 27, 89, 102, 21, 23, 54, 40, 77];

const superCoolUsers = [
  {
    userName: 'legoland',
    level: 12,
    active: true,
  },
  {
    userName: 'iwannaspeaktothemanager',
    level: 1,
    active: true,
  },
  {
    userName: 'coolmom68',
    level: 80,
    active: false,
  },
  {
    userName: 'flapjack',
    level: 24,
    active: true,
  },
  {
    userName: 'gothvibes',
    level: 66,
    active: false,
  },
];

function deleteUser(arr, id) {
  const index = arr.findIndex((user) => user.id === id);

  if (index !== -1) return console.log('There is no user with this ID.');
  arr.splice(index, 1);

  return arr;
}

deleteUser(someDudes, '123_thatsallfolks');
