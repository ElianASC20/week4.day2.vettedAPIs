
function clearContainer(){
    var elements = document.getElementsByClassName('card');
    while( elements.length > 0 ){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function searchword(){
    search = document.getElementById('searchBar').value;
    wordRequest = new XMLHttpRequest();

    wordRequest.open('GET', 'https://api.wordnik.com/v4/word.json/' + search + '/definitions?limit=1&includeRelated=false&useCanonical=false&includeTags=false&api_key=xzeem66g75bdzeceuwu8kynvv04vu0dd8dgxnltupow8w0f10', true)


    wordRequest.onload = function() {
        var data = JSON.parse(this.response)

        if (wordRequest.status >= 200 && wordRequest.status < 400){
            data.forEach(definitions => {

                var card = document.createElement('div');
                card.setAttribute('class', 'card');

                var h1 = document.createElement('h1');
                h1.innerText = definitions.word;

                var p = document.createElement('p');
                p.innerText = definitions.text;

                var p2 = document.createElement('p');
                p2.innerText = definitions.partOfSpeech;

                document.body.appendChild(card);
                
                card.appendChild(h1);
                card.appendChild(p);
                card.appendChild(p2);


            })
        }

        else{
            alert("error")
        }
    }

    wordRequest.send();



}

function searchMovie(){
    search = document.getElementById('searchBar').value;
    movieRequest = new XMLHttpRequest();

    movieRequest.open('GET', 'http://www.omdbapi.com/?t='+ search +'&apikey=9ece320a', true)

    movieRequest.onload = function() {
        var data = JSON.parse(this.response)
        console.log(data);

            var card = document.createElement('div');
            card.setAttribute('class', 'card');

            var h1 = document.createElement('h1');
            h1.innerText = data.Title;

            var p = document.createElement('p');
            p.innerText = data.Year;

            var p2 = document.createElement('p');
            p2.innerText = data.Plot;

            var img = document.createElement('img');
            img.src = data.Poster;

            document.body.appendChild(card);
            
            card.appendChild(h1);
            card.appendChild(p);
            card.appendChild(p2);
            card.appendChild(img);

    }
    searchword();
    movieRequest.send();

};