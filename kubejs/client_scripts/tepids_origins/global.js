let labelText

const originSets = {
    chelonian: { 
        name: "Sturdy Carapace",
        origin: "chelonian",
        archetype: "combat",
        texture: { set: "MarioMak967 & Pseuu", item: "Fancybread" },
        components: { 
            head: { id: "sturdy_shellmet", text: "A helmet imbued with the shells of many sea turtles." },
            body: { id: "sturdy_caraplate", text: "A chestplate imbued with the shells of many sea turtles." },
            legs: { id: "sturdy_carapants", text: "A pair of leggings imbued with the shells of many sea turtles." },
            feet: { id: "sturdy_scoots", text: "A pair of boots imbued with the shells of many sea turtles." },
            sign: { id: "shelled_sword", text: "A sword encased by generations of turtle scutes." }
        }, 
        half: "Reduces Melee Damage Taken.", 
        full: "Reduces Incendiary & Magic Damage Taken.\nTaking a hit reduces the damage of the next hit taken.", 
        equip: "Gain extra Defense Points.", 
        active: "Briefly increases Attack Damage by a portion of current Defense Points."
    },
    druid: { 
        name: "Steward's Uniform",
        origin: "druid",
        archetype: "utility",
        texture: { set: "MarioMak967 & Pseuu", item: "Fancybread" },
        components: { 
            head: { id: "stewards_crown", text: "A prickly crown made of branches, leaves and thorns." },
            body: { id: "stewards_bark", text: "A chestplate flowing with the life of nature itself." },
            legs: { id: "stewards_trunk", text: "A skirt made from the bark of many overgrown trees." },
            feet: { id: "stewards_roots", text: "A pair of sandals created from the very soil it steps on." },
            sign: { id: "sower_of_life", text: "A scythe capable of forming life in even the most desolate places." }
        }, 
        half: "Increases XP Gain.", 
        full: "Increases Effect Resistance.\nUsing an ability periodically heals nearby allies.", 
        equip: "Periodically increases nearby plant growth.\nHarvesting crops gives XP.", 
        active: "Briefly increases Melee Damage Dealt.\nAttacks during this period heal and steal XP."
    },
    anuran: { 
        name: "Slimey Outlaw",
        origin: "anuran",
        archetype: "exploration",
        texture: { set: "Fancybread & Pseuu", item: "Fancybread" },
        components: { 
            head: { id: "frogboys_hat", text: "A shiny hat that feels squishy to the touch." },
            body: { id: "frogboys_jacket", text: "A stylish vest that evokes the wild swamps." },
            legs: { id: "frogboys_pantaloons", text: "A pair of eye-catching green shotgun chaps." },
            feet: { id: "frogboys_boots", text: "A pair of leather boots with glistening spurs on the sides." },
            sign: { id: "sticky_lasso", text: "The peacemaker of the wild wild swamps." }
        }, 
        half: "Reduces Fall Damage Taken.", 
        full: "Increases Movement Speed.\nTaking lethal fall damage briefly boosts this effect and heals instead.", 
        equip: "Gain a chance to obtain Slime Balls when jumping.", 
        active: "Briefly makes all blocks bouncy.\nLaunches you in the aimed block's direction.\nDeals damage and pulls aimed entities."
    },
    lycan: { 
        name: "Fierce Hunter",
        origin: "lycan",
        archetype: "combat",
        texture: { set: "OctCube_ & Pseuu", item: "Fancybread" },
        components: { 
            head: { id: "hunters_hood", text: "A skull of the prey, turned into a hat." },
            body: { id: "hunters_cloak", text: "A warm cape adorned with many bones." },
            legs: { id: "hunters_leggings", text: "A pair of light leggings dyed in blood red." },
            feet: { id: "hunters_boots", text: "A pair of shoes dyed in blood red." },
            sign: { id: "protector_of_a_kin", text: "A sign of love and protection for the pack." }
        }, 
        half: "Increases Attack Speed.", 
        full: "Increases Melee Damage Dealt.\nUsing an ability further boosts the next melee attack.", 
        equip: "Increases the Max HP and Attack Damage of all tamed wolves nearby.", 
        active: "Dash forward and deal a large amount of damage.\nResets all ability cooldowns."
    },
    villager: { 
        name: "Ornate Emerald",
        origin: "villager",
        archetype: "utility",
        texture: { set: "Fancybread & Pseuu", item: "Fancybread" },
        components: { 
            head: { id: "ornate_emerald_helmet", text: "A flashy helmet decorated with many emeralds." },
            body: { id: "ornate_emerald_chestplate", text: "A flashy chestplate decorated with many emeralds." },
            legs: { id: "ornate_emerald_leggings", text: "A flashy pair of leggins decorated with many emeralds." },
            feet: { id: "ornate_emerald_boots", text: "A flashy pair of boots decorated with many emeralds." },
            sign: { id: "exquisite_stick", text: "The best of its kind. (No returns accepted)" }
        }, 
        half: "Increases Attack Damage.", 
        full: "Increases Knockback Resistance.\nUsing an ability briefly increases nearby allies' Damage Dealt.", 
        equip: "During combat, regenerate Saturation for nearby allies. The longer this item is held, the more likely it will additionally restore Hunger.", 
        active: "Briefly increases Attack Damage and reduces Melee Damage Dealt."
    },
    merrow: { 
        name: "Maritime Monarch",
        origin: "merrow",
        archetype: "exploration",
        texture: { set: "OctCube_ & Pseuu", item: "Fancybread" },
        components: { 
            head: { id: "crown_of_rising_tides", text: "An old artifact that does not suffocate Merrows who wear it." },
            body: { id: "chestpiece_of_parting_seas", text: "An ancient relic said to make water as light as air." },
            legs: { id: "ceremonial_gown", text: "A traditional dress rumored to bring good luck to those who wear it." },
            feet: { id: "cerulean_shoes", text: "A pair of prismarine boots originally designed to help Merrows walk on land." },
            sign: { id: "archaic_conduit", text: "An activated Heart of the Sea, separated from its outer shell." }
        }, 
        half: "Increases Luck.", 
        full: "Decreases Drowning Rate.\nOn land, reduce Damage Taken. Under water, increase Melee Damage Dealt.", 
        equip: "Gain the ability to walk on water.\nPeriodically gain Conduit Power.", 
        active: "Create a temporary field that grants allies Luck and reduced Drowning Rate near water."
    },
    creeper: { 
        name: "Cactus Camouflage",
        origin: "creeper",
        archetype: "combat",
        texture: { set: "Zorestrough & Pseuu", item: "Fancybread" },
        components: { 
            head: { id: "camo_bucket_hat", text: "A bucket hat sturdy enough to withstand head-first dives." },
            body: { id: "demolition_vest", text: "A blast resistant vest tailored in a stealthy camo print." },
            legs: { id: "camo_leggings", text: "A pair of leggings made to blend into its surroundings." },
            feet: { id: "blast_proof_boots", text: "A pair of combat boots designed to protect against explosives." },
            sign: { id: "supercharged_flint_and_steel", text: "A custom-made firestarter capable of fueling itself." }
        }, 
        half: "Reduces mob detection range.", 
        full: "Increases Movement Speed.\nIncrease Damage Dealt for every second without dealing damage.", 
        equip: "While on cooldown, increases Incendiary Damage Dealt.\nOtherwise, increases Movement Speed while sneaking.", 
        active: "Summons a lightning bolt and 3 TNT at the aimed block."
    },
    allay: { 
        name: "Zealous Wisp",
        origin: "allay",
        archetype: "utility",
        texture: { set: "OctCube_ & C_rry", item: "Fancybread" },
        components: { 
            head: { id: "hoarders_headwear", text: "An ancient artifact from a civilization long gone, modified by an Allay because the colors didn't suit them." },
            body: { id: "kleptomaniacs_corset", text: "Someone's old wedding dress. The owner has already accepted they're not getting it back." },
            legs: { id: "spectral_skirt", text: "There are many rumors about how it mysteriously vanished one day. In truth, an Allay simply stole it." },
            feet: { id: "fetchiglass_slippers", text: "So fragile they'd collapse into a pile of crystals if an item fell in the wrong place." },
            sign: { id: "collectors_special", text: "An amalgamation of all sorts of different tools. It's surprisingly well crafted." }
        }, 
        half: "Increases item pickup range.", 
        full: "Increases Mining Speed.\nPicking up an item grants one point. At max points, reduce the ability cooldowns of nearby allies.", 
        equip: "Counts as the effective tool for any mineable block.", 
        active: "Briefly grants Movement Speed.\nEach block mined during this time doubles Mining Speed."
    },
    sculkcritter: { 
        name: "Warden's Disciple",
        origin: "sculkcritter",
        archetype: "exploration",
        texture: { set: "Fancybread & C_rry", item: "Fancybread" },
        components: { 
            head: { id: "senseless_eyes", text: "A grimey headband, seemingly older than any of its past wearers. It covers the wearer's face." },
            body: { id: "soulpowered_wingspan", text: "Its flight is fueled by its past wearers' victims. It leaves the chest exposed." },
            legs: { id: "seismic_legs", text: "Ancient leggings with a bizarre design. Its jumps shake the very earth and its wearer's soul." },
            feet: { id: "watchful_feet", text: "Filthy boots left behind by an unknown civilization. Each step leaves only death and decay." },
            sign: { id: "colony_of_a_thousand_ears", text: "A glowing blade that feels oddly spongy. It seems to have a life of its own." }
        }, 
        half: "Increases Flying Speed.", 
        full: "Increases Damage Dealt.\nBriefly grants the ability to leap and fall slowly upon hearing a sound.", 
        equip: "Increases Movement Speed after hearing a sound.", 
        active: "Inflicts Magic Damage, Sight of a Warden, and Blindness to entities around you."
    }
}

const genericSets = {
    bandit: {
        name: "bandit",
        texture: "MarioMak967 & Someone404",
        components: {
            head: { id: "bandits_eye_mask", text: "A cap used to conceal a thief's identity." },
            body: { id: "bandits_striped_shirt", text: "Your run-of-the-mill burglar striped tee." },
            legs: { id: "bandits_leggings", text: "Black pants perfect for blending in the dark." },
            feet: { id: "bandits_boots", text: "Black boots, free of stains. Maybe." }
        },
        half: "Increases Melee Damage Dealt from behind."
    },
    diver: {
        name: "diver",
        texture: "Zorestrough & WaterDroplet02",
        components: {
            head: { id: "divers_snorkel_mask", text: "Orange you glad to sea without issue?" },
            body: { id: "divers_breathing_tank", text: "Reinforced with titanium, this thing could last you for hours!" },
            legs: { id: "divers_swimsuit", text: "A little restricting for your body, but it'll do." },
            feet: { id: "divers_scuba_fins", text: "Try running with this on! Even Villagers will be laughing seeing you on the floor." }
        },
        half: "Grants Night Vision and Swimming Speed underwater."
    },
    dreamer: {
        name: "dreamer",
        texture: "Fancybread & WaterDroplet02",
        components: {
            head: { id: "dreamers_cap", text: "Undeniably a necessary item for a good night's sleep." },
            body: { id: "dreamers_shirt", text: "A soft and cozy striped shirt that feels warm to the touch." },
            legs: { id: "dreamers_pants", text: "Perfect to get angry over spilling hot chocolate on." },
            feet: { id: "dreamers_slippers", text: "They always look more stylish than they actually are in the moment." }
        },
        half: "Heals and restores Hunger & Saturation upon waking up."
    },
    dummy: {
        name: "dummy",
        texture: "Zorestrough & WaterDroplet02",
        components: {
            head: { id: "dummys_paper_bag", text: "You wouldn't hurt someone with this face... Would you?" },
            body: { id: "dummys_costume", text: "Still feels a bit prickly on the inside from the harsh treatment." },
            legs: { id: "dummys_knee_guards", text: "An amalgamation of leather and cardboard. It has seen better days..." },
            feet: { id: "dummys_clogs", text: "Very constricting and uncomfortable wooden footwear." }
        },
        half: "Heals after being repeatedly hit without retaliation."
    },
    farmer: {
        name: "farmer",
        texture: "MarioMak967 & Someone404",
        components: {
            head: { id: "farmers_straw_hat", text: "Smells of bucolic landscapes and obedient herds." },
            body: { id: "farmers_overalls", text: "A one-size-fits-all overall. The shirt has a few dirt stains." },
            legs: { id: "farmers_trousers", text: "A one-size-fits-all overall. The trousers feel very light." },
            feet: { id: "farmers_boots", text: "Muddy boots that surprisingly don't smell that bad." }
        },
        half: "Reduces breeding cooldown."
    },
    guard: {
        name: "guard",
        texture: "Fancybread & WaterDroplet02",
        components: {
            head: { id: "guards_helmet", text: "A shiny helmet a valiant knight once wore." },
            body: { id: "guards_chestplate", text: "A chestpiece with scratches from battles of yore." },
            legs: { id: "guards_leggings", text: "Tailored leggings that protected like never before." },
            feet: { id: "guards_boots", text: "Boots that have seen thousands of wars or more." }
        },
        half: "Blocking hits briefly reduces Melee & Projectile Damage Taken."
    },
    miner: {
        name: "miner",
        texture: "MarioMak967",
        components: {
            head: { id: "miners_helmet", text: "A helmet with a flashlight strapped to its front. Caution: may blind unsuspecting onlookers." },
            body: { id: "miners_gadget_belt", text: "A belt strapped around a dusty shirt. It contains every tool one could ask for." },
            legs: { id: "miners_leggings", text: "A simple pair of light leather leggings. Its pockets go down to the knees." },
            feet: { id: "miners_boots", text: "Stylish design. Effective grip. Landslide-proof." }
        },
        half: "Increases Mining Speed with a pickaxe."
    },
    pacifist: {
        name: "pacifist",
        texture: "Pseuu",
        components: {
            head: { id: "pacifists_worn_bandana", text: "It's seen many years of use, but is still sturdy as ever." },
            body: { id: "pacifists_tiedye_shirt", text: "It almost feels too large on you. Maybe that's the point?" },
            legs: { id: "pacifists_flowery_pants", text: "The patterns on the fabric look hand-embroidered." },
            feet: { id: "pacifists_opentoed_sandals", text: "You almost feel lighter wearing these. So free!" }
        },
        half: "Grants extra health out of combat."
    },
    runner: {
        name: "runner",
        texture: "OctCube_ & Pseuu",
        components: {
            head: { id: "runners_headband", text: "Do people even wear these things?" },
            body: { id: "runners_tank_top", text: "Smells of toothpaste, sweat, and The 2nd Ammendment!" },
            legs: { id: "runners_shorts", text: "On the back it reads 'THIS PLACE IS NOT A PLACE OF HONOR'." },
            feet: { id: "runners_shoes", text: "Sells for thousands online! The band-aid, not the shoes." }
        },
        half: "Grants stacking Movement Speed over time while sprinting."
    }
}