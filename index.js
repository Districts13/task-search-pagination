// Тестовое от рафика
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Fetch API Example</title>
// </head>
// <body>
//
// <!-- Элемент, в котором будут отображаться данные -->
// <div id="data-container"></div>
//
// <script>
// // Шаг 2: Написание JavaScript кода
// document.addEventListener('DOMContentLoaded', fetchData);
//
// function fetchData() {
//   // Шаг 3: Выполнение запроса с использованием Fetch API
//   fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(Network response was not ok: ${response.status});
//       }
//       return response.json(); // Преобразование ответа в JSON
//     })
//     .then(data => {
//       // Шаг 4: Обновление HTML с полученными данными
//       updateHTML(data);
//     })
//     .catch(error => {
//       console.error('Error fetching data:', error);
//     });
// }
//
// function updateHTML(data) {
//   // Шаг 1: Создание элементов HTML и Шаг 4: Обновление HTML
//   const dataContainer = document.getElementById('data-container');
//
//   // Пример: отображение заголовка и тела поста
//   dataContainer.innerHTML = `
//     <h2>${data.title}</h2>
//     <p>${data.body}</p>
//   `;
// }
// </script>
//
// </body>
// </html>

// async тестовое от Рафика
// async function fetchData(url, method = 'GET', headers = {}) {
//   try {
//     const response = await fetch(url, { method, headers });
//
//     if (!response.ok) {
//       throw new Error(`Network response was not ok: ${response.status}`);
//     }
//
//     const data = await response.json();
//
//     return data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// }
//
// const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
// fetchData(apiUrl)
//   .then(data => {
//     updateHTML(data);
//   })
//   .catch(error => {
//
//     console.error('Failed to fetch data:', error);
//   });
// function updateHTML(data) {
//     // Шаг 1: Создание элементов HTML и Шаг 4: Обновление HTML
//     const dataContainer = document.getElementById('data-container');
//     // Пример: отображение заголовка и тела поста
//     dataContainer.innerHTML = `<h2>${data.title}</h2><p>${data.body}</p>`;
// }
// document.getElementById('fetch-button').addEventListener('click', () => {
//   const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
//
//   // Вызов функции по нажатию кнопки
//   fetchData(apiUrl)
//       .then(data => {
//         updateHTML(data);
//       })
//       .catch(error => {
//         console.error('Failed to fetch data:', error);
//       });
// });


// fetch('https://api.github.com/')
//     .then(response => response.json())
//     .then(json => console.log(json))

// async function getResponse(){
//     let response = fetch('https://api.github.com/')
//     console.log(response)
// }
// getResponse()

/* Отображаем данные в параграфе

let p = document.createElement('p');
p.className = "user-example";
p.textContent = `Username: ${user}, email: ${emailUser}`;
document.body.append(p);

ИЛИ
    // const dataContainer = document.getElementById('data-container');
    // // Пример: отображение заголовка и тела поста
    // dataContainer.innerHTML = `<p>Username: ${user}, email: ${emailUser}</p>`;

 */

async function showUser() {
    // запрашиваем JSON с данными пользователей
    let responseApi = await fetch('https://api.github.com/');
    let api = await responseApi.json();
    let responseUsers = await fetch('https://api.github.com/users');
    let users = await responseUsers.json();




    let responsePosts = await fetch('https://jsonplaceholder.typicode.com/posts');
    let posts = await responsePosts.json();
    let postTitle = posts[0].title;
    let postBody = posts[0].body;

    // отображаем данные
    // let p = document.createElement('p');
    // p.className = "user-example";
    // p.textContent = `Username: ${user}, email: ${emailUser}`;
    // document.body.append(p);
    // let h3 = document.createElement('h3');
    // h3.className = 'post-example';
    // h3.textContent = `${postTitle}`;
    // document.body.append(h3);
    const dataContainer = document.getElementById('data-container');
    // Пример: отображение заголовка и тела поста
    dataContainer.innerHTML = `<p>Username: ${user}, email: ${emailUser}</p><h3>${postTitle}</h3><p>${postBody}</p>`;


    // запрашиваем информацию о пользователях
    // let githubResponse = await fetch(`https://api.github.com/users`);
    // let githubUser = await githubResponse.json();
}

// function updateHTML(data) {
//     // Шаг 1: Создание элементов HTML и Шаг 4: Обновление HTML
//     const dataContainer = document.getElementById('data-container');
//     // Пример: отображение заголовка и тела поста
//     dataContainer.innerHTML = `<p>Username: ${user}, email: ${emailUser}</p>`;
// }

