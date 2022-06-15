function createDiv{
  let arrayOne = ['Q','W','E','A','S','D','Z','X','C'];
  let arrayTwo = ['q','w','e','a','s','d','z','x','c'];
}

function tagH1() {
  const createH1 = document.createElement('h1');
  document.getElementById('header').appendChild(createH1);
  createH1.innerText = 'Eletronic Drums';
  createH1.setAttribute('id', 'nameDrums');
}

function createMainAndHeader() {
  const createHeader = document.createElement('header');
  document.body.appendChild(createHeader)
  createHeader.setAttribute('id', 'header'); 
  const createMain = document.createElement('main');
  document.body.appendChild(createMain);
  createMain.setAttribute('id', 'container');
  tagH1()
}

window.onload = () => {
  createMainAndHeader()
}