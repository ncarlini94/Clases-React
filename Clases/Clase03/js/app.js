const myDom = document;

var videos = [
    {title:'Clase 0 - Codo a Codo 4.0 Full stack React 2022',
    url:'https://www.youtube.com/embed/B0UqCeL2QTU'},
    {title:'Clase 1 - Codo a Codo 4.0 Full stack React 2022',
    url:'https://www.youtube.com/embed/-u5pKNlM9OQ'},
    {title:'Clase 2 - Codo a Codo 4.0 Full stack React 2022',
    url:'https://www.youtube.com/embed/B005zHFUQtY'},
    {title:'Clase 3 - Codo a Codo 4.0 Full stack React 2022',
    url:'https://www.youtube.com/embed/E-qUemyy5TE'},
    {title:'Clase 4 - Codo a Codo 4.0 Full stack React 2022',
    url:'https://www.youtube.com/embed/xegy_hW-Mfk'},
    {title:'Clase 5 - Codo a Codo 4.0 Full stack React 2022',
    url:'https://www.youtube.com/embed/eBkKPtPEGSI'},
    {title:'Clase 6 - Codo a Codo 4.0 Full stack React 2022',
    url:'https://www.youtube.com/embed/TaEqI6V3Zjw'},
]


function search() {
    var i = myDom.getElementById('i').value
    console.log()
    for (let video = 0; video < i; video++) {
        let element = videos[video];
        let list = myDom.createElement('li');
        myDom.getElementById('list').appendChild(list);
        list.innerHTML += `
        <div class="card mb-3 ps-4 pt-3 pb-3 pe-5 bg-primary bg-gradient" style="width:70em">
        <h4 class="card-title">${videos[video].title}</h4>
        <iframe class="ps-4 card-img" width="280" height="525" src="${videos[video].url}" title="YouTube video player" frameborder="0"></iframe>
        </div>
        `;
        console.log(element);
};


}


