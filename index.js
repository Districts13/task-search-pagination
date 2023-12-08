
async function showUser() {

    let userName;
    userName = document.getElementById('search-field').value;
    const hidden = document.querySelector('#bottomSite');
    let userApiUrl = `https://api.github.com/users/${userName}`;
    let currentPage = 1;
    const perPage = 4;
    let repositoriesApiUrl = `https://api.github.com/users/${userName}/repos?page=${currentPage}&per_page=${perPage}`;


    if (!(userName.length===0)) {
        hidden.setAttribute('hidden', '');

        // Получаем данные из апи по конкретному юзеру
        let responseUsers = await fetch(userApiUrl);
        let user = await responseUsers.json();

        // Добавление аватарки на страницу
        let avatarImg = document.getElementById("userAvatar");
        avatarImg.setAttribute("src", user.avatar_url)

        // Добавление логина и имени на страницу
        let userOnPage = document.getElementById("userOnPage");
        userOnPage.textContent = user.login;

        let nameUserOnPage = document.getElementById("nameUserOnPage");
        nameUserOnPage.textContent = user.name;

        // Добавление кол-ва подписчиков и подписок на страницу
        let followersCount = document.getElementById("followersCount");
        followersCount.textContent = (user.followers/1000).toFixed(1) +'k';
        let followingCount = document.getElementById("followingCount");
        followingCount.textContent = user.following;

        // Добавление на страницу строки "Репозитории" и количество репозиториев
        let countRepos = document.getElementById("countRepos");
        countRepos.textContent = user.public_repos;

        // Получаем данные репозиториев юзера и добавляем их на страницу
        if (user.public_repos>0) {
            let responseRepositories = await fetch(repositoriesApiUrl)
            let Repositories = await responseRepositories.json();
            let reposContainer = document.getElementById('reposContainer');
            for (let i = 0; i < Repositories.length; i++) {
                reposContainer.innerHTML = `<div class="reposNameReadme"><h2 class="reposName">${Repositories[i].name}</h2><h4 class="reposReadme">${Repositories[i].description}</h4></div>`;
            }
        }



    } else {
        return hidden.setAttribute('hidden', 'until-found');
    }




    // console.log('https://api.github.com/repos/Districts13/First-lessons');
}






// {repositories.map(repo => (
//     <li className='repo-item' key={repo.id}>
//         <a
//             href={repo.html_url}
//             className='repo-item__link'
//             target='_blank'
//             rel='noopener noreferrer'
//         >
//             {repo.name}
//         </a>
//         <p className='repo-item__description'>
//             {repo.description}
//         </p>
//     </li>
// ))}

// const repoUrl = 'https://api.github.com/repos/owner/repository';

// fetch(repoUrl)
//     .then(response => response.json())
//     .then(data => {
//         const repoNameElement = document.getElementById('repoName');
//         const repoDescriptionElement = document.getElementById('repoDescription');

// repoNameElement.textContent = Repository Name: `${data.name}`;
// repoDescriptionElement.textContent = Repository Description: `${data.description}`
// .catch(error => console.error('Error fetching repository info:', error));


/*
let responseRepositories = await fetch(repositoriesApiUrl.replace("{userName}", userName))
let Repositories = await responseRepositories.json();

let reposContainer = document.getElementById('reposContainer');
reposContainer.innerHTML = `<div class="reposNameReadme"><h2 class="reposName">${Repositories.name}</h2><h4>${Repositories.description}</h4></div>`;
 */











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
//
//
// запрашиваем информацию о пользователях
// let githubResponse = await fetch(`https://api.github.com/users`);
// let githubUser = await githubResponse.json();
// function updateHTML(data) {
//     // Шаг 1: Создание элементов HTML и Шаг 4: Обновление HTML
//     const dataContainer = document.getElementById('data-container');
//     // Пример: отображение заголовка и тела поста
//     dataContainer.innerHTML = `<p>Username: ${user}, email: ${emailUser}</p>`;
// }

