(() => {
    const powerParts = [
        {
            name: "Ability Increase",
            description: "Increase the target’s Ability by +1 for the duration.",
            baseBP: 1,
            baseEnergy: 10,
            opt1Cost: 10,
            opt1Description: "Add additional +1 to the ability, to a maximum of +8. No ability can be increased above 10 using this part.",
            BPIncreaseOpt1: 0,
            opt2Cost: 4,
            opt2Description: "Increase the maximum increase cap by +1.",
            BPIncreaseOpt2: 0,
            opt3Cost: 5,
            opt3Description: "Placeholder for a third option description.",
            BPIncreaseOpt3: 0,
            altBaseEnergy: 8,
            altEnergyDescription: "Use a lower base energy cost at 8 EN, sacrificing some effectiveness.",
            altBP: 0,
            useAltCost: false
        },
        // Add more power parts as needed...
    ];

    const selectedPowerParts = [];

    function addPowerPart() {
        const partIndex = selectedPowerParts.length;
        selectedPowerParts.push({ part: powerParts[0], opt1Level: 0, opt2Level: 0, opt3Level: 0, useAltCost: false });

        const powerPartSection = document.createElement("div");
        powerPartSection.id = `powerPart-${partIndex}`;
        powerPartSection.classList.add("power-part-section");
        powerPartSection.innerHTML = `
            <select onchange="updateSelectedPart(${partIndex}, this.value)">
                ${powerParts.map((part, index) => `<option value="${index}">${part.name}</option>`).join('')}
            </select>
            <h3>${powerParts[0].name} <span class="small-text">Energy: <span id="baseEnergy-${partIndex}">${powerParts[0].baseEnergy}</span></span> <span class="small-text">Building Points: <span id="baseBP-${partIndex}">${powerParts[0].baseBP}</span></span></h3>
            <p>Part EN: <span id="totalEnergy-${partIndex}">${powerParts[0].baseEnergy}</span> Part BP: <span id="totalBP-${partIndex}">${powerParts[0].baseBP}</span></p>
            <p>${powerParts[0].description}</p>
            
            <div class="option-container">
                <!-- Option 1 -->
                <div class="option-box">
                    <h4>Energy: +${powerParts[0].opt1Cost}</h4>
                    <button onclick="changeOptionLevel(${partIndex}, 'opt1', 1)">+</button>
                    <button onclick="changeOptionLevel(${partIndex}, 'opt1', -1)">-</button>
                    <span>Level: <span id="opt1Level-${partIndex}">0</span></span>
                    <p>${powerParts[0].opt1Description}</p>
                </div>
                
                <!-- Option 2 -->
                <div class="option-box">
                    <h4>Energy: +${powerParts[0].opt2Cost}</h4>
                    <button onclick="changeOptionLevel(${partIndex}, 'opt2', 1)">+</button>
                    <button onclick="changeOptionLevel(${partIndex}, 'opt2', -1)">-</button>
                    <span>Level: <span id="opt2Level-${partIndex}">0</span></span>
                    <p>${powerParts[0].opt2Description}</p>
                </div>

                <!-- Option 3 -->
                <div class="option-box">
                    <h4>Energy: +${powerParts[0].opt3Cost}</h4>
                    <button onclick="changeOptionLevel(${partIndex}, 'opt3', 1)">+</button>
                    <button onclick="changeOptionLevel(${partIndex}, 'opt3', -1)">-</button>
                    <span>Level: <span id="opt3Level-${partIndex}">0</span></span>
                    <p>${powerParts[0].opt3Description}</p>
                </div>

                <!-- Alternative Energy Cost -->
                <div class="option-box">
                    <h4>Alternate Base Energy: ${powerParts[0].altBaseEnergy}</h4>
                    <button onclick="toggleAltEnergy(${partIndex})">Toggle</button>
                    <p>${powerParts[0].altEnergyDescription}</p>
                </div>
            </div>

            <button class="delete-button" onclick="removePowerPart(${partIndex})">Delete</button>
        `;
        document.getElementById("powerPartsContainer").appendChild(powerPartSection);

        updateTotalCosts();
    }

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

    function changeOptionLevel(index, option, delta) {
        const part = selectedPowerParts[index];
        const levelKey = `${option}Level`;
        const energyIncreaseKey = `${option}Cost`;

        part[levelKey] = Math.max(0, part[levelKey] + delta);

        const levelDisplay = document.getElementById(`${levelKey}-${index}`);
        if (levelDisplay) {
            levelDisplay.textContent = part[levelKey];
        }

        const optionElement = document.querySelector(`#powerPart-${index} .option-box:nth-of-type(${option === 'opt1' ? 1 : option === 'opt2' ? 2 : option === 'opt3' ? 3 : 4}) h4`);
        optionElement.innerHTML = `Energy: +${part.part[energyIncreaseKey]}`;

        const descriptionElement = document.querySelector(`#powerPart-${index} .option-box:nth-of-type(${option === 'opt1' ? 1 : option === 'opt2' ? 2 : option === 'opt3' ? 3 : 4}) p`);
        descriptionElement.innerHTML = part.part[`${option}Description`];

        updateTotalCosts();
    }

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

    function removePowerPart(index) {
        selectedPowerParts.splice(index, 1);

        const partElement = document.getElementById(`powerPart-${index}`);
        if (partElement) partElement.remove();

        updateTotalCosts();
    }

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

    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("addPowerPartButton").addEventListener("click", addPowerPart);
    });

    // Expose functions to global scope for inline event handlers
    window.updateSelectedPart = updateSelectedPart;
    window.changeOptionLevel = changeOptionLevel;
    window.toggleAltEnergy = toggleAltEnergy;
    window.removePowerPart = removePowerPart;
})();
