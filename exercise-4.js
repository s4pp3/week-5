function graduates (students) {
  if(students.length == 0)
    return '{}';
  var kelas = [];
  for(var i=0;i<students.length;i++){
    if(kelas.indexOf(students[i].class) == -1)
      kelas.push(students[i].class);
  }
  var myobj = {};
  for(var i=0;i<kelas.length;i++){
    myobj[kelas[i]] = [];
    for(var j=0;j<students.length;j++){
      var name = students[j].name;
      var score = students[j].score;
      var class_ = students[j].class;
      if(score > 75 && kelas[i] == class_){
        var obj = {};
        obj['name'] = name;
        obj['score'] = score;
        myobj[kelas[i]].push(obj);
      }
    }
  }
  return myobj;
}

console.log(graduates([
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
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
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
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}