/* globals  ResultsArea ImageArea objectArray*/
/* exported vote App */
let votes = 0;
const appTemplate = document.getElementById('app-template');

class App {
    constructor() {
        this.list = objectArray;
    }
    showResults() {
        const resultsDom = appTemplate.content;
        const resultsSection = resultsDom.getElementById('results-section');
        const resultsData = new ResultsArea(this.list);
        resultsSection.appendChild(resultsData.render());
        return resultsDom;
        
    }
    render(){
        const dom = appTemplate.content;
        const imageSection = dom.getElementById('image-vote');
        getRandomObject();
        const imageComponent = new ImageArea(randomImageArray, (userChoice) => {
            userChoice.clicks++;
            votes++;
            console.log('votes = ' + votes);
            console.log(userChoice);
            getRandomObject();
            imageComponent.update(randomImageArray);
        });
        imageSection.appendChild(imageComponent.render());
        this.showResults();
        return dom;
    }
}

let randomImageArray = [];
function getRandomObject() {
    randomImageArray.length = 0;
    for(let i = 0; i < 3;i++){
        var ranNum = Math.floor(Math.random() * objectArray.length);
        randomImageArray.push(objectArray[ranNum]);
        randomImageArray[i].views++;

    }
    console.log(randomImageArray);
}





// if(vote === 25){
//     displayResults();
// }

// function clearImages() {
//     const imageSection = document.getElementById('image-vote');
//     imageSection.parentNode.removeChild(imageSection);
//     getRandomObject();
// }