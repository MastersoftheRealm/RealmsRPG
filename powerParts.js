import powerPartsData from './powerPartsData.js';

(() => {
    const powerParts = powerPartsData;

    const selectedPowerParts = [];
    let range = 0; // Internal default value
    let area = 1;
    let duration = 1;
    let areaEffectLevel = 0; // Initialize areaEffectLevel

    const areaEffectDescriptions = {
        none: "Area of Effect is one target or one space.",
        sphere: "+25% EN: Add a sphere of effect with a 1-space radius centered on yourself or a point within range that you can see. The power affects all targets within this area. +25% EN: Increase the radius by +1. Roll one attack against all targets' relevant defense.",
        cylinder: "+25% EN: Add a cylinder of effect with a 1-space radius and a 2 space height centered on yourself or a point within range that you can see. The power affects all targets within this area. +25% EN: Increase the radius by +1 or to increase the height by 4. Roll one attack against all targets' relevant defense.",
        cone: "+12.5% EN: Create a 45-degree angle cone that goes directly out from yourself for 2 spaces. +12.5% EN: Increase this effect by +1 space. Roll one attack against all targets' relevant defense.",
        line: "+25% EN: Each creature occupying a space directly between you and the power's target is affected by this power. Roll attack and damage once and apply it to all creatures affected.",
        object: "+2 EN: Each object occupying a space between you and the power's target takes 1d2 magic damage. +100% EN: For each additional 1d2 of damage.",
        space: "+25% EN: Each space directly between you and this power's target is affected for the power's duration. A creature that begins its turn in one of these spaces must roll the relevant defense against your potency or become affected.",
        jump: "+2 EN: Power jumps from the location hit to an adjacent space of your choice, affecting that space as well. +200% EN: For each additional space jumped. You may choose to pay +100% EN to affect only the adjacent space, skipping the initial target space (but still paying +200% EN per additional space jumped after that).",
        additionalTarget: "+12.5% EN: When you affect a target with this power, you may choose a new target within half of the power's range and make an attack roll against that target. +12.5% EN: Increase the number of creatures this power can jump to by 1 (base is 1 jump).",
        expanding: "+50% EN: At the end of your turn after the round in which power was used its area of effect increases 1 space in all directions.",
        targetOnly: "-25% EN: When you first use this power and at the beginning of the turn the power was used you can choose one creature within its area of effect to target with the power. The power can only target and affect creatures in this way. You don't need to see a target to make it the target of the power."
    };

    const actionTypeDescriptions = {
        basic: "Basic Action",
        free: "+50% EN: This power uses a free action to activate instead of a basic action.",
        quick: "+25% EN: This power uses a quick action to activate instead of a basic action.",
        long3: "-12.5% EN: This power takes 1 more AP to perform (cannot be added to a quick or free action power).",
        long4: "-12.5% EN: For each additional 1 AP required. This type of power can only be used with this reduced cost if used inside combat and does not linger longer than 1 minute (10 rounds).",
        reaction: "+25% EN: This power uses a basic reaction instead of a basic action."
    };

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
            <div id="partContent-${partIndex}">
                ${generatePartContent(partIndex, powerParts[0])}
            </div>
            <button class="delete-button" onclick="removePowerPart(${partIndex})">Delete</button>
        `;
        document.getElementById("powerPartsContainer").appendChild(powerPartSection);

        updateTotalCosts();
    }

    function generatePartContent(partIndex, part) {
        return `
            <h3>${part.name} <span class="small-text">Energy: <span id="baseEnergy-${partIndex}">${part.baseEnergy}</span></span> <span class="small-text">Building Points: <span id="baseBP-${partIndex}">${part.baseBP}</span></span></h3>
            <p>Part EN: <span id="totalEnergy-${partIndex}">${part.baseEnergy}</span> Part BP: <span id="totalBP-${partIndex}">${part.baseBP}</span></p>
            <p>${part.description}</p>
            
            <div class="option-container">
                ${part.opt1Cost !== 0 || part.opt1Description ? `
                <div class="option-box">
                    <h4>Energy: ${part.opt1Cost >= 0 ? '+' : ''}${part.opt1Cost}</h4>
                    <button onclick="changeOptionLevel(${partIndex}, 'opt1', 1)">+</button>
                    <button onclick="changeOptionLevel(${partIndex}, 'opt1', -1)">-</button>
                    <span>Level: <span id="opt1Level-${partIndex}">0</span></span>
                    <p>${part.opt1Description}</p>
                </div>` : ''}
                
                ${part.opt2Cost !== 0 || part.opt2Description ? `
                <div class="option-box">
                    <h4>Energy: ${part.opt2Cost >= 0 ? '+' : ''}${part.opt2Cost}</h4>
                    <button onclick="changeOptionLevel(${partIndex}, 'opt2', 1)">+</button>
                    <button onclick="changeOptionLevel(${partIndex}, 'opt2', -1)">-</button>
                    <span>Level: <span id="opt2Level-${partIndex}">0</span></span>
                    <p>${part.opt2Description}</p>
                </div>` : ''}

                ${part.opt3Cost !== 0 || part.opt3Description ? `
                <div class="option-box">
                    <h4>Energy: ${part.opt3Cost >= 0 ? '+' : ''}${part.opt3Cost}</h4>
                    <button onclick="changeOptionLevel(${partIndex}, 'opt3', 1)">+</button>
                    <button onclick="changeOptionLevel(${partIndex}, 'opt3', -1)">-</button>
                    <span>Level: <span id="opt3Level-${partIndex}">0</span></span>
                    <p>${part.opt3Description}</p>
                </div>` : ''}
            </div>

            <div class="option-box">
                <h4>Alternate Base Energy: ${part.altBaseEnergy}</h4>
                <button id="altEnergyButton-${partIndex}" class="alt-energy-button" onclick="toggleAltEnergy(${partIndex})">Toggle</button>
                <p>${part.altEnergyDescription}</p>
            </div>

            <div class="linger-container">
                <label><input type="checkbox" id="lingerCheckbox-${partIndex}" onclick="updateTotalCosts()"> Does not linger</label>
            </div>
        `;
    }

    function updateSelectedPart(index, selectedValue) {
        const selectedPart = powerParts[selectedValue];
        selectedPowerParts[index].part = selectedPart;
        selectedPowerParts[index].opt1Level = 0;
        selectedPowerParts[index].opt2Level = 0;
        selectedPowerParts[index].opt3Level = 0;
        selectedPowerParts[index].useAltCost = false;

        const partContent = document.getElementById(`partContent-${index}`);
        partContent.innerHTML = generatePartContent(index, selectedPart);

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
        optionElement.innerHTML = `Energy: ${part.part[energyIncreaseKey] >= 0 ? '+' : ''}${part.part[energyIncreaseKey]}`;

        const descriptionElement = document.querySelector(`#powerPart-${index} .option-box:nth-of-type(${option === 'opt1' ? 1 : option === 'opt2' ? 2 : option === 'opt3' ? 3 : 4}) p`);
        descriptionElement.innerHTML = part.part[`${option}Description`];

        updateTotalCosts();
    }

    function toggleAltEnergy(partIndex) {
        const partData = selectedPowerParts[partIndex];
        partData.useAltCost = !partData.useAltCost;
        const button = document.getElementById(`altEnergyButton-${partIndex}`);
        if (partData.useAltCost) {
            button.classList.add('toggled');
        } else {
            button.classList.remove('toggled');
        }
        updateTotalCosts();
    }

    function changeRange(delta) {
        range = Math.max(0, range + delta);
        const displayRange = range === 0 ? 1 : range * 3;
        document.getElementById('rangeValue').textContent = displayRange;
        document.getElementById('rangeValue').nextSibling.textContent = displayRange > 1 ? ' spaces' : ' space';
        updateTotalCosts();
    }

    function changeArea(delta) {
        area = Math.max(1, area + delta);
        document.getElementById('areaValue').textContent = area;
        document.getElementById('areaValue').nextSibling.textContent = area > 1 ? ' spaces' : ' space';
        updateTotalCosts();
    }

    function changeDuration(delta) {
        duration = Math.max(1, duration + delta);
        document.getElementById('durationValue').textContent = duration;
        document.getElementById('durationValue').nextSibling.textContent = duration > 1 ? ' rounds' : ' round';

        // Disable checkboxes if duration is 1
        const checkboxes = document.querySelectorAll('.checkbox-container input, .linger-container input');
        checkboxes.forEach(checkbox => {
            checkbox.disabled = duration === 1;
            if (duration === 1) {
                checkbox.checked = false;
            }
        });

        updateTotalCosts();
    }

    function removePowerPart(index) {
        selectedPowerParts.splice(index, 1);

        const partElement = document.getElementById(`powerPart-${index}`);
        if (partElement) partElement.remove();

        updateTotalCosts();
    }

    function updateAreaEffect() {
        const areaEffect = document.getElementById('areaEffect').value;
        const description = areaEffectDescriptions[areaEffect];
        document.getElementById('areaEffectDescription').textContent = description;
        updateTotalCosts();
    }

    function changeAreaEffectLevel(delta) {
        areaEffectLevel = Math.max(0, areaEffectLevel + delta);
        document.getElementById('areaEffectLevelValue').textContent = areaEffectLevel;
        updateTotalCosts();
    }

    function updateActionType() {
        const actionType = document.getElementById('actionType').value;
        const reactionChecked = document.getElementById('reactionCheckbox').checked;
        let description = actionTypeDescriptions[actionType];
        if (reactionChecked) {
            description += " " + actionTypeDescriptions.reaction;
        }
        document.getElementById('actionTypeDescription').textContent = description;
        updateTotalCosts();
    }

    function updateTotalCosts() {
        let totalEnergy = 0;
        let totalBP = 0;
        let lingerEnergy = 0;
    
        // Separate power parts by type
        const baseEnergyParts = [];
        const increaseParts = [];
        const decreaseParts = [];
    
        selectedPowerParts.forEach((partData, partIndex) => {
            const part = partData.part;
            if (part.type === "base") {
                baseEnergyParts.push(partData);
            } else if (part.type === "increase") {
                increaseParts.push(partData);
            } else if (part.type === "decrease") {
                decreaseParts.push(partData);
            }
        });
    
        // Calculate base energy parts
        baseEnergyParts.forEach((partData, partIndex) => {
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
    
            // Exclude energy cost from duration increase if "Does not linger" is checked
            const lingerCheckbox = document.getElementById(`lingerCheckbox-${partIndex}`);
            if (lingerCheckbox && !lingerCheckbox.checked) {
                lingerEnergy += partEnergy;
            }
    
            const totalEnergyElement = document.getElementById(`totalEnergy-${partIndex}`);
            const totalBPElement = document.getElementById(`totalBP-${partIndex}`);
            if (totalEnergyElement) totalEnergyElement.textContent = partEnergy;
            if (totalBPElement) totalBPElement.textContent = partBP;
        });
    
        // Apply range cost before any increases or decreases
        const rangeCost = (range) * 0.5;
        totalEnergy += rangeCost;
    
        // Calculate increase parts
        increaseParts.forEach((partData) => {
            const part = partData.part;
            let partEnergy = totalEnergy * part.baseEnergy;
    
            partEnergy += totalEnergy * part.opt1Cost * partData.opt1Level;
            partEnergy += totalEnergy * part.opt2Cost * partData.opt2Level;
    
            totalEnergy += partEnergy;
        });
    
        // Calculate area effect cost
        const areaEffect = document.getElementById('areaEffect').value;
        const areaEffectCost = {
            none: 0,
            sphere: 0.25,
            cylinder: 0.25,
            cone: 0.125,
            line: 0.25,
            object: 2,
            space: 0.25,
            jump: 2,
            additionalTarget: 0.125,
            expanding: 0.5,
            targetOnly: -0.25
        }[areaEffect];
        totalEnergy += areaEffectLevel * areaEffectCost * totalEnergy;
    
        // Calculate action type cost (only increases)
        const actionType = document.getElementById('actionType').value;
        const reactionChecked = document.getElementById('reactionCheckbox').checked;
        const actionTypeCost = {
            basic: 0,
            free: 0.5,
            quick: 0.25,
            long3: -0.125,
            long4: -0.25
        }[actionType];
        if (actionTypeCost > 0) {
            totalEnergy += actionTypeCost * totalEnergy;
        }
        if (reactionChecked) {
            totalEnergy += 0.25 * totalEnergy;
        }
    
        // Calculate decrease parts
        decreaseParts.forEach((partData) => {
            const part = partData.part;
            let partEnergy = totalEnergy * part.baseEnergy;
    
            partEnergy += totalEnergy * part.opt1Cost * partData.opt1Level;
            partEnergy += totalEnergy * part.opt2Cost * partData.opt2Level;
    
            totalEnergy += partEnergy;
        });
    
        // Apply action type cost (only decreases)
        if (actionTypeCost < 0) {
            totalEnergy += actionTypeCost * totalEnergy;
        }
    
        // Apply duration multiplier based on the altered total energy value
        const focusChecked = document.getElementById('focusCheckbox').checked;
        const noHarmChecked = document.getElementById('noHarmCheckbox').checked;
        const endsOnceChecked = document.getElementById('endsOnceCheckbox').checked;
    
        let durationMultiplier = 0.125;
        if (focusChecked) durationMultiplier /= 2;
        if (noHarmChecked) durationMultiplier /= 2;
        if (endsOnceChecked) durationMultiplier /= 2;
    
        const sustainValue = parseInt(document.getElementById('sustainValue').value, 10);
        let sustainReduction = 1 - (0.25 + (sustainValue - 1) * 0.125);
        if (sustainValue === 0) sustainReduction = 1;
    
        totalEnergy += (duration - 1) * durationMultiplier * totalEnergy * sustainReduction;
    
        document.getElementById("totalEnergy").textContent = totalEnergy.toFixed(2);
        document.getElementById("totalBP").textContent = totalBP;
    }

    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("addPowerPartButton").addEventListener("click", addPowerPart);
    });

    // Expose functions to global scope for inline event handlers
    window.updateSelectedPart = updateSelectedPart;
    window.changeOptionLevel = changeOptionLevel;
    window.toggleAltEnergy = toggleAltEnergy;
    window.changeRange = changeRange;
    window.changeArea = changeArea;
    window.changeDuration = changeDuration;
    window.removePowerPart = removePowerPart;
    window.updateTotalCosts = updateTotalCosts;
    window.updateAreaEffect = updateAreaEffect;
    window.changeAreaEffectLevel = changeAreaEffectLevel;
    window.updateActionType = updateActionType;
})();
