# Projekt python

## Autorzy
- Dawid Kaczor
- Kamil Lewandowski
- Jarosław Niesyto

## Opis
Aplikacja do nauki języków. Aplikacja korzysta z serwisu Google Translate. Program pozwala na tworzenie folderów i fiszek.

## Uruchomienie

Do uruchomienia aplikacji wymagane jest orpogramowanie:
- Docker
- Docker Compose

Aby uruchomić aplikacje należy wejść z poziomu konsoli do głownego folderu projektu i wpisać komende

```
docker-compose up
```

## REST API

Aplikacja backendowa wystawia kilka punktów końcowych, do których można wysyłać zapytania

### Autoryzacja:

Logowanie:
Metoda: POST
URL: <adres url>/login
Przesyłane dane w formacje JSON:
{
  "email": "...",
  "password": "..."
}
Zwraca JWT token.

Rejestracja:
Metoda: POST
URL: <adres url>/login
Przesyłane dane w formacje JSON:
{
  "email": "...",
  "password": "..."
}
Zwraca JWT token. Dodaje użytkownika do bazy danych.

### Folder:

Znajdz wszystkie foldery:
Metoda: GET
URL: <adres url>/folder
Przesyłane dane
- id zmienna o type int/number
Zwraca folder użytkownika.

Dodaj folder:
Metoda: POST
URL: <adres url>/folder
Przesyłane dane w formacje JSON:
{
	"name": "...",
	"fromLang": "...",
	"toLang": "..."
}
Dodaje folder do bazy danych.

Usuń folder:
Metoda: DELETE
URL: <adres url>/folder/:id
Przesyłane dane w formacje JSON:
- id zmienna o type int/number, jest to id folderu do usunięcia
Dodaje folder do bazy danych.

### Fiszki:

Znajdz wszystkie fiszki z danego folderu:
Metoda: GET
URL: <adres url>/card/:id
Przesyłane dane
- id zmienna o type int/number, jest to id folderu
Zwraca tablice fiszek.

Znajdz losowe 16 fiszek z danego folderu:
Metoda: GET
URL: <adres url>/card/random/:id
Przesyłane dane
- id zmienna o type int/number, jest to id folderu
Zwraca tablice fiszek.

Dodaj fiszkę:
Metoda: POST
URL: <adres url>/card
Przesyłane dane w formacje JSON:
{
	"before": "...",
	"after": "...",
	"folder_id": 1
}
Dodaje folder do bazy danych.

Usuń fiszkę:
Metoda: DELETE
URL: <adres url>/card/:id
Przesyłane dane w formacje JSON:
- id zmienna o type int/number, jest to id fiszki do usunięcia
Dodaje folder do bazy danych.