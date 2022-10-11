// nitinNimbalkar // camelCase
// NitinNimbalkar // pascalCase
// nitin-nimbalkar // kebab case
// nitin_nimbalkar //snake case
// NITIN_NIMBALKAR // Screaming Snake Case
// NITIN-NIMBALKAR // Screaming kebab Case

document.querySelector("#text");
document.querySelector("#convert-btn");
document.querySelector("#camel-case");
document.querySelector("#pascal-case");
document.querySelector("#kebab-case");
document.querySelector("#snake-case");
document.querySelector("#screaming-snake-case");
document.querySelector("#screaming-kebab-case");

var convert_button = document.querySelector("#convert-btn");
var camel_case = document.querySelector("#camel-case");

function convertText() {
  var text = document.getElementById("text").value;
  var camelCaseValue = camelCase(text);
  document.querySelector("#camel-case").textContent = camelCaseValue;

  var pascalCaseValue = pascalCase(text);
  document.querySelector("#pascal-case").textContent = pascalCaseValue;

  var kebabCaseValue = kebabCase(text);
  document.querySelector("#kebab-case").textContent = kebabCaseValue;

  var snakeCaseValue = snakeCase(text);
  document.querySelector("#snake-case").textContent = snakeCaseValue;

  var screamingSnakeCaseValue = ScreamingSnakeCase(text);
  document.querySelector("#screaming-snake-case").textContent =
    screamingSnakeCaseValue;

  var screamingKebabCaseValue = ScreamingKebabCase(text);
  document.querySelector("#screaming-kebab-case").textContent =
    screamingKebabCaseValue;
}

// nitinNimbalkar // camelCase
function camelCase(text) {
  let words = text.split(" ");
  let newWords = words.map((word, index) => {
    if (index == 0) {
      return word.toLowerCase();
    } else {
      let lCaseWord = word.toLowerCase();
      return lCaseWord[0].toUpperCase() + lCaseWord.substr(1);
    }
  });
  return newWords.join("");
}
//NitinNimbalkar // pascalCase
function pascalCase(text) {
  let words = text.split(" ");
  let newWords = words.map((word) => {
    let lCaseWord = word.toLowerCase();
    return lCaseWord[0].toUpperCase() + lCaseWord.substr(1);
  });
  return newWords.join("");
}
// nitin-nimbalkar // kebab case
function kebabCase(text) {
  let words = text.split(" ");
  let newWords = words.map((word) => {
    let lCaseWord = word.toLowerCase();
    return lCaseWord[0].toLowerCase() + lCaseWord.substr(1);
  });
  return newWords.join("-");
}

//nitin_nimbalkar //snake case
function snakeCase(text) {
  let words = text.split(" ");
  let newWords = words.map((word) => {
    let lCaseWord = word.toLowerCase();
    return lCaseWord[0].toLowerCase() + lCaseWord.substr(1);
  });
  return newWords.join("_");
}

// NITIN_NIMBALKAR // Screaming Snake Case
function ScreamingSnakeCase(text) {
  let words = text.split(" ");
  let newWords = words.map((word) => {
    let lCaseWord = word.toUpperCase();
    return lCaseWord[0].toUpperCase() + lCaseWord.substr(1);
  });
  return newWords.join("_");
}

// NITIN-NIMBALKAR // Screaming kebab Case
function ScreamingKebabCase(text) {
  let words = text.split(" ");
  let newWords = words.map((word) => {
    let lCaseWord = word.toUpperCase();
    return lCaseWord[0].toUpperCase() + lCaseWord.substr(1);
  });
  return newWords.join("-");
}
