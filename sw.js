// Service Worker Activation
self.addEventListener('install', event => {
    console.log('Service Worker установлен');
    self.skipWaiting();
  });
  
  // Уведомления можно обрабатывать здесь (опционально)
  self.addEventListener('notificationclick', event => {
    event.notification.close();
    event.waitUntil(
      clients.openWindow('/')
    );
  });
  