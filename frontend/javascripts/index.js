document.addEventListener('DOMContentLoaded', () => {
});
let decade = '1940s';

let decadeTag = document.getElementById('decade-name');
decadeTag.innerHTML = "Most common lyrics in the " + decade;


// function changeDecade(evt, yr) {
//   decade = yr;
//   decadeTag.innerHTML = "Most common lyrics in the " + decade;
// }

let words = {};

const getWords = () => {
  return words;
};

function handleData(payload) {
  words = payload;
  console.log(words);
  return words;
}

function fetchData(yr) {
  $.ajax({
    url: `decade/${yr}`,
    method: 'GET'
  }).then(payload => handleData(payload));
}

const links = document.querySelectorAll('.decade-selector-item');

function handleDecade(evt) {
  console.log("Clicked!!");
  console.log(evt);
  let yr = evt.target.innerHTML;
  decade = yr;
  decadeTag.innerHTML = "Most common lyrics in the " + decade;
  fetchData(yr);
}

links.forEach(link => {
  link.addEventListener('click', handleDecade);
});


// let decade = '1940s';
//
// let decadeTag = document.getElementById("decade-name");
// console.log(decadeTag);
// decadeTag.innerHTML = "Most common lyrics in the " + decade;
// console.log(decadeTag.innerHTML);
//
// const changeDecade = (yr) => {
//   decade = yr;
//   decadeTag.innerHTML = "Most common lyrics in the " + decade;
//   return decadeTag;
// };

// const openDecade = (evt, yr) => {
//   let i, x, tablinks;
//   x = document.getElementsByClassName("year");
//   for (i = 0; i < x.length; i++) {
//       x[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablink");
//   for (i = 0; i < x.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" decade-selector-selected", "");
//   }
//   document.getElementById(yr).style.display = "block";
//   evt.currentTarget.className += " decade-selector-selected";
//   decade = yr;
//   decadeTag.innerHTML = "Most common lyrics in the " + decade;
// };

export default getWords;
