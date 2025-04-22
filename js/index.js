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
});
