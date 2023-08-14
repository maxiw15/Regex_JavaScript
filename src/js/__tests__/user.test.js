import { loadUser } from '../user';
import { httpGet } from '../http';
import { Validator } from '../app';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call loadUser once', () => {
  httpGet.mockReturnValue(JSON.stringify({}));

  const response = loadUser(1);
  expect(response).toEqual({});
  expect(httpGet).toBeCalledWith('http://server:8080/users/1');
});
// eslint-disable-next-line no-unused-vars
const validator = new Validator();

// 1. Тест на корректное имя пользователя:

test('validateUsername returns true for valid username', () => {
  expect(validator.validateUsername('user')).toBe(true);
});
// 2. Тест на недопустимое имя пользователя с подряд более трёмя цифрами:
test('validateUsername returns false for username with more than three consecutive digits', () => {
  expect(validator.validateUsername('user1234name')).toBe(false);
});
// 3. Тест на недопустимое имя пользователя, начинающееся с цифры:
test('validateUsername returns false for username starting with a digit', () => {
  expect(validator.validateUsername('9username')).toBe(false);
});
// 4. Тест на недопустимое имя пользователя, заканчивающееся цифрой:
test('validateUsername returns false for username ending with a digit', () => {
  expect(validator.validateUsername('username9')).toBe(false);
});
// 5. Тест на недопустимое имя пользователя, начинающееся с символа подчёркивания:
test('validateUsername returns false for username starting with an underscore', () => {
  expect(validator.validateUsername('_username')).toBe(false);
});
// 6. Тест на недопустимое имя пользователя, заканчивающееся символом подчёркивания:

test('validateUsername returns false for username ending with an underscore', () => {
  expect(validator.validateUsername('username_')).toBe(false);
});
// 7. Тест на недопустимое имя пользователя, начинающееся с символа тире:
test('validateUsername returns false for username starting with a dash', () => {
  expect(validator.validateUsername('-username')).toBe(false);
});
// 8. Тест на недопустимое имя пользователя, заканчивающееся символом тире:
test('validateUsername returns false for username ending with a dash', () => {
  expect(validator.validateUsername('username-')).toBe(false);
});
