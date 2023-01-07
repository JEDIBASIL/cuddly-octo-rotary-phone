const container = document.querySelector(".container")
const modal = document.querySelector(".modal")

let dataArray = []



fetch("https://swapi.dev/api/people")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        dataArray = data["results"]
        dataArray.map(({ name }, i) => container.innerHTML += `
            <div class="card" role="${i}" >
            <img src="https://random.imagecdn.app/500/150" />
               <h1 role="${i}"> ${name}</h1>
            </div>
        `)
    })
    .catch(err => console.log(err))
console.log(container)

container.addEventListener("click", function (e) {
    const index = parseInt(e.target.role)
    const { name, gender, height } = dataArray[index]
    modal.innerHTML = `
        <div>
            <h3>Name: ${name} </h3>
            <p>Gender: ${gender} </p>
            <p>Height: ${height} </p>
        </div>
    `
})
