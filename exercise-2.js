function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  if(arrPenumpang.length == 0)
  	return "[]";
  var result = [];
  for(var i=0;i<arrPenumpang.length;i++){
  	var penumpang = arrPenumpang[i][0];
  	var naikDari = arrPenumpang[i][1];
  	var tujuan = arrPenumpang[i][2];
  	var bayar = 2000*(rute.indexOf(tujuan) - rute.indexOf(naikDari));
  	var myobj = {};
  	myobj['penumpang'] = penumpang;
  	myobj['naikDari'] = naikDari;
  	myobj['tujuan'] = tujuan;
  	myobj['bayar'] = bayar;
  	result.push(myobj);
  }
  return result;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]