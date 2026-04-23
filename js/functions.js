//Функция для проверки длины строки.
const checkStringLength = (string = '', maxSimbols = 1) => string.length <= maxSimbols;
window.checkStringLength = checkStringLength;

//Функция для проверки, является ли строка палиндромом.

const isPalindrome = (string) => {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  return normalizedString === normalizedString.split('').reverse().join('');
};
window.isPalindrome = isPalindrome;
