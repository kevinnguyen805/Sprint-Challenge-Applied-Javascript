/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector('.carousel-container');

function CarouselDesign (){

  const carousel = document.createElement('div');
  const leftBtn = document.createElement('div');
  const mountain = document.createElement('img');
  const computer = document.createElement('img');
  const trees = document.createElement('img');
  const turntable = document.createElement('img');
  const rightBtn = document.createElement('div');

  carousel.appendChild(leftBtn);
  carousel.appendChild(mountain);
  carousel.appendChild(computer);
  carousel.appendChild(trees);
  carousel.appendChild(turntable);
  carousel.appendChild(rightBtn);

  carousel.classList.add('carousel');
  leftBtn.classList.add('left-button');
  rightBtn.classList.add('right-button');

  mountain.src = './assets/carousel/mountains.jpeg';
  computer.src = './assets/carousel/computer.jpeg';
  trees.src = './assets/carousel/trees.jpeg';
  turntable.src = './assets/carousel/turntable.jpeg';

  // CAROUSEL STRETCH
  leftBtn.textContent = '\u25C2';
  rightBtn.textContent = '\u25B8';

  let imageArray = [];
  imageArray.push(mountain);
  imageArray.push(computer);
  imageArray.push(trees);
  imageArray.push(turntable);
  imageArray[0].style.display = "flex";

  


  rightBtn.addEventListener('click', e => {
    carousel.classList.toggle('transition')

    if (imageArray[0].style.display === "flex"){
      imageArray[1].style.display="flex";
      imageArray[0].style.display="none";
    } 
     else if (imageArray[1].style.display === "flex"){
      imageArray[2].style.display="flex";
      imageArray[1].style.display="none";
    } 
    else if (imageArray[2].style.display === "flex"){
      imageArray[3].style.display="flex";
      imageArray[2].style.display="none";
    } 
    else if (imageArray[3].style.display === "flex"){
      imageArray[0].style.display="flex";
      imageArray[3].style.display="none";
    } 
  })

  leftBtn.addEventListener('click', e => {
    
    if (imageArray[0].style.display === "flex"){
      imageArray[3].style.display="flex";
      imageArray[0].style.display="none";
    } 
     else if (imageArray[1].style.display === "flex"){
      imageArray[0].style.display="flex";
      imageArray[1].style.display="none";
    } 
    else if (imageArray[2].style.display === "flex"){
      imageArray[1].style.display="flex";
      imageArray[2].style.display="none";
    } 
    else if (imageArray[3].style.display === "flex"){
      imageArray[2].style.display="flex";
      imageArray[3].style.display="none";
    } 
  })


  

  return carousel
}

carouselContainer.appendChild(CarouselDesign());
