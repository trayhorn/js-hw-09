const formData = JSON.parse(localStorage.getItem('formData')) ?? {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const email = form.elements.email;
const message = form.elements.message;

email.value = formData.email;
message.value = formData.message;

form.addEventListener('input', handleInput);

form.addEventListener('submit', handleSubmit);

function handleInput() {
  formData.email = email.value;
  formData.message = message.value;

  localStorage.setItem('formData', JSON.stringify(formData));
}

function handleSubmit(e) {
  e.preventDefault();
  if (email.value === '' || message.value === '') {
    alert('Please fill all the fields!');
    return;
  }

  localStorage.removeItem('formData');

  form.reset();
  console.log(formData);
}