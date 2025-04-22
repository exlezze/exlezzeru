$(document).ready(function() {
    // Валидация формы
    $('#registerForm').submit(function(e) {
        e.preventDefault();
        
        // Очистка предыдущих ошибок
        $('.error-message').hide();
        
        // Получаем значения полей
        const username = $('#username').val().trim();
        const email = $('#email').val().trim();
        const password = $('#password').val();
        const confirmPassword = $('#confirm-password').val();
        
        // Валидация
        let isValid = true;
        
        if (username.length < 3) {
            showError($('#username'), 'Имя пользователя должно содержать минимум 3 символа');
            isValid = false;
        }
        
        if (!validateEmail(email)) {
            showError($('#email'), 'Введите корректный email');
            isValid = false;
        }
        
        if (password.length < 6) {
            showError($('#password'), 'Пароль должен содержать минимум 6 символов');
            isValid = false;
        }
        
        if (password !== confirmPassword) {
            showError($('#confirm-password'), 'Пароли не совпадают');
            isValid = false;
        }
        
        // Если валидация пройдена
        if (isValid) {
            // Здесь можно отправить данные на сервер
            alert('Регистрация успешна! (нет)');
            // window.location.href = 'index.html'; // Перенаправление
        }
    });
    
    // Функция отображения ошибки
    function showError(inputElement, message) {
        let errorElement = inputElement.next('.error-message');
        if (errorElement.length === 0) {
            errorElement = $('<div class="error-message"></div>');
            inputElement.after(errorElement);
        }
        errorElement.text(message).show();
    }
    
    // Функция валидации email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
