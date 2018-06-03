var requestURL = 'https://github.com/rico542/alwaysdata/blob/master/alwaysdata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var photos = request.response;
  var section = document.querySelector('section');
  
  for (var i = 0; i < photos.length; i++) {
    var myArticle = document.createElement('article');
    var myLink = document.createElement('a');
    var myImg = document.createElement('img');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    
    myImg.setAttribute('src', photos[i].urlThumb);
    
    myLink.setAttribute('href', photos[i].urlFull);
    myLink.setAttribute('class', 'thumbnail');
    
    myH2.textContent = photos[i].title;
    myPara1.textContent = photos[i].comment;
    
    myArticle.appendChild(myLink);
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    
    section.appendChild(myArticle);
    }
}

