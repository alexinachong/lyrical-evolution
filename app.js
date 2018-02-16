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

    if (decade === '1950') {
      array = [{"name":"love","weight":1099},{"name":"oh","weight":611},{"name":"im","weight":497},{"name":"baby","weight":473},{"name":"know","weight":438},{"name":"go","weight":427},{"name":"come","weight":374},{"name":"heart","weight":360},{"name":"like","weight":338},{"name":"well","weight":318},{"name":"youre","weight":311},{"name":"never","weight":311},{"name":"one","weight":302},{"name":"ill","weight":299},{"name":"got","weight":263},{"name":"want","weight":259},{"name":"say","weight":257},{"name":"day","weight":236},{"name":"see","weight":232},{"name":"little","weight":231},{"name":"let","weight":224},{"name":"thats","weight":221},{"name":"tell","weight":208},{"name":"time","weight":194},{"name":"get","weight":186},{"name":"way","weight":179},{"name":"true","weight":177},{"name":"gonna","weight":177},{"name":"mine","weight":176},{"name":"make","weight":175},{"name":"youll","weight":171},{"name":"na","weight":167},{"name":"cause","weight":166},{"name":"kiss","weight":163},{"name":"cant","weight":160},{"name":"night","weight":159},{"name":"yeah","weight":159},{"name":"verse","weight":146},{"name":"ive","weight":143},{"name":"could","weight":141},{"name":"home","weight":140},{"name":"chorus","weight":140},{"name":"please","weight":138},{"name":"dream","weight":135},{"name":"dum","weight":132},{"name":"rock","weight":127},{"name":"take","weight":126},{"name":"sweet","weight":125},{"name":"old","weight":125},{"name":"ooh","weight":123},{"name":"girl","weight":122},{"name":"walk","weight":120},{"name":"right","weight":119},{"name":"hold","weight":118},{"name":"give","weight":117},{"name":"back","weight":117},{"name":"away","weight":115},{"name":"find","weight":115},{"name":"every","weight":114},{"name":"said","weight":113},{"name":"hear","weight":113},{"name":"theres","weight":111},{"name":"long","weight":111},{"name":"blue","weight":109},{"name":"life","weight":108},{"name":"doo","weight":107},{"name":"yes","weight":106},{"name":"darling","weight":105},{"name":"hes","weight":104},{"name":"need","weight":103},{"name":"hey","weight":103},{"name":"ever","weight":102},{"name":"much","weight":101},{"name":"mr","weight":100},{"name":"around","weight":100},{"name":"boy","weight":99},{"name":"id","weight":99},{"name":"good","weight":98},{"name":"man","weight":98},{"name":"always","weight":98},{"name":"arms","weight":96},{"name":"bye","weight":95},{"name":"world","weight":94},{"name":"eyes","weight":92},{"name":"would","weight":91},{"name":"lonely","weight":91},{"name":"call","weight":90},{"name":"feel","weight":89},{"name":"two","weight":88},{"name":"ah","weight":86},{"name":"shes","weight":86},{"name":"dear","weight":85},{"name":"hand","weight":85},{"name":"loves","weight":82},{"name":"fool","weight":82},{"name":"dee","weight":82},{"name":"still","weight":80},{"name":"lee","weight":79},{"name":"gone","weight":78},{"name":"honey","weight":78}];
    } else if (decade === '1960') {
      array = [{"name":"love","weight":2396},{"name":"baby","weight":1503},{"name":"oh","weight":1241},{"name":"im","weight":1228},{"name":"know","weight":1136},{"name":"yeah","weight":1028},{"name":"come","weight":924},{"name":"got","weight":769},{"name":"like","weight":765},{"name":"go","weight":759},{"name":"youre","weight":670},{"name":"little","weight":666},{"name":"time","weight":636},{"name":"one","weight":632},{"name":"ill","weight":622},{"name":"let","weight":620},{"name":"girl","weight":615},{"name":"get","weight":614},{"name":"see","weight":606},{"name":"never","weight":587},{"name":"say","weight":575},{"name":"cant","weight":560},{"name":"well","weight":553},{"name":"verse","weight":529},{"name":"way","weight":501},{"name":"heart","weight":489},{"name":"la","weight":485},{"name":"gonna","weight":476},{"name":"want","weight":476},{"name":"chorus","weight":448},{"name":"day","weight":442},{"name":"cause","weight":427},{"name":"make","weight":427},{"name":"away","weight":424},{"name":"good","weight":424},{"name":"tell","weight":421},{"name":"back","weight":399},{"name":"night","weight":399},{"name":"take","weight":396},{"name":"ive","weight":375},{"name":"right","weight":369},{"name":"said","weight":362},{"name":"man","weight":355},{"name":"hey","weight":346},{"name":"need","weight":345},{"name":"around","weight":345},{"name":"ooh","weight":325},{"name":"mine","weight":323},{"name":"thats","weight":318},{"name":"world","weight":317},{"name":"youll","weight":306},{"name":"sweet","weight":295},{"name":"think","weight":294},{"name":"every","weight":289},{"name":"could","weight":285},{"name":"would","weight":282},{"name":"long","weight":279},{"name":"cry","weight":273},{"name":"mind","weight":269},{"name":"theres","weight":267},{"name":"home","weight":263},{"name":"feel","weight":261},{"name":"hold","weight":258},{"name":"keep","weight":255},{"name":"life","weight":251},{"name":"please","weight":247},{"name":"yes","weight":244},{"name":"shes","weight":244},{"name":"really","weight":241},{"name":"give","weight":237},{"name":"find","weight":230},{"name":"eyes","weight":225},{"name":"look","weight":225},{"name":"people","weight":217},{"name":"still","weight":215},{"name":"much","weight":211},{"name":"ah","weight":210},{"name":"hes","weight":210},{"name":"blue","weight":208},{"name":"thing","weight":208},{"name":"gone","weight":203},{"name":"always","weight":200},{"name":"true","weight":200},{"name":"id","weight":199},{"name":"stay","weight":197},{"name":"ever","weight":196},{"name":"things","weight":187},{"name":"old","weight":186},{"name":"gotta","weight":186},{"name":"dance","weight":177},{"name":"walk","weight":177},{"name":"youve","weight":176},{"name":"stop","weight":169},{"name":"better","weight":169},{"name":"made","weight":166},{"name":"help","weight":166},{"name":"alone","weight":164},{"name":"big","weight":164},{"name":"leave","weight":163},{"name":"wait","weight":162}];
    } else if (decade === '1970') {
      array = [{"name":"love","weight":3207},{"name":"im","weight":1646},{"name":"baby","weight":1524},{"name":"oh","weight":1389},{"name":"got","weight":1310},{"name":"get","weight":1291},{"name":"know","weight":1197},{"name":"youre","weight":1119},{"name":"like","weight":1097},{"name":"yeah","weight":916},{"name":"time","weight":860},{"name":"come","weight":818},{"name":"go","weight":757},{"name":"cant","weight":743},{"name":"one","weight":724},{"name":"let","weight":715},{"name":"chorus","weight":704},{"name":"way","weight":703},{"name":"want","weight":692},{"name":"verse","weight":685},{"name":"take","weight":662},{"name":"say","weight":659},{"name":"gonna","weight":639},{"name":"see","weight":626},{"name":"never","weight":621},{"name":"back","weight":619},{"name":"make","weight":606},{"name":"night","weight":586},{"name":"good","weight":576},{"name":"ill","weight":568},{"name":"la","weight":564},{"name":"right","weight":558},{"name":"well","weight":545},{"name":"ive","weight":529},{"name":"feel","weight":526},{"name":"away","weight":520},{"name":"man","weight":517},{"name":"girl","weight":505},{"name":"cause","weight":497},{"name":"ooh","weight":484},{"name":"day","weight":480},{"name":"little","weight":465},{"name":"tell","weight":454},{"name":"keep","weight":443},{"name":"said","weight":434},{"name":"give","weight":427},{"name":"need","weight":411},{"name":"thats","weight":406},{"name":"could","weight":398},{"name":"world","weight":377},{"name":"home","weight":376},{"name":"life","weight":373},{"name":"hey","weight":370},{"name":"around","weight":368},{"name":"think","weight":352},{"name":"dance","weight":343},{"name":"eyes","weight":337},{"name":"find","weight":333},{"name":"sweet","weight":324},{"name":"heart","weight":306},{"name":"mind","weight":305},{"name":"long","weight":304},{"name":"boogie","weight":303},{"name":"gone","weight":299},{"name":"theres","weight":296},{"name":"woman","weight":292},{"name":"every","weight":291},{"name":"shes","weight":290},{"name":"hold","weight":288},{"name":"wanna","weight":288},{"name":"us","weight":277},{"name":"look","weight":273},{"name":"yes","weight":254},{"name":"thing","weight":252},{"name":"people","weight":248},{"name":"things","weight":247},{"name":"ever","weight":247},{"name":"id","weight":245},{"name":"would","weight":244},{"name":"much","weight":244},{"name":"still","weight":239},{"name":"ya","weight":239},{"name":"always","weight":237},{"name":"stop","weight":234},{"name":"leave","weight":231},{"name":"really","weight":224},{"name":"song","weight":223},{"name":"light","weight":222},{"name":"high","weight":219},{"name":"alone","weight":215},{"name":"made","weight":214},{"name":"better","weight":214},{"name":"new","weight":209},{"name":"hear","weight":207},{"name":"call","weight":206},{"name":"sing","weight":205},{"name":"please","weight":201},{"name":"lets","weight":200},{"name":"together","weight":200},{"name":"try","weight":197}];
    } else if (decade === '1980') {
      array = [{"name":"love","weight":3317},{"name":"know","weight":2025},{"name":"im","weight":2012},{"name":"oh","weight":1807},{"name":"baby","weight":1552},{"name":"chorus","weight":1338},{"name":"got","weight":1267},{"name":"like","weight":1249},{"name":"time","weight":1224},{"name":"youre","weight":1213},{"name":"want","weight":1156},{"name":"verse","weight":1150},{"name":"gonna","weight":1013},{"name":"get","weight":983},{"name":"say","weight":978},{"name":"yeah","weight":952},{"name":"one","weight":951},{"name":"night","weight":948},{"name":"go","weight":940},{"name":"cant","weight":933},{"name":"take","weight":892},{"name":"never","weight":880},{"name":"make","weight":864},{"name":"heart","weight":815},{"name":"feel","weight":814},{"name":"let","weight":813},{"name":"come","weight":799},{"name":"way","weight":783},{"name":"see","weight":759},{"name":"ive","weight":714},{"name":"tell","weight":683},{"name":"right","weight":680},{"name":"ill","weight":672},{"name":"away","weight":664},{"name":"need","weight":631},{"name":"well","weight":613},{"name":"cause","weight":613},{"name":"wanna","weight":592},{"name":"give","weight":577},{"name":"life","weight":567},{"name":"girl","weight":562},{"name":"ooh","weight":547},{"name":"tonight","weight":538},{"name":"could","weight":523},{"name":"thats","weight":502},{"name":"theres","weight":497},{"name":"eyes","weight":493},{"name":"think","weight":492},{"name":"little","weight":484},{"name":"back","weight":473},{"name":"na","weight":469},{"name":"keep","weight":466},{"name":"good","weight":431},{"name":"around","weight":431},{"name":"mind","weight":430},{"name":"day","weight":426},{"name":"every","weight":421},{"name":"much","weight":417},{"name":"hold","weight":414},{"name":"shes","weight":411},{"name":"look","weight":390},{"name":"long","weight":385},{"name":"world","weight":361},{"name":"really","weight":359},{"name":"said","weight":356},{"name":"man","weight":352},{"name":"turn","weight":350},{"name":"hey","weight":337},{"name":"always","weight":336},{"name":"dance","weight":332},{"name":"find","weight":331},{"name":"still","weight":322},{"name":"us","weight":316},{"name":"hear","weight":313},{"name":"youve","weight":312},{"name":"true","weight":309},{"name":"ever","weight":308},{"name":"bridge","weight":292},{"name":"lets","weight":289},{"name":"call","weight":281},{"name":"would","weight":281},{"name":"youll","weight":280},{"name":"something","weight":273},{"name":"better","weight":272},{"name":"home","weight":267},{"name":"things","weight":265},{"name":"free","weight":264},{"name":"talk","weight":262},{"name":"together","weight":260},{"name":"going","weight":258},{"name":"believe","weight":254},{"name":"light","weight":253},{"name":"touch","weight":248},{"name":"live","weight":246},{"name":"nothing","weight":245},{"name":"stay","weight":244},{"name":"feeling","weight":240},{"name":"alone","weight":240},{"name":"mine","weight":238},{"name":"stop","weight":235}];
    } else if (decade === '1990') {
      array = [{"name":"love","weight":3400},{"name":"im","weight":2653},{"name":"know","weight":2401},{"name":"baby","weight":2401},{"name":"like","weight":1887},{"name":"get","weight":1712},{"name":"yeah","weight":1694},{"name":"chorus","weight":1562},{"name":"oh","weight":1558},{"name":"youre","weight":1509},{"name":"want","weight":1508},{"name":"verse","weight":1498},{"name":"go","weight":1344},{"name":"got","weight":1311},{"name":"one","weight":1257},{"name":"wanna","weight":1227},{"name":"time","weight":1188},{"name":"cant","weight":1165},{"name":"ill","weight":1163},{"name":"make","weight":1135},{"name":"never","weight":1131},{"name":"see","weight":1123},{"name":"come","weight":1071},{"name":"say","weight":1020},{"name":"cause","weight":1020},{"name":"let","weight":1017},{"name":"way","weight":996},{"name":"feel","weight":856},{"name":"gonna","weight":825},{"name":"back","weight":823},{"name":"need","weight":813},{"name":"take","weight":795},{"name":"heart","weight":792},{"name":"girl","weight":778},{"name":"night","weight":774},{"name":"give","weight":771},{"name":"right","weight":766},{"name":"tell","weight":694},{"name":"could","weight":673},{"name":"thats","weight":606},{"name":"life","weight":596},{"name":"away","weight":587},{"name":"day","weight":567},{"name":"ever","weight":561},{"name":"ive","weight":561},{"name":"think","weight":542},{"name":"good","weight":525},{"name":"every","weight":509},{"name":"hook","weight":504},{"name":"little","weight":501},{"name":"always","weight":497},{"name":"well","weight":490},{"name":"keep","weight":489},{"name":"world","weight":481},{"name":"really","weight":481},{"name":"around","weight":470},{"name":"would","weight":467},{"name":"man","weight":466},{"name":"mind","weight":454},{"name":"hold","weight":440},{"name":"ya","weight":432},{"name":"gotta","weight":430},{"name":"long","weight":423},{"name":"theres","weight":423},{"name":"da","weight":412},{"name":"ooh","weight":394},{"name":"things","weight":380},{"name":"still","weight":369},{"name":"eyes","weight":367},{"name":"real","weight":366},{"name":"bridge","weight":365},{"name":"everything","weight":358},{"name":"hey","weight":355},{"name":"said","weight":351},{"name":"lets","weight":349},{"name":"believe","weight":347},{"name":"show","weight":341},{"name":"look","weight":340},{"name":"us","weight":337},{"name":"stop","weight":334},{"name":"body","weight":334},{"name":"doo","weight":326},{"name":"youll","weight":322},{"name":"find","weight":321},{"name":"thing","weight":317},{"name":"youve","weight":316},{"name":"true","weight":311},{"name":"nothing","weight":308},{"name":"turn","weight":306},{"name":"something","weight":302},{"name":"id","weight":301},{"name":"stay","weight":298},{"name":"much","weight":298},{"name":"la","weight":296},{"name":"another","weight":296},{"name":"boy","weight":291},{"name":"hear","weight":290},{"name":"call","weight":289},{"name":"inside","weight":283},{"name":"na","weight":283}];
    } else if (decade === '2000') {
      array = [{"name":"im","weight":4226},{"name":"like","weight":2888},{"name":"know","weight":2825},{"name":"love","weight":2305},{"name":"get","weight":2202},{"name":"got","weight":2095},{"name":"baby","weight":1952},{"name":"go","weight":1852},{"name":"oh","weight":1815},{"name":"verse","weight":1774},{"name":"girl","weight":1584},{"name":"chorus","weight":1580},{"name":"youre","weight":1515},{"name":"yeah","weight":1455},{"name":"see","weight":1390},{"name":"wanna","weight":1364},{"name":"cause","weight":1363},{"name":"want","weight":1326},{"name":"make","weight":1324},{"name":"one","weight":1315},{"name":"say","weight":1290},{"name":"cant","weight":1288},{"name":"let","weight":1187},{"name":"time","weight":1119},{"name":"right","weight":1036},{"name":"way","weight":1032},{"name":"back","weight":1008},{"name":"take","weight":999},{"name":"come","weight":993},{"name":"never","weight":954},{"name":"hook","weight":930},{"name":"need","weight":881},{"name":"ill","weight":832},{"name":"gonna","weight":795},{"name":"feel","weight":789},{"name":"tell","weight":753},{"name":"could","weight":717},{"name":"ya","weight":709},{"name":"keep","weight":706},{"name":"life","weight":686},{"name":"think","weight":671},{"name":"thats","weight":668},{"name":"man","weight":665},{"name":"boy","weight":654},{"name":"give","weight":636},{"name":"night","weight":590},{"name":"good","weight":569},{"name":"away","weight":554},{"name":"bridge","weight":528},{"name":"gotta","weight":521},{"name":"ive","weight":520},{"name":"well","weight":517},{"name":"hey","weight":507},{"name":"put","weight":464},{"name":"head","weight":461},{"name":"said","weight":460},{"name":"la","weight":453},{"name":"uh","weight":450},{"name":"little","weight":450},{"name":"thing","weight":446},{"name":"call","weight":441},{"name":"would","weight":440},{"name":"around","weight":437},{"name":"day","weight":437},{"name":"every","weight":434},{"name":"theres","weight":433},{"name":"gone","weight":431},{"name":"turn","weight":428},{"name":"lets","weight":427},{"name":"really","weight":422},{"name":"look","weight":421},{"name":"dance","weight":415},{"name":"better","weight":414},{"name":"heart","weight":414},{"name":"still","weight":402},{"name":"na","weight":401},{"name":"everything","weight":399},{"name":"always","weight":392},{"name":"world","weight":392},{"name":"things","weight":388},{"name":"stop","weight":384},{"name":"tonight","weight":381},{"name":"real","weight":372},{"name":"yo","weight":369},{"name":"rock","weight":365},{"name":"ooh","weight":363},{"name":"try","weight":360},{"name":"shit","weight":354},{"name":"prechorus","weight":351},{"name":"long","weight":350},{"name":"body","weight":341},{"name":"show","weight":340},{"name":"mind","weight":334},{"name":"leave","weight":334},{"name":"us","weight":333},{"name":"em","weight":330},{"name":"without","weight":329},{"name":"hard","weight":327},{"name":"girls","weight":324},{"name":"gon","weight":323}];
    } else if (decade === '2010') {
      array = [{"name":"im","weight":2573},{"name":"like","weight":1840},{"name":"oh","weight":1590},{"name":"love","weight":1560},{"name":"know","weight":1314},{"name":"baby","weight":1183},{"name":"go","weight":1024},{"name":"got","weight":1006},{"name":"chorus","weight":979},{"name":"yeah","weight":953},{"name":"verse","weight":943},{"name":"let","weight":808},{"name":"feat","weight":775},{"name":"youre","weight":767},{"name":"get","weight":734},{"name":"want","weight":716},{"name":"cause","weight":709},{"name":"one","weight":671},{"name":"girl","weight":646},{"name":"wanna","weight":633},{"name":"never","weight":625},{"name":"say","weight":594},{"name":"time","weight":587},{"name":"make","weight":564},{"name":"back","weight":541},{"name":"way","weight":540},{"name":"cant","weight":531},{"name":"take","weight":514},{"name":"ill","weight":512},{"name":"come","weight":507},{"name":"gonna","weight":495},{"name":"good","weight":492},{"name":"night","weight":478},{"name":"see","weight":477},{"name":"feel","weight":460},{"name":"look","weight":446},{"name":"need","weight":444},{"name":"right","weight":426},{"name":"give","weight":423},{"name":"ooh","weight":419},{"name":"life","weight":373},{"name":"tonight","weight":371},{"name":"prechorus","weight":365},{"name":"tell","weight":358},{"name":"la","weight":348},{"name":"hey","weight":346},{"name":"think","weight":342},{"name":"heart","weight":335},{"name":"hook","weight":335},{"name":"ive","weight":330},{"name":"bridge","weight":328},{"name":"made","weight":311},{"name":"away","weight":306},{"name":"ever","weight":305},{"name":"thats","weight":301},{"name":"could","weight":298},{"name":"little","weight":294},{"name":"bad","weight":292},{"name":"keep","weight":284},{"name":"put","weight":275},{"name":"said","weight":271},{"name":"call","weight":270},{"name":"man","weight":266},{"name":"well","weight":261},{"name":"ft","weight":261},{"name":"home","weight":261},{"name":"best","weight":260},{"name":"lets","weight":260},{"name":"every","weight":259},{"name":"run","weight":250},{"name":"watch","weight":249},{"name":"dance","weight":247},{"name":"body","weight":246},{"name":"turn","weight":245},{"name":"world","weight":241},{"name":"work","weight":235},{"name":"drake","weight":233},{"name":"hands","weight":230},{"name":"better","weight":227},{"name":"na","weight":225},{"name":"gotta","weight":223},{"name":"day","weight":223},{"name":"theres","weight":222},{"name":"around","weight":211},{"name":"mind","weight":210},{"name":"feeling","weight":210},{"name":"still","weight":205},{"name":"going","weight":203},{"name":"ya","weight":201},{"name":"really","weight":199},{"name":"even","weight":199},{"name":"stop","weight":197},{"name":"boy","weight":195},{"name":"hold","weight":195},{"name":"bom","weight":194},{"name":"outro","weight":193},{"name":"high","weight":193},{"name":"em","weight":192},{"name":"rock","weight":191},{"name":"eyes","weight":189}];
    } else { // decade = 1940
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
