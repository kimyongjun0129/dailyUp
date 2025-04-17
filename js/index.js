// 나중에 DB에서 값 가져오기
let currentExperience = 0;
let currentLevel = 1;
const questPerExp = 40;
const maxExp = 500;

const quests = document.querySelectorAll(".quest__box input");

const handleQuestBtnClick = (event) => {
    if(event.target.checked) {
        currentExperience += questPerExp;
        if (currentExperience >= maxExp) LevelUp();
        updateUI();
    }
}

function LevelUp() {
    const level = document.querySelector(".level");
    currentLevel += 1;
    currentExperience -= maxExp;

    level.innerText = `Level ${currentLevel}`;
}

function updateUI() {
    const experienceFill = document.querySelector(".experience__fill");
    const experiencetext = document.querySelector(".experience__text");
    experienceFill.style.width = currentExperience/(maxExp/100) + '%';
    experiencetext.innerText = currentExperience +`/${maxExp}`;
}

quests.forEach(quest => {
    quest.addEventListener("click", handleQuestBtnClick);
})