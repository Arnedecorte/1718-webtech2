
// 1 elementen selecteren en in variabelen stoppen
let anchorTags, strongTags, spanTags;

anchorTags = document.getElementsByTagName('a');
strongTags = document.getElementsByTagName ('strong');
spanTags = document.getElementsByTagName ('span');

// eerste anchor rag uit de array van anchorTags halen
let linkElement = anchorTags[0];

// event toepassen
linkElement.addEventListener('mouseover', function() {

    // eerste strongtag oranje maken
    let firstStrongTag = strongTags[0];
    firstStrongTag.style.color = 'orange';

    // tweede strong tag oranje maken
    strongTags[1].style.color = 'orange';

    for(let i = 0; i< spanTags.length; i++ ){
        spanTags[i].style.color = 'purple';
    }
});


linkElement.addEventListener('mouseout', function() {
    
        let firstStrongTag = strongTags[0];
        firstStrongTag.style.color = 'black';
    });


