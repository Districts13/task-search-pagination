
let userName;
let userApiUrl = "https://api.github.com/users/{userName}";
let repositoriesApiUrl = "https://api.github.com/users/{userName}/repos";

async function showUser() {

    userName = document.getElementById('search-field').value;
    const hidden = document.querySelector('#bottomSite');

    if (!(userName.length===0)) {
        hidden.setAttribute('hidden', '');

        // Получаем данные из апи по конкретному юзеру
        let responseUsers = await fetch(userApiUrl.replace("{userName}", userName));
        let user = await responseUsers.json();

        // Добавление аватарки на страницу
        let avatarImg = document.getElementById("userAvatar");
        avatarImg.setAttribute("src", user.avatar_url)

        // Добавление логина и имени на страницу
        let userOnPage = document.getElementById("userOnPage");
        userOnPage.textContent = user.login;

        let nameUserOnPage = document.getElementById("nameUserOnPage");
        nameUserOnPage.textContent = user.name;

        // Добавление на страницу строки "Репозитории" и количество репозиториев
        let followersCount = document.getElementById("followersCount");
        followersCount.textContent = (user.followers/1000).toFixed(1) +'k';
        let followingCount = document.getElementById("followingCount");
        followingCount.textContent = user.following;

        let countRepos = document.getElementById("countRepos");
        countRepos.textContent = user.public_repos;

        



    } else {
        return hidden.setAttribute('hidden', 'until-found');
    }




    // console.log(user);
}

// const form = document.querySelector('form');
// form.addEventListener('submit', event => {
//     // данный обработчик вызовется и при нажатии на кнопку, и при нажатии enter (когда фокус в <input>)
//     showUser()
// });






// if (userName==='') {
//     const hidden = document.querySelector('#bottomSite');
//     hidden.setAttribute('hidden', '');
// }









/* Пагинация
let currentPage = 1;

function changePage(page) {
    // Здесь вы можете добавить логику для загрузки данных соответствующей страницы

    // Просто для примера увеличим номер текущей страницы
    currentPage = page;

    // Здесь может быть также логика обновления интерфейса
    updateUI();
}

function prevPage() {
    if (currentPage > 1) {
        changePage(currentPage - 1);
    }
}

function nextPage() {
    // Здесь вы можете добавить логику для определения общего количества страниц
    const totalPages = 5;

    if (currentPage < totalPages) {
        changePage(currentPage + 1);
    }
}

function updateUI() {
    // Здесь можете обновить визуальное представление пагинации
    console.log('Page changed to', currentPage);
}
 */




// function moveNextRepos() {
//
// }
//
// function moveBackRepos () {
//
// }






















// отображаем данные
// let p = document.createElement('p');
// p.className = "user-example";
// p.textContent = `Username: ${user}, email: ${emailUser}`;
// document.body.append(p);
// let h3 = document.createElement('h3');
// h3.className = 'post-example';
// h3.textContent = `${postTitle}`;
// document.body.append(h3);
// const dataContainer = document.getElementById('data-container');
// // Пример: отображение заголовка и тела поста
// dataContainer.innerHTML = `<p>Username: ${user}, email: ${emailUser}</p><h3>${postTitle}</h3><p>${postBody}</p>`;


// запрашиваем информацию о пользователях
// let githubResponse = await fetch(`https://api.github.com/users`);
// let githubUser = await githubResponse.json();
// function updateHTML(data) {
//     // Шаг 1: Создание элементов HTML и Шаг 4: Обновление HTML
//     const dataContainer = document.getElementById('data-container');
//     // Пример: отображение заголовка и тела поста
//     dataContainer.innerHTML = `<p>Username: ${user}, email: ${emailUser}</p>`;
// }

