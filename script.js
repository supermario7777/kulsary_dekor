// Сменить картинку в галерее
function changeImage ( galleryId, direction )
{
    const gallery = document.getElementById( galleryId );
    const images = gallery.getElementsByTagName( 'img' );
    let currentIndex = Array.from( images ).findIndex( img => img.style.display !== 'none' );

    // Скрыть текущую картинку
    images[ currentIndex ].style.display = 'none';

    // Рассчитать индекс следующей картинки
    currentIndex = ( currentIndex + direction + images.length ) % images.length;

    // Показать новую картинку
    images[ currentIndex ].style.display = 'block';
}

// Открытие модального окна
document.getElementById( 'openModal' ).addEventListener( 'click', () =>
{
    document.getElementById( 'modal' ).style.display = 'block';
} );

// Закрытие модального окна
function closeModal ()
{
    document.getElementById( 'modal' ).style.display = 'none';
}

// Отправка данных формы через WhatsApp
function submitForm ()
{
    const name = document.getElementById( 'name' ).value;
    const phone = document.getElementById( 'phone' ).value;
    const category = document.getElementById( 'category' ).value;

    const message = `Добрый день, Мухтар! Я хотел бы сделать заказ на ТВ зону, не могли бы Вы со мной связаться? Имя: ${name}%0AТелефон: ${phone}%0AКатегория: ${category} тыс тенге`;

    const whatsappUrl = `https://wa.me/77068303193?text=${message}`;
    window.open( whatsappUrl, '_blank' );
}


// Функция для генерации случайного цвета в формате hex
function getRandomColor ()
{
    const letters = '0123456789ABCDEF';
    let color = '#';
    for ( let i = 0; i < 6; i++ ) {
        color += letters[ Math.floor( Math.random() * 16 ) ];
    }
    return color;
}

// Функция для применения случайного цвета к тексту
function changeTextColor ()
{
    const textElement = document.getElementById( 'flashing-text' );
    setInterval( () =>
    {
        textElement.style.color = getRandomColor();
    }, 2000 );  // Меняем цвет каждые 500 мс
}

// Запуск функции
changeTextColor();
