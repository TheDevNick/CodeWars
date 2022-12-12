var list1 = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
  },
  {
    firstName: "Anna",
    lastName: "R.",
    country: "Liechtenstein",
    continent: "Europe",
    age: 52,
    language: "JavaScript",
  },
  {
    firstName: "Ramon",
    lastName: "R.",
    country: "Paraguay",
    continent: "Americas",
    age: 29,
    language: "Ruby",
  },
  {
    firstName: "George",
    lastName: "B.",
    country: "England",
    continent: "Europe",
    age: 81,
    language: "C",
  },
];
function countLanguages(list) {
  // thank you for checking out the Coding Meetup kata :)
  const langMap = {};
  const languages = list.map((item) => item.language);

  for (let language of languages) {
    if (langMap[language]) {
      langMap[language]++;
    } else {
      langMap[language] = 1;
    }
  }

  return langMap;
}

console.log(countLanguages(list1));
