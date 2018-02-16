var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('lyrics.db');
db.all("SELECT year, lyrics FROM songs", function(err, rows) {
  rows.forEach(function(row) {
    console.log(row.year, row.lyrics);
  });
});
