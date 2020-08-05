
function search() {
  var a = document.getElementById('Search').value;
  console.log(a);
  if (a != '') {
    document.location.href = ("https://www.google.com/search?q="+a);
  }

}
