describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/');  // Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru') // Ввести правильный логин
        cy.get('#pass').type('iLoveqastudio1')  // Ввести правильный пароль
        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка что после авт.вижу тект
        cy.get('#messageHeader').should('be.visible'); // Текст виден  пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Виден крестик и он есть
     
    })
    
    it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');  // Зашли на сайт
        cy.get('#forgotEmailButton').click(); // Нажал восстановить пароль
        cy.get('#mailForgot').type('german@dolnikov.ru') // Ввел почту для восстан.
        cy.get('#restoreEmailButton').click(); // Нажал отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю на совп. текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден
    
    })

    it('Ввести не верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/');  // Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru') // Ввести правильный логин
        cy.get('#pass').type('iLoveqastudio27')  // Ввести не правильный пароль
        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка что при вводе неверного пароля вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден  пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Виден крестик и он есть
         
    
        
    })

    it('Ввести верный пароль и не верный логин', function () {
        cy.visit('https://login.qa.studio/');  // Зашли на сайт
        cy.get('#mail').type('german@dolniko.ru') // Ввести не правильный логин
        cy.get('#pass').type('iLoveqastudio1')  // Ввести правильный пароль
        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка что при вводе неверного логина вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден  пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Виден крестик и он есть
         
    })

    it('Ввести верный пароль и логин без @', function () {
        cy.visit('https://login.qa.studio/');  // Зашли на сайт
        cy.get('#mail').type('germandolniko.ru') // Ввести логин без @
        cy.get('#pass').type('iLoveqastudio1')  // Ввести правильный пароль
        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверка что при вводе логина без @ вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден  пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Виден крестик и он есть
    
    })

    it('Ввести верный пароль и приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');  // Зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru') // Ввести логин с заглавными буквами
        cy.get('#pass').type('iLoveqastudio1')  // Ввести правильный пароль
        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка что при вводе логина с заглавными буквами вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден  пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Виден крестик и он есть

    
    })

})

describe('Проверка покупки нового аватара', function () {                 // название набора тестов
    it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
         cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
         cy.get('input[id="k_email"]').type('USER_LOGIN');                   // вводим логин
         cy.get('input[id="k_password"]').type('USER_PASSWORD');               // вводим пароль
         cy.get('button[type="submit"]').click();                // нажимаем кнопку Подтвердить
         cy.wait(2000);
         cy.get('.header_card_trainer').click();            // Клик в шапке на аву тренера
         cy.wait(2000);
         cy.get('.k_mobile > :nth-child(5) > #dropdown > img').click(); // нажимаем кнопку Смена аватара
         cy.get('.available > button').first().click();   // кликаем Купить у первого доступного аватара
         cy.get('.card_number').type('4620869113632996');                     // вводим номер карты
         cy.get('.card_csv').type('125');                             // вводим CVV карты
         cy.get('.card_date').type('1226');                           // вводим срок действия карты
         cy.get('.card_name').type('Andrey');                           // вводим имя владельца действия карты
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();     // нажимаем кнопку Оплатить
         cy.get('.threeds_number').type('56456');                            // вводим код подтверждения СМС
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();   // нажимаем кнопку Оплатить
         cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения об успешной покупке
     });
 });


