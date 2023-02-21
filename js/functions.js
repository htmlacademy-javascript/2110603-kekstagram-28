// Функция для проверки длины строки.

function checkString (string, stringLength) {
  return (string.length <= stringLength);
}
checkString('проверяемая строка', 10);

// Функция для проверки, является ли строка палиндромом.

function checkPalindrom (text) {
  const preparedText = text.replace(/\s+/g, '').split('').join().toLowerCase();
  const reversedText = text.replace(/\s+/g, '').split('').reverse().join().toLowerCase();
  if (reversedText === preparedText) {
    return('Строка является палиндромом.');
  }
  return('Строка не является палиндромом.');
}
checkPalindrom('Кекс');


// Функция, которая извлекает цифры от 0 до 9 и возвращает их в виде целого положительного числа

function getNumbers (input) {
  if (typeof(input) === 'number') {
    return(Math.abs(input));
  }
  const numbers = parseInt(input.replace(/[\s.,%!]+/g, '').replace(/\D+/g, '').split('').join().replace(/[\s.,%!]+/g, ''));
  return(numbers);

}
getNumbers('а я томат');

// Функция, которая возвращает исходную строку,
//  дополненную указанными символами до заданной длины.
//  Символы добавляются в начало строки.
//  Исходная строка не должна обрезаться.
//  Если «добивка» слишком длинная, она обрезается с конца.

function normalizeText(inputText, minLength, extraText) {
  if (inputText.length >= minLength) {
    return(inputText);
  }
  const requiredLength = minLength - inputText.length;
  return(extraText.slice(0, requiredLength % extraText.length) + extraText.repeat(requiredLength / extraText.length) + inputText);
}
normalizeText('qwerty', 4, '0');
