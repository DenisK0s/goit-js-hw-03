// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного
// (который выполнил больше всех задач).Сотрудники и кол - во выполненых задач содержатся как
// свойства объекта в формате "имя": "кол-во задач".

const findBestEmployee = function (employees) {

  const employeeValues = Object.values(employees);

  let bigestValue = employeeValues[0];

  for (const value of employeeValues) {
    if (value > bigestValue) {
      bigestValue = value;
    }
  }

  let bestEmployee;

  for (const key in employees) {
    if (employees[key] === bigestValue) {
      bestEmployee = key;
    }
  }

  return bestEmployee;

};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux