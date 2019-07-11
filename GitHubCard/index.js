const cards = document.querySelector('.cards')


/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/mmthatch12')
  .then(data => {
    console.log('the card?:', data.data)
    const theCard = data.data
    const cardtofunct = createCard(theCard)
    cards.appendChild(cardtofunct)
    // theCard.forEach(cardy => {
    //   const element = createCard(cardy)
    //   cards.appendChild(element)
    // })
  })
  .catch(error => {
    console.log('This is not working', error)
  })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

function createCard(object){
  //create elements
  let card = document.createElement('div')
  let cardImg = document.createElement('img')
  let cardInfo = document.createElement('div')
  let cardH3 = document.createElement('h3')
  let cardUser = document.createElement('p')
  let cardLocal = document.createElement('p')
  let cardProf = document.createElement('p')
  let cardA = document.createElement('a')
  let cardFollowers = document.createElement('p')
  let cardFollowing = document.createElement('p')
  let cardBio = document.createElement('p')

  //Set Classes
  card.classList.add('card')
  cardInfo.classList.add('card-info')
  cardH3.classList.add('name')
  cardUser.classList.add('username')

  //connect the elements
  card.appendChild(cardImg)
  card.appendChild(cardInfo)
  cardInfo.appendChild(cardH3)
  cardInfo.appendChild(cardUser)
  cardInfo.appendChild(cardLocal)
  cardInfo.appendChild(cardProf)
  cardInfo.appendChild(cardFollowers)
  cardInfo.appendChild(cardFollowing)
  cardInfo.appendChild(cardBio)
  cardProf.appendChild(cardA)

  //set the content
  cardImg.src = object.avatar_url
  cardH3.textContent = object.name
  // cardUser.textContent = 
  cardLocal.textContent = `Location: ${object.location}`
  cardProf.textContent = `Profile:`
  // cardA.href = 
  // cardA.textContent = 
  cardFollowers.textContent = `Followers:`
  cardFollowing.textContent = `Following:`
  cardBio.textContent = `Bio:`

  return card
}