const starter=document.getElementById('start')
const counter=document.getElementById('counter')
const plusser=()=>{
    if(starter.innerHTML=='Start'){
        starter.innerHTML='Stop'
        adder=setInterval(()=>counter.innerHTML++,1000)
        }else{
        starter.innerHTML='Start'
        clearInterval(adder)
    }
}
starter.addEventListener('click',plusser)

fetch(
    "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/movies.json"
  )
    .then(response => response.json()) // Access and return response's JSON content
    .then(idontgetit => {
      // Iterate on the movie array
      idontgetit.forEach(movie => {
        // Display title of each movie
        console.log(movie.title);
      });
    })
    .catch(err => {
      console.error(err.message);
    });
//////////////////////////////////////////////////////////

  fetch(' https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/languages.txt')
    .then(
    response=>response.text())
    .then(languages=>{
        const language=languages.split(';')
        language.forEach(language=>{console.log(language)})
  })

  fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/languages.txt")
    .then(response=>response.text())
    .then(lang=>{
        const langs=lang.split(';')
        const list=document.getElementById('languageList')
        langs.forEach(l=>{
            const item=document.createElement('li')
            item.textContent=l
            list.appendChild(item)
        })
    })

    fetch('https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json')
    .then(response=>response.json())
    .then(paintings=>{
        paintings.forEach(painting=>{
            const element= document.getElementById('paintings')
            const newpaint=document.createElement('tr')
            newpaint.innerHTML= 
            `<td>${painting.name}</td>
            <td>${painting.year}</td>
            <td>${painting.artist}</td>`;
            element.appendChild(newpaint)
        })
    })


