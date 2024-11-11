const powerPartsData = [
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
        useAltCost: false,
        type: "base"
    },
    {
        name: "Increase Cost Power Part",
        description: "+50% EN: Target must overcome your power's effect(s) one additional time in order to avoid the effect(s). If the power lingers then the attempts to overcome need not be consecutive.",
        baseBP: 1,
        baseEnergy: 0.5,
        opt1Cost: 0.25,
        opt1Description: "+25% EN for each additional overcome required.",
        BPIncreaseOpt1: 0,
        opt2Cost: 0,
        opt2Description: "Placeholder for a second option description.",
        BPIncreaseOpt2: 0,
        type: "increase"
    },
    {
        name: "Decrease Cost Power Part",
        description: "-25% EN: Reduce the energy cost of the power.",
        baseBP: 1,
        baseEnergy: -0.25,
        opt1Cost: -0.125,
        opt1Description: "-12.5% EN for each additional reduction.",
        BPIncreaseOpt1: 0,
        opt2Cost: 0,
        opt2Description: "Placeholder for a second option description.",
        BPIncreaseOpt2: 0,
        type: "decrease"
    },
    // Increase Parts
    {
        name: "Use Power Again on Overcome",
        description: "1/2 EN: When the target of this power overcomes it or dies before the duration of the power ends you may use a quick action or reaction to choose a new target for this power, targeting them as normal. The power must have a duration longer than 1 round. The overcome cannot be the initial overcome when the power was used, it must be a later overcome such as a target rolling a defense against your potency on its turn.",
        baseBP: 1,
        baseEnergy: 0.5,
        type: "increase"
    },
    {
        name: "No Sightline Required",
        description: "1/4 EN: Your power can target a point within range without needing sight or perception of that area. Attacks against obscured creatures ignore the obscurity if it was due to low vision alone. Example: Darkness obscures an area lightly giving -1 to your power overcome roll. This would be ignored. If this instead was a wall completely obscuring the target, you couldn't target the creature because it's a physical and visual obscurity.",
        baseBP: 1,
        baseEnergy: 0.25,
        type: "increase"
    },
    {
        name: "Multiple Overcome(s) Required",
        description: "1/2 EN (of all parts being overcome): Target must overcome your power's effect(s) one additional time in order to avoid the effect(s). If the power lingers then the attempts to overcome need not be consecutive. +1/4 EN for each additional overcome required.",
        baseBP: 1,
        baseEnergy: 0.5,
        opt1Cost: 0.25,
        opt1Description: "+25% EN for each additional overcome required.",
        BPIncreaseOpt1: 0,
        type: "increase"
    },
    {
        name: "Dispell Immune",
        description: "1/2 EN: Power cannot be nullified, absorbed, dispelled, or reduced in any other way than deflecting or reflecting or through a power contest.",
        baseBP: 1,
        baseEnergy: 0.5,
        type: "increase"
    },
    {
        name: "Password",
        description: "6 EN: Set a specified password that, when spoken, either activates a power or causes a creature who spoke the password to either be unaffected or affected by the power. Power must have a duration longer than 1 round.",
        baseBP: 1,
        baseEnergy: 6,
        type: "base"
    },
    {
        name: "Specified Exceptions",
        description: "2 EN: When you use this power you may specify a creature or objects who are either immune to the power's effects, or are the only creature and/or objects which can be affected by the effect. +2 EN for each additional target you can specify.",
        baseBP: 1,
        baseEnergy: 2,
        opt1Cost: 2,
        opt1Description: "+2 EN for each additional target you can specify.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Still Affects on Overcome",
        description: "1/4 EN: When this power would be overcome as to not affect a target, it can still apply one turn of the effect, but deal no damage (If any). This requires the power to have a duration longer than one round.",
        baseBP: 1,
        baseEnergy: 0.25,
        type: "increase"
    },
    {
        name: "Decrease Multiple Action Penalty",
        description: "2 EN: Reduce the multiple attack penalty of the affected creature by 1. +2 EN: Decrease the penalty by another 1.",
        baseBP: 1,
        baseEnergy: 2,
        opt1Cost: 2,
        opt1Description: "+2 EN: Decrease the penalty by another 1.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Trigger on Condition",
        description: "1/4 EN: Make the power activate upon certain conditions (e.g., hitting with an attack, taking damage, falling below 0 HP). Upon activation, it casts as if you were casting it normally. This does not count as a reaction. Triggered powers cannot have the 'long cast' part. A creature can only have 1 trigger power affecting them at a time. This trigger has a duration of 1 hour ending after this time or when it is used. +1/2 EN instead to make it 1 day. Double EN to make it 10 days.",
        baseBP: 1,
        baseEnergy: 0.25,
        opt1Cost: 0.5,
        opt1Description: "+1/2 EN to make it 1 day.",
        BPIncreaseOpt1: 0,
        opt2Cost: 1,
        opt2Description: "Double EN to make it 10 days.",
        BPIncreaseOpt2: 0,
        type: "increase"
    },
    {
        name: "Specialized",
        description: "1/8 EN: Part or all of the power causes either advantage on attacks or disadvantage on saving throws based on criteria like creature type or species (choose one).",
        baseBP: 1,
        baseEnergy: 0.125,
        type: "increase"
    },
    {
        name: "Alternate Targeted Defense",
        description: "1/4 EN: Choose a defense your power targets and change it to target an alternative defense instead. This defense must make sense for how the power works and function in a way that makes sense such as a tsunami power targeting might instead of reflex as an area of effect blunt damage power.",
        baseBP: 1,
        baseEnergy: 0.25,
        type: "increase"
    },
    {
        name: "Delayed Effect",
        description: "1/4 EN: When you use this power its effect doesn't immediately go off and it doesn't require you to overcome any defenses. You may use a free reaction at any time to cause the power to activate. For each round the power doesn't activate you may add an additional effect to the power, or increase an existing effect on the power, equal to 1/8 of this power's energy. This power and its effects cannot have a duration longer than 1 minute. When the power ends if it has not been activated it automatically activates then ends.",
        baseBP: 1,
        baseEnergy: 0.25,
        opt1Cost: 0.125,
        opt1Description: "For each round the power doesn't activate you may add an additional effect to the power, or increase an existing effect on the power, equal to 1/8 of this power's energy.",
        BPIncreaseOpt1: 0,
        type: "increase"
    },

    // Decrease Parts
    {
        name: "Requires Materials",
        description: "-1/8 EN: Power requires materials to perform. You must use materials with a gold value equal to 2 times the energy cost of the power in order to perform. -1/8 EN: For each additional +1 to this multiplier for required gold cost to a maximum decrease total of -3/4 EN from this part (equating to a total multiplier of 7 times energy cost in gold requirement).",
        baseBP: 1,
        baseEnergy: -0.125,
        opt1Cost: -0.125,
        opt1Description: "-1/8 EN: For each additional +1 to this multiplier for required gold cost.",
        BPIncreaseOpt1: 0,
        type: "decrease"
    },
    {
        name: "Ends on Effect/Damage Threshold",
        description: "-1/4 EN: The power ends immediately upon dealing damage equal to 3/4 its maximum damage capability (if one round) or 1 1/2 of its maximum damage capability (if it lasts more than one round). Alternatively power ends when it has inflicted a condition for 3/4 of its duration without the target overcoming it.",
        baseBP: 1,
        baseEnergy: -0.25,
        type: "decrease"
    },
    {
        name: "Deadly Contingency",
        description: "-1/2 EN: You may choose to end the power using a quick action on your turn, but if the power is overcome or ended in any other way you enter the dying condition with -1 Hit Point.",
        baseBP: 1,
        baseEnergy: -0.5,
        type: "decrease"
    },
    {
        name: "Long Rite",
        description: "-1/2 EN: You spend 1 hour to use this power and the total EN cost is no more than ¼ of your maximum EN. It causes no damage or healing. Its function is to locate, identify, summon, or traverse something, communicate, or seek/obtain information. If summoning, the creature summoned is at most ⅛ of your level.",
        baseBP: 1,
        baseEnergy: -0.5,
        type: "decrease"
    },
    {
        name: "Reverse Effects",
        description: "-X EN: If your power benefits yourself or an ally, you can add a negative effect for you or an ally to reduce the power's cost by an amount equal to ½ the energy cost of the negative part. The negative effect cannot be nullified by you or an ally.",
        baseBP: 1,
        baseEnergy: 0,
        opt1Cost: -0.5,
        opt1Description: "-0.5 EN Per 1 EN used on the negative effect.",
        BPIncreaseOpt1: 0,
        type: "decrease"
    },
    {
        name: "Stipulation",
        description: "-1/8 EN: Part or all of a power affects only specific targets based on creature type, elemental affinity, species, or other traits. Alternatively, the power may only affect creatures under specific conditions (e.g., being grappled, dying, being terminal, etc). +0.5 EN to add another acceptable stipulation in addition to the first (an additional creature type, or condition needed.) I.e. Undead or Constructs, grappled or immobile, etc.",
        baseBP: 1,
        baseEnergy: -0.125,
        opt1Cost: 0.5,
        opt1Description: "+0.5 EN to add another acceptable stipulation in addition to the first.",
        BPIncreaseOpt1: 0,
        type: "decrease"
    },
    {
        name: "Not Activated until Target Moves",
        description: "-1/4 EN: Power's effects do not activate unless the target moves. If they remain still until the power's duration ends, the power has no effect. Only reduce the cost based on parts that deal damage or effects, not additional parts.",
        baseBP: 1,
        baseEnergy: -0.25,
        type: "decrease"
    },
    {
        name: "One Round Adaptation",
        description: "-1/4 EN: If the power meets these criteria, its cost is reduced by ¼: Lasts only 1 round. Only applies adaptation effects (other than heal or power point regain). Is not over 10 EN in cost (before reductions from feats).",
        baseBP: 1,
        baseEnergy: -0.25,
        type: "decrease"
    },
    {
        name: "Targets Additional Defense",
        description: "-1/4 EN: Target may roll your choice of defense against your potency. On success, they are unaffected. If the target is an ally it must make this roll against your default potency (ie your potency without any bonuses or penalties).",
        baseBP: 1,
        baseEnergy: -0.25,
        type: "decrease"
    },
    {
        name: "Proximity Requirement",
        description: "-1/8 EN: You must remain within a certain range of the target of this power. If you either target is ever beyond this range the power ends. The range is equal to one half of the range of this power. Must be added to power that targets another creature and has a duration longer than 1 round.",
        baseBP: 1,
        baseEnergy: -0.125,
        type: "decrease"
    },
    {
        name: "Merged Potency",
        description: "-1/8 EN: If power targets multiple defenses with lingering effects, you may combine those into one targeted defense that makes sense, causing both effects to end together once overcome. (Such as a wrap of necrotic cords targeting fortitude and might, combining these to just might for overcoming the entire lingering effect, or a charm power that also deals psychic damage targeting resolve alone instead of mental fortitude and resolve).",
        baseBP: 1,
        baseEnergy: -0.125,
        type: "decrease"
    },

    // Base Parts
    {
        name: "Wish",
        description: "Reduce the cost of a power to 90 EN as long as its total cost is under 200 EN. You gain 2 levels of exhaustion that cannot be recovered in any way other than the base exhaustion rules for each time you use this power (after the first time) each full recovery.",
        baseBP: 1,
        baseEnergy: 90,
        type: "base"
    },
    {
        name: "Choice",
        description: "You may separate portions of this power and upon using the power choose which of these portions of the power to use. You pay the energy cost to use this power equal to the portion that costs the most energy. Example: You have a power that has a range of 6 spaces, causes blindness, and deals your choice of 1d10 fire or 1d8 necrotic damage. The power parts for range and blindness have a total cost together that you add to the more expensive of the two damage options, either damage option you choose the power still has the range and blinding power parts. Increase this power part by the amount of energy each choice that isn't the most expensive would cost.",
        baseBP: 0,
        baseEnergy: 0,
        type: "base"
    },
    {
        name: "Immune to Effect on Overcome",
        description: "-1/4 EN: When a target overcomes any part of this power, that part of the power can no longer target them. Example: You cause a target to take 1d4 fire damage when you meet or beat its evasion with an attack roll, then the target rolls Reflex against your potency or begins burning taking 1d4 fire damage at the end of each turn. If the target's evasion was overcome but they overcame the Reflex roll, they would take the initial damage and not the persistent damage. If you targeted the creature with this power again they wouldn't have to roll reflex, and would treat that part of the power as if it wasn't there.",
        baseBP: 1,
        baseEnergy: -0.25,
        type: "decrease"
    },
    {
        name: "Rite",
        description: "1 BP: You may use a power for free if you spend 10 minutes casting it and it meets these criteria: The total EN cost is no more than ¼ of your maximum EN. It causes no damage or healing. Its function is to locate, identify, summon, or traverse something, communicate, or seek/obtain information. If summoning, the creature summoned is at most ⅛ of your level. You can only have one summon this way.",
        baseBP: 0,
        baseEnergy: 0,
        type: "base"
    },
    {
        name: "Split Power Parts into Groups",
        description: "Group of Power Parts: You may treat part of a power as a separate power to apply unique stipulations (e.g., only part of a power lingers). Calculate each power individually, then combine the costs for the total EN cost.",
        baseBP: 0,
        baseEnergy: 0,
        type: "base"
    },
    {
        name: "Different Effects Each Round",
        description: "X EN: Separate this power into different parts that each take effect on a set round of the power's duration. Only pay the lingering cost and power energy cost of the most expensive round effect/part of this power. When creating a power using this part, only pay the BP cost for the round with the highest BP cost, not for each option.",
        baseBP: 0,
        baseEnergy: 0,
        type: "base"
    },
    {
        name: "Guided",
        description: "Ignore's the effects of one level of obscurity when targeting a creature with this power.",
        baseBP: 1,
        baseEnergy: 2,
        opt1Cost: 2,
        opt1Description: "Ignore an additional level of obscurity.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Invisible Power",
        description: "Power is invisible, the location of its effect cannot be seen, nor can its path of travel and so on.",
        baseBP: 1,
        baseEnergy: 4,
        type: "base"
    },
    {
        name: "Subtle Power Use",
        description: "Use the power undetected; creatures cannot perceive you are using a power or are the one who used the power if it was already used. Creatures can roll discernment against your potency to attempt to perceive you as the power user.",
        baseBP: 1,
        baseEnergy: 5,
        type: "base"
    },
    {
        name: "Cause to Lose Focus",
        description: "Target loses focus. Targets any defense of your choice other than evasion that’s already part of the power, otherwise targets mental fortitude or resolve.",
        baseBP: 1,
        baseEnergy: 3,
        type: "base"
    },
    {
        name: "Dousing",
        description: "Power douses exposed flame in the area that aren't an active power (this can still be used to counter fire powers).",
        baseBP: 1,
        baseEnergy: 2,
        type: "base"
    },
    {
        name: "Flammable",
        description: "The area or creature your power affects is flammable while the power affects them. If touched by fire, the area or creature ignites, taking 1d4 fire damage each turn until an interaction is taken to put a target or 1 space of fire out.",
        baseBP: 1,
        baseEnergy: 2,
        type: "base"
    },
    {
        name: "Relocate Power",
        description: "As a basic action, you may move this power to a new location within half its range, without affecting any creatures or objects along the path.",
        baseBP: 1,
        baseEnergy: 2,
        opt1Cost: 2,
        opt1Description: "Use a quick action instead.",
        BPIncreaseOpt1: 0,
        opt2Cost: 4,
        opt2Description: "Use a free action instead.",
        BPIncreaseOpt2: 0,
        altBaseEnergy: 4,
        altEnergyDescription: "Affect all creatures and objects on the path to the new location.",
        altBP: 1,
        useAltCost: true,
        type: "base"
    },
    {
        name: "Attack / Potency Increase",
        description: "+12.5% Increase the attack roll or potency of this power by +1.",
        baseBP: 1,
        baseEnergy: 0.125,
        opt1Cost: 0.125,
        opt1Description: "+1 for each additional +1, up to a maximum increase of +5.",
        BPIncreaseOpt1: 0,
        type: "increase"
    },
    {
        name: "Longterm-Linger",
        description: "Add this to a power that already lasts one minute (10 rounds) either by itself or using the linger power part.",
        baseBP: 1,
        baseEnergy: 0.125,
        opt1Cost: 0.125,  // +12.5% EN for each additional minute
        opt1Description: "Additional minute duration.",
        opt2Cost: 0.5,    // +50% EN for each additional hour
        opt2Description: "Additional hour duration.",
        opt3Cost: 4,      // +400% EN for each additional day
        opt3Description: "Additional day duration.",
        BPIncreaseOpt1: 0,
        BPIncreaseOpt2: 0,
        BPIncreaseOpt3: 0,
        altBaseEnergy: 0,
        altEnergyDescription: "If using another option other than minute.",
        altBP: 0,
        useAltCost: true,
        type: "increase"
    },
    {
        name: "Long-Linger On Surface",
        description: "Your power is infused onto a surface (as an image, rune, writing, etc.). Activate as a quick reaction or allow it to activate automatically when a trigger condition is met (e.g., a creature touching or occupying the same space as the rune). Pay the EN cost upon use, not activation. Runes persist until dispelled or activated.",
        baseBP: 1,
        baseEnergy: 6,
        type: "base"
    },
    {
        name: "Add Weapon",
        description: "Use a weapon in conjunction with the power, granting its range and properties. Attack with the weapon as part of using the power, using the weapon's attack roll ability. Choose between power attack bonus or martial attack bonus for damage.",
        baseBP: 1,
        baseEnergy: 0.75,
        type: "base"
    },
    {
        name: "Destruction",
        description: "Damage dealt by the power to objects, walls, ceilings, etc., is doubled.",
        baseBP: 1,
        baseEnergy: 2,
        opt1Cost: 1,  // +1 BP to triple damage dealt to objects
        opt1Description: "Triple damage to objects, walls, etc.",
        BPIncreaseOpt1: 1,
        type: "base"
    },
    {
        name: "Randomize",
        description: "Roll a chosen even-sided die (1d2-1d100) to determine power effects. +1 EN for each positive outcome, -1 EN for each negative outcome. Pay BP cost only for the result with the highest BP cost, not for each option.",
        baseBP: 1,
        baseEnergy: "variable",
        type: "base"
    },
    {
        name: "Half-Damage on Fail",
        description: "When this power misses or is overcome, it still deals half damage.",
        baseBP: 1,
        baseEnergy: 0.5,  // +50% EN
        type: "increase"
    },
    {
        name: "Choose Affected Targets",
        description: "If the power affects multiple creatures, you may choose to exclude some or all of them.",
        baseBP: 1,
        baseEnergy: 0.125,  // +12.5% EN
        type: "increase"
    },
    {
        name: "Activate on Weapon Hit",
        description: "Use this power as part of a weapon attack, automatically applying it to the target on hit.",
        baseBP: 1,
        baseEnergy: 0.25,  // +25% EN
        type: "increase"
    },
    {
        name: "Pierce Targets on Path",
        description: "Each object occupying a space between you and the power's target takes 1d2 magic damage.",
        baseBP: 1,
        baseEnergy: 2,
        opt1Cost: 1,  // +100% EN for each additional 1d2 of damage
        opt1Description: "Additional 1d2 damage per object.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Jump to Adjacent Space",
        description: "Power jumps from the location hit to an adjacent space, affecting that space. Optionally, pay 1 EN to affect only the adjacent space, skipping the initial target space.",
        baseBP: 1,
        baseEnergy: 2,
        opt1Cost: 2,  // +200% EN for each additional space jumped
        opt1Description: "Additional space jumped.",
        BPIncreaseOpt1: 0,
        altBaseEnergy: 1,  // +100% EN to affect only adjacent space and skip initial target
        altEnergyDescription: "Affect only adjacent space, skipping initial target.",
        useAltCost: false,
        altBP: 0,
        type: "base"
    },
    {
        name: "Add Multiple Targets",
        description: "Target an additional creature within range. Make one attack and damage roll, applying it to both targets and splitting the total damage between them.",
        baseBP: 1,
        baseEnergy: 1,
        opt1Cost: 1,  // +100% EN for each additional target
        opt1Description: "Additional target within range.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Alternate Targeted Defense",
        description: "Choose a defense your power targets and change it to target an alternative defense that makes sense for the power’s effect (e.g., targeting might instead of reflex for a tsunami power).",
        baseBP: 1,
        baseEnergy: 0.25,  // +25% EN
        type: "increase"
    },
    {
        name: "Different Effects Each Round",
        description: "Separate this power into different parts, each taking effect on a specified round of the power's duration. Only pay the energy and lingering costs of the most expensive round effect.",
        baseBP: 1,
        baseEnergy: "variable",
        type: "base"
    },
    {
        name: "Delayed Effect",
        description: "When used, the power's effect does not activate immediately. You may use a free reaction to cause it to activate. For each round the power doesn't activate, add or increase an effect equal to 12.5% of the power's energy. This power cannot last longer than 1 minute; it automatically activates at the end of its duration if not triggered.",
        baseBP: 1,
        baseEnergy: 0.25,  // +25% EN for initial delayed effect
        opt1Cost: 0.125,   // +12.5% EN per round delay to add or increase an effect
        opt1Description: "Additional effect or increase an existing effect for each round of delay.",
        BPIncreaseOpt1: 0,
        type: "increase"
    },
    {
        name: "Interaction",
        description: "You take the interact action as part of this power. If this is the only power part that is not a general part or power mechanic, it can be taken as a free action.",
        baseBP: 1,
        baseEnergy: 3,
        type: "base"
    },
    {
        name: "Ability Roll",
        description: "You take the ability roll action as part of this power. If this is the only power part that is not a general part or power mechanic, it can be taken as a free action.",
        baseBP: 1,
        baseEnergy: 3,
        type: "base"
    },
    {
        name: "Evade",
        description: "You take the evade action as part of this power. +6 EN for each additional time you take the evade action as part of this power up to 4 times. If this is the only power part that is not a general part or power mechanic it can be taken as a free action.",
        baseBP: 0,
        baseEnergy: 6,
        opt1Cost: 6,
        opt1Description: "Add another evade action, up to 4 times. Each additional evade action costs +6 EN.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Brace",
        description: "You take the brace action as part of this power. +6 EN for each additional time you take the brace action as part of this power up to 4 times. If this is the only power part that is not a general part or power mechanic it can be taken as a free action.",
        baseBP: 0,
        baseEnergy: 6,
        opt1Cost: 6,
        opt1Description: "Add another brace action, up to 4 times. Each additional brace action costs +6 EN.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Focus (Action)",
        description: "You take the focus action as part of this power. +6 EN for each additional time you take the focus action as part of this power up to 4 times. If this is the only power part that is not a general part or power mechanic it can be taken as a free action.",
        baseBP: 0,
        baseEnergy: 6,
        opt1Cost: 6,
        opt1Description: "Add another focus action, up to 4 times. Each additional focus action costs +6 EN.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Search/Detect (Action)",
        description: "You take the search or detect action as part of this power. If this is the only power part that is not a general part or power mechanic it can be taken as a free action or reaction.",
        baseBP: 0,
        baseEnergy: 6,
        opt1Cost: 0,
        opt1Description: "No additional energy cost unless used multiple times in combination with other parts.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Stealth/Hide (Action)",
        description: "You take the stealth or hide action as part of this power. +9 EN to sustain this action on future turns without any action points for the duration of the power. If this is the only power part that is not a general part or power mechanic it can be taken as a free action.",
        baseBP: 0,
        baseEnergy: 12,
        opt1Cost: 9,
        opt1Description: "Sustain the stealth or hide action without any action points for +9 EN per turn.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Combination Attack",
        description: "You take the combination attack reaction as part of this power. If this is the only power part that is not a general part or power mechanic it can be taken as a free reaction.",
        baseBP: 0,
        baseEnergy: 6,
        opt1Cost: 0,
        opt1Description: "No additional energy cost unless used multiple times in combination with other parts.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Help (Reaction)",
        description: "You take the help reaction as part of this power. If this is the only power part that is not a general part or power mechanic it can be taken as a free reaction.",
        baseBP: 0,
        baseEnergy: 6,
        opt1Cost: 0,
        opt1Description: "No additional energy cost unless used multiple times in combination with other parts.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Defend",
        description: "You take the defend reaction as part of this power. If this is the only power part that is not a general part or power mechanic it can be taken as a free reaction.",
        baseBP: 0,
        baseEnergy: 6,
        opt1Cost: 0,
        opt1Description: "No additional energy cost unless used multiple times in combination with other parts.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Outer Illusion",
        description: "Outer illusions make the outside world seem different in some way (e.g., creating the appearance of a chest, person, animal, tree, etc.). An outer illusion is an inanimate illusion occupying a single target space and cannot target a creature. Adding size, sound, and movement can create more diverse illusions. If a creature has reason to suspect it is an illusion, they may roll Discernment against your potency, and on success, they learn it is an illusion. The illusion is dispelled if disturbed physically. Outer Illusion lasts 10 minutes. 2 EN for every additional 5 minutes. +1 EN for each additional space the illusion affects. +1 EN & 1 BP to add sound to the illusion. +1 EN & 1 BP to add in-place movement or animate the illusion. +2 EN & 1 BP to add both sound and animation/in-place movement.",
        baseBP: 0,
        baseEnergy: 5,
        opt2Cost: 1,
        opt2Description: "Add sound to the illusion. Costs +1 EN & 1 BP.",
        BPIncreaseOpt2: 1,
        opt3Cost: 1,
        opt3Description: "Add in-place movement or animate the illusion. Costs +1 EN & 1 BP.",
        BPIncreaseOpt3: 1,
        type: "base"
    },
    {
        name: "Massive Outer Illusion",
        description: "Outer illusions make the outside world seem different in some way (e.g., creating the appearance of a chest, person, animal, tree, etc.). An outer illusion is an inanimate illusion occupying a single target space and cannot target a creature. Adding size, sound, and movement can create more diverse illusions. If a creature has reason to suspect it is an illusion, they may roll Discernment against your potency, and on success, they learn it is an illusion. The illusion is dispelled if disturbed physically. The size of this illusion is equal to the size of the power's effect. Outer Illusion lasts 10 minutes. 2 EN for every additional 5 minutes. +1 EN for each additional space the illusion affects. +1 EN & 1 BP to add sound to the illusion. +1 EN & 1 BP to add in-place movement or animate the illusion. +2 EN & 1 BP to add both sound and animation/in-place movement.",
        baseBP: 0,
        baseEnergy: 15,
        opt2Cost: 1,
        opt2Description: "Add sound to the illusion. Costs +1 EN & 1 BP.",
        BPIncreaseOpt2: 1,
        opt3Cost: 1,
        opt3Description: "Add in-place movement or animate the illusion. Costs +1 EN & 1 BP.",
        BPIncreaseOpt3: 1,
        type: "base"
    },
    {
        name: "Inner Illusion",
        description: "This power targets a creature's mental fortitude when first used against a target creature. Inner illusions make part of the world seem different in some way (e.g., creating the appearance of a chest, person, animal, tree, etc.) to the targeted individual. You may add other power parts to this power at ½ their energy cost to be part of the illusion. Any parts added this way target mental fortitude instead of their normal defense. Damage added in this way is considered psychic, but the damage type can still be affected by a target's resistances and vulnerabilities, excluding armor. An inner illusion is an inanimate illusion occupying a single target space and is only visible to the target creature. Adding size, sound, and movement can create more diverse illusions. If a creature has reason to suspect it is an illusion, they may roll Discernment against your potency, and on success, they learn it is an illusion. The illusion is dispelled if disturbed physically. Adding other parts incurs +1 EN for each additional space the illusion affects. +1 EN & 1 BP to add sound to the illusion. +1 EN & 1 BP to add in-place movement or animate the illusion. +2 EN & 1 BP to add both sound and animation/in-place movement. +1 EN for each additional space the illusion occupies.",
        baseBP: 0,
        baseEnergy: 6,
        opt1Cost: 1,
        opt1Description: "Add space to the illusion. Costs +1 EN per space.",
        BPIncreaseOpt1: 0,
        opt2Cost: 1,
        opt2Description: "Add sound to the illusion. Costs +1 EN & 1 BP.",
        BPIncreaseOpt2: 1,
        opt3Cost: 1,
        opt3Description: "Add in-place movement or animate the illusion. Costs +1 EN & 1 BP.",
        BPIncreaseOpt3: 1,
        type: "base"
    },
    {
        name: "Invisibility",
        description: "Make a willing target invisible for 1 hour. Targets evasion if the target is unwilling. Invisibility ends if the target uses a power, technique, or attack.",
        baseBP: 0,
        baseEnergy: 15,
        type: "base"
    },
    {
        name: "Combat Invisibility",
        description: "Willing target becomes invisible. Targets evasion if unwilling.",
        baseBP: 0,
        baseEnergy: 25,
        type: "base"
    },
    {
        name: "Disguise",
        description: "Change how you look and what you appear to be wearing to others for 10 minutes. This change cannot make you appear a size larger or smaller than your actual size. You cannot disguise yourself as something you have not encountered or seen before. +5 EN for every additional 5 minutes. If a creature suspects you're disguised, they may roll Discernment against your potency, and on success, they learn you are disguised.",
        baseBP: 0,
        baseEnergy: 12,
        opt1Cost: 5,
        opt1Description: "Add 5 minutes to the disguise duration. Each additional 5 minutes costs +5 EN.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Blind",
        description: "Target creature becomes blinded.",
        baseBP: 0,
        baseEnergy: 7,
        type: "base"
    },
    {
        name: "Silence",
        description: "The space or target creature hit becomes completely silent. While a creature is affected by occupying a silenced space or being the target, they gain the deafened condition and cannot use powers that require the Charisma power ability.",
        baseBP: 0,
        baseEnergy: 9,
        type: "base"
    },
    {
        name: "Enthrall",
        description: "Target gets -1 to discernment, vigilance, and acuity skills when trying to perceive anything or anyone other than you or a willing creature within range. +1 EN for each additional -1, to a minimum of -15.",
        baseBP: 0,
        baseEnergy: 1,
        opt1Cost: 1,
        opt1Description: "Add -1 to target's discernment, vigilance, and acuity skills. Each additional -1 costs +1 EN.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Compelled Duel",
        description: "Target must overcome your potency with resolve each time it tries to attack a target other than you.",
        baseBP: 0,
        baseEnergy: 8,
        type: "base"
    },
    {
        name: "Disagreeable",
        description: "Target feels that every piece of information they encounter is wrong and they disagree with it. If more than one creature interacts with another who has this effect, they argue for the duration of the power or until something causes them to stop interacting in this way.",
        baseBP: 0,
        baseEnergy: 7,
        type: "base"
    },
    {
        name: "Disorient",
        description: "Target believes the direction it's going is either the correct direction for their goal, or the opposite direction. If the creature can see its destination, they gain +10 to defend against this effect.",
        baseBP: 0,
        baseEnergy: 10,
        type: "base"
    },
    {
        name: "Nondetection",
        description: "Target cannot be the target of any power that would attempt to locate, remotely see, or perceive them in any way.",
        baseBP: 0,
        baseEnergy: 12,
        type: "base"
    },
    {
        name: "Body Swap",
        description: "You swap bodies with a target creature, retaining mental abilities but gaining their physical attributes temporarily.",
        baseBP: 0,
        baseEnergy: 20,
        type: "base"
    },
    {
        name: "Take-Over",
        description: "You gain control over 1 of the target creature’s action points (AP). You can force them to take a specific action. Spend your action points to control theirs.",
        baseBP: 0,
        baseEnergy: 10,
        opt1Cost: 10,
        opt1Description: "Gain control over 1 AP. +10 EN and +1 BP for each additional AP, up to 3.",
        BPIncreaseOpt1: 1,
        type: "base"
    },
    {
        name: "Compelling Sight",
        description: "The target cannot attempt to overcome this power’s effect while they remain within the range of this power and in line of sight of you or a selected creature.",
        baseBP: 0,
        baseEnergy: 0.5,
        type: "base"
    },
    {
        name: "Suggest",
        description: "You propose a reasonable course of action for a target to follow, as long as it does not harm them or their allies.",
        baseBP: 0,
        baseEnergy: 15,
        type: "base"
    },
    {
        name: "Compelled Movement",
        description: "Target must move towards or away from you in the safest possible route, using action points.",
        baseBP: 0,
        baseEnergy: 5,
        opt1Cost: 3,
        opt1Description: "Increase the movement to 2 action points. +3 EN.",
        BPIncreaseOpt1: 0,
        opt2Cost: 3,
        opt2Description: "Force the target to move immediately as a reaction. +3 EN.",
        BPIncreaseOpt2: 0,
        type: "base"
    },
    {
        name: "Mind Break",
        description: "At the start of the target’s turn, they must roll Resolve against your potency to avoid losing action points.",
        baseBP: 0,
        baseEnergy: 7,
        type: "base"
    },
    {
        name: "Shift Focus",
        description: "Target has -1 on all attacks against you for the duration of the power.",
        baseBP: 0,
        baseEnergy: 5,
        opt1Cost: 3,
        opt1Description: "Increase the penalty to -2. +3 EN per -1.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Curse",
        description: "Target has -2 to the defense and skill rolls of one ability of your choice.",
        baseBP: 0,
        baseEnergy: 6,
        type: "base"
    },
    {
        name: "Communicate",
        description: "Gain the ability to communicate with animals or non-sentient creatures for one minute.",
        baseBP: 0,
        baseEnergy: 3,
        opt1Cost: 3,
        opt1Description: "Extend the duration to 1 hour. +3 EN.",
        BPIncreaseOpt1: 0,
        opt2Cost: 8,
        opt2Description: "Extend the duration to 1 day. +8 EN.",
        BPIncreaseOpt2: 0,
        type: "base"
    },
    {
        name: "De-motivate",
        description: "Target gains the weakened 1 condition when attempting to pursue the course of action they were taking.",
        baseBP: 0,
        baseEnergy: 6,
        opt1Cost: 3,
        opt1Description: "Increase weakened condition by +1. +3 EN.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Escalate",
        description: "Any emotion currently being felt by the target is heightened, targeting resolve.",
        baseBP: 0,
        baseEnergy: 5,
        type: "base"
    },
    {
        name: "Vertigo",
        description: "Target becomes faint and disoriented.",
        baseBP: 0,
        baseEnergy: 5,
        type: "base"
    },
    {
        name: "Aggravate",
        description: "Target becomes aggravated towards a creature they can see.",
        baseBP: 0,
        baseEnergy: 6,
        opt1Cost: 2,
        opt1Description: "Decrease the bonus to overcome by -1. +2 EN per decrease.",
        BPIncreaseOpt1: 0,
        opt2Cost: 4,
        opt2Description: "Cause the target to become angry towards any nearby target indiscriminately. +4 EN.",
        BPIncreaseOpt2: 0,
        type: "base"
    },
    {
        name: "Friends",
        description: "Target considers you friendly if it was indifferent or warm towards you before.",
        baseBP: 0,
        baseEnergy: 8,
        type: "base"
    },
    {
        name: "Indifference",
        description: "Target becomes indifferent towards creatures it was hostile to previously.",
        baseBP: 0,
        baseEnergy: 6,
        type: "base"
    },
    {
        name: "Charm",
        description: "Target becomes charmed by you, and +2 EN for each additional creature charmed.",
        baseBP: 0,
        baseEnergy: 7,
        opt1Cost: 2,
        opt1Description: "Charm an additional creature. +2 EN per creature.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Immune to Take-Over",
        description: "Target is immune to having their actions controlled by another entity.",
        baseBP: 0,
        baseEnergy: 5,
        type: "base"
    },
    {
        name: "Immune to Frightened",
        description: "Target is immune to the frightened condition.",
        baseBP: 0,
        baseEnergy: 2,
        type: "base"
    },
    {
        name: "Immune to Charmed",
        description: "Target is immune to the charmed condition.",
        baseBP: 0,
        baseEnergy: 3,
        type: "base"
    },
    {
        name: "Frighten",
        description: "Target becomes frightened.",
        baseBP: 0,
        baseEnergy: 8,
        type: "base"
    },
    {
        name: "Mark",
        description: "Whenever you deal damage to the target creature, you add 1d2 to that damage.",
        baseBP: 0,
        baseEnergy: 3,
        opt1Cost: 2,
        opt1Description: "Add 1d2 extra damage. +2 EN per 1d2.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Command Movement",
        description: "You choose how a target uses 1 action point worth of movement or interaction.",
        baseBP: 0,
        baseEnergy: 10,
        opt1Cost: 5,
        opt1Description: "Increase to 2 action points. +5 EN per action point.",
        BPIncreaseOpt1: 0,
        opt2Cost: 5,
        opt2Description: "Increase to 3 action points. +5 EN per action point.",
        BPIncreaseOpt2: 0,
        type: "base"
    },
    {
        name: "Animal Messenger",
        description: "A Tiny animal delivers a message for you, traveling to a designated location and delivering it.",
        baseBP: 0,
        baseEnergy: 10,
        type: "base"
    },
    {
        name: "Compelled Truth",
        description: "Target cannot speak a deliberate lie while the power’s duration lasts.",
        baseBP: 0,
        baseEnergy: 16,
        type: "base"
    },
    {
        name: "Geas",
        description: "You issue a command that the target must follow or suffer psychic damage if they act against it.",
        baseBP: 0,
        baseEnergy: 14,
        opt1Cost: 4,
        opt1Description: "Increase psychic damage by 1d10. +4 EN per 1d10.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Glib",
        description: "When you make a Charisma check, you can replace the D20 roll with a 15. Any magic or abilities that detect truth indicate you are speaking truthfully.",
        baseBP: 0,
        baseEnergy: 32,
        type: "base"
    },
    {
        name: "Wall",
        description: "Create a wall that is one space long and a half meter wide. The wall's evasion is 0 and has 5 hit points but cannot be critically hit. +1 EN to add 2 hit points to the wall segments. +2 EN to add 1 space to the wall's length. Each space of the wall has its own hit points. The wall can be shaped however you'd like with its provided amount of spaces including in a rounded shape. If the wall is created in the same space as a creature, the creature must roll Reflex against your potency or be placed on a side of the wall that you choose. If they succeed, they may choose which side to end up on. If this power deals damage it is only dealt if the creature fails this save or somehow transverses a space of the wall (including through breaking it and moving through its space before the damage duration ends).",
        baseBP: 0,
        baseEnergy: 2,
        opt1Cost: 1,
        opt1Description: "Add 2 hit points to the wall segments.",
        BPIncreaseOpt1: 0,
        opt2Cost: 2,
        opt2Description: "Add 1 space to the wall's length.",
        BPIncreaseOpt2: 0,
        type: "base"
    },
    {
        name: "Block",
        description: "Block an attack by making a power roll to hit, using the roll as your new evasion. This replaces your regular evasion for the attack, and you must use the result. This part cannot be lingered.",
        baseBP: 0,
        baseEnergy: 4,
        type: "base"
    },
    {
        name: "Power Armor",
        description: "Create power armor on target. Power armor negates 1 damage from physical and power damage. +5 EN, +1 BP for each increase of 1 damage reduction, to a maximum of 10 including armor already worn. Adding damage to power armor gives it the 'spiked' property, with the damage from spikes being the added damage. Elemental damage that is less effective against the element of the armor does half damage, while elemental damage that is effective against the armor type ignores its damage reduction. Power armor lasts 4 hours, +6 EN, +1 BP for each additional 4 hours.",
        baseBP: 0,
        baseEnergy: 7,
        opt1Cost: 5,
        opt1Description: "Increase damage reduction by 1. +5 EN, +1 BP per increase.",
        BPIncreaseOpt1: 1,
        opt2Cost: 6,
        opt2Description: "Extend power armor duration by 4 hours. +6 EN, +1 BP.",
        BPIncreaseOpt2: 1,
        type: "base"
    },
    {
        name: "Reflect",
        description: "When you are the target of a non-Area of Effect power, you may cause the creator of the power to become the target instead, using your power attack roll up to a certain energy amount of the reflected power. Decide how much energy cost you wish to be able to reflect. +1.5 EN per 2 EN of the power being reflected.",
        baseBP: 0,
        baseEnergy: 4,
        type: "base"
    },
    {
        name: "Deflect",
        description: "When you are the target of a non-Area of Effect power, you may choose a new target for the power, using your power attack roll up to half the range of the original power. Decide how much energy cost you wish to be able to deflect. +1 EN per 2 EN of the power being reflected.",
        baseBP: 0,
        baseEnergy: 2,
        type: "base"
    },
    {
        name: "Counter",
        description: "Cause the target power in range to end immediately. Decide how much your power can end before using, i.e. you decide your power can negate 30 EN and below powers. This makes the cost of counter 4 + 20 (half of 30).",
        baseBP: 0,
        baseEnergy: 6,
        opt1Cost: 1.5,
        opt1Description: "Increase the power's negation capacity. +1.5 EN per 2 EN target spent on power.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Absorb",
        description: "Absorb energy from the target power. Every 2 EN the user paid for that power costs +1.5 EN to absorb. If you're unable to pay the full cost of the power to absorb, you absorb up to the amount you have but still get affected by the power. If the power deals damage, you may reduce that damage by 1 for every 2 EN absorbed. You gain all absorbed energy at the end of your turn.",
        baseBP: 0,
        baseEnergy: 8,
        type: "base"
    },
    {
        name: "Negate",
        description: "When a power under the energy negation of this power targets you, it has no effect. Decide how much your power can end before using, i.e. you decide your power can negate 30 EN and below powers. This makes the cost of negate = 15 + 1.5*15 (half of 30) which equals 37.5.",
        baseBP: 0,
        baseEnergy: 15,
        opt1Cost: 1.5,
        opt1Description: "Increase the power's negation capacity. +1.5 EN per 2 EN target spent on power.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Dispell",
        description: "Target a power that has already been used, and has a duration longer than one round in an attempt to end that power. +1.5 EN for each 2 EN of the power being dispelled. If the power you're attempting to dispell has more energy cost than you can dispell, you can instead attempt a power attack roll against it in an attempt to dispell it, with a DS equal to 10 +1 for each 10 Energy that power cost.",
        baseBP: 0,
        baseEnergy: 6,
        type: "base"
    },
    {
        name: "Permanent Dispell",
        description: "No powers can be used in or pass through the area while this power occupies it. Any magical items become mundane while they occupy the same space as this power. Any power that is lingering or exists in the area is dispelled.",
        baseBP: 0,
        baseEnergy: 50,
        type: "base"
    },
    {
        name: "Blessed",
        description: "When you gain 1d2 to overcome when targeting others and when they target you (other than increasing evasion). +3 EN for each additional +1d2.",
        baseBP: 0,
        baseEnergy: 5,
        opt1Cost: 3,
        opt1Description: "Increase +1d2 to overcome. +3 EN per additional d2.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Resistance",
        description: "Target creature gains resistance to one damage type for the duration. +6 EN, +1 BP for each additional damage type resistance. You must choose the damage type when creating the power.",
        baseBP: 0,
        baseEnergy: 6,
        opt1Cost: 6,
        opt1Description: "Add an additional damage type resistance. +6 EN per damage type.",
        BPIncreaseOpt1: 1,
        type: "base"
    },
    {
        name: "Minor Resistance",
        description: "Once each turn when you take a chosen non-physical damage type (blunt, slashing, or piercing), you reduce that damage by 1d2. +0.5 EN for each additional 1d2.",
        baseBP: 0,
        baseEnergy: 1,
        opt1Cost: 0.5,
        opt1Description: "Increase reduction by 1d2. +0.5 EN per additional 1d2.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Evasion Buff",
        description: "Increase target's evasion by +1. +4 EN for each additional +1.",
        baseBP: 0,
        baseEnergy: 5,
        opt1Cost: 4,
        opt1Description: "Increase evasion by +1. +4 EN per additional +1.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Ward",
        description: "Target has -1 on D20 rolls and Potencies against you. +2 EN for each additional -1 decrease. Targets your choice of resolve, mental fortitude, or discernment.",
        baseBP: 0,
        baseEnergy: 3,
        opt1Cost: 2,
        opt1Description: "Increase -1 penalty on D20 rolls. +2 EN per additional -1.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Sanctuary",
        description: "When a creature targets the target of this power they must overcome your potency with resolve or be forced to choose a new target.",
        baseBP: 0,
        baseEnergy: 5,
        type: "base"
    },
    {
        name: "Condition Resistance",
        description: "Target gains +1 to overcome a specified condition. +1 EN for each additional +1.",
        baseBP: 0,
        baseEnergy: 2,
        opt1Cost: 1,
        opt1Description: "Increase resistance to a condition by +1. +1 EN per additional +1.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Connected Creatures",
        description: "A willing target is connected to you. Whenever it would take damage it takes half of that damage and you take the other half (after applying that target's resistances and damage reduction[s]). +10 EN & 1 BP: Target's 1 unwilling creature and 1 willing creature. Whenever the willing creature would take damage it takes half of that damage and the unwilling creature takes the other half.",
        baseBP: 0,
        baseEnergy: 10,
        opt1Cost: 10,
        opt1Description: "Add one unwilling target to the connection. +10 EN per additional target.",
        BPIncreaseOpt1: 1,
        type: "base"
    },
    {
        name: "Impassible Aura",
        description: "Create an area that has a 1 space radius. No creature can enter that space for the power's duration, if the area is moved to occupy the same space as a creature then this power ends.",
        baseBP: 0,
        baseEnergy: 18,
        type: "base"
    },
    {
        name: "Power Resistance",
        description: "Target gains +1 to overcome any power that targets them. +6 EN for each additional +1.",
        baseBP: 0,
        baseEnergy: 8,
        opt1Cost: 6,
        opt1Description: "Increase resistance to powers by +1. +6 EN per additional +1.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Power Damage Resistance",
        description: "Target gains resistance to all damage dealt by powers.",
        baseBP: 0,
        baseEnergy: 22,
        type: "base"
    },
    {
        name: "Fall Resistance",
        description: "Reduce target's fall damage by 1/2. 6 EN instead to reduce fall damage to 0.",
        baseBP: 0,
        baseEnergy: 4,
        opt1Cost: 2,
        opt1Description: "Reduce fall damage to 0. +2 EN.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Controlled Damage",
        description: "Split damage into additional dice of the same value. +1 EN for every additional die added. (For example, if your power deals 1d12 damage, you can make it deal 2d6 instead, or roll 3d4 with 2 EN).",
        baseBP: 0,
        baseEnergy: 1,
        opt1Cost: 1,
        opt1Description: "Add additional die. +1 EN per die.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Long-Linger Damage",
        description: "Choose a damage type. Each round, the creature takes 1d4 damage of that type for 10 rounds. +5 EN for each additional +1d4 damage per round. +3 EN for every 2 additional rounds. Targets Fortitude for all damage types except Psychic, which targets Mental Fortitude.",
        baseBP: 0,
        baseEnergy: 7,
        opt1Cost: 5,
        opt1Description: "Increase damage by 1d4 per round. +5 EN per additional 1d4.",
        BPIncreaseOpt1: 0,
        opt2Cost: 3,
        opt2Description: "Increase duration by 2 rounds. +3 EN per 2 rounds.",
        BPIncreaseOpt2: 0,
        type: "base"
    },
    {
        name: "Siphon",
        description: "Target loses hit points, energy, or both, equal to an amount decided when creating this power. +1.5 EN for each additional 2 HP or EN lost. You can decide how many points to drain from each resource (HP/EN) during use. If one resource is insufficient, the siphon automatically draws from the other. At the end of the turn, you regain HP and/or EN equal to what was siphoned, with siphoned energy giving you energy, and health giving you health (up to 10 points gained total). +3 EN and +1 BP to increase the max regained amount by +5. Targets Fortitude.",
        baseBP: 0,
        baseEnergy: 4,
        opt1Cost: 1.5,
        opt1Description: "Increase HP/EN drained by 2 points. +1.5 EN per 2 points.",
        BPIncreaseOpt1: 0,
        opt2Cost: 3,
        opt2Description: "Increase max regain by 5. +3 EN, +1 BP.",
        BPIncreaseOpt2: 1,
        type: "base"
    },
    {
        name: "Damage Siphon",
        description: "When you damage a creature, you heal or regain energy equal to half the damage dealt (up to 10 points of HP/EN). +1 EN and +1 BP to increase the maximum regained by +2.",
        baseBP: 0,
        baseEnergy: 5,
        opt1Cost: 1,
        opt1Description: "Increase max HP/EN regained by +2. +1 EN, +1 BP per increase.",
        BPIncreaseOpt1: 1,
        type: "base"
    },
    {
        name: "Power Infused Strike",
        description: "Add your Power Bonus to the attack and damage rolls you make with a melee or ranged weapon that is part of this power. You must be proficient with that weapon.",
        baseBP: 0,
        baseEnergy: 4,
        type: "base"
    },
    {
        name: "Detect Creature Type",
        description: "Detect the presence of a certain creature type within the range of this power. +3 EN for each additional creature type.",
        baseBP: 0,
        baseEnergy: 7,
        opt1Cost: 3,
        opt1Description: "Add another creature type. +3 EN per additional type.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Detect Power",
        description: "Target becomes aware if there is any power, magic, or supernatural effects active within a distance from the range of the power. +3 EN Target also learns what types of power parts are involved (such as creation, adaptation, and so on).",
        baseBP: 0,
        baseEnergy: 12,
        opt1Cost: 3,
        opt1Description: "Learn about types of power parts involved. +3 EN.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Detect Damage",
        description: "Detect a certain damage type within the range of this power, each creature or object capable of dealing that damage type becomes known to the target including the direction or an outline shown to the target of that thing when viewing it.",
        baseBP: 0,
        baseEnergy: 4,
        type: "base"
    },
    {
        name: "Identify",
        description: "Target gains awareness of a target object in range's properties and magical or supernatural properties if any. Some properties may remain hidden until the object is used as intended, but most properties will be available (if not all) at the RM's discretion.",
        baseBP: 0,
        baseEnergy: 7,
        type: "base"
    },
    {
        name: "Omen",
        description: "Gain awareness of future events that are likely to occur in the next 30 minutes based on yours and others' planned courses of action. You know whether the coming events in this time are good, bad, good and bad, or neutral. Each time after the first you use this power in 24 hours you have a 50% chance of it not working despite spending energy.",
        baseBP: 0,
        baseEnergy: 12,
        type: "base"
    },
    {
        name: "Detect Traps",
        description: "Detect traps within the range of the spell. You see a faint outline or aura around any traps within the range. Traps are defined as mechanisms, powers, or objects intended to be unknowingly triggered to harm or capture creatures.",
        baseBP: 0,
        baseEnergy: 7,
        type: "base"
    },
    {
        name: "Locate Animals",
        description: "You learn the direction, path, and location of the closest of a specific animal or beast type of your choice when you use this power provided it is within 2 kilometers. +1 EN for each additional 2 kilometers.",
        baseBP: 0,
        baseEnergy: 5,
        opt1Cost: 1,
        opt1Description: "Increase range by 2 km. +1 EN per 2 km.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Locate Plants",
        description: "You learn the direction, path, and location of the closest of a specific plant or herb type of your choice when you use this power provided it is within 2 kilometers. +1 EN for each additional 2 kilometers.",
        baseBP: 0,
        baseEnergy: 5,
        opt1Cost: 1,
        opt1Description: "Increase range by 2 km. +1 EN per 2 km.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Locate Object",
        description: "You learn the direction, path, and location of the closest of a specific object of your choice that is familiar to you when you use this power provided it is within 300 meters. +1 EN for each additional 300 meters.",
        baseBP: 0,
        baseEnergy: 8,
        opt1Cost: 1,
        opt1Description: "Increase range by 300 meters. +1 EN per 300 meters.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Locate Creature",
        description: "You learn the direction, path, and location of the closest of a specific creature of your choice that is familiar to you when you use this power provided it is within 300 meters. +1 EN for each additional 300 meters. If the creature is not in its normal form, then this power fails to locate it.",
        baseBP: 0,
        baseEnergy: 18,
        opt1Cost: 1,
        opt1Description: "Increase range by 300 meters. +1 EN per 300 meters.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Locate Creature on Overcome",
        description: "If you overcome a creature's defense with any part of this power, you also learn its exact location for the next round including how far it is from you and in what direction. While detected this way, it cannot be hidden from you. If this power doesn't have an attack roll, you may target Mental Fortitude instead.",
        baseBP: 0,
        baseEnergy: 4,
        type: "base"
    },
    {
        name: "Detect Invisibility",
        description: "You can see invisible things and creatures as if they were not invisible. You ignore the effects of the invisible condition for these creatures and objects. If this is an area of effect, you may choose to cause each creature affected to gain this effect, or instead cause the area to reveal all invisible things. If you target a creature to end or remove its ability to be invisible, this target's evasion is also targeted.",
        baseBP: 0,
        baseEnergy: 10,
        type: "base"
    },
    {
        name: "See Through Illusion",
        description: "Visual illusions are invisible to you, and you automatically overcome anything targeting discernment related to this type of illusion.",
        baseBP: 0,
        baseEnergy: 15,
        type: "base"
    },
    {
        name: "Sensor",
        description: "Create a tiny invisible and silent sensor that you can move up to the range of this power as a quick action. You can choose to hear, see, taste, or feel through this sensor as if it was an extension of your senses.",
        baseBP: 0,
        baseEnergy: 12,
        type: "base"
    },
    {
        name: "Scry",
        description: "A silent invisible sensor appears within 2 spaces of target creature or location that remains within the location or 2 spaces of range as the creature moves. You can sense through it as if it's an extension of your vision and hearing. Target's Mental Fortitude or Resolve. You gain +5 to overcome if you know the target well or -5 if you've only heard of the target. In addition, you gain +2 to overcome if you have the target's picture or likeness, +4 if you have a possession of the target's, and +10 if you have part of its body (including hair or part of a nail). These bonuses and penalties all apply together, but each can only apply once.",
        baseBP: 0,
        baseEnergy: 30,
        type: "base"
    },
    {
        name: "Find Path",
        description: "Name a specific location you are familiar with. You gain an awareness of the most direct physical route to reach it. For the duration, while you remain in the same realm as the location, you intuitively sense its distance and direction. When presented with multiple paths, you know which one is the most direct route toward your destination. This power fails if the destination is in a different realm, is mobile (such as a floating fortress), or is too vague (like 'a dragon’s lair').",
        baseBP: 0,
        baseEnergy: 27,
        type: "base"
    },
    {
        name: "Mend",
        description: "Repairs a single break or tear in an object you touch, no larger than 30 cm in any dimension.",
        baseBP: 1,
        baseEnergy: 3,
        type: "base"
    },
    {
        name: "Minorly Manipulate Air",
        description: "Generate a breeze strong enough to ripple fabric, stir dust, rustle leaves, and close open doors and shutters, within a 1-space cube.",
        baseBP: 1,
        baseEnergy: 1,
        type: "base"
    },
    {
        name: "Minorly Manipulate Earth",
        description: "Create a thin layer of dust or sand over surfaces or inscribe a single word in dirt or sand.",
        baseBP: 1,
        baseEnergy: 1,
        type: "base"
    },
    {
        name: "Minorly Manipulate Water",
        description: "Conjure a spray of cool mist that lightly dampens creatures and objects within a 1.5-meter cube or create a cup of clean water.",
        baseBP: 1,
        baseEnergy: 1,
        type: "base"
    },
    {
        name: "Minorly Manipulate Fire",
        description: "Produce a thin cloud of harmless embers and colored, scented smoke within a 1-space cube. The embers can ignite candles or torches.",
        baseBP: 1,
        baseEnergy: 1,
        type: "base"
    },
    {
        name: "Minorly Manipulate Elements",
        description: "Shape dirt, sand, fire, smoke, mist, or water into a crude form that holds its shape for 1 hour.",
        baseBP: 1,
        baseEnergy: 2,
        type: "base"
    },
    {
        name: "Tremors",
        description: "The ground vibrates harmlessly within the entire range of the power for one minute.",
        baseBP: 1,
        baseEnergy: 1,
        type: "base"
    },
    {
        name: "Invisible Force",
        description: "Cause an unsecured door or window to burst open or slam shut, or manipulate another movable unsecured object briefly.",
        baseBP: 1,
        baseEnergy: 2,
        type: "base"
    },
    {
        name: "Detached Sound",
        description: "Create a sound localized at a point within range, such as ominous voices or distant thunder.",
        baseBP: 1,
        baseEnergy: 2,
        type: "base"
    },
    {
        name: "Booming Voice",
        description: "Your voice amplifies up to three times its normal volume for 1 minute, granting Advantage on Charisma-based Intimidation rolls.",
        baseBP: 1,
        baseEnergy: 1,
        type: "base"
    },
    {
        name: "Altered Eyes",
        description: "Alter the color or appearance of your eyes for 1 minute.",
        baseBP: 1,
        baseEnergy: 1,
        type: "base"
    },
    {
        name: "Flavor",
        description: "Give a normal or somewhat unique flavor to up to one cubic half-meter of food or liquid.",
        baseBP: 1,
        baseEnergy: 1,
        type: "base"
    },
    {
        name: "Fire Manipulation",
        description: "Ignite or extinguish a small flammable object, such as a candle or torch.",
        baseBP: 1,
        baseEnergy: 1.5,
        type: "base"
    },
    {
        name: "Plant Manipulation",
        description: "Slightly manipulate a plant by causing it to bud, bloom, or grow a small amount.",
        baseBP: 1,
        baseEnergy: 1.5,
        type: "base"
    },
    {
        name: "Chill or Warm",
        description: "Warm or chill up to one cubic half-meter of material, food, or liquid.",
        baseBP: 1,
        baseEnergy: 1,
        type: "base"
    },
    {
        name: "Mark",
        description: "Cause a color, mark, or symbol to manifest on an object or surface, occupying no more than half a square meter, for 1 hour.",
        baseBP: 1,
        baseEnergy: 1.5,
        type: "base"
    },
    {
        name: "Clean or Soil",
        description: "Instantly clean or soil an area no larger than half a cubic meter.",
        baseBP: 1,
        baseEnergy: 1,
        type: "base"
    },
    {
        name: "Sensory Effect",
        description: "Create a harmless sensory effect, such as cascading leaves, ethereal dancing fairies, or the sound of an animal. The effect fits within a 1-space cube.",
        baseBP: 1,
        baseEnergy: 2,
        type: "base"
    },
    {
        name: "Tiny Creation",
        description: "Conjure a nonmagical trinket or illusory image that fits in your hand, lasting until the end of your next turn.",
        baseBP: 1,
        baseEnergy: 1.5,
        type: "base"
    },
    {
        name: "Weather Sense",
        description: "You know what the weather will be like within the next 24 hours within 5 kilometers.",
        baseBP: 1,
        baseEnergy: 4,
        type: "base"
    },
    {
        name: "Understand Language",
        description: "Understand all written and audible languages for the duration.",
        baseBP: 1,
        baseEnergy: 6,
        type: "base"
    },
    {
        name: "Tongues",
        description: "Gain proficiency in a chosen language for the duration.",
        baseBP: 1,
        baseEnergy: 6,
        type: "base"
    },
    {
        name: "Light",
        description: "Add bright light out to 2 spaces, with an additional 2 spaces of dim light. +1 EN for each additional 2 spaces.",
        baseBP: 1,
        baseEnergy: 1,
        opt1Cost: 1,
        opt1Description: "Increase the bright and dim light by 2 spaces each.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Thought",
        description: "Add a simple thought, idea, or memory to the power. +2 EN to increase the space it can occupy.",
        baseBP: 1,
        baseEnergy: 3,
        opt1Cost: 2,
        opt1Description: "Increase the space it can occupy.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Distant Message",
        description: "Send a 6-second message to a creature you are aware of. The creature can block further messages after receiving the first one.",
        baseBP: 1,
        baseEnergy: 20,
        type: "base"
    },
    {
        name: "Breathe",
        description: "Target can breathe normally despite an environmental factor that would prevent it.",
        baseBP: 1,
        baseEnergy: 5,
        type: "base"
    },
    {
        name: "Ping",
        description: "Receive awareness of a specific event within the area. +4 EN for this to last up to 30 days.",
        baseBP: 1,
        baseEnergy: 4,
        opt1Cost: 4,
        opt1Description: "Extend the duration of the awareness effect up to 30 days.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Audio",
        description: "Add a sound to your power, audible within a 6-space radius. +1 EN for each additional 3 spaces.",
        baseBP: 1,
        baseEnergy: 5,
        opt1Cost: 1,
        opt1Description: "Increase the radius by 3 spaces.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Create Food",
        description: "Create enough rations for 1 creature to avoid malnutrition. +5 EN for each additional ration.",
        baseBP: 1,
        baseEnergy: 7,
        opt1Cost: 5,
        opt1Description: "Create additional rations.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Create Water",
        description: "Create up to 5 liters of clean water. +3 EN for each additional 5 liters.",
        baseBP: 1,
        baseEnergy: 3,
        opt1Cost: 3,
        opt1Description: "Create additional 5 liters of water.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Destroy Water",
        description: "Destroy up to 5 liters of water. +3 EN for each additional 5 liters.",
        baseBP: 1,
        baseEnergy: 3,
        opt1Cost: 3,
        opt1Description: "Destroy additional 5 liters of water.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Speak with the Dead",
        description: "You may touch a corpse and cause it to answer one question it might have answered in life, with no obligation to speak honestly. The answers may be cryptic or repetitive. Once five questions have been asked, or after 10 minutes, the corpse returns to its inanimate state.",
        baseBP: 0,
        baseEnergy: 5,
        opt1Cost: 2,
        opt1Description: "Add +1 question to the total number of questions the corpse may answer, up to 5 additional questions. The energy cost is 2 EN for each additional question.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Health Summon",
        description: "Summon a Creature from Another Location or Realm by paying HP and/or EN. The summon stays until killed. The cost is +8 HP and/or EN total for each 1/4th level of the summon. Your maximum HP and/or EN is permanently lowered by the amount spent. These maximums revert to normal when the summon dies or is dismissed.",
        baseBP: 0,
        baseEnergy: 0,
        altBaseEnergy: 8,
        altEnergyDescription: "The summon requires a total cost of 8 EN and/or HP per 1/4th level of the summon. These maximums are permanently reduced until the summon is dismissed or killed.",
        altBP: 0,
        useAltCost: true,
        type: "base"
    },
    {
        name: "Power Summon",
        description: "Summon a creature that lasts for 5 minutes at a base cost of 8 EN + 1 BP per 1/4th level of the summon. +2 EN for each additional 5 minutes.",
        baseBP: 1,
        baseEnergy: 8,
        opt1Cost: 2,
        opt1Description: "Extend the summon for an additional 5 minutes, costing an additional 2 EN.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Neutral Summon",
        description: "Summon an unaligned creature with no dedicated agenda or alliance. The creature is controlled by the Realms Master and behaves according to the situation. The summon lasts until a full recovery or until killed. The cost is 5 EN + 1 BP per 1/4th level of the summon.",
        baseBP: 1,
        baseEnergy: 5,
        type: "base"
    },
    {
        name: "Raise Undead",
        description: "By touching a mostly intact corpse, you can raise an undead creature. The creature becomes a mindless summon under your control, with no memory or personality from its past life. It lasts until a full recovery or until killed. The cost is 12 EN + 1 BP per level of the creature.",
        baseBP: 1,
        baseEnergy: 12,
        type: "base"
    },
    {
        name: "Weapon Summon",
        description: "Summon a weapon directly to your hand by paying 2 EN for each 1 BP of the weapon's proficiency cost. You are considered proficient with this weapon for the duration. If the weapon requires ammunition, you have access to it for the duration. The weapon lasts for 1 minute.",
        baseBP: 1,
        baseEnergy: 2,
        type: "base"
    },
    {
        name: "Summon or Beast Senses",
        description: "Merge your perception and senses with that of a willing target creature that is a summon, familiar, or beast. You temporarily replace your Acuity with the target's and can perceive through its senses, including special senses.",
        baseBP: 0,
        baseEnergy: 6,
        type: "base"
    },
    {
        name: "Heal",
        description: "Heal target for 1d2. +1.25 EN for each additional 1d2 healed.",
        baseBP: 0,
        baseEnergy: 2,
        opt1Cost: 1.25,
        opt1Description: "Add +1d2 to the healing, increasing the energy cost by 1.25 EN for each additional 1d2.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "True Heal",
        description: "Heal target for 1. +1.5 EN for each additional 1 healed.",
        baseBP: 0,
        baseEnergy: 2,
        opt1Cost: 1.5,
        opt1Description: "Add +1 to the healing, increasing the energy cost by 1.5 EN for each additional 1.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Overheal",
        description: "Heal target for 1d2. +1.5 EN for each additional 1d2. This healing can exceed the target’s health maximum. The health maximum doesn't increase, but allows the creature to have additional hit points until they lose them. Health maximum resets after any recovery.",
        baseBP: 0,
        baseEnergy: 2,
        opt1Cost: 1.5,
        opt1Description: "Add +1d2 to the healing, increasing the energy cost by 1.5 EN for each additional 1d2.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "True Overheal",
        description: "Heal target for 1. +1.75 EN for each additional 1. This healing can exceed the target’s health maximum. The health maximum doesn't increase, but allows the creature to have additional hit points until they lose them. Health maximum resets after any recovery.",
        baseBP: 0,
        baseEnergy: 2,
        opt1Cost: 1.75,
        opt1Description: "Add +1 to the healing, increasing the energy cost by 1.75 EN for each additional 1.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Major Heal",
        description: "Heal target for 25 Hit Points. +5 EN for each additional 5 hit points.",
        baseBP: 0,
        baseEnergy: 30,
        opt1Cost: 5,
        opt1Description: "Heal an additional 5 hit points, increasing the energy cost by 5 EN.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Massive Heal",
        description: "Target heals for 80 hit points. +5 EN for each additional 15 hit points.",
        baseBP: 0,
        baseEnergy: 50,
        opt1Cost: 5,
        opt1Description: "Heal an additional 15 hit points, increasing the energy cost by 5 EN.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Healing Boost",
        description: "Target creature regains the maximum number of hit points possible whenever it receives any healing starting on the turn after this.",
        baseBP: 0,
        baseEnergy: 8,
        type: "base"
    },
    {
        name: "Death Defying",
        description: "When in the dying condition the target's dying damage die size never increases.",
        baseBP: 0,
        baseEnergy: 2,
        type: "base"
    },
    {
        name: "Terminal Recovery",
        description: "Target creature in the dying condition heals 1 hit point.",
        baseBP: 0,
        baseEnergy: 1.5,
        type: "base"
    },
    {
        name: "Stabilize",
        description: "Target creature that is in the dying condition returns to 0 hit points and is stabilized, though still in the dying condition.",
        baseBP: 0,
        baseEnergy: 11,
        type: "base"
    },
    {
        name: "Revive",
        description: "Touch and restore a dead target to 1 hit point, as long as it died within the last round and has all vital body parts. +2 EN per each additional round the target can have been dead. You must decide how many rounds when creating the power. Revived targets are at 0 HP and stable.",
        baseBP: 0,
        baseEnergy: 20,
        opt1Cost: 2,
        opt1Description: "Increase the duration since the target's death by 1 round, increasing the energy cost by 2 EN.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Restore to Life",
        description: "Touch and restore a dead target to 1 hit point, as long as it died within the last day and has all vital body parts. +5 EN per each additional day that target has been dead. Target loses all conditions it had before death. The target raised to life gains one level of exhaustion for every day the target was dead to a maximum exhaustion of 5 from this power.",
        baseBP: 0,
        baseEnergy: 30,
        opt1Cost: 5,
        opt1Description: "Increase the time the target has been dead by 1 additional day, increasing the energy cost by 5 EN.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Form Life",
        description: "Touch a part of a dead target and form a new body of a random species to which you have access, as long as the target died within the last day. They replace all species traits on their character sheet with the new species, including flaws, ancestries, and characteristics chosen at random. Roll 1d4, and on odd results, add a flaw and additional ancestry; otherwise, do not add a flaw. +5 EN for each additional day the target has been dead. The creature retains all feats, powers, techniques, and knowledge, even if these do not work with their new species/size. This power part takes 1 hour to use.",
        baseBP: 0,
        baseEnergy: 30,
        opt1Cost: 5,
        opt1Description: "Increase the number of days the target has been dead by 1, increasing the energy cost by 5 EN.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Resurrection",
        description: "Touch a part of a dead target and return it to life with maximum Hit Points and any missing body parts restored, as long as the target died within the last ten years. +20 EN for each additional 10 years the target has been dead. This power part takes 1 hour to use.",
        baseBP: 0,
        baseEnergy: 100,
        opt1Cost: 20,
        opt1Description: "Increase the time the target has been dead by 10 additional years, increasing the energy cost by 20 EN.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "True Resurrection",
        description: "Speak the name of a dead target and return it to life with maximum Hit Points and any missing body parts restored within the range of this power, as long as the target died within the last one-hundred years. +40 EN for each additional 100 years the target has been dead. This power part takes 1 hour to use.",
        baseBP: 0,
        baseEnergy: 220,
        opt1Cost: 40,
        opt1Description: "Increase the time the target has been dead by 100 additional years, increasing the energy cost by 40 EN.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Ward from Death",
        description: "When target would enter the dying condition, they instead drop to 1 hit point. This effect lasts for 8 hours but ends when used.",
        baseBP: 0,
        baseEnergy: 22,
        type: "base"
    },
    {
        name: "Irreducible Max Health",
        description: "Target cannot have its health reduced below its maximum hit points.",
        baseBP: 0,
        baseEnergy: 6,
        type: "base"
    },
    {
        name: "Stasis",
        description: "Target dead creature stops decaying completely and cannot rot any further. Any power or feat that requires a target has been dead less than a certain amount of time can affect this creature as if it had only been dead for as long as it had when this power was used. Target's affected this way cannot be raised as undead creatures.",
        baseBP: 0,
        baseEnergy: 14,
        type: "base"
    },
    {
        name: "Feign Death",
        description: "Target creature enters a death-like state that is only perceivable as death unless perceived with powers and feats that reveal the creature is alive. The target must be willing, and gains the blinded condition for the duration. Target has resistance to all damage other than psychic for the power's duration and cannot gain the weakened condition. Persists for 1 hour.",
        baseBP: 0,
        baseEnergy: 16,
        type: "base"
    },
    {
        name: "Knock Prone",
        description: "Knock target prone. Target's the target's choice of might or reflex.",
        baseBP: 1,
        baseEnergy: 5,
        type: "base"
    },
    {
        name: "Controlling Summon",
        description: "Summon or create an unseen hand, creature, or other spector that can manipulate the world in small ways. This summon can move up to 6 spaces away from you, disappearing if it moves any further. This summon can manipulate the world in small ways, taking only interact and movement actions, and only able to hold up to 5 kilograms of mass. It has 1 Hit Point, 3 movement speed. The summon lasts for 1 minute.",
        baseBP: 1,
        baseEnergy: 8,
        opt1Cost: 1,
        opt1Description: "For each additional 10 feet this summon can move away from you.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Escape",
        description: "Target is released from any mundane restraints and cannot be grappled. If the target is already grappled it is no longer grappled.",
        baseBP: 1,
        baseEnergy: 5,
        type: "base"
    },
    {
        name: "Create Difficult Terrain",
        description: "The area affected by the power is considered difficult terrain to creatures on the ground.",
        baseBP: 1,
        baseEnergy: 4,
        opt1Cost: 3,
        opt1Description: "Cause this difficult terrain to apply to the air as well.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Immune to Difficult Terrain",
        description: "You aren't affected by difficult terrain and can move as normal.",
        baseBP: 1,
        baseEnergy: 3,
        type: "base"
    },
    {
        name: "Scaled Slowing",
        description: "Decrease target's Movement Speed (MS) by 1/2.",
        baseBP: 1,
        baseEnergy: 10,
        opt1Cost: 6,
        opt1Description: "Decrease it to 1/4 of its total instead, to a minimum of 1 MS.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Slow",
        description: "Decrease target's Movement Speed (MS) by 1 for the round.",
        baseBP: 1,
        baseEnergy: 3,
        opt1Cost: 3,
        opt1Description: "For each additional 1 MS decreased, to a minimum of 1 MS.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Unlock",
        description: "Unlock one minor, uncomplex lock (e.g., simple boxes, wooden doors, DS 10 or below).",
        baseBP: 1,
        baseEnergy: 4,
        opt1Cost: 8,
        opt1Description: "For small, slightly harder locks (e.g., wooden chests, safer doors, etc., DS 15 or below).",
        BPIncreaseOpt1: 0,
        opt2Cost: 14,
        opt2Description: "For hard, more complex locks (e.g., metal doors, stronger chests, complex boxes, etc., DS 20 or below).",
        BPIncreaseOpt2: 0,
        opt3Cost: 6,
        opt3Description: "For each additional +5 to this DS.",
        BPIncreaseOpt3: 1,
        type: "base"
    },
    {
        name: "Lock",
        description: "Lock something that can be locked such as a door, chest, window, and so on. The DS for this lock is equal to your potency and lasts until unlocked.",
        baseBP: 1,
        baseEnergy: 12,
        type: "base"
    },
    {
        name: "Teleport",
        description: "Teleport target to a location that you can see within half of the power's base range. If the target is an enemy, the target's Might is tested; on success, the target is teleported to a safe location without immediate danger.",
        baseBP: 1,
        baseEnergy: 5,
        opt1Cost: 15,
        opt1Description: "Allows enemy teleportation to any location, dangerous or not, within the base range.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Multi-Teleport",
        description: "Teleport target to a location that you can see within half of the power's base range.",
        baseBP: 1,
        baseEnergy: 9,
        opt1Cost: 5,
        opt1Description: "For each time you cause the target to teleport this way as part of the same action this power took to use.",
        BPIncreaseOpt1: 0,
        opt2Cost: 20,
        opt2Description: "Allows enemy teleportation to any location, dangerous or not, within the base range.",
        BPIncreaseOpt2: 0,
        type: "base"
    },
    {
        name: "Advanced Teleport",
        description: "Teleport to a location that you can or cannot see within the range of this power by describing exactly where you'd like to appear.",
        baseBP: 1,
        baseEnergy: 15,
        opt1Cost: 2,
        opt1Description: "Teleport double the base range of this power instead.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Long Distance Teleport",
        description: "Teleport to a location that you have been to that is within 300 kilometers.",
        baseBP: 1,
        baseEnergy: 35,
        opt1Cost: 15,
        opt1Description: "Increase this to 800 kilometers.",
        BPIncreaseOpt1: 0,
        opt2Cost: 15,
        opt2Description: "Remove a distance limitation.",
        BPIncreaseOpt2: 0,
        type: "base"
    },
    {
        name: "Swap",
        description: "Switch places with an object or creature within range that weighs less than you. Swapping requires a roll to hit the object's evasion or the target's Might.",
        baseBP: 1,
        baseEnergy: 8,
        type: "base"
    },
    {
        name: "Knockback",
        description: "Knock the target back 1 space (in the opposite direction of the hit).",
        baseBP: 1,
        baseEnergy: 5,
        opt1Cost: 3,
        opt1Description: "For each additional space the target is knocked back.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Immobilize",
        description: "Target becomes immobile. Targets the target's choice of either Might or Reflex.",
        baseBP: 1,
        baseEnergy: 8,
        type: "base"
    },
    {
        name: "Daze",
        description: "Target becomes dazed for the power's duration.",
        baseBP: 1,
        baseEnergy: 6,
        type: "base"
    },
    {
        name: "Constrain",
        description: "Target becomes constrained. Targets Might.",
        baseBP: 1,
        baseEnergy: 8,
        type: "base"
    },
    {
        name: "Stun",
        description: "Target becomes stunned (level 1).",
        baseBP: 1,
        baseEnergy: 9,
        opt1Cost: 9,
        opt1Description: "For each additional level of stunned.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Grapple",
        description: "Target is grappled. Target chooses between Reflex or Might.",
        baseBP: 1,
        baseEnergy: 16,
        type: "base"
    },
    {
        name: "Control",
        description: "Control a physical object that weighs up to 200 kgs within range and sight.",
        baseBP: 1,
        baseEnergy: 4,
        opt1Cost: 2,
        opt1Description: "For an additional 200 kgs of weight levitated.",
        BPIncreaseOpt1: 1,
        opt2Cost: 2,
        opt2Description: "For each additional object levitated.",
        BPIncreaseOpt2: 1,
        type: "base"
    },
    {
        name: "Suspend",
        description: "Suspend a target object or creature you hit in its current position within range (e.g., in the air, on the ground, etc.).",
        baseBP: 1,
        baseEnergy: 8,
        opt1Cost: 3,
        opt1Description: "For each additional round suspended.",
        BPIncreaseOpt1: 1,
        type: "base"
    },
    {
        name: "Circle",
        description: "This part affects parts of a power that target evasion. Your power circles around the target within 1 space of it.",
        baseBP: 1,
        baseEnergy: 2,
        opt1Cost: 1,
        opt1Description: "For each additional round of circling.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Forbiddance",
        description: "Ward an area from any form of magical travel such as teleporting in or out.",
        baseBP: 1,
        baseEnergy: 20,
        opt1Cost: 2,
        opt1Description: "For each additional 100 feet.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Fly",
        description: "You can fly with a speed of 3 spaces.",
        baseBP: 1,
        baseEnergy: 12,
        opt1Cost: 4,
        opt1Description: "For each additional 3 spaces.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Climbing",
        description: "Target gains a climb speed equal to one half of their speed.",
        baseBP: 1,
        baseEnergy: 6,
        opt1Cost: 2,
        opt1Description: "For this to be the target's full speed instead.",
        BPIncreaseOpt1: 0,
        type: "base"
    },
    {
        name: "Mini-Demirealm",
        description: "Create space accessible through a 1x2 space opening or a 1 space horizontal opening. The space is a 1x2 meter demirealm.",
        baseBP: 0,
        baseEnergy: 12,
        type: "base"
    },
    {
        name: "Demirealm",
        description: "Create an opening that can have a door or not. The opening goes into a 6x6 space stone or wood room. The power lasts for an hour, and if any creatures are inside when it ends, they can choose to appear outside of the opening or remain within the demirealm. You can connect to a previously created demirealm or create a new one each time. All items remain within the demirealm.",
        baseBP: 1,
        baseEnergy: 80,
        type: "base"
    },
    {
        name: "Realmshift",
        description: "Transport target to a different realm known to you, or a random unknown realm of the RM's choice. Targets mental fortitude or evasion of the target creature if it is unwilling.",
        baseBP: 1,
        baseEnergy: 70,
        type: "base"
    },
    {
        name: "Negate Gravity",
        description: "Negate gravity for target for the duration. Targets without gravity cannot move using the ground unless they grapple it. If hit, they automatically take 3 spaces of movement knockback, including upward, if not holding onto something. Once moving in a direction, they continue moving in that direction at a pace equal to the number of spaces they moved each round unless they're able to control themselves or stop somehow.",
        baseBP: 1,
        baseEnergy: 30,
        type: "base"
    },
    {
        name: "Invert or Redirect Gravity",
        description: "Target's gravity is redirected to a certain direction. They treat the world as if for them gravity affects them and all they are wearing in this new direction. If they would fall, they fall 12 spaces in the direction of gravity per round their gravity is affected.",
        baseBP: 1,
        baseEnergy: 42,
        type: "base"
    },
    {
        name: "Increase Gravity",
        description: "The effect of gravity on the target doubles. 10 EN, +1 BP for each additional multiplier of increase (triple, quadruple, etc.). Each level of increased gravity causes fall damage and speed to double, -1 to Reflex and physical attack rolls for each level of gravity increase. Movement speed on the 'ground' gravity affects is reduced by 1 for each level of increase to a minimum of 1 MS. When tripling gravity increase or more, the target takes 1d4 bludgeoning damage at the beginning of its turn +1d4 for each level of increase.",
        baseBP: 1,
        baseEnergy: 20,
        opt1Cost: 10,
        opt1Description: "For each additional multiplier of gravity increase (e.g., triple, quadruple).",
        BPIncreaseOpt1: 1,
        type: "base"
    },
    {
        name: "Gravity Center",
        description: "Create a new center of gravity at the target point. Creatures and objects not secured to something within 1 space of this point are pulled closer to it on a failed Might check against your potency. If pulled in, creatures and objects can occupy the same space as others pulled into the gravity center.",
        baseBP: 1,
        baseEnergy: 12,
        opt1Cost: 8,
        opt1Description: "Increase the range of the gravity center by 1 space.",
        BPIncreaseOpt1: 1,
        type: "base"
    },
    {
        name: "Freeze Time",
        description: "Time stops for every target and object, except those your character is touching or carrying before freezing time. Using any powers or techniques or making any attacks while time is frozen that would harm another creature causes this power to end immediately, unfreezing time and resuming initiative order with the turn after yours.",
        baseBP: 1,
        baseEnergy: 28,
        opt1Cost: 15,
        opt1Description: "For each additional round of frozen time.",
        BPIncreaseOpt1: 1,
        type: "base"
    },
    {
        name: "Rewind Time",
        description: "Time reverses a target creature or object, placing them in the state they were in exactly one round before. They return to the original condition and position they were in at the beginning of the turn in which time was rewound. If the target is unwilling, you target their Evasion.",
        baseBP: 1,
        baseEnergy: 28,
        opt1Cost: 12,
        opt1Description: "For each additional round(s) of rewound time.",
        BPIncreaseOpt1: 1,
        type: "base"
    },
    {
        name: "Terraform",
        description: "Change 100 spaces in each direction into a terrain of your choice that would occur naturally in nature. The Realm Master decides how the terrain affects targets, but you may decide the terrain type and what it generally looks like.",
        baseBP: 1,
        baseEnergy: 30,
        opt1Cost: 10,
        opt1Description: "Increase the range by 100 spaces.",
        BPIncreaseOpt1: 1,
        opt2Cost: 10,
        opt2Description: "Add 1d2 damage per turn to the terrain landscape, targeting Reflex (e.g., volcanic terrain causing 1d2 fire damage).",
        BPIncreaseOpt2: 1,
        opt3Cost: 15,
        opt3Description: "Add an additional 5 minutes of duration.",
        BPIncreaseOpt3: 1,
        type: "base"
    },
    {
        name: "Growth",
        description: "Grow any living plant in range. +3 EN for each space the plant grows and fills (up, down, sideways, etc.).",
        baseBP: 1,
        baseEnergy: 3,
        opt1Cost: 1,
        opt1Description: "For each additional space the plant fills.",
        BPIncreaseOpt1: 1,
        type: "base"
    },
    {
        name: "Empowered Plant",
        description: "Target plant in range holds the effects of the power. If the power is an attack power, the plant may use the power once per round at the beginning of the round for as many rounds as the space(s) the plant occupies.",
        baseBP: 1,
        baseEnergy: 6,
        opt1Cost: 4,
        opt1Description: "For each additional minute this effect lasts.",
        BPIncreaseOpt1: 1,
        type: "base"
    }
];

export default powerPartsData;
