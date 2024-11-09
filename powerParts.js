// Array of power parts with descriptions and additional options
let powerParts = [
    {
        name: "Ability Increase",
        description: "Increase the target’s Ability by +1 for the duration.",
        baseBP: 1,
        baseEnergy: 10,

        // Option 1: Increase by additional +1
        opt1Cost: 10,
        opt1Description: "Add additional +1 to the ability, to a maximum of +8. No ability can be increased above 10 using this part.",
        BPIncreaseOpt1: 0,

        // Option 2: Increase max cap by +1
        opt2Cost: 4,
        opt2Description: "Increase the maximum increase cap by +1.",
        BPIncreaseOpt2: 0,

        // Option 3: (Example placeholder, you can add your own)
        opt3Cost: 5,
        opt3Description: "Placeholder for a third option description.",
        BPIncreaseOpt3: 0,

        // Alternate energy cost
        altBaseEnergy: 8,
        altEnergyDescription: "Use a lower base energy cost at 8 EN, sacrificing some effectiveness.",
        useAltCost: false
    },
    // Add more power parts as needed...
];

// Array to hold the selected power parts
let selectedPowerParts = [];

// Function to add a new power part section
function addPowerPart() {
    const partIndex = selectedPowerParts.length;
    selectedPowerParts.push({ part: powerParts[0], opt1Level: 0, opt2Level: 0, opt3Level: 0, useAltCost: false });

    const powerPartSection = document.createElement("div");
    powerPartSection.id = `powerPart-${partIndex}`;
    powerPartSection.style.marginBottom = "20px";
    powerPartSection.innerHTML = `
        <h3>${powerParts[0].name}</h3>
        <p>${powerParts[0].description}</p>
        <select onchange="updateSelectedPart(${partIndex}, this.value)">
            ${powerParts.map((part, index) => `<option value="${index}">${part.name}</option>`).join('')}
        </select>

        <div>
            <p>Base BP: <span id="baseBP-${partIndex}">${powerParts[0].baseBP}</span></p>
            <p>Base Energy: <span id="baseEnergy-${partIndex}">${powerParts[0].baseEnergy}</span></p>
            
            <!-- Option 1 -->
            <h4>Option 1: ${powerParts[0].opt1Cost} EN</h4>
            <p>${powerParts[0].opt1Description}</p>
            <button onclick="changeOptionLevel(${partIndex}, 'opt1', 1)">Increase Opt1</button>
            <button onclick="changeOptionLevel(${partIndex}, 'opt1', -1)">Decrease Opt1</button>
            <span>Level: <span id="opt1Level-${partIndex}">0</span></span>
            
            <!-- Option 2 -->
            <h4>Option 2: ${powerParts[0].opt2Cost} EN</h4>
            <p>${powerParts[0].opt2Description}</p>
            <button onclick="changeOptionLevel(${partIndex}, 'opt2', 1)">Increase Opt2</button>
            <button onclick="changeOptionLevel(${partIndex}, 'opt2', -1)">Decrease Opt2</button>
            <span>Level: <span id="opt2Level-${partIndex}">0</span></span>

            <!-- Option 3 -->
            <h4>Option 3: ${powerParts[0].opt3Cost} EN</h4>
            <p>${powerParts[0].opt3Description}</p>
            <button onclick="changeOptionLevel(${partIndex}, 'opt3', 1)">Increase Opt3</button>
            <button onclick="changeOptionLevel(${partIndex}, 'opt3', -1)">Decrease Opt3</button>
            <span>Level: <span id="opt3Level-${partIndex}">0</span></span>

            <!-- Toggle Alternative Energy Cost -->
            <button onclick="toggleAltEnergy(${partIndex})">Use Alternative Energy Cost</button>
            <p id="altEnergyDescription-${partIndex}" style="display: none;">${powerParts[0].altEnergyDescription}</p>
        </div>
        <button onclick="removePowerPart(${partIndex})" style="margin-top: 10px;">-</button>
    `;
    document.getElementById("powerPartsContainer").appendChild(powerPartSection);

    updateTotalCosts();
}

// Function to update selected power part in dropdown
function updateSelectedPart(index, selectedValue) {
    const selectedPart = powerParts[selectedValue];
    selectedPowerParts[index].part = selectedPart;
    selectedPowerParts[index].opt1Level = 0;
    selectedPowerParts[index].opt2Level = 0;
    selectedPowerParts[index].opt3Level = 0;
    selectedPowerParts[index].useAltCost = false;

    document.getElementById(`baseBP-${index}`).textContent = selectedPart.baseBP;
    document.getElementById(`baseEnergy-${index}`).textContent = selectedPart.baseEnergy;
    document.getElementById(`altEnergyDescription-${index}`).style.display = "none";

    updateTotalCosts();
}

// Function to change the level of an increase option
function changeOptionLevel(index, option, delta) {
    const part = selectedPowerParts[index];
    const levelKey = `${option}Level`;
    const energyIncreaseKey = `opt${option.charAt(3)}Cost`;

    part[levelKey] = Math.max(0, part[levelKey] + delta);

    const levelDisplay = document.getElementById(`${levelKey}-${index}`);
    if (levelDisplay) {
        levelDisplay.textContent = part[levelKey];
    }

    updateTotalCosts();
}

// Function to toggle alternative energy cost
function toggleAltEnergy(index) {
    const part = selectedPowerParts[index];
    part.useAltCost = !part.useAltCost;

    const energyDisplay = document.getElementById(`baseEnergy-${index}`);
    const altDescription = document.getElementById(`altEnergyDescription-${index}`);
    
    if (part.useAltCost) {
        energyDisplay.textContent = part.part.altBaseEnergy;
        altDescription.style.display = "block";
    } else {
        energyDisplay.textContent = part.part.baseEnergy;
        altDescription.style.display = "none";
    }

    updateTotalCosts();
}

// Function to remove a power part section
function removePowerPart(index) {
    selectedPowerParts.splice(index, 1);

    const partElement = document.getElementById(`powerPart-${index}`);
    if (partElement) partElement.remove();

    updateTotalCosts();
}

// Function to update total energy and BP costs
function updateTotalCosts() {
    let totalEnergy = 0;
    let totalBP = 0;

    selectedPowerParts.forEach((partData, partIndex) => {
        const part = partData.part;
        let partEnergy = partData.useAltCost ? part.altBaseEnergy : part.baseEnergy;
        let partBP = part.baseBP;

        partEnergy += part.opt1Cost * partData.opt1Level;
        partEnergy += part.opt2Cost * partData.opt2Level;
        partEnergy += part.opt3Cost * partData.opt3Level;

        partBP += part.BPIncreaseOpt1 * partData.opt1Level;
        partBP += part.BPIncreaseOpt2 * partData.opt2Level;
        partBP += part.BPIncreaseOpt3 * partData.opt3Level;

        totalEnergy += partEnergy;
        totalBP += partBP;

        document.getElementById(`totalEnergy-${partIndex}`).textContent = partEnergy;
        document.getElementById(`totalBP-${partIndex}`).textContent = partBP;
    });

    document.getElementById("totalEnergy").textContent = totalEnergy;
    document.getElementById("totalBP").textContent = totalBP;
}
