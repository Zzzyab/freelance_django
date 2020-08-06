
function search() {
  var a = document.getElementById('Search').value;
  if (a != '') {
    document.location.href = ("https://www.google.com/search?q="+a);
  }

}

document.addEventListener('keydown', function(event) {
  if (event.code == 'Enter') {
    search();
  }
});
