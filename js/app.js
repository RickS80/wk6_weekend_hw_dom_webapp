document.addEventListener('DOMContentLoaded', () => {

const form = document.querySelector('#form')
  form.addEventListener('submit', handleFormSubmit)

const deleteButton = document.querySelector('#delete_all')
  deleteButton.addEventListener('submit', deleteAllSubmit)

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

const deleteAllSubmit = function (event){
  event.preventDefault();

}
