// Регистрация Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then(() => console.log('Service Worker зарегистрирован'))
      .catch(err => console.error('Ошибка регистрации Service Worker:', err));
  }
  
  // Запрос разрешения на уведомления
  document.getElementById('notify-btn').addEventListener('click', () => {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        scheduleNotification();
      } else {
        alert('Уведомления заблокированы пользователем.');
      }
    });
  });
  
  // Планирование уведомления
  function scheduleNotification() {
    navigator.serviceWorker.ready.then(registration => {
      setTimeout(() => {
        registration.showNotification('Привет!', {
          body: 'Это пуш-уведомление через минуту!',
          icon: 'icon.png',
          vibrate: [200, 100, 200]
        });
      }, 60000); // 1 минута = 60000 мс
    });
  }
  