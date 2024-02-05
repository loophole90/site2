// Отримання елементів, які потрібно адаптувати
const header = document.querySelector('header');
const panelGroup = document.querySelector('.panel-group');
const textElements = document.querySelectorAll('.text');

// Функція для зміни стилів при адаптації
function adaptToMobile() {
    // Отримання ширини вікна перегляду
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Адаптація для ширини менше 770px
    if (windowWidth <= 770) {
        // Зміни стилів для header
        header.style.height = 'auto';
        header.style.flexDirection = 'column';
        header.style.alignItems = 'center';

        // Зміни стилів для panelGroup
        panelGroup.style.flexDirection = 'column';
        panelGroup.style.alignItems = 'center';

        // Зміни стилів для textElements
        textElements.forEach(textElement => {
            textElement.style.fontSize = '14px';
        });
    } else {
        // Скидання стилів, якщо ширина більше 770px
        header.style.height = '129px';
        header.style.flexDirection = 'row';
        header.style.alignItems = 'center';

        panelGroup.style.flexDirection = 'row';
        panelGroup.style.alignItems = 'flex-start';

        textElements.forEach(textElement => {
            textElement.style.fontSize = '29px';
        });
    }
}

// Викликати функцію при завантаженні та зміні розміру вікна
window.addEventListener('load', adaptToMobile);
window.addEventListener('resize', adaptToMobile);