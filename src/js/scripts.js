let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id +']').classList.add('active');
      })
    }
  })
}

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

function blurInput(input){
  const idLabel = 'label-' + input.name
  const isValue = input.value != ''

  const label = document.getElementById(idLabel)
  label.classList = isValue ? 'active' : ''
}

const button = document.querySelector('.btn-enviar');

const addLoading = () => {
  button.innerHTML = ' <img src="./src/img/carregando.png" class="loading">';
}

const removeLoading = () => {
  const button = document.querySelector('.btn-enviar');
  button.innerHTML = 'Enviar';
}

const handleSubmit = (envent) => {
  envent.preventDefault();
  addLoading();

  const name = document.querySelector('input[name=name]').value;
  const email = document.querySelector('input[name=email]').value;
  const phone = document.querySelector('input[name=phone]').value;
  const company = document.querySelector('input[name=company]').value;
  const menssage = document.querySelector('input[name=menssage]').value;

  fetch('https://api.sheetmonkey.io/form/F2FcH8bHHbZZVWDnzSy1p', {
    method: 'post',
    headers: {
      'Accept': 'application/json', 'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, phone, company, menssage}),
  }).then(() => removeLoading());
}

document.querySelector('.form').addEventListener('submit', handleSubmit);

const btnSeeProjects = document.querySelector('.btn-more');
const projetosInativos = document.querySelectorAll('.projects-box:not(.ativo)');

btnSeeProjects.addEventListener('click', () => {
  mostrarMaisProjetos();
  esconderBtn();
});

function esconderBtn() {
  btnSeeProjects.classList.add('remover');
}

function mostrarMaisProjetos() {
  projetosInativos.forEach(projetosInativo => {
    projetosInativo.classList.add('ativo');
  });
}