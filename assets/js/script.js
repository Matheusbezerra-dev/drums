function createAudios() {
  const arrayThre = ['q','w','e','a','s','d','z','x','c'];
  for (let index = 0; index < arrayThre.length; index += 1) {
    const createAudio = document.createElement('audio');
    document.body.appendChild(createAudio);
    createAudio.setAttribute('id', `s_key${arrayThre[index]}`);
    createAudio.setAttribute('src', `./assets/sounds/key${arrayThre[index]}.wav`)    
  }
}

function createDivs() { 
  const arrayOne = ['Q','W','E','A','S','D','Z','X','C'];
  const arrayTwo = ['q','w','e','a','s','d','z','x','c'];
  const createDiv1 = document.createElement('div');
  document.getElementById('container').appendChild(createDiv1);
  createDiv1.setAttribute('id', 'keys');
  for (let i = 0; i < arrayOne.length; i += 1) {
    const createDiv = document.createElement('div')
    document.getElementById('keys').appendChild(createDiv);
    createDiv.setAttribute('id', `key${arrayTwo[i]}`) ;
    createDiv.innerText = arrayOne[i];
  }
  createAudios()
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
  createDivs()
}

window.onload = () => {
  createMainAndHeader()
}