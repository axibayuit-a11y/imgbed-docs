# Dodawanie kanału Hugging Face

## Co przygotować przed rozpoczęciem

Potrzebujesz tylko trzech rzeczy:

| Wymaganie | Cel |
| --- | --- |
| Konto Hugging Face | Do wygenerowania access token i jako właściciel repozytorium. |
| Hugging Face User Access Token | Pozwala ImgBed korzystać z API Hugging Face, tworzyć repozytoria i przesyłać pliki. |
| Nazwa repozytorium | Możesz wpisać samą nazwę repozytorium, np. `image`. |

## Konfiguracja

### Krok 1: Zaloguj się do Hugging Face i utwórz Access Token

1. Zaloguj się do Hugging Face.
2. Kliknij avatar w prawym górnym rogu i otwórz `Settings`.
3. Otwórz `Access Tokens` z lewego panelu.
4. Utwórz nowy token.
5. Nadaj tokenowi rozpoznawalną nazwę.
6. Wybierz uprawnienie `write`.
7. Skopiuj i zapisz token od razu po utworzeniu.

![Tworzenie tokenu](../../image/upload/huggingface/创建令牌.png)

## Krok 2: Wypełnij kanał Hugging Face w ImgBed

Po wybraniu `Hugging Face` w Ustawieniach przesyłania wypełnij:

| Pole UI | Co wpisać |
| --- | --- |
| Nazwa kanału | Nazwa wybrana przez Ciebie, np. `hf-primary`. |
| Nazwa repozytorium | Krótka nazwa, np. `image`, albo pełna ścieżka, np. `username/image`. |
| Access Token | Utworzony przed chwilą Hugging Face User Access Token. |
| Prywatne repozytorium | Włącz lub wyłącz według potrzeb. |
| Uwaga | Opcjonalnie, np. `Primary upload channel`. |

![Dodanie kanału](../../image/upload/huggingface/添加渠道.png)

## Krok 3: Zapisz kanał

Po wypełnieniu pól kliknij Zapisz.

System obsłuży te szczegóły:

| Zachowanie systemu | Opis |
| --- | --- |
| Krótka nazwa repozytorium | ImgBed rozpoznaje bieżące konto Hugging Face i rozszerza wartość do pełnej ścieżki repozytorium. |
| Pełna ścieżka repozytorium | ImgBed używa `username/repository` dokładnie tak, jak wpisano. |
| Sprawdzenie repozytorium | Jeśli używasz ścieżki bieżącego konta osobistego, ImgBed próbuje utworzyć repozytorium, gdy nie istnieje. Jeśli wpiszesz pełną ścieżkę ręcznie, używa jej bez zmian. |
| Typ repozytorium | Ten kanał używa repozytorium `dataset`. |
| Publiczne/prywatne | Widoczność repozytorium jest synchronizowana z bieżącym przełącznikiem. |

## Szybka lista

```text
Sign in to Hugging Face
-> Create an Access Token
-> Select write permission
-> Return to ImgBed and enter the token and repository name
-> Save
-> If only a repo name is entered, ImgBed adds the current username automatically
-> If username/repo is entered, ImgBed uses it as-is
-> ImgBed checks or creates the dataset repository
-> Upload a test image
```
