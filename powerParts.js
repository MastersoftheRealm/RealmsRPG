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
            <h3>${powerParts[0].name}</h3>
            <p>${powerParts[0].description}</p>
            <select onchange="updateSelectedPart(${partIndex}, this.value)">
                ${powerParts.map((part, index) => `<option value="${index}">${part.name}</option>`).join('')}
            </select>
        `;

        document.getElementById("powerPartsContainer").appendChild(powerPartSection);
        updateTotalCosts();
    }

    function updateSelectedPart(index, value) {
        selectedPowerParts[index].part = powerParts[value];
        updateTotalCosts();
    }

    function updateTotalCosts() {
        let totalEnergy = 0;
        let totalBP = 0;

        selectedPowerParts.forEach(part => {
            totalEnergy += part.useAltCost ? part.part.altBaseEnergy : part.part.baseEnergy;
            totalBP += part.part.baseBP;
        });

        document.getElementById("totalEnergy").innerText = totalEnergy;
        document.getElementById("totalBP").innerText = totalBP;
    }

    document.querySelector("button").addEventListener("click", addPowerPart);
})();
