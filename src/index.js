document.addEventListener('DOMContentLoaded', ()=>{
    //card options
    const cardArray = [
        {
            name: 'fries',
            img: 'src/images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'src/images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'src/images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'src/images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'src/images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'src/images/hotdog.png'
        },
        {
            name: 'fries',
            img: 'src/images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'src/images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'src/images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'src/images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'src/images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'src/images/hotdog.png'
        }
    ]
    console.log(cardArray)
    cardArray.sort(() => 0.5-Math.random())
    const resultDisplay = document.querySelector('#result')
    let cardsChosen =[]
    let cardsChosenIDs = []
    let cardsWon= []
    const grid = document.querySelector('.grid')
    function createBoard(){
        for(let i =0 ; i<cardArray.length; i++){
            const card = document.createElement('img')
            card.setAttribute('src','src/images/blank.png')
            card.setAttribute('data-id',i)
            grid.appendChild(card)
            console.log(i)
            //After the above, the below function 
            // means anytime you click on this created card
            // it will call the flipCard function
            // which logs the data-id ; data-id
            // is the original order each card
            // was created

            // each card on the grid is the same - blank.png
            // but the cards array have different elements
            // and the flip card prints out these different elements 
            card.addEventListener('click', flipCard)
        }
    }

    function flipCard(){
        let cardID = this.getAttribute('data-id')
        console.log(cardArray[cardID])
        cardsChosen.unshift(cardArray[cardID].name)
        cardsChosenIDs.unshift(cardID)
        this.setAttribute('src',cardArray[cardID].img)
        if (cardsChosen.length === 2){
            // After a certain time period has passed,
            // If 2 cards chosen match, remove them from the board
            // If not, flip them over again (reset)
            setTimeout(checkForMatch, 500)
        }
        console.log(cardsChosenIDs)

    }
    document.addEventListener('keydown',total)
    function total(event){
        if(event.key =='ArrowUp'){
            console.log(cardsChosen)
            console.log(cardsChosenIDs)
        }
    }

    function checkForMatch(){
        // make sure that people can't click on the same image 
        const cards = document.querySelectorAll('img')
        const optionOneID = cardsChosenIDs[0]
        const optionTwoID = cardsChosenIDs[1]
        // remember when clicking on a tile
        // you're unshifting and adding to the beginning of an array
        // so adding at index [0], all other elements 
        // get shifted one index further along the array, added by 1
        // push adds to the beginning of an array
        if(optionOneID == optionTwoID){
            alert('You have clicked the same image!')
            cards[optionOneID].setAttribute('src','src/images/blank.png')
            cards[optionTwoID].setAttribute('src','src/images/blank.png')
        } else if(cardsChosen[0] === cardsChosen[1]){
            alert('You have found a match!')
            cards[optionOneID].setAttribute('src','src/images/white.png')
            cards[optionTwoID].setAttribute('src','src/images/white.png')
            cards[optionOneID].removeEventListener('click',flipCard)
            cards[optionTwoID].removeEventListener('click',flipCard)
            cardsWon.push(cardsChosen)
            console.log(cardsWon)
        }  else if (cardsChosen[0]!==cardsChosen[1]){
            alert("You haven't found a match!")
            cards[optionOneID].setAttribute('src','src/images/blank.png')
            cards[optionTwoID].setAttribute('src','src/images/blank.png')
        }
        cardsChosen = []
        cardsChosenIDs = []
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length===cardArray.length/2){
            resultDisplay.textContent ='Congratulations! You have won!'
        }
    }

    createBoard()
})