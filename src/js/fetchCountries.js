// У відповіді від бекенду повертаються об'єкти, велика частина властивостей яких, тобі не знадобиться.
// Щоб скоротити обсяг переданих даних, додай рядок параметрів запиту - таким чином цей бекенд реалізує фільтрацію полів.
const searchParams = [
  'name',
  'capital',
  'population',
  'flags',
  'languages',
].join(',');

// Напиши функцію fetchCountries(name), яка робить HTTP-запит на ресурс name
// і повертає проміс з масивом країн - результатом запиту.
// Винеси її в окремий файл fetchCountries.js і зроби іменований експорт.
function fetchCountries(name) {
  // Використовуй публічний API Rest Countries v2, а саме ресурс name, який повертає масив об'єктів країн,
  // що задовольнили критерій пошуку.Додай мінімальне оформлення елементів інтерфейсу.
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=${searchParams}`
  ).then(response => {
    // Не забувай про те, що fetch не вважає 404 помилкою, тому необхідно явно відхилити проміс, щоб можна було зловити і обробити помилку.
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export { fetchCountries };
