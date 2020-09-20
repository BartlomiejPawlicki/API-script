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

const person = {
    name: "Bartek",
    age: 24,
}

//localStorage.setItem('person', person)


const jsonPerson = JSON.stringify(person)



//localStorage.setItem('person', jsonPerson)
console.log(localStorage.getItem('person'))

const personStringify = localStorage.getItem('person')

const jsonPersone = JSON.parse(personStringify)
console.log(jsonPersone)