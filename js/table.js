
  var array = [
  {
    subject: 'KR-1',
    mark: 7,
    rate: 30
  },
  {
    subject: 'Gold-Gumi',
    mark: 3.5,
    rate: 30
  },
  {
    subject: 'Doubled',
    mark: 6,
    rate: 30
  },
]

function display(array){
  console.log("I am working");
  for(var i = 0; i < array.length; i++){
      var total = array[i].mark - array[i].mark*(array[i].rate / 100);
    document.write('<tr>');
    document.write('<td>' + array[i].subject + '</td>');
    document.write('<td>' + array[i].mark + '</td>');
    document.write('<td>' + array[i].rate + '</td>');
    document.write('<td>' + total + '</td>');
    document.write('</tr>');
  }

}
