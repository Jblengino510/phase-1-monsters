let monsterContainer = document.querySelector('#monster-container')
let pageNumber = 1
let backBtn = document.querySelector('#back')
let fwdBtn = document.querySelector('#forward')


//Fetch
function fetchAllMonsters(){
    fetch('http://localhost:3000/monsters?_limit=20&_page=3')
    .then(res => res.json())
    .then(json => renderAllMonsters(json))
}
fetchAllMonsters()


//DOM
function renderAllMonsters(monsters){
    console.log(monsters)
    monsters.forEach(monster => renderOneMonster(monster))
    console.log(monsterContainer)
}

function renderOneMonster(monsterObj){
        let h2Name = document.createElement('h2')
        let h4Age = document.createElement('h4')
        let pBio = document.createElement('p')

        h2Name.textContent = monsterObj.name
        h4Age.textContent = `Age: ${monsterObj.age}`
        pBio.textContent = `Bio: ${monsterObj.description}`

        monsterContainer.append(h2Name, h4Age, pBio)
}

function createMonsterForm(){
    let formContainer = document.querySelector('#create-monster')
    let monsterForm = document.createElement('form')
    let inputName = document.createElement('input')
    let inputAge = document.createElement('input')
    let inputDescription =document.createElement('input')
    let formButton = document.createElement('input')

    
    monsterForm.id = 'monster-form'
    inputName.id = 'name'
    inputAge.id = 'age'
    inputDescription.id = 'description'
    inputName.placeholder = 'name...'
    inputAge.placeholder = 'age...'
    inputDescription.placeholder= 'description...'
    formButton.type = 'submit'
    formButton.value= 'Create'
    formButton.id = 'submit-button'


    monsterForm.append(inputName, inputAge, inputDescription, formButton)
    formContainer.append(monsterForm)

    monsterForm.addEventListener('submit', (e) => {
        e.preventDefault()
        let obj = {}
        let newName = e.target['name'].value
        let newAge = e.target['age'].value
        let newDescription = e.target['description'].value

        obj.name = newName
        obj.age = newAge
        obj.description = newDescription
    
        renderOneMonster(obj)
        e.target.reset()

    })

    

}
createMonsterForm()

//Bonus

//function 


