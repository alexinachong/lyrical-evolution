const express = require('express');
const app = express();
// const http = require('http').Server(app)
const path = require('path');
const fetch = require('node-fetch');
const PORT = process.env.PORT;
// const PORT = 8000;

var knex = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL + '?ssl=true'
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/index.html'));
});
//
app.use(express.static('frontend'));

app.get('/decade/:decade', (req, res) => {
  let decade = req.params.decade;
  knex('decades').where({decade: decade}).first('word_counts').limit(5).then((wc) => {
    let array = JSON.parse(wc.word_counts);

    if (decade === '1940') {
      array = [{"name":"love","weight":289},{"name":"im","weight":246},{"name":"youre","weight":160},{"name":"like","weight":143},{"name":"know","weight":130},{"name":"one","weight":127},{"name":"go","weight":127},{"name":"long","weight":123},{"name":"never","weight":123},{"name":"heart","weight":122},{"name":"ill","weight":106},{"name":"see","weight":99},{"name":"well","weight":97},{"name":"clippety","weight":96},{"name":"day","weight":93},{"name":"night","weight":93},{"name":"time","weight":89},{"name":"theres","weight":88},{"name":"thats","weight":88},{"name":"get","weight":88},{"name":"little","weight":86},{"name":"old","weight":84},{"name":"cant","weight":84},{"name":"oh","weight":82},{"name":"say","weight":82},{"name":"let","weight":77},{"name":"dream","weight":76},{"name":"got","weight":74},{"name":"ive","weight":73},{"name":"way","weight":72},{"name":"two","weight":71},{"name":"come","weight":71},{"name":"along","weight":67},{"name":"shes","weight":67},{"name":"mule","weight":65},{"name":"make","weight":64},{"name":"youll","weight":63},{"name":"made","weight":60},{"name":"away","weight":60},{"name":"hear","weight":60},{"name":"said","weight":60},{"name":"true","weight":59},{"name":"train","weight":59},{"name":"kiss","weight":56},{"name":"cause","weight":55},{"name":"tell","weight":55},{"name":"baby","weight":54},{"name":"hyah","weight":54},{"name":"want","weight":54},{"name":"new","weight":54},{"name":"eyes","weight":53},{"name":"every","weight":53},{"name":"would","weight":50},{"name":"words","weight":48},{"name":"music","weight":47},{"name":"blue","weight":46},{"name":"big","weight":45},{"name":"hey","weight":45},{"name":"around","weight":45},{"name":"ever","weight":43},{"name":"man","weight":43},{"name":"must","weight":41},{"name":"darling","weight":41},{"name":"ho","weight":41},{"name":"always","weight":41},{"name":"could","weight":41},{"name":"gotta","weight":41},{"name":"near","weight":40},{"name":"till","weight":40},{"name":"mine","weight":40},{"name":"may","weight":40},{"name":"give","weight":40},{"name":"take","weight":39},{"name":"stars","weight":39},{"name":"o","weight":38},{"name":"right","weight":38},{"name":"dreams","weight":38},{"name":"sing","weight":38},{"name":"life","weight":38},{"name":"de","weight":38},{"name":"chorus","weight":38},{"name":"much","weight":37},{"name":"dear","weight":37},{"name":"keep","weight":36},{"name":"world","weight":36},{"name":"song","weight":36},{"name":"dance","weight":36},{"name":"yes","weight":35},{"name":"start","weight":35},{"name":"sky","weight":35},{"name":"things","weight":35},{"name":"sweet","weight":35},{"name":"happy","weight":34},{"name":"chibaba","weight":34},{"name":"believe","weight":33},{"name":"still","weight":33},{"name":"moon","weight":33},{"name":"good","weight":33},{"name":"across","weight":33},{"name":"que","weight":33}];
    }
    res.json({data: array});
  });
});

// app.get('/decade/2000', (req, res) => {
//   knex('songs').whereBetween('year', [2000, 2009]).pluck('lyrics').then((lyrics) => {
//     let allLyrics = [];
//     lyrics.forEach((lyric, i) => {
//       // console.log(lyric);
//       allLyrics.push(lyric);
//     });
//     res.json({text: allLyrics});
//   });
// });


// const sqlite3 = require('sqlite3').verbose();
// let db = new sqlite3.Database('lyrics.db');

// db.run('CREATE TABLE songs(year text, lyrics text)');
//
// db.close();

// db.all("SELECT year, lyrics FROM songs", function(err, rows) {
//   rows.forEach(function(row) {
//     console.log(row.year, row.lyrics);
//   });
// });

// songs (
//   id integer primary key,
//   year integer,
//   ranking integer,
//   artist text,
//   title text,
//   raw_lyrics text,
//   lyrics text
// );

// knex('songs').where({year: 2000}).first().then((row) => {console.log(row.lyrics);});


// app.get('/decade/2000', (req, res) => {
//   let allLyrics = [];
//   db.each("SELECT lyrics FROM songs WHERE year BETWEEN 2000 AND 2009 LIMIT 5", function(err, row) {
//     allLyrics.push(row.lyrics);
//     // console.log(allLyrics);
//   }).then(res.json({ "lyrics" : allLyrics }));
//   return res.json({ "lyrics" : allLyrics });
// });



// db.close();

// app.get('/decade/1940', (req, res) => {
//   db.get("SELECT lyrics FROM songs WHERE year BETWEEN 1940 AND 1949", function(err, rows) {
//     rows.forEach(function(row) {
//       res.json({ "lyrics" : row.lyrics });
//     });
//   });
// });

// app.get('/fighters', (req, res) => {
//   let results;
//   fetch('http://ufc-data-api.ufc.com//api/v1/us/fighters')
//     .then(function(response) {
//         return response.text();
//     }).then(function(body) {
//       results = JSON.parse(body);
//         console.log(typeof body);
//         console.log(body.length);
//         console.log(JSON.parse(body)[0]);
//         res.send(results);
//     });
//
// });

app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`listening on ${PORT}`);
});
