# PHP Laravel project

## Stack
- php8.2
- postgres15
- pgadmin
- unit:1.33.0

## Требования к системе:
- docker 20+
- docker-compose 2+
- make

## Запуск

Для удобства управления используем make:


0 Установка/обновление docker(через apt), docker-compose:
```
make setup-docker 
```

1 Заполняем переменные:
```
GROUP=
PROJECT=
```

2 Запуск проекта:
```
make start
```

3 Подготовительные манипуляции:
```
make compose
make build-front
make keygen
make storlink
make migrate
```

4 Остановка:
```
make stop
```

**Telegram Mini App (TMA):** для настройки бота и webhook используйте `make telegram-set-webhook`, `make telegram-help`. Подробнее — `docs/TMA_FLOW.md` и `LOCAL_SETUP.md` (раздел 9).

В последствии может потребоваться только выполнять миграции или установка зависимостей:
```
make compose
make migrate
```


TODO: Поля: Список полей и обязательных полей.
TODO: Кастомное правило валидации нескольких полей на уникальность или перехват ошибки в moonshine