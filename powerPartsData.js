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
        useAltCost: false,
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
        useAltCost: false,
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
        type: "increase"
    },
    {
        name: "Specified Exceptions",
        description: "2 EN: When you use this power you may specify a creature or objects who are either immune to the power's effects, or are the only creature and/or objects which can be affected by the effect. +2 EN for each additional target you can specify.",
        baseBP: 1,
        baseEnergy: 2,
        opt1Cost: 2,
        opt1Description: "+2 EN for each additional target you can specify.",
        BPIncreaseOpt1: 0,
        type: "increase"
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
        type: "increase"
    },
    {
        name: "Quick Action",
        description: "1/4 EN: This power uses a quick action to activate instead of a basic action.",
        baseBP: 1,
        baseEnergy: 0.25,
        type: "increase"
    },
    {
        name: "Free Action",
        description: "1/2 EN: This power uses a free action to activate instead of a basic action.",
        baseBP: 1,
        baseEnergy: 0.5,
        type: "increase"
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
        name: "Spend More Action Points to Use",
        description: "-1/8 EN: This power takes 1 more AP to perform (cannot be added to a quick or free action power). -1/8 EN: For each additional 1 AP required. This type of power can only be used with this reduced cost if used inside combat and does not linger longer than 1 minute (10 rounds).",
        baseBP: 1,
        baseEnergy: -0.125,
        opt1Cost: -0.125,
        opt1Description: "-1/8 EN: For each additional 1 AP required.",
        BPIncreaseOpt1: 0,
        type: "decrease"
    },
    {
        name: "Sustain",
        description: "-1/4 EN: From the cost of linger. Before the end of your turn, you must spend 1 AP to sustain this power and keep its effects active. -1/8 EN: More from the cost of linger for each additional AP you must spend to sustain it.",
        baseBP: 1,
        baseEnergy: -0.25,
        opt1Cost: -0.125,
        opt1Description: "-1/8 EN: More from the cost of linger for each additional AP you must spend to sustain it.",
        BPIncreaseOpt1: 0,
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
        name: "Focus For Duration",
        description: "-1/4 EN from linger: Each time you are hit while the power lasts, roll a power attack to maintain focus. The roll must exceed or equal half the damage taken or 10 (whichever is higher), or the power ends. If this applies to area effects, reduce the cost of linger by an additional ¼ EN (total -½ EN).",
        baseBP: 1,
        baseEnergy: -0.25,
        opt1Cost: -0.25,
        opt1Description: "Reduce the cost of linger by an additional ¼ EN (total -½ EN).",
        BPIncreaseOpt1: 0,
        type: "decrease"
    },
    {
        name: "Reverse Effects",
        description: "-X EN: If your power benefits yourself or an ally, you can add a negative effect for you or an ally to reduce the power's cost by an amount equal to ½ the energy cost of the negative part. The negative effect cannot be nullified by you or an ally.",
        baseBP: 1,
        baseEnergy: -0.5,
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
        baseBP: 1,
        baseEnergy: 0,
        type: "base"
    },
    {
        name: "Immune to Effect on Overcome",
        description: "-1/4 EN: When a target overcomes any part of this power, that part of the power can no longer target them. Example: You cause a target to take 1d4 fire damage when you meet or beat its evasion with an attack roll, then the target rolls Reflex against your potency or begins burning taking 1d4 fire damage at the end of each turn. If the target's evasion was overcome but they overcame the Reflex roll, they would take the initial damage and not the persistent damage. If you targeted the creature with this power again they wouldn't have to roll reflex, and would treat that part of the power as if it wasn't there.",
        baseBP: 1,
        baseEnergy: -0.25,
        type: "base"
    },
    {
        name: "Rite",
        description: "1 BP: You may use a power for free if you spend 10 minutes casting it and it meets these criteria: The total EN cost is no more than ¼ of your maximum EN. It causes no damage or healing. Its function is to locate, identify, summon, or traverse something, communicate, or seek/obtain information. If summoning, the creature summoned is at most ⅛ of your level. You can only have one summon this way.",
        baseBP: 1,
        baseEnergy: 0,
        type: "base"
    },
    {
        name: "Split Power Parts into Groups",
        description: "Group of Power Parts: You may treat part of a power as a separate power to apply unique stipulations (e.g., only part of a power lingers). Calculate each power individually, then combine the costs for the total EN cost.",
        baseBP: 1,
        baseEnergy: 0,
        type: "base"
    },
    {
        name: "Different Effects Each Round",
        description: "X EN: Separate this power into different parts that each take effect on a set round of the power's duration. Only pay the lingering cost and power energy cost of the most expensive round effect/part of this power. When creating a power using this part, only pay the BP cost for the round with the highest BP cost, not for each option.",
        baseBP: 1,
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
        useAltCost: false,
        type: "base"
    },
    {
        name: "Invisible Power",
        description: "Power is invisible, the location of its effect cannot be seen, nor can its path of travel and so on.",
        baseBP: 1,
        baseEnergy: 4,
        useAltCost: false,
        type: "base"
    },
    {
        name: "Subtle Power Use",
        description: "Use the power undetected; creatures cannot perceive you are using a power or are the one who used the power if it was already used.",
        baseBP: 1,
        baseEnergy: 5,
        opt1Cost: 0,
        opt1Description: "Creatures can roll discernment against your potency to attempt to perceive you as the power user.",
        BPIncreaseOpt1: 0,
        useAltCost: false,
        type: "base"
    },
    {
        name: "Cause to Lose Focus",
        description: "Target loses focus. Targets any defense of your choice other than evasion that’s already part of the power, otherwise targets mental fortitude or resolve.",
        baseBP: 1,
        baseEnergy: 3,
        useAltCost: false,
        type: "base"
    },
    {
        name: "Dousing",
        description: "Power douses exposed flame in the area that aren't an active power (this can still be used to counter fire powers).",
        baseBP: 1,
        baseEnergy: 2,
        useAltCost: false,
        type: "base"
    },
    {
        name: "Flammable",
        description: "The area or creature your power affects is flammable while the power affects them. If touched by fire, the area or creature ignites, taking 1d4 fire damage each turn until an interaction is taken to put a target or 1 space of fire out.",
        baseBP: 1,
        baseEnergy: 2,
        useAltCost: false,
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
        altBP: 0,
        useAltCost: false,
        type: "base"
    },
    {
        name: "Attack / Potency Increase",
        description: "Increase the attack roll or potency of this power by +1.",
        baseBP: 1,
        baseEnergy: 0.125,
        opt1Cost: 0.125,
        opt1Description: "+1 for each additional +1, up to a maximum increase of +5.",
        BPIncreaseOpt1: 0,
        useAltCost: false,
        type: "increase"
    },
    {
        name: "Reaction",
        description: "This power uses a basic reaction instead of a basic action.",
        baseBP: 1,
        baseEnergy: 0.25,
        useAltCost: false,
        type: "increase"
    },
    {
        name: "Range",
        description: "Add a base range of 3 spaces to your power.",
        baseBP: 1,
        baseEnergy: 0.5,
        opt1Cost: 0.5,
        opt1Description: "+0.5 EN for every additional 3 spaces added.",
        BPIncreaseOpt1: 0,
        useAltCost: false,
        type: "increase"
    },
    {
        name: "Personal Power Linger",
        description: "Cause an offensive-based power to become an option for you to use each round using the same action which you spent to use it.",
        baseBP: 1,
        baseEnergy: 0.5,
        opt1Cost: 0.5,
        opt1Description: "Each round you may make another attack with this power without spending the energy. You have this option for as long as the power lingers.",
        BPIncreaseOpt1: 0,
        altBaseEnergy: -0.5,
        altEnergyDescription: "Reduce cost if the power has focus, does not directly harm a target, or only activates once during the linger duration.",
        altBP: 0,
        useAltCost: true,
        type: "decrease"
    },
    {
        name: "Linger",
        description: "Extend the power’s effects for an additional round.",
        baseBP: 1,
        baseEnergy: 0.125,
        opt1Cost: 0.125,
        opt1Description: "+0.125 EN for each additional round of lingering (up to 10 rounds).",
        BPIncreaseOpt1: 0,
        altBaseEnergy: -0.5,
        altEnergyDescription: "Reduce cost if the power has focus, does not directly harm a target, or only activates once during the linger duration.",
        altBP: 0,
        useAltCost: true,
        type: "decrease"
    }
];

export default powerPartsData;
