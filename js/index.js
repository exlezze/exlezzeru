$(document).ready(function() {
    // Открытие модального окна
    $('#menuBtn').click(function() {
        $('#modal').fadeIn();
    });
    
    // Закрытие модального окна
    $('#closeBtn').click(function() {
        $('#modal').fadeOut();
    });
    
    // Закрытие при клике вне окна
    $(window).click(function(e) {
        if ($(e.target).is('#modal')) {
            $('#modal').fadeOut();
        }
    });
    
    // Анимация кнопки "Перевести деньги"
    $('.donate-btn').click(function() {
        window.location.replace("https://pay.cloudtips.ru/p/bf8afbfe");
        $(this).text('Спасибо :3 😊');
        setTimeout(() => {
            $('#modal').fadeOut();
            setTimeout(() => {
                $('.donate-btn').text('Перевести деньги');
            }, 300);
        }, 1000);
    });

    // Открытие модалки регистрации
    $('#registerBtn').click(function() {
        $('#registerModal').fadeIn();
    });

    // Закрытие модалки регистрации
    $('#closeRegister').click(function() {
        $('#registerModal').fadeOut();
    });

    // Валидация формы регистрации
    $('#mainRegisterForm').submit(function(e) {
        e.preventDefault();
        
        // Очищаем ошибки
        $('.error-message').hide();
        
        // Получаем значения
        const username = $('#regUsername').val().trim();
        const email = $('#regEmail').val().trim();
        const password = $('#regPassword').val();
        const confirmPassword = $('#regConfirmPassword').val();
        
        let isValid = true;
        
        // Валидация имени
        if (username.length < 3) {
            $('#usernameError').text('Минимум 3 символа').show();
            isValid = false;
        }
        
        // Валидация email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            $('#emailError').text('Некорректный email').show();
            isValid = false;
        }
        
        // Валидация пароля
        if (password.length < 6) {
            $('#passwordError').text('Минимум 6 символов').show();
            isValid = false;
        }
        
        // Подтверждение пароля
        if (password !== confirmPassword) {
            $('#confirmError').text('Пароли не совпадают').show();
            isValid = false;
        }
        
        // Если все ок
        if (isValid) {
            alert('Регистрация успешна! (нет)');
            $('#registerModal').fadeOut();
        }
    });

    // Переключение на логин
    $('#loginInstead').click(function(e) {
        e.preventDefault();
        $('#registerModal').fadeOut();
        $('#modal').fadeIn();
    });

    // Закрытие регистрации при клике вне окна
    $(window).click(function(e) {
        if ($(e.target).is('#registerModal')) {
            $('#registerModal').fadeOut();
        }
    });
});
