// Assuming these variables are defined globally somewhere in your code
let selectedPowerParts = [];

// Your power parts array example with a few parts
let powerParts = [
    {
        name: "Ability Increase",
        baseBP: 1,
        BPIncreaseOpt1: 1,
        BPIncreaseOpt2: 0,
        BPIncreaseOpt3: 0,
        altBP: 0,
        baseEnergy: 10,
        energyIncreaseOpt1: 10,
        energyIncreaseOpt2: 4,
        energyIncreaseOpt3: 0,
        altBaseEnergy: 15,
        currentOpt1Level: 0,
        currentOpt2Level: 0,
        currentOpt3Level: 0,
        useAltCost: false,
        description: "Increase the target’s Ability by +1 for the duration.",
        opt1Description: "Add additional +1 to the ability, to a maximum of +8. No ability can be increased above 10 using this part.",
        opt2Description: "Increase the maximum increase cap by +1."
    }
    // Add more power parts here
];

// Function to add a power part
function addPowerPart() {
    const partIndex = selectedPowerParts.length;
    selectedPowerParts.push({ part: powerParts[0], opt1Level: 0, opt2Level: 0, opt3Level: 0, useAltCost: false });

    const newPartDiv = document.createElement("div");
    newPartDiv.id = "powerPart_" + partIndex;
    newPartDiv.innerHTML = `
        <h4>${powerParts[0].name}</h4>
        <p>${powerParts[0].description}</p>
        <p>Base Energy: ${powerParts[0].baseEnergy}</p>
        <p>Base BP: ${powerParts[0].baseBP}</p>
        <p>Option 1 Energy: ${powerParts[0].energyIncreaseOpt1} <button onclick="changeOptionLevel(${partIndex}, 'opt1Level', 'increase')">Increase</button><button onclick="changeOptionLevel(${partIndex}, 'opt1Level', 'decrease')">Decrease</button></p>
        <p>${powerParts[0].opt1Description}</p>
        <p>Option 2 Energy: ${powerParts[0].energyIncreaseOpt2} <button onclick="changeOptionLevel(${partIndex}, 'opt2Level', 'increase')">Increase</button><button onclick="changeOptionLevel(${partIndex}, 'opt2Level', 'decrease')">Decrease</button></p>
        <p>${powerParts[0].opt2Description}</p>
        <p><button onclick="toggleAltCost(${partIndex})">Toggle Alternative Energy Cost</button></p>
    `;
    
    document.getElementById("powerPartsContainer").appendChild(newPartDiv);
    updateTotalCosts();
}

// Function to change option level (increase or decrease)
function changeOptionLevel(partIndex, option, direction) {
    const partData = selectedPowerParts[partIndex];

    // Increase or decrease the option level based on direction
    if (direction === 'increase') {
        partData[option]++;
    } else if (direction === 'decrease' && partData[option] > 0) {
        partData[option]--;
    }

    updateTotalCosts();  // Ensure total costs are updated after changing option levels
}

// Function to toggle alternative energy cost
function toggleAltCost(partIndex) {
    const partData = selectedPowerParts[partIndex];
    partData.useAltCost = !partData.useAltCost;  // Toggle the useAltCost flag
    updateTotalCosts();  // Update the total costs when toggling alternative cost
}

// Function to update total energy and BP costs
function updateTotalCosts() {
    let totalEnergy = 0;
    let totalBP = 0;

    selectedPowerParts.forEach((partData, partIndex) => {
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

    // Log elements to ensure they exist before setting textContent
    const totalEnergyElement = document.getElementById("totalEnergy");
    const totalBPElement = document.getElementById("totalBP");

    console.log("totalEnergyElement:", totalEnergyElement);  // Add this log
    console.log("totalBPElement:", totalBPElement);  // Add this log

    // Update total energy and BP text content if the elements exist
    if (totalEnergyElement) {
        totalEnergyElement.textContent = totalEnergy;
    } else {
        console.warn("Element with id 'totalEnergy' not found");
    }

    if (totalBPElement) {
        totalBPElement.textContent = totalBP;
    } else {
        console.warn("Element with id 'totalBP' not found");
    }
}
