const storyStages = {
    start: {
        text: "You are in a dark forest. Do you want to go left or right?",
        choices: [
            { text: "Go left", consequence: "leftPath" },
            { text: "Go right", consequence: "rightPath" }
        ],
        image: "forest_left.png"
    },
    leftPath: {
        text: "You find a river. Do you want to swim across or walk along the bank?",
        choices: [
            { text: "Swim", consequence: "swimAcross" },
            { text: "Walk", consequence: "walkBank" }
        ],
        image: "river_swim.png"
    },
    rightPath: {
        text: "You encounter a wolf. Do you want to fight or run?",
        choices: [
            { text: "Fight", consequence: "fightWolf" },
            { text: "Run", consequence: "runAway" }
        ],
        image: "wolf_fight.png"
    },
    swimAcross: {
        text: "You swim across and reach a treasure chest. Do you open it or leave it?",
        choices: [
            { text: "Open", consequence: "findTreasure" },
            { text: "Leave", consequence: "leaveTreasure" }
        ],
        image: "treasure_open.png"
    },
    walkBank: {
        text: "You walk along the bank and find a village. Do you enter the village or continue walking?",
        choices: [
            { text: "Enter", consequence: "enterVillage" },
            { text: "Continue", consequence: "continueWalking" }
        ],
        image: "village_enter.png"
    },
    findTreasure: { text: "Congratulations! You found the treasure and won the game!", choices: [], image: "treasure_found.png" },
    leaveTreasure: { text: "You left the treasure. The game ends.", choices: [], image: "treasure_left.png" },
    enterVillage: { text: "You enter the village and enjoy a peaceful life.", choices: [], image: "village_peaceful.png" },
    continueWalking: { text: "You continue walking and find your way back home.", choices: [], image: "village_home.png" },
    fightWolf: { text: "You fight the wolf bravely but get injured. The game ends.", choices: [], image: "wolf_injured.png" },
    runAway: { text: "You run away safely but the adventure ends here.", choices: [], image: "wolf_safe.png" }
};

let currentStage = 'start';

function startGame() {
    currentStage = 'start';
    updatePage();
}

function updatePage() {
    const stage = storyStages[currentStage];
    const storyDiv = document.getElementById('story');
    const choicesDiv = document.getElementById('choices');
    const imageElement = document.getElementById('storyImage');

    storyDiv.textContent = stage.text;
    choicesDiv.innerHTML = '';
    imageElement.src = stage.image;

    console.log('Current stage:', currentStage);
    console.log('Image source:', imageElement.src);

    // Create buttons for choices
    stage.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.addEventListener('click', () => {
            currentStage = choice.consequence;
            updatePage();
        });
        choicesDiv.appendChild(button);
    });

    // Show restart button if there are no choices left
    if (stage.choices.length === 0) {
        const restartButton = document.createElement('button');
        restartButton.textContent = 'Restart';
        restartButton.addEventListener('click', startGame);
        choicesDiv.appendChild(restartButton);
    }
}

document.addEventListener('DOMContentLoaded', startGame);

// Update the last modified date in the footer
document.getElementById('lastModified').textContent = document.lastModified;
