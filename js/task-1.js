
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

// добавляет поле mood со значением 'happy'
user.mood = 'happy';
user['mood'] = 'happy';

console.table(user);

// заменяет значение hobby на 'skydiving'
user.hobby = 'skydiving';
user['hobby'] = 'skydiving';

console.table(user);

// заменяет значение premium на false
user.premium = false;
user['premium'] = false;

console.table(user);

// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
const userKey = Object.keys(user);

for (const key of userKey) {
  console.log(`${key}: ${user[key]}`);
}

// выводит содержимое объекта user в формате ключ:значение используя for...in
for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}

// функция
const vievKeyValue = obj => {
  for (const key in obj) {
  console.log(`${key}: ${user[key]}`);
  }
}
    
vievKeyValue(user);