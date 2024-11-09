// Array of power parts
let powerParts = [
    {
        name: "Read Mind",
        baseBP: 1,
        BPIncreaseOpt1: 1,
        BPIncreaseOpt2: 1,
        BPIncreaseOpt3: 1,
        altBP: 0,
        baseEnergy: 12,
        energyIncreaseOpt1: 6,
        energyIncreaseOpt2: 4,
        energyIncreaseOpt3: 2,
        altBaseEnergy: 8,
        currentOpt1Level: 0,
        currentOpt2Level: 0,
        currentOpt3Level: 0,
        useAltCost: false
    },
    // Add more power parts as needed...
];

// Array to hold selected power parts
let selectedPowerParts = [];

// Function to add a new power part section
function addPowerPart() {
    const partIndex = selectedPowerParts.length;
    selectedPowerParts.push({ part: powerParts[0], opt1Level: 0, opt2Level: 0, opt3Level: 0, useAltCost: false });

    const powerPartSection = document.createElement("div");
    powerPartSection.id = `powerPart-${partIndex}`;
    powerPartSection.classList.add("power-part");

    powerPartSection.innerHTML = `
        <select onchange="updateSelectedPart(${partIndex}, this.value)">
            ${powerParts.map((part, index) => `<option value="${index}">${part.name}</option>`).join('')}
        </select>
        
        <div>
            <p>Base BP: <span id="baseBP-${partIndex}">${powerParts[0].baseBP}</span></p>
            <p>Base Energy: <span id="baseEnergy-${partIndex}">${powerParts[0].baseEnergy}</span></p>
            <p>Total BP: <span id="totalBP-${partIndex}">${powerParts[0].baseBP}</span></p>
            <p>Total Energy: <span id="totalEnergy-${partIndex}">${powerParts[0].baseEnergy}</span></p>
        </div>

        <!-- Increase Option 1 -->
        <div>
            <button onclick="changeOptionLevel(${partIndex}, 'opt1', 1)">+ Increase Opt1</button>
            <button onclick="changeOptionLevel(${partIndex}, 'opt1', -1)">- Decrease Opt1</button>
            <span>Opt1 Level: <span id="opt1Level-${partIndex}">0</span></span>
        </div>

        <!-- Increase Option 2 -->
        <div>
            <button onclick="changeOptionLevel(${partIndex}, 'opt2', 1)">+ Increase Opt2</button>
            <button onclick="changeOptionLevel(${partIndex}, 'opt2', -1)">- Decrease Opt2</button>
            <span>Opt2 Level: <span id="opt2Level-${partIndex}">0</span></span>
        </div>

        <!-- Increase Option 3 -->
        <div>
            <button onclick="changeOptionLevel(${partIndex}, 'opt3', 1)">+ Increase Opt3</button>
            <button onclick="changeOptionLevel(${partIndex}, 'opt3', -1)">- Decrease Opt3</button>
            <span>Opt3 Level: <span id="opt3Level-${partIndex}">0</span></span>
        </div>

        <!-- Toggle Alternative Energy Cost -->
        <button onclick="toggleAltEnergy(${partIndex})">Toggle Alternative Energy Cost</button>
        
        <!-- Remove this power part -->
        <button onclick="removePowerPart(${partIndex})" style="margin-top: 10px;">Remove</button>
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
    document.getElementById(`totalBP-${index}`).textContent = selectedPart.baseBP;
    document.getElementById(`totalEnergy-${index}`).textContent = selectedPart.baseEnergy;

    updateTotalCosts();
}

// Function to change the level of an increase option
function changeOptionLevel(index, option, delta) {
    const part = selectedPowerParts[index];
    const levelKey = `${option}Level`;
    const energyIncreaseKey = `energyIncrease${option.charAt(3)}`;
    const bpIncreaseKey = `BPIncrease${option.charAt(3)}`;

    part[levelKey] = Math.max(0, part[levelKey] + delta);

    document.getElementById(`${levelKey}-${index}`).textContent = part[levelKey];

    updateTotalCosts();
}

// Function to toggle alternative energy cost
function toggleAltEnergy(index) {
    const part = selectedPowerParts[index];
    part.useAltCost = !part.useAltCost;

    const energyDisplay = document.getElementById(`baseEnergy-${index}`);
    energyDisplay.textContent = part.useAltCost ? part.part.altBaseEnergy : part.part.baseEnergy;

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

    selectedPowerParts.forEach((partData) => {
        const part = partData.part;
        let partEnergy = partData.useAltCost ? part.altBaseEnergy : part.baseEnergy;
        let partBP = part.baseBP;

        partEnergy += part.energyIncreaseOpt1 * partData.opt1Level;
        partEnergy += part.energyIncreaseOpt2 * partData.opt2Level;
        partEnergy += part.energyIncreaseOpt3 * partData.opt3Level;

        partBP += part.BPIncreaseOpt1 * partData.opt1Level;
        partBP += part.BPIncreaseOpt2 * partData.opt2Level;
        partBP += part.BPIncreaseOpt3 * partData.opt3Level;

        totalEnergy += partEnergy;
        totalBP += partBP;
    });

    document.getElementById("totalEnergy").textContent = totalEnergy;
    document.getElementById("totalBP").textContent = totalBP;
}
