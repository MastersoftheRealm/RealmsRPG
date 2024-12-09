import powerPartsData from './powerPartsData.js';
import damageTypeValues from './damageTypesData.js';

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
        space: "+25% EN: Each space directly between you and this power's target is affected for the power's duration. A creature that begins its turn in one of these spaces must roll the relevant defense against your potency or become affected.",
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

        renderPowerParts();
        updateTotalCosts();
    }

    function generatePartContent(partIndex, part) {
        return `
            <h3>${part.name} <span class="small-text">Energy: <span id="baseEnergy-${partIndex}">${part.baseEnergy}</span></span> <span class="small-text">Building Points: <span id="baseBP-${partIndex}">${part.baseBP}</span></span></h3>
            <p>Part EN: <span id="totalEnergy-${partIndex}">${part.baseEnergy}</span> Part BP: <span id="totalBP-${partIndex}">${part.baseBP}</span></p>
            <p>${part.description}</p>
            
            ${part.opt1Cost !== undefined || part.opt1Description ? `
            <div class="option-container">
                ${part.opt1Cost !== undefined || part.opt1Description ? `
                <div class="option-box">
                    <h4>Energy: ${part.opt1Cost >= 0 ? '+' : ''}${part.opt1Cost}</h4>
                    <button onclick="changeOptionLevel(${partIndex}, 'opt1', 1)">+</button>
                    <button onclick="changeOptionLevel(${partIndex}, 'opt1', -1)">-</button>
                    <span>Level: <span id="opt1Level-${partIndex}">${selectedPowerParts[partIndex].opt1Level}</span></span>
                    <p>${part.opt1Description}</p>
                </div>` : ''}
                
                ${part.opt2Cost !== undefined || part.opt2Description ? `
                <div class="option-box">
                    <h4>Energy: ${part.opt2Cost >= 0 ? '+' : ''}${part.opt2Cost}</h4>
                    <button onclick="changeOptionLevel(${partIndex}, 'opt2', 1)">+</button>
                    <button onclick="changeOptionLevel(${partIndex}, 'opt2', -1)">-</button>
                    <span>Level: <span id="opt2Level-${partIndex}">${selectedPowerParts[partIndex].opt2Level}</span></span>
                    <p>${part.opt2Description}</p>
                </div>` : ''}
    
                ${part.opt3Cost !== undefined || part.opt3Description ? `
                <div class="option-box">
                    <h4>Energy: ${part.opt3Cost >= 0 ? '+' : ''}${part.opt3Cost}</h4>
                    <button onclick="changeOptionLevel(${partIndex}, 'opt3', 1)">+</button>
                    <button onclick="changeOptionLevel(${partIndex}, 'opt3', -1)">-</button>
                    <span>Level: <span id="opt3Level-${partIndex}">${selectedPowerParts[partIndex].opt3Level}</span></span>
                    <p>${part.opt3Description}</p>
                </div>` : ''}
            </div>` : ''}
    
            ${part.altBaseEnergy !== undefined || part.altBP !== undefined ? `
            <div class="option-box">
                <h4>Alternate Base Energy: ${part.altBaseEnergy}</h4>
                <button id="altEnergyButton-${partIndex}" class="alt-energy-button" onclick="toggleAltEnergy(${partIndex})">Toggle</button>
                <p>${part.altEnergyDescription}</p>
            </div>` : ''}
    
            <div class="linger-container">
                <label><input type="checkbox" id="lingerCheckbox-${partIndex}" onclick="updateTotalCosts()"> Does Linger</label>
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

        renderPowerParts();
        updateTotalCosts();
    }

    function changeOptionLevel(index, option, delta) {
        const part = selectedPowerParts[index];
        const levelKey = `${option}Level`;
        const energyIncreaseKey = `${option}Cost`;

        part[levelKey] = Math.max(0, part[levelKey] + delta);

        // Update the level indicator in the DOM
        document.getElementById(`${levelKey}-${index}`).textContent = part[levelKey];

        renderPowerParts();
        updateTotalCosts();
    }

    function toggleAltEnergy(partIndex) {
        const partData = selectedPowerParts[partIndex];
        partData.useAltCost = !partData.useAltCost;

        renderPowerParts();
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
        renderPowerParts();
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

    function updateDamageType() {
        updateTotalCosts();
    }

    function calculateDamageEnergyCost() {
        let totalDamageEnergy = 0;

        const dieAmount1 = parseInt(document.getElementById('dieAmount1').value, 10);
        const dieSize1 = parseInt(document.getElementById('dieSize1').value, 10);
        const damageType1 = document.getElementById('damageType1').value;

        if (!isNaN(dieAmount1) && !isNaN(dieSize1) && damageType1 !== "none") {
            const { dieBase: dieBase1, dieIncrease: dieIncrease1 } = damageTypeValues[damageType1];
            totalDamageEnergy += (((dieAmount1 * dieSize1) / 2) - 1) * dieIncrease1 + dieBase1;
        }

        const dieAmount2 = parseInt(document.getElementById('dieAmount2')?.value, 10);
        const dieSize2 = parseInt(document.getElementById('dieSize2')?.value, 10);
        const damageType2 = document.getElementById('damageType2')?.value;

        if (!isNaN(dieAmount2) && !isNaN(dieSize2) && damageType2 !== "none") {
            const { dieBase: dieBase2, dieIncrease: dieIncrease2 } = damageTypeValues[damageType2];
            totalDamageEnergy += (((dieAmount2 * dieSize2) / 2) - 1) * dieIncrease2 + dieBase2;
        }

        return totalDamageEnergy;
    }

    function updateTotalCosts() {
        let sumBaseEnergy = 0;
        let totalBP = 0;
    
        // Separate power parts by type
        const baseEnergyParts = [];
        const increaseParts = [];
        const decreaseParts = [];
        const lingerParts = [];
        const lingerIncreaseParts = [];
        const lingerDecreaseParts = [];
    
        selectedPowerParts.forEach((partData, partIndex) => {
            const part = partData.part;
            if (part.type === "base") {
                baseEnergyParts.push(partData);
                if (document.getElementById(`lingerCheckbox-${partIndex}`)?.checked) {
                    lingerParts.push(partData);
                }
            } else if (part.type === "increase") {
                if (document.getElementById(`lingerCheckbox-${partIndex}`)?.checked) {
                    lingerIncreaseParts.push(partData);
                } 
                increaseParts.push(partData);
            } else if (part.type === "decrease") {
                if (document.getElementById(`lingerCheckbox-${partIndex}`)?.checked) {
                    lingerDecreaseParts.push(partData);
                }
                decreaseParts.push(partData);
            }
        });
    
        // Step 1: Calculate base energy parts
        baseEnergyParts.forEach((partData) => {
            const part = partData.part;
            let partEnergy = partData.useAltCost ? part.altBaseEnergy : part.baseEnergy;
            let partBP = part.baseBP;
            partEnergy += (part.opt1Cost || 0) * partData.opt1Level;
            partEnergy += (part.opt2Cost || 0) * partData.opt2Level;
            partEnergy += (part.opt3Cost || 0) * partData.opt3Level;
            sumBaseEnergy += partEnergy;
            totalBP += partBP;
        });
    
        // Apply range cost before any increases or decreases
        const rangeCost = (range) * 0.5;
        sumBaseEnergy += rangeCost;
    
        // Calculate damage energy cost
        sumBaseEnergy += calculateDamageEnergyCost();
    
        // Step 2: Apply increase parts
        let increasedEnergy = sumBaseEnergy;
        increaseParts.forEach((partData) => {
            const part = partData.part;
            let partEnergy = increasedEnergy * part.baseEnergy;
            partEnergy += increasedEnergy * (part.opt1Cost || 0) * partData.opt1Level;
            partEnergy += increasedEnergy * (part.opt2Cost || 0) * partData.opt2Level;
            partEnergy += increasedEnergy * (part.opt3Cost || 0) * partData.opt3Level;
            increasedEnergy += partEnergy;
        });
    
        // Apply area effect cost
        const areaEffect = document.getElementById('areaEffect').value;
        const areaEffectCost = {
            none: 0,
            sphere: 0.25,
            cylinder: 0.25,
            cone: 0.125,
            line: 0.25,
            space: 0.25,
            additionalTarget: 0.125,
            expanding: 0.5,
            targetOnly: -0.25
        }[areaEffect];
        increasedEnergy *= 1 + (areaEffectLevel * areaEffectCost);
    
        // Apply action type cost (only increases)
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
            increasedEnergy *= 1 + actionTypeCost;
        }
        if (reactionChecked) {
            increasedEnergy *= 1 + 0.25;
        }
    
        // Step 3: Apply decrease parts
        let decreasedEnergy = increasedEnergy;
        decreaseParts.forEach((partData) => {
            const part = partData.part;
            let partEnergy = decreasedEnergy * part.baseEnergy;
            partEnergy += decreasedEnergy * (part.opt1Cost || 0) * partData.opt1Level;
            partEnergy += decreasedEnergy * (part.opt2Cost || 0) * partData.opt2Level;
            partEnergy += decreasedEnergy * (part.opt3Cost || 0) * partData.opt3Level;
            decreasedEnergy += partEnergy;
        });
    
        // Apply action type cost (only decreases)
        if (actionTypeCost < 0) {
            decreasedEnergy *= 1 + actionTypeCost;
        }
    
        // Step 4: Calculate duration energy
        let durationEnergy = calculateDurationEnergy(lingerParts, lingerIncreaseParts, lingerDecreaseParts);
    
        // Final energy calculation
        const finalEnergy = decreasedEnergy + durationEnergy;
    
        document.getElementById("totalEnergy").textContent = finalEnergy.toFixed(2);
        document.getElementById("totalBP").textContent = totalBP;
    
        updatePowerSummary();
    }
    
    function calculateDurationEnergy(lingerParts, lingerIncreaseParts, lingerDecreaseParts) {
        let baseDurationEnergy = 0;

        // Step 1: Calculate base energy parts that linger
        lingerParts.forEach((partData) => {
            const part = partData.part;
            let partEnergy = partData.useAltCost ? part.altBaseEnergy : part.baseEnergy;
            partEnergy += (part.opt1Cost || 0) * partData.opt1Level;
            partEnergy += (part.opt2Cost || 0) * partData.opt2Level;
            partEnergy += (part.opt3Cost || 0) * partData.opt3Level;
            baseDurationEnergy += partEnergy;
        });
    
        const areaLingerCheckbox = document.getElementById('areaLingerCheckbox');
        if (areaLingerCheckbox && areaLingerCheckbox.checked) {
            const areaEffect = document.getElementById('areaEffect').value;
            const areaEffectCost = {
                none: 0,
                sphere: 0.25,
                cylinder: 0.25,
                cone: 0.125,
                line: 0.25,
                space: 0.25,
                additionalTarget: 0.125,
                expanding: 0.5,
                targetOnly: -0.25
            }[areaEffect];
            baseDurationEnergy *= 1 + (areaEffectLevel * areaEffectCost);
        }
    
        // Step 2: Apply increase parts that linger
        let increasedDurationEnergy = baseDurationEnergy;
        lingerIncreaseParts.forEach((partData) => {
            const part = partData.part;
            let partEnergy = increasedDurationEnergy * part.baseEnergy;
            partEnergy += increasedDurationEnergy * (part.opt1Cost || 0) * partData.opt1Level;
            partEnergy += increasedDurationEnergy * (part.opt2Cost || 0) * partData.opt2Level;
            partEnergy += increasedDurationEnergy * (part.opt3Cost || 0) * partData.opt3Level;
            increasedDurationEnergy += partEnergy;
        });
    
        // Step 3: Apply decrease parts that linger
        let decreasedDurationEnergy = increasedDurationEnergy;
        lingerDecreaseParts.forEach((partData) => {
            const part = partData.part;
            let partEnergy = decreasedDurationEnergy * part.baseEnergy;
            partEnergy += decreasedDurationEnergy * (part.opt1Cost || 0) * partData.opt1Level;
            partEnergy += decreasedDurationEnergy * (part.opt2Cost || 0) * partData.opt2Level;
            partEnergy += decreasedDurationEnergy * (part.opt3Cost || 0) * partData.opt3Level;
            decreasedDurationEnergy += partEnergy;
        });
    
        // Step 4: Apply duration multiplier based on the altered total energy value
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
    
        const durationEnergy = (((((duration - 1) * durationMultiplier)*sustainReduction)+1) * decreasedDurationEnergy)-decreasedDurationEnergy;
    
        return durationEnergy;
    }

    function updatePowerSummary() {
        const powerName = document.getElementById('powerName').value;
        const summaryEnergy = document.getElementById('totalEnergy').textContent;
        const summaryBP = document.getElementById('totalBP').textContent;
        const summaryRange = range === 0 ? 1 : range * 3;
        const summaryDuration = duration;
        const actionType = document.getElementById('actionType').value;
        const reactionChecked = document.getElementById('reactionCheckbox').checked;
        const actionTypeText = reactionChecked ? `${capitalize(actionType)} Reaction` : `${capitalize(actionType)} Action`;
        const focusChecked = document.getElementById('focusCheckbox').checked;
        const sustainValue = parseInt(document.getElementById('sustainValue').value, 10);
        const noHarmChecked = document.getElementById('noHarmCheckbox').checked;
        const endsOnceChecked = document.getElementById('endsOnceCheckbox').checked;

        document.getElementById('summaryEnergy').textContent = summaryEnergy;
        document.getElementById('summaryBP').textContent = summaryBP;
        document.getElementById('summaryRange').textContent = `${summaryRange} ${summaryRange > 1 ? 'Spaces' : 'Space'}`;
        document.getElementById('summaryDuration').textContent = `${summaryDuration} ${summaryDuration > 1 ? 'Rounds' : 'Round'}`;
        document.getElementById('summaryActionType').textContent = actionTypeText;

        document.getElementById('summaryFocus').style.display = focusChecked ? 'block' : 'none';
        document.getElementById('summarySustain').style.display = sustainValue > 0 ? 'block' : 'none';
        document.getElementById('summarySustainValue').textContent = sustainValue;

        const dieAmount1 = parseInt(document.getElementById('dieAmount1').value, 10);
        const dieSize1 = parseInt(document.getElementById('dieSize1').value, 10);
        const damageType1 = document.getElementById('damageType1').value;
        const dieAmount2 = parseInt(document.getElementById('dieAmount2')?.value, 10);
        const dieSize2 = parseInt(document.getElementById('dieSize2')?.value, 10);
        const damageType2 = document.getElementById('damageType2')?.value;

        let damageText = '';
        if (!isNaN(dieAmount1) && !isNaN(dieSize1) && damageType1 !== 'none') {
            damageText += `${dieAmount1}d${dieSize1} ${damageType1}`;
        }
        if (!isNaN(dieAmount2) && !isNaN(dieSize2) && damageType2 !== 'none') {
            damageText += `, ${dieAmount2}d${dieSize2} ${damageType2}`;
        }
        document.getElementById('summaryDamage').textContent = damageText;
        document.getElementById('summaryDamage').style.display = damageText ? 'block' : 'none';

        // Update the summary parts
        const summaryPartsContainer = document.getElementById('summaryParts');
        summaryPartsContainer.innerHTML = '';
        selectedPowerParts.forEach((partData, partIndex) => {
            const part = partData.part;
            const partElement = document.createElement('div');
            partElement.innerHTML = `
                <h4>${part.name}</h4>
                <p>Energy: ${part.baseEnergy}</p>
                <p>Building Points: ${part.baseBP}</p>
                <p>${part.description}</p>
                ${part.opt1Description ? `<p>Option 1: ${part.opt1Description} (Level: ${partData.opt1Level})</p>` : ''}
                ${part.opt2Description ? `<p>Option 2: ${part.opt2Description} (Level: ${partData.opt2Level})</p>` : ''}
                ${part.opt3Description ? `<p>Option 3: ${part.opt3Description} (Level: ${partData.opt3Level})</p>` : ''}
                ${part.altEnergyDescription ? `<p>Alternate Energy: ${part.altEnergyDescription}</p>` : ''}
            `;
            summaryPartsContainer.appendChild(partElement);
        });
    }

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("addPowerPartButton").addEventListener("click", addPowerPart);
        document.getElementById('dieAmount1').addEventListener('input', updateTotalCosts);
        document.getElementById('dieSize1').addEventListener('change', updateTotalCosts);
        document.getElementById('damageType1').addEventListener('change', updateDamageType);
    });

    function addDamageRow() {
        const additionalDamageRow = document.getElementById('additionalDamageRow');
        additionalDamageRow.innerHTML = `
            <h4>Damage: 
                <input type="number" id="dieAmount2" min="1" max="99" value="" placeholder="Amount"> d 
                <select id="dieSize2">
                    <option value="" selected disabled>Size</option>
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                    <option value="8">8</option>
                    <option value="10">10</option>
                    <option value="12">12</option>
                </select>
                <select id="damageType2" onchange="updateDamageType()">
                    <option value="none" selected>No Damage</option>
                    <option value="magic">Magic</option>
                    <option value="fire">Fire</option>
                    <option value="ice">Ice</option>
                    <option value="lightning">Lightning</option>
                    <option value="spiritual">Spiritual</option>
                    <option value="sonic">Sonic</option>
                    <option value="poison">Poison</option>
                    <option value="necrotic">Necrotic</option>
                    <option value="acid">Acid</option>
                    <option value="psychic">Psychic</option>
                    <option value="blunt">Blunt</option>
                    <option value="piercing">Piercing</option>
                    <option value="slashing">Slashing</option>
                </select>
                <button id="removeDamageRowButton" class="medium-button red-button" onclick="removeDamageRow()">-</button>
            </h4>
        `;
        document.getElementById('addDamageRowButton').style.display = 'none';
    }

    function removeDamageRow() {
        const additionalDamageRow = document.getElementById('additionalDamageRow');
        additionalDamageRow.innerHTML = '';
        document.getElementById('addDamageRowButton').style.display = 'inline-block';
    }

    function renderPowerParts() {
        const powerPartsContainer = document.getElementById("powerPartsContainer");
        powerPartsContainer.innerHTML = "";
    
        selectedPowerParts.forEach((partData, partIndex) => {
            const powerPartSection = document.createElement("div");
            powerPartSection.id = `powerPart-${partIndex}`;
            powerPartSection.classList.add("power-part-section");
            powerPartSection.innerHTML = `
                <select onchange="updateSelectedPart(${partIndex}, this.value)">
                    ${powerParts.map((part, index) => `<option value="${index}" ${partData.part === part ? 'selected' : ''}>${part.name}</option>`).join('')}
                </select>
                <div id="partContent-${partIndex}">
                    ${generatePartContent(partIndex, partData.part)}
                </div>
                <button class="delete-button" onclick="removePowerPart(${partIndex})">Delete</button>
            `;
            powerPartsContainer.appendChild(powerPartSection);
        });
    }

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
    window.updateDamageType = updateDamageType;
    window.addDamageRow = addDamageRow;
    window.removeDamageRow = removeDamageRow;

    document.getElementById('powerName').addEventListener('input', updatePowerSummary);
    document.getElementById('focusCheckbox').addEventListener('change', updatePowerSummary);
    document.getElementById('sustainValue').addEventListener('change', updatePowerSummary);
    document.getElementById('noHarmCheckbox').addEventListener('change', updatePowerSummary);
    document.getElementById('endsOnceCheckbox').addEventListener('change', updatePowerSummary);
    document.getElementById('actionType').addEventListener('change', updatePowerSummary);
    document.getElementById('reactionCheckbox').addEventListener('change', updatePowerSummary);
    document.getElementById('dieAmount1').addEventListener('input', updatePowerSummary);
    document.getElementById('dieSize1').addEventListener('change', updatePowerSummary);
    document.getElementById('damageType1').addEventListener('change', updatePowerSummary);
    document.getElementById('dieAmount2')?.addEventListener('input', updatePowerSummary);
    document.getElementById('dieSize2')?.addEventListener('change', updatePowerSummary);
    document.getElementById('damageType2')?.addEventListener('change', updatePowerSummary);
})();
