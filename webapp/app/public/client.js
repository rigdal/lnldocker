window.addEventListener('load', e=>{
    setupButton()
    setupResults()
})

function setupButton(){
    let button = document.querySelector('#clicker')
    button.onclick = async e=>{
        let req = await fetch('/click', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
        let result = await req.json()
        console.log(result)
    }
}

function pollResults(){
    let button = document.querySelector('#clicker')
    button.onclick = async e=>{
        let req = await fetch('/result', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
        let result = await req.json()
        console.log(result)
    }
}

function setupResults(){    
    let area = document.querySelector('#results')
    let checkbox = document.querySelector('#checkbox')
    setInterval(async ()=>{
        if(checkbox.checked) {
            let req = await fetch('/result', {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            })
            let result = await req.json()
            console.log(result)
            if(result.result != null && area) area.innerText = result.result
        }
    }, 2000)
}