function meleeRangedGrouping (str) {
  if(str.length == 0)
	return '[]';
  var array = str.split(',');
  var result = [];
  var Ranged = [];
  var Melee = [];
  for(var i=0;i<array.length;i++){
  	if(array[i].indexOf('Ranged') > -1)
  		Ranged.push(array[i].substring(0,array[i].indexOf('-')));
  	else if(array[i].indexOf('Melee') > -1)
  		Melee.push(array[i].substring(0,array[i].indexOf('-')));
  }
  result.push(Ranged);
  result.push(Melee);
  return result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []