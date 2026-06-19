export type tTasks ={
    "question": string; /* вопрос задания*/
    "answer": string; /* ответ задания*/
}[]

export type tQuizes = {
    "id": number, 
    "type": "M" | "S" | "C", /* типы заданий, М - сопоставление, S - сортровка, C - выбор одного варианта*/
    "title": string, /* формулировка задания */
    "tasks": tTasks,
    "isUseImage"? : boolean,
}[];

export const quiz: tQuizes = [
  {
    "id": 1,
    "type": "M",
    "title": "Сопоставьте скриншот и игру, к которой он принадлежит.",
    "isUseImage" : true,
    "tasks": [
      {
        "question": "img/perceptual_cover.jpg",
        "answer": "PERCEPTUAL"
      },
      {
        "question": "img/night_walk_cover.png",
        "answer": "Walk Me Home"
      },
      {
        "question": "img/jura_cover.png",
        "answer": "Jura: New Year"
      },
      {
        "question": "img/father_cover.png",
        "answer": "Отец"
      },
    ]
  },
  {
    "id": 2,
    "type": "M",
    "title": "Сопоставьте игру и её жанр.",
    "tasks": [
      {
        "question": "PERCEPTUAL",
        "answer": "Экшен хоррор"
      },
      {
        "question": "Walk Me Home",
        "answer": "Психологический хоррор"
      },
      {
        "question": "Jura: New Year",
        "answer": "Визуальная новелла про друзей"
      },
      {
        "question": "Отец",
        "answer": "Симулятор вахтера"
      },
    ]
  },
  {
    "id": 3,
    "type": "S",
    "title": "Отсортируйте игры по их дате выхода.",
    "isUseImage" : true,
    "tasks": [
      {
        "question": "1",
        "answer": "PERCEPTUAL"
      },
      {
        "question": "2",
        "answer": "Jura: New Year"
      },
      {
        "question": "3",
        "answer": "Walk Me Home"
      },
      {
        "question": "4",
        "answer": "Отец"
      },
    ]
  },
  {
    "id": 4,
    "type": "C",
    "title": "Какая игра имела две разные версии?",
    "isUseImage" : true,
    "tasks": [
      {
        "question": "true",
        "answer": "PERCEPTUAL"
      },
      {
        "question": "false",
        "answer": "Walk Me Home"
      },
      {
        "question": "false",
        "answer": "Jura: New Year"
      },
      {
        "question": "false",
        "answer": "Father"
      },
    ]
  },
]
