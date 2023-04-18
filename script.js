const navMenu = document.querySelector('.nav-menu');
const menuBtn = document.getElementById('menu-btn');
const navLink = document.querySelectorAll('.nav-link');

menuBtn.addEventListener('click', () => {
  navMenu.style.display = 'flex';
});

const closeBtn = document.getElementById('close-btn');

closeBtn.addEventListener('click', () => {
  navMenu.style.display = 'none';
});

navLink.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    navMenu.style.display = 'none';
  });
});

const projects = {
  project1: {
    id: 1,
    title: 'Multi-Post Stories Gain+Glory',
    description: '',
    image: 'img/placeholder.png',
    tech: ['Ruby on rials', 'CSS', 'JavaScript', 'HTML'],
    liveVersion: '#',
    source: '#',
  },

  project2: {
    id: 2,
    title: 'Multi-Post Stories Gain+Glory',
    description: '. Illorrorrepudiandae aperiam rei, suscipit quo laborum beatae quam.',
    image: 'img/placeholder.png',
    tech: ['Ruby on rials', 'CSS', 'JavaScript', 'HTML'],
    liveVersion: '#',
    source: '#',
  },

  project3: {
    id: 3,
    title: 'Multi-Post Stories Gain+Glory',
    description: 'This is project 3',
    image: 'img/placeholder.png',
    tech: ['Ruby on rials', 'CSS', 'JavaScript', 'HTML'],
    liveVersion: '#',
    source: '#',
  },

  project4: {
    id: 4,
    title: 'Multi-Post Stories Gain+Glory',
    description: 'This is project 4',
    image: 'img/placeholder.png',
    tech: ['Ruby on rials', 'CSS', 'JavaScript', 'HTML'],
    liveVersion: '#',
    source: '#',
  },

  project5: {
    id: 5,
    title: 'Multi-Post Stories Gain+Glory',
    description: 'This is project 5',
    image: 'img/placeholder.png',
    tech: ['Ruby on rials', 'CSS', 'JavaScript', 'HTML'],
    liveVersion: '#',
    source: '#',
  },

  project6: {
    id: 6,
    title: 'Multi-Post Stories Gain+Glory',
    description: 'This is project 6',
    image: 'img/placeholder.png',
    tech: ['Ruby on rials', 'CSS', 'JavaScript', 'HTML'],
    liveVersion: '#',
    source: '#',
  },
};

// Projects section code

const worksSection = document.querySelector('.works');

const sectionTitle = document.createElement('h1');
sectionTitle.innerHTML = 'My Recent Works';
worksSection.appendChild(sectionTitle);

const titleUnderline = document.createElement('img');
titleUnderline.src = 'img/Indicator.png';
titleUnderline.className = 'line';
worksSection.appendChild(titleUnderline);

const cards = document.createElement('div');
cards.className = 'cards';
worksSection.appendChild(cards);

Object.values(projects).forEach((values) => {
  const card = document.createElement('div');
  card.className = 'card';
  cards.appendChild(card);

  const projectImg = document.createElement('img');
  projectImg.src = values.image;
  card.appendChild(projectImg);

  const textContainer = document.createElement('div');
  textContainer.className = 'text-container';
  card.appendChild(textContainer);

  const containerTitle = document.createElement('h1');
  containerTitle.textContent = values.title;
  textContainer.appendChild(containerTitle);

  const containerUl = document.createElement('ul');
  values.tech.forEach((tech) => {
    const containerLi = document.createElement('li');
    containerLi.textContent = tech;
    containerUl.appendChild(containerLi);
  });
  textContainer.appendChild(containerUl);

  const seeBtn = document.createElement('button');
  seeBtn.className = 'see-btn';
  seeBtn.setAttribute('id', `project${values.id}-btn`);
  seeBtn.textContent = 'See project';
  textContainer.appendChild(seeBtn);
});

// Popup window code

const seeBtn = document.querySelectorAll('.see-btn');
const card = document.querySelectorAll('.card');

seeBtn.forEach((seeBtn) => {
  seeBtn.addEventListener('click', () => {
    const projectId = seeBtn.id.replace('-btn', '');
    const project = projects[projectId];
    const popup = document.createElement('div');
    popup.className = 'popup-main';
    popup.innerHTML = `
    <div class="popup">
      <button class="close-button-desktop" type="button"><img src="img/colsedesketop.png"></button>

      <button class="close-button" type="button"><img src="img/m-close.png"></button>

      <img class="popup-img-desktop" src="img/descktop-popup.png" alt="project-image">

      <img class="popup-img-mobile" src="img/m-bg-popup.png" alt="project-image">
     

      <div class="popup-card">
      <div class="cont-row">
        <h1>Keeping track of hundreds of components</h1>

        <div class="buttons two">
          <a href="${project.liveVersion}">See live<img src="img/see-live-icon.png"></a>
          <a href="${project.source}">See source<img src="img/Group.png"></a>
        </div>
      </div>
      <ul>
        <li>Codekit</li>
        <li>GitHub</li>
        <li>JavaScript</li> 
        <li>Bootstrap</li>
        

      </ul>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>
      <div class="buttons one">
          <a href="${project.liveVersion}">See live<img src="img/see-live-icon.png"></a>
          <a href="${project.source}">See source<img src="img/github-icone-white.png"></a>
      </div></div>
    </div>
    `;

    card.forEach((card) => {
      card.appendChild(popup);
    });

    const closeBtn = document.querySelector('.close-button');

    card.forEach((card) => {
      closeBtn.addEventListener('click', () => {
        card.removeChild(popup);
      });
    });

    const closeBtnDesktop = document.querySelector('.close-button-desktop');

    card.forEach((card) => {
      closeBtnDesktop.addEventListener('click', () => {
        card.removeChild(popup);
      });
    });
  });
});