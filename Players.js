document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.querySelector('.header__burger-btn');
    const header = document.querySelector('.header');
    const body = document.querySelector('body');

    burgerBtn.addEventListener('click', function() {
        header.classList.toggle('open');

        // Если меню открыто, блокируем прокрутку
        if (header.classList.contains('open')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    });
});

// script.js
document.getElementById("contactButton").addEventListener("click", function() {
    openModal('contactModal');
});

document.getElementById("joinButton").addEventListener("click", function() {
    openModal('joinModal');
});

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    document.body.classList.add('no-scroll');
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    document.body.classList.remove('no-scroll');
}

window.onclick = function(event) {
    const contactModal = document.getElementById('contactModal');
    const joinModal = document.getElementById('joinModal');
    if (event.target == contactModal) {
        closeModal('contactModal');
    }
    if (event.target == joinModal) {
        closeModal('joinModal');
    }
}

function copyText(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Скопировано: ' + text);
}
