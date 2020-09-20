"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

// place your code below


console.log(`Hello world!`);



const list = document.querySelector('.list--js')

fetch('https://api.github.com/users/BartlomiejPawlicki/repos')
    .then(resp => resp.json())
    .then(resp => {
        const repos = resp;
        for (const repo of repos) {
            const { name, html_url } = repo;
            list.innerHTML += `<li class="repo__item"><a class="repo__element" href="${html_url}"> ${name} </a> </li>`

        }
    })