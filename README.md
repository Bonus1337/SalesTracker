# SalesTracker

SalesTracker jest aplikacją raportującą sprzedaż produktów w formie tabelarycznej dla klientów za wybrany okres z możliwością filtrowania po atrybutach zamówienia. Pozwala dodatkowo na zarządzania listą produtków i zamówień Aplikacja została stworzona jako zadanie testowe.

## Technologie i biblioteki

Aplikacja została napisana w Vue 3 z wykorzystaniem następujących technologii i bibliotek:

- json-server - do symulowania bazy danych i API
- primeVue - do tworzenia interfejsu użytkownika
- Vuex - do zarządzania danymi
- vue-router - do zarządzania nawigacją
- axios - do komunikacji z API

## Uruchomienie aplikacji

Aby uruchomić aplikację lokalnie, należy wykonać następujące kroki:

1. Sklonować repozytorium z GitHub: `git clone https://github.com/Bonus1337/SalesTracker.git`
2. Przejdź do folderu z projektem: `cd SalesTracker`
3. Zainstaluj zależności: `npm install`
4. zainstaluj json-server: npm install -g json-server
5. Uruchom json-server: `json-server --watch data.json`
6. Uruchom aplikację: `npm run serve`
7. Otwórz przeglądarkę i wpisz adres: `http://localhost:8080`

## Testowanie aplikacji

Aby przetestować aplikację, można używać jej normalnie i sprawdzać jej funkcjonalność. Aplikacja pozwala na:

- generowanie raportu sprzedaży dla wybranego miesiąca i roku lub na bazie określonego przedziału dat
- filtrowanie raportu sprzedaży po klientach
- podsumowanie sprzedaży (łączna ilość / łączna kwota) dla aktualnie ustawionych filtrów
- prezentowanie wykresu kołowego prezentującego udział sprzedaży poszczególnych produktów względem całościowej sprzedaży za wybrany okres raportowania
- zarządzanie listą produktów (nazwa i cena jednostkowa)
- dodawanie nowych produktów
- dodawanie i edytowanie zamówień od klienta

## Znane błędy lub ograniczenia

Aplikacja ma następujące ograniczenia:

- nie posiada API w Node.js ani bazy danych zrobionej przy pomocy MongoDB, tylko wszystko działa na json-serverze
- nie ma testów jednostkowych ani integracyjnych

## Kontakt

W razie pytań lub problemów związanych z aplikacją, można się ze mną skontaktować przez Discorda: Bonus#2048
