document.addEventListener('DOMContentLoaded', () => {
  let decade = '1940s';

  let decadeTag = document.getElementById("decade-name");
  decadeTag.innerHTML = "Most common lyrics in the " + decade;

  const changeDecade = (yr) => {
    decade = yr;
    decadeTag.innerHTML = "Most common lyrics in the " + decade;

  };
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

const openDecade = (evt, yr) => {
  let i, x, tablinks;
  x = document.getElementsByClassName("year");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" decade-selector-selected", "");
  }
  document.getElementById(yr).style.display = "block";
  evt.currentTarget.className += " decade-selector-selected";
  decade = yr;
  decadeTag.innerHTML = "Most common lyrics in the " + decade;
};
