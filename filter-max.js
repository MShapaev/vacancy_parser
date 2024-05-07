
// Воспользуемся json форматом файла. Для нас интересны свойства job-name и salary


const fullList = [
  {
    "job-name": {
      "__cdata": " Шлифовщик "
    },
    "description": {
      "__cdata": " .Предлагается стабильная и доходная работа на машиностроительном производстве.<br /> <strong><strong>Требования:</strong> </strong><br /> <ul> <li>конструктивные особенности и правила проверки на точность шлифовальных станков различных типов и универсальных и специальных приспособлений;</li> <li>расчеты, связанные с наладкой станков; правила определения наивыгоднейшего режима шлифования в зависимости от материала, формы изделия и марки шлифовальных станков; правила настройки и регулирования контрольно-измерительных инструментов и приборов; правила определения режимов резания по справочникам и паспорту станка.</li> </ul> <strong>Условия:</strong><br /> <ul> <li>сменный график работы</li> <li>возможность подработки</li> <li>горячие обеды</li> <li>отпуск оплачиваемый</li> <li>бесплатная спецодежда</li> <li>больничные листы оплачиваются</li> <li>дружественный коллектив</li> </ul> "
    },
    "url": "https://www.rabota.ru/vacancy/5279301/split-view/",
    "industry": "Оператор станков / Автоматических линий; Токарь; Фрезеровщик; Другое",
    "salary": "80000 - 90000",
    "currency": "руб./мес.",
    "schedule": "сменный график",
    "requirement": {
      "education": "среднее профессиональное",
      "experience": "от 2 лет"
    },
    "region": "Москва и Московская область",
    "address": {
      "location": {
        "__cdata": " Москва, Перово поле 3-ий проезд,дом3,строение2 "
      },
      "metro": [
        "Новогиреево",
        "Перово",
        "Шоссе Энтузиастов"
      ],
      "coordinates": {
        "x": 37.786887,
        "y": 55.75132
      }
    },
    "creation-date": "2006-12-04",
    "publish-date": "2022-08-21",
    "real-publish-date": "Нет данных",
    "update-date": "2022-08-21",
    "expires": "2022-09-20",
    "company": {
      "name": {
        "__cdata": " ТВС-механика "
      },
      "description": {
        "__cdata": " Машиностроительное предприятие по производству запасных частей, режущего инструмента и оборудования для мясопереработки. "
      },
      "inn": 7720046724,
      "hr-agency": false
    }
  },
  {
    "job-name": {
      "__cdata": " Слесарь механосборочных работ "
    },
    "description": {
      "__cdata": " <strong>Требования:</strong><br /> опыт работы от 5 лет<br /> Приветствуется способноcть работать ответственно и самостоятельно.<br /> <br /> <strong>Условия:</strong><br /> Полный соцпакет.<br /> Отпуск-летом.<br /> Дотация на обеды.<br /> Обеспечение спецодеждой.<br /> <br /> <strong>Обязанности:</strong><br /> выполнение слесарных работ<br /> "
    },
    "url": "https://www.rabota.ru/vacancy/6145829/split-view/",
    "industry": "Сборщик; Металлургия, металлообработка; Слесарь / Сборщик",
    "salary": "60000 - 80000",
    "currency": "руб./мес.",
    "schedule": "полный рабочий день",
    "requirement": {
      "education": "любое",
      "experience": "от 5 лет"
    },
    "region": "Москва и Московская область",
    "address": {
      "location": {
        "__cdata": " Москва "
      },
      "metro": [
        "Перово",
        "Шоссе Энтузиастов"
      ],
      "coordinates": {
        "x": 37.786887,
        "y": 55.75132
      }
    },
    "creation-date": "2006-12-09",
    "publish-date": "2022-08-21",
    "real-publish-date": "Нет данных",
    "update-date": "2022-08-21",
    "expires": "2022-09-20",
    "company": {
      "name": {
        "__cdata": " ТВС-механика "
      },
      "description": {
        "__cdata": " Машиностроительное предприятие по производству запасных частей, режущего инструмента и оборудования для мясопереработки. "
      },
      "inn": 7720046724,
      "hr-agency": false
    }
  },
]

// Назначаем переменные для чтения введенных данных в полях фильтров по названию и зарплате,
// а также для наполнения подходящими вакансиями итогового списка

const input_jobname = document.querySelector('.input-job-name')
const input_salary = document.querySelector('.input-salary')
const listEl = document.querySelector('.list')

// Задаем начальное состояние фильтров

const filterState = {
  "job-name": "",
  "salary": ""
}

//  Функция очистки списка вакансий

function clearList() {
  listEl.innerHTML = ''
}


//  Функция, создающая в разметке HTML карточку вакансии, содержащую название вакансии и зарплату, 
//  а также кнопку подробнее.
//  Объединяем их в один div, которому присваиваем правила стилей из index-max.html

function createVacancyCard(vacancy) {
  const jobName = document.createElement('div')
  jobName.textContent = vacancy["job-name"]["__cdata"]

  const salary = document.createElement('div')
  salary.textContent = `${vacancy["salary"]} ${vacancy["currency"]}`

  const button = document.createElement('button')
  button.innerText = 'Подробнее'
  button.id = 'mainButton'
  button.classList.add('btn');
  button.addEventListener('click', () => {
    alert('Подробная информация о вакансии')
  })
  

  const vacancyEl = document.createElement('div')

  vacancyEl.appendChild(jobName)
  vacancyEl.appendChild(salary)
  vacancyEl.appendChild(button)

  vacancyEl.classList.add('vacancy')
  

  return vacancyEl
}

// Функция, которая принимает массив вакансий и формирует список из карточек вакансий на странице

function drawList(data) {
  clearList()

  data.forEach(vacancy => {
    const vacancyEl = createVacancyCard(vacancy)
    listEl.appendChild(vacancyEl)
  });
}

//  Функция, проверяющая, входит ли желаемая зарплата, введенная в фильтре, в диапазон зарплаты из вакансии

function isSalarySuited(wish_salary, salary) {
  return +wish_salary <= +salary.split(' ').slice(-1)[0]
}

// Функция, возвращающая отфильтрованный список вакансий

function filterList() {
  return fullList.filter((vacancy) => vacancy["job-name"]["__cdata"].toLowerCase().includes(filterState["job-name"].toLowerCase()) &&
  isSalarySuited(filterState["salary"], vacancy["salary"]))
}

// Считываем значение, введенное в поле фильтров в виде строки

input_jobname.addEventListener('input', (e) => {
  filterState["job-name"] = e.target.value
  const filteredList = filterList()
  drawList(filteredList)
})

input_salary.addEventListener('input', (e) => {
  filterState["salary"] = e.target.value
  const filteredList = filterList()
  drawList(filteredList)
})

// Отрисовываем на странице полученный отфильтрованный по параметрам список вакансий

drawList(fullList)
