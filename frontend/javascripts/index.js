document.addEventListener('DOMContentLoaded', () => {
  let decade = '1940s';
  let decadeTag = document.getElementById('decade-name');
  decadeTag.innerHTML = "Most common lyrics in the " + decade;


  let words = {};

  const getWords = () => {
    return words;
  };

  Highcharts.chart('wordcloud', {
    chart: {
      style: {
        fontFamily: 'Raleway'
      },
      backgroundColor: '#e4edf4'
    },
    series: [{
      type: 'wordcloud',
      data: data,
      name: 'Occurrences'
    }],
    title: {
      text: ''
    }
  });

  function handleData(payload) {
    data = payload.data;
    // console.log(data);
    // console.log("hi");
    Highcharts.chart('wordcloud', {
      chart: {
        style: {
          fontFamily: 'Raleway'
        },
        backgroundColor: '#e4edf4'
      },
      series: [{
        type: 'wordcloud',
        data: data,
        name: 'Occurrences'
      }],
      title: {
        text: ''
      }
    });
    // console.log("done");
  }

  function fetchData(yr) {
    return $.ajax({
      url: `decade/${yr}`,
      method: 'GET'
    });
  }

  const links = document.querySelectorAll('.decade-selector-item');

  function handleDecade(evt) {
    // console.log("Clicked!!");
    // console.log(evt);
    let yr = evt.target.innerHTML;
    decade = yr;
    // console.log(yr);
    decadeTag.innerHTML = "Most common lyrics in the " + decade;
    fetchData(yr).then(payload => handleData(payload));
  }

  links.forEach(link => {
    link.addEventListener('click', handleDecade);
  });

var data;


// function changeDecade(evt, yr) {
//   decade = yr;
//   decadeTag.innerHTML = "Most common lyrics in the " + decade;
// }



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


// **********
// HIGHCHARTS
// **********

Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Raleway'
        }
    }
});


// let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum erat ac justo sollicitudin, quis lacinia ligula fringilla. Pellentesque hendrerit, nisi vitae posuere condimentum, lectus urna accumsan libero, rutrum commodo mi lacus pretium erat. Phasellus pretium ultrices mi sed semper. Praesent ut tristique magna. Donec nisl tellus, sagittis ut tempus sit amet, consectetur eget erat. Sed ornare gravida lacinia. Curabitur iaculis metus purus, eget pretium est laoreet ut. Quisque tristique augue ac eros malesuada, vitae facilisis mauris sollicitudin. Mauris ac molestie nulla, vitae facilisis quam. Curabitur placerat ornare sem, in mattis purus posuere eget. Praesent non condimentum odio. Nunc aliquet, odio nec auctor congue, sapien justo dictum massa, nec fermentum massa sapien non tellus. Praesent luctus eros et nunc pretium hendrerit. In consequat et eros nec interdum. Ut neque dui, maximus id elit ac, consequat pretium tellus. Nullam vel accumsan lorem.';
// let lines = text.split(/[,\. ]+/g),
//     data = Highcharts.reduce(lines, function (arr, word) {
//         var obj = Highcharts.find(arr, function (obj) {
//             return obj.name === word;
//         });
//         if (obj) {
//             obj.weight += 1;
//         } else {
//             obj = {
//                 name: word,
//                 weight: 1
//             };
//             arr.push(obj);
//         }
//         return arr;
//     }, []);

/**
 * archimedeanSpiral - Gives a set of cordinates for an Archimedian Spiral.
 *
 * @param {number} t How far along the spiral we have traversed.
 * @return {object} Resulting coordinates, x and y.
 */
// var archimedeanSpiral = function archimedeanSpiral(t) {
//     t *= 0.1;
//     return {
//         x: t * Math.cos(t),
//         y: t * Math.sin(t)
//     };
// };
//
// Highcharts.seriesTypes.wordcloud.prototype.spirals.archimedean = archimedeanSpiral;

});
