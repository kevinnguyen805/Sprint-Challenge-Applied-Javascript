// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.



// we get { key: array / key: arrays / key: arrays }
// access each KEY and loop through each ARRAY 

const cardsContainer = document.querySelector('.cards-container');

function Article(obj){
     const card = document.createElement('div')
     const headline = document.createElement('div')
     const author = document.createElement('div')
     const imageContainer = document.createElement('div')
     const image = document.createElement('img')
     const name = document.createElement('span')

     card.appendChild(headline);
     card.appendChild(author);
     author.appendChild(imageContainer);
     imageContainer.appendChild(image);
     author.appendChild(name);

     card.classList.add('card');
     headline.classList.add('headline');
     author.classList.add('author');
     imageContainer.classList.add('img-container');

     headline.textContent = obj.headline;
     image.src = obj.authorPhoto;
     name.textContent = obj.authorName;

     return card
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
     .then(response => {
          let artObjValues = Object.values(response.data.articles)    // returns an array of all the values 
          artObjValues.forEach(index => {                             // loop through array of values to separate into individual arrays
               index.forEach(value => {                               // each array contains objects - loop through that array
                    // console.log(value);
                    let card = Article(value);
                    cardsContainer.appendChild(card);
               })
          })
     })
     .catch(error => {
          console.log("Your data was not returned", error);
     })

