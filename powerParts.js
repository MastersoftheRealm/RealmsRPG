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

// Track all selected power parts to calculate total costs
let selectedPowerParts = [];

// Function to add a new power part section
function addPowerPart() {
    const partIndex = selectedPowerParts.length;
    selectedPowerParts.push({ part: powerParts[0], opt1Level: 0 });

    // Create new section for the power part
    const powerPartSection = document.createElement("div");
    powerPartSection.id = `powerPart-${partIndex}`;
    powerPartSection.style.marginBottom = "20px"; // Adds space between each section

    powerPartSection.innerHTML = `
        <select onchange="updateSelectedPart(${partIndex}, this.value)">
            ${powerParts.map((part, index) => `<option value="${index}">${part.name}</option>`).join('')}
        </select>
        <div>
            <p>Base BP: <span id="baseBP-${partIndex}">${powerParts[0].baseBP}</span></p>
            <p>Base Energy: <span id="baseEnergy-${partIndex}">${powerParts[0].baseEnergy}</span></p>
            <p>Total BP: <span id="totalBP-${partIndex}">${powerParts[0].calculateBP()}</span></p>
            <p>Total Energy: <span id="totalEnergy-${partIndex}">${powerParts[0].calculateEnergy()}</span></p>
            <button onclick="changeOptionLevel(${partIndex}, 1)">Increase Opt1</button>
            <button onclick="changeOptionLevel(${partIndex}, -1)">Decrease Opt1</button>
        </div>
        <!-- This is the "-" button for removing the section -->
        <button onclick="removePowerPart(${partIndex})" style="margin-top: 10px;">-</button>
    `;

    // Add new part section to the container
    document.getElementById("powerPartsContainer").appendChild(powerPartSection);

    // Update total costs
    updateTotalCosts();
}

// Function to update the selected power part in a section
function updateSelectedPart(index, selectedIndex) {
    const selectedPart = powerParts[selectedIndex];
    selectedPowerParts[index] = { part: selectedPart, opt1Level: 0 };

    // Update display for the selected power part
    document.getElementById(`baseBP-${index}`).textContent = selectedPart.baseBP;
    document.getElementById(`baseEnergy-${index}`).textContent = selectedPart.baseEnergy;
    document.getElementById(`totalBP-${index}`).textContent = selectedPart.calculateBP();
    document.getElementById(`totalEnergy-${index}`).textContent = selectedPart.calculateEnergy();

    // Recalculate total costs
    updateTotalCosts();
}

// Function to increase/decrease option level
function changeOptionLevel(index, change) {
    const selectedPart = selectedPowerParts[index];
    selectedPart.opt1Level = Math.max(0, selectedPart.opt1Level + change);

    // Update total BP and Energy calculations
    const bp = selectedPart.part.baseBP + selectedPart.opt1Level * selectedPart.part.BPIncreaseOpt1;
    const energy = selectedPart.part.baseEnergy + selectedPart.opt1Level * selectedPart.part.energyIncreaseOpt1;

    // Update individual display
    document.getElementById(`totalBP-${index}`).textContent = bp;
    document.getElementById(`totalEnergy-${index}`).textContent = energy;

    // Recalculate total costs
    updateTotalCosts();
}

// Function to remove a power part section
function removePowerPart(index) {
    // Remove the power part section from the DOM
    const powerPartSection = document.getElementById(`powerPart-${index}`);
    if (powerPartSection) {
        powerPartSection.remove();
    }

    // Remove the power part from the selectedPowerParts array
    selectedPowerParts.splice(index, 1);

    // Reassign IDs to each remaining part for consistent indexes
    document.querySelectorAll('#powerPartsContainer > div').forEach((section, newIndex) => {
        section.id = `powerPart-${newIndex}`;
        section.querySelector("select").setAttribute("onchange", `updateSelectedPart(${newIndex}, this.value)`);
        section.querySelectorAll("button").forEach(button => {
            if (button.textContent === "-") {
                button.setAttribute("onclick", `removePowerPart(${newIndex})`);
            }
            if (button.textContent === "Increase Opt1") {
                button.setAttribute("onclick", `changeOptionLevel(${newIndex}, 1)`);
            }
            if (button.textContent === "Decrease Opt1") {
                button.setAttribute("onclick", `changeOptionLevel(${newIndex}, -1)`);
            }
        });
    });

    // Update total costs
    updateTotalCosts();
}

// Function to calculate and update the total energy and BP costs
function updateTotalCosts() {
    let totalEnergy = 0;
    let totalBP = 0;

    selectedPowerParts.forEach(part => {
        totalEnergy += part.part.baseEnergy + part.opt1Level * part.part.energyIncreaseOpt1;
        totalBP += part.part.baseBP + part.opt1Level * part.part.BPIncreaseOpt1;
    });

    document.getElementById("totalEnergy").textContent = totalEnergy;
    document.getElementById("totalBP").textContent = totalBP;
}
