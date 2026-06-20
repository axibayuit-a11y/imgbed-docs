# Dodawanie kanału GitHub Releases

## Co przygotować przed rozpoczęciem

Potrzebujesz tylko trzech rzeczy:

| Wymaganie | Cel |
| --- | --- |
| Konto GitHub | Do wygenerowania access token i jako właściciel repozytorium. |
| GitHub Access Token | Pozwala ImgBed korzystać z GitHub API, tworzyć releases i przesyłać pliki. |
| Nazwa repozytorium | Możesz wpisać samą nazwę repozytorium, np. `image`. |

## Konfiguracja

### Krok 1: Zaloguj się do GitHub i utwórz Access Token

1. Zaloguj się do GitHub.
2. Kliknij avatar w prawym górnym rogu i otwórz `Settings`.
3. Otwórz `Developer settings` z lewego panelu.
4. Otwórz `Personal access tokens`.
5. Otwórz `Tokens (classic)`.
6. Kliknij `Generate new token (classic)`.
7. Nadaj tokenowi rozpoznawalną nazwę.
8. Wybierz datę wygaśnięcia zgodnie z własnym sposobem utrzymania.
9. Zaznacz scope `repo` i `workflow`.
10. Skopiuj i zapisz token od razu po utworzeniu.

![Dodanie uprawnień GitHub](../../image/upload/github-releases/添加github权限.png)

## Krok 2: Wypełnij kanał GitHub Releases w ImgBed

Po wybraniu `GitHub Releases` w Ustawieniach przesyłania wypełnij:

| Pole UI | Co wpisać |
| --- | --- |
| Nazwa kanału | Nazwa wybrana przez Ciebie, np. `GitHubPrimary`. |
| Access Token | Utworzony przed chwilą GitHub Personal Access Token. |
| Nazwa repozytorium | Krótka nazwa, np. `image`, albo pełna ścieżka, np. `username/image`. |
| Prywatne repozytorium | Włącz lub wyłącz według potrzeb. |
| Uwaga | Opcjonalnie, np. `Primary upload channel`. |

![Wypełnianie konfiguracji GitHub](../../image/upload/github-releases/填写github渠道配置.png)

## Krok 3: Zapisz kanał

Po wypełnieniu pól kliknij Zapisz.

System obsłuży te szczegóły:

| Zachowanie systemu | Opis |
| --- | --- |
| Krótka nazwa repozytorium | ImgBed rozpoznaje bieżące konto GitHub i rozszerza wartość do pełnej ścieżki repozytorium. |
| Pełna ścieżka repozytorium | ImgBed używa `username/repository` dokładnie tak, jak wpisano. |
| Sprawdzenie repozytorium | Jeśli używasz ścieżki bieżącego konta osobistego, ImgBed automatycznie tworzy repozytorium, gdy nie istnieje. Jeśli wpiszesz pełną ścieżkę ręcznie, używa jej bez zmian. |
| Publiczne/prywatne | Widoczność repozytorium jest synchronizowana z bieżącym przełącznikiem. |

## Szybka lista

GitHub Releases działa tak:

```text
Zaloguj się do GitHub
-> Utwórz Access Token
-> Wróć do ImgBed i wpisz token oraz nazwę repozytorium
-> Zapisz
-> Jeśli wpisano tylko nazwę repo, ImgBed automatycznie dodaje bieżącą nazwę użytkownika
-> Jeśli wpisano username/repo, ImgBed używa tego bez zmian
-> Prześlij obraz testowy
```
