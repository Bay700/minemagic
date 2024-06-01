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


const texts = {
    text3: "Мы уделяем особое внимание безопасности и комфортному игровому опыту для всех участников. Наши правила направлены на создание дружелюбной и уважительной атмосферы. Запрещены любые формы оскорблений, мошенничества и гриферства. Мы стремимся к тому, чтобы каждый игрок чувствовал себя здесь как дома и мог наслаждаться игрой без неприятных инцидентов. Наш Устав...",
    continuation3: "<h4>1.1 Запрещено оскорблять проект, администрацию сервера, команду проекта в целом. Оскорбление остается нарушением, даже если оно скрыто под сарказмом или косвенной инсинуацией. Оскорбление сервера или администрации сервера в личные сообщения так же является нарушением.<h4> <h4> 1.2 Запрещена реклама сторонних проектов, сайтов, а также распространение ссылок сторонних каналов Discorde есть только TeemBaysky<h4> <h4>1.3 Запрещается разглашение чьей бы то ни было персональной информации. Это относится как к собственным данным, так и полученным от других пользователей. Например: адреса, номера телефонов, email, финансовые данные, личные фотографии и т.д.<h4> <h4>1.4 Запрещено угрожать расправой в реальной жизни любому пользователю<h4> <h4>1.5 Категорически запрещается использование читов чит кодов использования креатив мода и т.д<h4> <h4>1.6 Запрещено постройка  халатных или не цензурных построек которые будут предавать не красивый внешний вид миру<h4> <h4>1.7  Запрещено кикать/затыкать/банить самого себя или других игроков без разрешения главного Администратора<h4> <h4>1.8 Устное предупреждение - мера предупреждения игроков, которая подразумевает словесное предупреждение, после которого игрок должен перестать нарушать. Выдается за незначительные нарушения каких-либо правил сервера или Role Play процесса.<h4> <h4>1.9 Kick - мера предупреждения игроков, которая принудительно завершает игровой сеанс. Выдается за нарушение правил сервера<h4> <h4>1.10 Mute - мера предупреждения игроков, которая блокирует на некоторое время использование чата/(voice),а также репорта. В особых случаях блокировка может выдаваться до окончания игровой сессии. Выдается за нарушение правил сервера.<h4> <h4>2.1 Ban - мера наказания игроков, которая полностью блокирует доступ к серверу. Блокировка может иметь определенный срок. В особых случаях блокировка может быть перманентной. Выдается за нарушение правил сервера.<h4> <h4>2.2 Администратор имеет право блокировать доступ к серверу игрокам, которые грубо нарушают правила сервера<h4> <h4>2.3 Запрещенно кража аккаунта чужого игрока (Карается баном по ip на всегда!)<h4> <h4>2.4 Запрещено предлагать взятки сотрудникам Администрации<h4> <h4>2.5 Запрещено воровство имущество другого игкрока запрещается воровать гриферить и т.д<h4> <h4>2.6 Запрещен флуд на сервере /mute на 1час<h4> <h4>2.7 Запрещено дюп багаюз читерные редуксы то есть дополнения в пвп, пример : светлая ночь либо выделения игрока в темное время суток и все дополнения которые не соответствуют к Role Play<h4> <h4>2.8 Запрещено создание одинаковых никнеймом ( Разрешено одинаковые фамилии)<h4> <h4>2.9 Можно нарушать УСТАВ сервера только при разрешения ГЛАВНОГО АДМИНИСТРАТОРА<h4> <h4>2.10 Амнистия-запрос на снятия наказания,либо же заявить о ошибки в выдочи наказания, и предоставить доказательство о вашей невиновности (Обязательно заполнять форум корректно!)<h4> <h3>‼️Незнание правил не освобождает от ответственности‼️<h3>",
};

function toggleText(textId, continuationId, buttonId) {
    const textElement = document.getElementById(textId);
    const buttonElement = document.getElementById(buttonId);
    const originalText = texts[textId];
    const continuationText = texts[continuationId];

    if (buttonElement.innerHTML === "Продолжить") {
        textElement.innerHTML += continuationText;
        buttonElement.innerHTML = "Закрыть";
    } else {
        textElement.innerHTML = originalText;
        buttonElement.innerHTML = "Продолжить";
    }
}


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
