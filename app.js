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
  knex('decades').where({decade: decade}).first('word_counts').then((wc) => {
    let array = JSON.parse(wc.word_counts.limit(500));
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
