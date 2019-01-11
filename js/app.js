document.addEventListener('DOMContentLoaded', () => {

const form = document.querySelector('#form')
  form.addEventListener('submit', handleFormSubmit)

const deleteButton = document.querySelector('#delete_all')
  deleteButton.addEventListener('click', deleteAllClick)

const dateInput = document.querySelector('#date')
dateInput.addEventListener('input', handleDate)


const textInputAirline = document.querySelector('#airline-input')
textInputAirline.addEventListener('input', handleAirlineInput)

const textInputRegistration = document.querySelector('#registration-input')
textInputRegistration.addEventListener('input', handleRegistrationInput)

const selectType = document.querySelector('#aircraftType')
selectType.addEventListener('change', handleAircraftType)



})

const handleFormSubmit = function (event){
  event.preventDefault();

console.log(event.target.date.value);
console.log(event.target.airline.value);
console.log(event.target.registration.value);
console.log(event.target.aircraftType.value);

const listItem = document.createElement('div')


  const createListDate = document.createElement('p')
  createListDate.textContent = `Date: ${event.target.date.value}`
  listItem.appendChild(createListDate)

  const createListAirline = document.createElement('p')
  createListAirline.textContent = `Airline: ${event.target.airline.value}`
  listItem.appendChild(createListAirline)

  const createListRegistration = document.createElement('p')
  createListRegistration.textContent = `Registration: ${event.target.registration.value}`
  listItem.appendChild(createListRegistration)

  const createListAircraftType = document.createElement('p')
  createListAircraftType.textContent = `Aircraft Type: ${event.target.aircraftType.value}`
  listItem.appendChild(createListAircraftType)


  const list = document.querySelector('#spotting-list')
  list.appendChild(listItem)

  event.target.reset()
}

const deleteAllClick = function (event){
  event.preventDefault();
  // console.log('hello');
  const deleteList = document.querySelector('#spotting-list')
  while (deleteList.firstChild) {
    deleteList.firstChild.remove();
  }
}


const handleDate = function(){
  const resultInput = document.querySelector('#date-input-result');
  resultInput.textContent = `Date: ${event.target.value}`
}

const handleAirlineInput = function(){
  const resultInput = document.querySelector('#input-result-airline');
  resultInput.textContent = `Airline:  ${event.target.value}`

  }

const handleRegistrationInput = function(){
  const resultInput = document.querySelector('#input-result-registration');
  resultInput.textContent = `Registration:  ${event.target.value}`
  }

const handleAircraftType = function(){
  const resultInput = document.querySelector('#aircraft-type-result');
  resultInput.textContent = `Aircraft Type: ${event.target.value}`
}
