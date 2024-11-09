// Sample array of power parts
let powerParts = [
    {
        name: "Read Mind",
        baseBP: 1,
        BPIncreaseOpt1: 1,
        baseEnergy: 12,
        energyIncreaseOpt1: 6,
        currentOpt1Level: 0,
        calculateBP: function() { return this.baseBP + this.currentOpt1Level * this.BPIncreaseOpt1; },
        calculateEnergy: function() { return this.baseEnergy + this.currentOpt1Level * this.energyIncreaseOpt1; }
    },
    {
        name: "Fireball",
        baseBP: 2,
        BPIncreaseOpt1: 2,
        baseEnergy: 10,
        energyIncreaseOpt1: 5,
        currentOpt1Level: 0,
        calculateBP: function() { return this.baseBP + this.currentOpt1Level * this.BPIncreaseOpt1; },
        calculateEnergy: function() { return this.baseEnergy + this.currentOpt1Level * this.energyIncreaseOpt1; }
    }
];

// Populate dropdown menu with power parts
const powerSelect = document.getElementById("powerSelect");
powerParts.forEach((part, index) => {
    let option = document.createElement("option");
    option.value = index;
    option.textContent = part.name;
    powerSelect.appendChild(option);
});

// Display selected power part details
function updatePowerPartDetails() {
    let selectedIndex = powerSelect.value;
    let selectedPart = powerParts[selectedIndex];
    
    const powerDetails = document.getElementById("powerDetails");
    powerDetails.innerHTML = `
        <h3>${selectedPart.name}</h3>
        <p>Base BP: ${selectedPart.baseBP}</p>
        <p>Base Energy: ${selectedPart.baseEnergy}</p>
        <p>Total BP: ${selectedPart.calculateBP()}</p>
        <p>Total Energy: ${selectedPart.calculateEnergy()}</p>
        <button onclick="increaseOptionLevel(${selectedIndex}, 'Opt1')">Increase Opt1</button>
        <button onclick="decreaseOptionLevel(${selectedIndex}, 'Opt1')">Decrease Opt1</button>
    `;
}

// Function to increase option level
function increaseOptionLevel(index, option) {
    let selectedPart = powerParts[index];
    if (option === "Opt1") {
        selectedPart.currentOpt1Level++;
    }
    updatePowerPartDetails();
}

// Function to decrease option level
function decreaseOptionLevel(index, option) {
    let selectedPart = powerParts[index];
    if (option === "Opt1" && selectedPart.currentOpt1Level > 0) {
        selectedPart.currentOpt1Level--;
    }
    updatePowerPartDetails();
}

// Initialize with first power part's details
updatePowerPartDetails();
