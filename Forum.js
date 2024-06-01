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

// script.js

document.getElementById("contactButton").addEventListener("click", function() {
    openModal('contactModal');
});

document.getElementById("joinButton").addEventListener("click", function() {
    openModal('joinModal');
});

function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex"; // Используйте flex для центрирования
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

function toggleText(initialTextId, continuationId, buttonId) {
    const initialText = document.getElementById(initialTextId);
    const button = document.getElementById(buttonId);
    
    if (initialText.style.display === "none") {
        initialText.style.display = "block";
        button.innerText = "Продолжить";
    } else {
        initialText.style.display = "none";
        button.innerText = "Скрыть";
    }
}

function searchComplaint() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const complaints = document.querySelectorAll('.complaint-list li');
    let found = false;

    complaints.forEach(complaint => {
        const complaintText = complaint.textContent.toLowerCase();
        if (complaintText.includes(input)) {
            complaint.style.display = 'flex';
            found = true;
        } else {
            complaint.style.display = 'none';
        }
    });

    const noResults = document.getElementById('noResults');
    if (found) {
        noResults.style.display = 'none';
    } else {
        noResults.style.display = 'block';
    }
}

function resetSearch() {
    const complaints = document.querySelectorAll('.complaint-list li');
    complaints.forEach(complaint => {
        complaint.style.display = 'flex';
    });
    document.getElementById('noResults').style.display = 'none';
    document.getElementById('searchInput').value = '';
}

