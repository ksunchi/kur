// Массив книг с описаниями
const books = [
  {
    title: "Война и мир",
    author: "Лев Толстой",
    year: "1869 г.",
    rating: "★★★★★",
    image: "https://avatars.mds.yandex.net/i?id=b8110e64df6dc3e0fc42ca9b591f31cf_l-5498032-images-thumbs&n=13",
    description: "Эпический роман, описывающий жизнь русского общества в эпоху Наполеоновских войн. Сложные сюжетные линии переплетают судьбы нескольких аристократических семей."
  },
  {
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    year: "1866 г.",
    rating: "★★★★★",
    image: "https://ir.ozone.ru/s3/multimedia-3/6309348939.jpg",
    description: "Психологический роман о бывшем студенте Родионе Раскольникове, совершившем убийство и переживающем муки совести."
  },
  {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: "1967 г.",
    rating: "★★★★★",
    image: "https://goods-photos.static1-sima-land.com/items/2810029/0/700.jpg?v=1521531369",
    description: "Мистический роман, сочетающий сатиру на советское общество с философскими размышлениями о добре и зле, любви и творчестве."
  },
  {
    title: "Евгений Онегин",
    author: "Александр Пушкин",
    year: "1833 г.",
    rating: "★★★★★",
    image: "https://cdn1.ozone.ru/s3/multimedia-t/6481469429.jpg",
    description: "Роман в стихах, 'энциклопедия русской жизни', рассказывающий о любви, дружбе и разочарованиях молодого дворянина."
  },
  {
    title: "Анна Каренина",
    author: "Лев Толстой",
    year: "1877 г.",
    rating: "★★★★☆",
    image: "https://avatars.mds.yandex.net/get-mpic/12301852/2a00000193bc1811a76c883a1d8e06fd4d67/orig",
    description: "Роман о трагической любви замужней женщины Анны Карениной к офицеру Вронскому на фоне картины жизни дворянского общества."
  },
  {
    title: "Отцы и дети",
    author: "Иван Тургенев",
    year: "1862 г.",
    rating: "★★★★☆",
    image: "https://knigivkoree.com/wp-content/uploads/2023/09/otcy-i-deti-turgenev-ivan-sergeevich.jpg",
    description: "Роман о конфликте между поколениями, представленный через отношения аристократа Павла Кирсанова и нигилиста Евгения Базарова."
  },
  {
    title: "Тихий Дон",
    author: "Михаил Шолохов",
    year: "1928 г.",
    rating: "★★★★★",
    image: "https://ir.ozone.ru/s3/multimedia-j/c1000/6425868103.jpg",
    description: "Эпопея о жизни донского казачества в годы Первой мировой и Гражданской войн, повествующая о судьбе Григория Мелехова."
  },
  {
    title: "Доктор Живаго",
    author: "Борис Пастернак",
    year: "1957 г.",
    rating: "★★★★☆",
    image: "https://goods-photos.static1-sima-land.com/items/4677857/0/700.jpg?v=1605563565",
    description: "Роман о судьбе русской интеллигенции в годы революции и Гражданской войны через историю жизни врача и поэта Юрия Живаго."
  },
  {
    title: "Обломов",
    author: "Иван Гончаров",
    year: "1859 г.",
    rating: "★★★★☆",
    image: "https://avatars.mds.yandex.net/get-mpic/12217350/2a00000193bf44cd366e6fd86ef5086cc076/orig",
    description: "Роман о жизни Ильи Обломова, дворянина, страдающего от лени и апатии, символизирующего 'обломовщину' русского общества."
  },
  {
    title: "Мёртвые души",
    author: "Николай Гоголь",
    year: "1842 г.",
    rating: "★★★★★",
    image: "https://avatars.mds.yandex.net/get-mpic/5243609/2a000001955e0d972a70cc03f53c6f440cf9/orig",
    description: "Поэма-роман о приключениях Павла Чичикова, скупающего 'мёртвые души' крепостных крестьян, чтобы разбогатеть."
  },
  {
    title: "Герой нашего времени",
    author: "Михаил Лермонтов",
    year: "1840 г.",
    rating: "★★★★★",
    image: "https://avatars.mds.yandex.net/get-mpic/3909438/2a00000193bbf1c6c8cd9a865a4a12779661/orig",
    description: "Психологический роман о Печорине, 'лишнем человеке' своего времени, через пять повестей, раскрывающих его характер."
  },
  {
    title: "Собачье сердце",
    author: "Михаил Булгаков",
    year: "1925 г.",
    rating: "★★★★★",
    image: "https://goods-photos.static1-sima-land.com/items/1521873/0/700.jpg?v=0",
    description: "Сатирическая повесть об эксперименте профессора Преображенского, превратившего пса Шарика в человека Полиграфа Шарикова."
  }
];

// Функция для отображения книг
function displayBooks(booksToShow) {
  const booksGrid = document.getElementById('booksGrid');
  const booksCount = document.getElementById('booksCount');
  
  booksGrid.innerHTML = '';
  booksCount.textContent = booksToShow.length;
  
  if (booksToShow.length === 0) {
    booksGrid.innerHTML = `
      <div class="no-results">
        <i>🔍</i>
        <p>Книги по вашему запросу не найдены</p>
        <p>Попробуйте изменить поисковый запрос</p>
      </div>
    `;
    return;
  }
  
  booksToShow.forEach(book => {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    bookCard.innerHTML = `
      <div class="book-image">
        <img src="${book.image}" alt="Обложка книги ${book.title}" loading="lazy">
      </div>
      <div class="book-info">
        <div class="book-title">${book.title}</div>
        <div class="book-author">${book.author}</div>
        <div class="book-meta">
          <span class="book-year">${book.year}</span>
          <span class="book-rating">${book.rating}</span>
        </div>
      </div>
      <div class="book-description">
        <div class="description-title">О книге</div>
        <div class="description-text">${book.description}</div>
      </div>
    `;
    booksGrid.appendChild(bookCard);
  });
}

// Функция для поиска книг
function searchBooks(searchTerm) {
  if (!searchTerm.trim()) {
    return books;
  }
  
  const term = searchTerm.toLowerCase();
  return books.filter(book => 
    book.title.toLowerCase().includes(term) ||
    book.author.toLowerCase().includes(term) ||
    book.description.toLowerCase().includes(term)
  );
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  // Отображаем все книги при загрузке
  displayBooks(books);
  
  // Настраиваем обработчик поиска
  const searchInput = document.getElementById('searchInput');
  let searchTimeout;
  
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    
    searchTimeout = setTimeout(() => {
      const searchTerm = e.target.value;
      const filteredBooks = searchBooks(searchTerm);
      displayBooks(filteredBooks);
    }, 300); // Задержка 300ms для дебаунса
  });
  
  // Фокус на поле поиска при загрузке
  searchInput.focus();
  
  // Добавляем обработчик для клавиши Escape
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      searchInput.value = '';
      displayBooks(books);
    }
  });
  
  // Добавляем обработчик для клика вне поля поиска
  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target)) {
      searchInput.blur();
    }
  });
  
  // Анимация при наведении на карточки книг
  document.addEventListener('mouseover', (e) => {
    const bookCard = e.target.closest('.book-card');
    if (bookCard) {
      // Добавляем небольшую задержку для плавности
      setTimeout(() => {
        bookCard.style.zIndex = '10';
      }, 100);
    }
  });
  
  document.addEventListener('mouseout', (e) => {
    const bookCard = e.target.closest('.book-card');
    if (bookCard) {
      setTimeout(() => {
        bookCard.style.zIndex = '';
      }, 300);
    }
  });
});

// Функция для случайного перемешивания массива книг (опционально)
function shuffleBooks() {
  for (let i = books.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [books[i], books[j]] = [books[j], books[i]];
  }
}

// Функция для сортировки книг по году (опционально)
function sortBooksByYear(ascending = true) {
  return [...books].sort((a, b) => {
    const yearA = parseInt(a.year);
    const yearB = parseInt(b.year);
    return ascending ? yearA - yearB : yearB - yearA;
  });
}

// Функция для сортировки книг по рейтингу (опционально)
function sortBooksByRating(ascending = true) {
  return [...books].sort((a, b) => {
    const ratingA = (a.rating.match(/★/g) || []).length;
    const ratingB = (b.rating.match(/★/g) || []).length;
    return ascending ? ratingA - ratingB : ratingB - ratingA;
  });
}