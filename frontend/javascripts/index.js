document.addEventListener('DOMContentLoaded', () => {
	Highcharts.chart('wordcloud', {
		chart: {
			style: {
				fontFamily: 'Raleway'
			},
			backgroundColor: '#e4edf4'
		},
		series: [
			{
				type: 'wordcloud',
				data: [
					{ name: 'love', weight: 289 },
					{ name: 'im', weight: 246 },
					{ name: 'youre', weight: 160 },
					{ name: 'like', weight: 143 },
					{ name: 'know', weight: 130 },
					{ name: 'one', weight: 127 },
					{ name: 'go', weight: 127 },
					{ name: 'long', weight: 123 },
					{ name: 'never', weight: 123 },
					{ name: 'heart', weight: 122 },
					{ name: 'ill', weight: 106 },
					{ name: 'see', weight: 99 },
					{ name: 'well', weight: 97 },
					{ name: 'clippety', weight: 96 },
					{ name: 'day', weight: 93 },
					{ name: 'night', weight: 93 },
					{ name: 'time', weight: 89 },
					{ name: 'theres', weight: 88 },
					{ name: 'thats', weight: 88 },
					{ name: 'get', weight: 88 },
					{ name: 'little', weight: 86 },
					{ name: 'old', weight: 84 },
					{ name: 'cant', weight: 84 },
					{ name: 'oh', weight: 82 },
					{ name: 'say', weight: 82 },
					{ name: 'let', weight: 77 },
					{ name: 'dream', weight: 76 },
					{ name: 'got', weight: 74 },
					{ name: 'ive', weight: 73 },
					{ name: 'way', weight: 72 },
					{ name: 'two', weight: 71 },
					{ name: 'come', weight: 71 },
					{ name: 'along', weight: 67 },
					{ name: 'shes', weight: 67 },
					{ name: 'mule', weight: 65 },
					{ name: 'make', weight: 64 },
					{ name: 'youll', weight: 63 },
					{ name: 'made', weight: 60 },
					{ name: 'away', weight: 60 },
					{ name: 'hear', weight: 60 },
					{ name: 'said', weight: 60 },
					{ name: 'true', weight: 59 },
					{ name: 'train', weight: 59 },
					{ name: 'kiss', weight: 56 },
					{ name: 'cause', weight: 55 },
					{ name: 'tell', weight: 55 },
					{ name: 'baby', weight: 54 },
					{ name: 'hyah', weight: 54 },
					{ name: 'want', weight: 54 },
					{ name: 'new', weight: 54 },
					{ name: 'eyes', weight: 53 },
					{ name: 'every', weight: 53 },
					{ name: 'would', weight: 50 },
					{ name: 'words', weight: 48 },
					{ name: 'music', weight: 47 },
					{ name: 'blue', weight: 46 },
					{ name: 'big', weight: 45 },
					{ name: 'hey', weight: 45 },
					{ name: 'around', weight: 45 },
					{ name: 'ever', weight: 43 },
					{ name: 'man', weight: 43 },
					{ name: 'must', weight: 41 },
					{ name: 'darling', weight: 41 },
					{ name: 'ho', weight: 41 },
					{ name: 'always', weight: 41 },
					{ name: 'could', weight: 41 },
					{ name: 'gotta', weight: 41 },
					{ name: 'near', weight: 40 },
					{ name: 'till', weight: 40 },
					{ name: 'mine', weight: 40 },
					{ name: 'may', weight: 40 },
					{ name: 'give', weight: 40 },
					{ name: 'take', weight: 39 },
					{ name: 'stars', weight: 39 },
					{ name: 'o', weight: 38 },
					{ name: 'right', weight: 38 },
					{ name: 'dreams', weight: 38 },
					{ name: 'sing', weight: 38 },
					{ name: 'life', weight: 38 },
					{ name: 'de', weight: 38 },
					{ name: 'chorus', weight: 38 },
					{ name: 'much', weight: 37 },
					{ name: 'dear', weight: 37 },
					{ name: 'keep', weight: 36 },
					{ name: 'world', weight: 36 },
					{ name: 'song', weight: 36 },
					{ name: 'dance', weight: 36 },
					{ name: 'yes', weight: 35 },
					{ name: 'start', weight: 35 },
					{ name: 'sky', weight: 35 },
					{ name: 'things', weight: 35 },
					{ name: 'sweet', weight: 35 },
					{ name: 'happy', weight: 34 },
					{ name: 'chibaba', weight: 34 },
					{ name: 'believe', weight: 33 },
					{ name: 'still', weight: 33 },
					{ name: 'moon', weight: 33 },
					{ name: 'good', weight: 33 },
					{ name: 'across', weight: 33 },
					{ name: 'que', weight: 33 }
				],
				name: 'Occurrences'
			}
		],
		title: {
			text: ''
		}
	});

	let decade = '1940';
	let decadeTag = document.getElementById('decade-name');
	decadeTag.innerHTML = `Most common lyrics in the ${decade}s`;

	let words = {};

	const getWords = () => {
		return words;
	};

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
			series: [
				{
					type: 'wordcloud',
					data: data,
					name: 'Occurrences'
				}
			],
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
		decadeTag.innerHTML = 'Most common lyrics in the ' + decade;
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
