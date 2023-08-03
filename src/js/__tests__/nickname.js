import Validator from '../nickname';

test.each([
  ['testName', true],
  ['test11Name', true],
  ['test-Name', true],
  ['test_Name', true],
  ['test_-Name', true],
  ['test777Name', true],
  // Более 3ёх цифр подряд
  ['test7007Name', false],
  ['test70707Name', false],
  // Начало с цифры
  ['1testName1', false],
  ['TESTNAME', true],
  // Начинается подчеркиванием
  ['___testname___', false],
  ['t1e2s3t4N5a6m7e', true],
  // Заканчивается тире
  ['gggwewer-----', false],
  ['g234g234g234wewer', true],
  ['g2g34g234g234wewer', true],
  // С русскими буквами
  ['tesпе_Name', false],
])('Проверка никнейма', (name, expectedResult) => {
  const user = new Validator(name);
  expect(user.validateUsername(name)).toBe(expectedResult);
});
