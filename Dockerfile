# Используем базовый образ Node.js
FROM node:14

# Установка зависимостей проекта
COPY package*.json /app/
RUN npm install

# Копирование кода проекта в контейнер
COPY . /app

# Установка рабочей директории
WORKDIR /app

# Сборка клиентского приложения Vue
RUN npm run build

# Запуск сервера раздачи статических файлов
CMD ["npm", "run", "serve"]