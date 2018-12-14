function highestScore (students) {
  var kelas = [];
  for(var i=0;i<students.length;i++){
    if(kelas.indexOf(students[i].class) == -1)
      kelas.push(students[i].class);
  }
  var highestscore = [];
  for(var i=0;i<kelas.length;i++){
    var scores = [];
    for(var j=0;j<students.length;j++){
      if(kelas[i] == students[j].class)
        scores.push(students[j].score);
    }
    scores.sort();
    highestscore.push(scores[scores.length-1]);
  }
  var myobj = {};
  for(var i=0;i<kelas.length;i++){
    myobj[kelas[i]] = {};
    for(var j=0;j<students.length;j++){
      var name = students[j].name;
      var score = students[j].score;
      var class_ = students[j].class;
      if(score == highestscore[i] && class_ == kelas[i]){
        myobj[kelas[i]]['name'] = name;
        myobj[kelas[i]]['score'] = score;
      }
    }
  }
  return myobj;
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}