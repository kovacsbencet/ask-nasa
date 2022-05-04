function loadEvent() {
    
    

    let nasaButton = document.getElementById("getData");

    nasaButton.addEventListener("change", (event) =>{
        event.preventDefault()
        let date = document.getElementById("date").value
        getNasaData(date)
    })
    
    async function getNasaData(date){

        let API_KEY = 'cTJqs1vUtbAsJevFaSN8r1fIxpraS58fzP1KpQ7o'
        let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`)
        let data = await response.json()
        useNasaData(data)
    }
    getNasaData()
    
    function useNasaData (data){
        document.getElementById("root").innerHTML += `<img src="${data.url}"></img>`
        document.getElementById("root").innerHTML += data.explanation
    }

  
};
window.addEventListener('load', loadEvent);