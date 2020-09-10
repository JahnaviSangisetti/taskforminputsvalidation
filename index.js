
const formName = document.querySelector('#form-validate');
const formValidateFirstName = document.querySelector('#form-validate-first-name');
const formDescription = document.querySelector('#form-validate');
const formValidateDescription = document.querySelector('#form-validate-description');
const formAssignedto = document.querySelector('#form-validate');
const formValidateAssignedto = document.querySelector('#form-validate-assignedto');
//const formDuedate = document.querySelector('#form-validate');
//const formDuedate = document.querySelector('#form-mydate');
//Name
formName.addEventListener('click', (event) => {
    event.preventDefault();

    if (formValidateFirstName.value.length > 7) {
        formValidateFirstName.classList.add('is-valid');
        formValidateFirstName.classList.remove('is-invalid');
    } else {
        formValidateFirstName.classList.add('is-invalid');
        formValidateFirstName.classList.remove('is-valid');
    }
});

//Description

formDescription.addEventListener('click', (event) => {
    event.preventDefault();

    if (formValidateDescription.value.length > 15) {
        formValidateDescription.classList.add('is-valid');
        formValidateDescription.classList.remove('is-invalid');
    } else {
        formValidateDescription.classList.add('is-invalid');
        formValidateDescription.classList.remove('is-valid');
    }
});

formAssignedto.addEventListener('click', (event) => {
    event.preventDefault();

    if (formValidateAssignedto.value.length > 7) {
        formValidateAssignedto.classList.add('is-valid');
        formValidateAssignedto.classList.remove('is-invalid');
    } else {
        formValidateAssignedto.classList.add('is-invalid');
        formValidateAssignedto.classList.remove('is-valid');
    }
});

function myFunction() {
    var x = document.getElementById("#form-myDate").value;
    document.getElementById("demo").innerHTML = x;
  }