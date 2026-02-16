// Уведомление о cookie
document.addEventListener('DOMContentLoaded', function() {
  const cookieNotification = document.getElementById('cookieNotification');
  const acceptButton = document.getElementById('acceptCookies');
  
  // Проверяем, принимал ли пользователь cookie раньше
  if (localStorage.getItem('cookiesAccepted') === 'true') {
    cookieNotification.classList.add('hidden');
  } else {
    // Показываем уведомление с небольшой задержкой
    setTimeout(() => {
      cookieNotification.classList.remove('hidden');
    }, 1000);
  }
  
  // Обработчик нажатия на кнопку
  acceptButton.addEventListener('click', function() {
    // Скрываем уведомление
    cookieNotification.classList.add('hidden');
    
    // Сохраняем в localStorage
    localStorage.setItem('cookiesAccepted', 'true');
    
    // Здесь можно добавить инициализацию счетчиков аналитики
    console.log('Cookie accepted');
  });
});