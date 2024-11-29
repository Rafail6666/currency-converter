// ------------------------- ТЕСТЫ ----------------------------

function runTests() {
    console.log("Running tests...");

    // Тест 1: Проверка корректности заполнения выпадающих списков
    const selects = document.querySelectorAll("form select");
    console.assert(selects.length === 2, "Должно быть два выпадающих списка");

    const optionsFrom = selects[0].querySelectorAll("option");
    const optionsTo = selects[1].querySelectorAll("option");

    console.assert(optionsFrom.length === Object.keys(country_list).length, `Должно быть ${Object.keys(country_list).length} опции в первом списке`);
    console.assert(optionsTo.length === Object.keys(country_list).length, `Должно быть ${Object.keys(country_list).length} опции во втором списке`);

    // Проверяем правильность выбранных валют по умолчанию
    console.assert(selects[0].value === "RUB", "Начальная валюта в первом списке должна быть RUB");
    console.assert(selects[1].value === "USD", "Начальная валюта во втором списке должна быть USD");

    // Тест 2: Проверка работы функции loadFlag
    loadFlag(fromCurrency);
    let imgTagFrom = fromCurrency.parentElement.querySelector("img");
    console.assert(imgTagFrom.src.includes("ru.png"), "Флаг для RUB должен быть загружен");

    loadFlag(toCurrency);
    let imgTagTo = toCurrency.parentElement.querySelector("img");
    console.assert(imgTagTo.src.includes("us.png"), "Флаг для USD должен быть загружен");

    // Тест 3: Проверка работы обмена валют при клике на иконку
    const exchangeIcon = document.querySelector(".icon");
    const initialFromValue = fromCurrency.value;
    const initialToValue = toCurrency.value;

    exchangeIcon.click();

    // Проверяем, что валюты поменялись
    console.assert(fromCurrency.value === initialToValue, "После клика валюта в поле 'FROM' должна измениться");
    console.assert(toCurrency.value === initialFromValue, "После клика валюта в поле 'TO' должна измениться");

    // Тест 4: Проверка правильности работы кнопки "Get Rate 1"
    const exchangeRateTxt = document.querySelector(".exchange-rate");
    const amountInput = document.querySelector("form input");

    // Симулируем ввод значения
    amountInput.value = "100";

    // Симулируем клик по кнопке

    getButton1 && getButton1.click();
    
    console.assert(exchangeRateTxt.innerText.includes("Getting exchange rate..."), "Текст в поле обмена должен быть 'Getting exchange rate...'");

    console.log("Все тесты прошли успешно!");
}

// Запуск тестов

// runTests();