const originLabels = ["low", "medium", "high", "overworld", "nether", "end", "combat", "utility", "exploration"]

const infoOrigin = {

    chelonian: {
        name: "chelonian",
        impact: "low",
        dimension: "overworld",
        archetype: "combat",
        components: {
            head: { id: "sturdy_shellmet", type: "diamond_helmet", set: { half: 0, full: 0 } },
            body: { id: "sturdy_caraplate", type: "diamond_chestplate", set: { half: 0, full: 0 } },
            legs: { id: "sturdy_carapants", type: "diamond_leggings", set: { half: 0, full: 0 } },
            feet: { id: "sturdy_scoots", type: "diamond_boots", set: { half: 0, full: 0 } },
            sign: { id: "shelled_sword", type: "diamond_sword", set: { equip: 0, active: 0 } }
        },
        set: { half: 0, full: 0, item: 0 }
    },
    druid: {
        name: "druid",
        impact: "low",
        dimension: "overworld",
        archetype: "utility",
        components: {
            head: { id: "stewards_crown", type: "diamond_helmet", set: { half: 0, full: 0 } },
            body: { id: "stewards_bark", type: "diamond_chestplate", set: { half: 0, full: 0 } },
            legs: { id: "stewards_trunk", type: "diamond_leggings", set: { half: 0, full: 0 } },
            feet: { id: "stewards_roots", type: "diamond_boots", set: { half: 0, full: 0 } },
            sign: { id: "sower_of_life", type: "diamond_hoe", set: { equip: 0, active: 0 } }
        },
        set: { half: 0, full: 0, item: 0 }
    },
    anuran: {
        name: "anuran",
        impact: "low",
        dimension: "overworld",
        archetype: "exploration",
        components: {
            head: { id: "frogboys_hat", type: "diamond_helmet", set: { half: 0, full: 0 } },
            body: { id: "frogboys_jacket", type: "diamond_chestplate", set: { half: 0, full: 0 } },
            legs: { id: "frogboys_pantaloons", type: "diamond_leggings", set: { half: 0, full: 0 } },
            feet: { id: "frogboys_boots", type: "diamond_boots", set: { half: 0, full: 0 } },
            sign: { id: "sticky_lasso", type: "lead", set: { equip: 0, active: 0 } }
        },
        set: { half: 0, full: 0, item: 0 }
    },
    lycan: {
        name: "lycan", impact: "medium", dimension: "overworld", archetype: "combat", components: {
            head: { id: "hunters_hood", type: "diamond_helmet", set: { half: 0, full: 0 } },
            body: { id: "hunters_cloak", type: "diamond_chestplate", set: { half: 0, full: 0 } },
            legs: { id: "hunters_leggings", type: "diamond_leggings", set: { half: 0, full: 0 } },
            feet: { id: "hunters_boots", type: "diamond_boots", set: { half: 0, full: 0 } },
            sign: { id: "protector_of_a_kin", type: "diamond_axe", set: { equip: 0, active: 0 } }
        },
        set: { half: 0, full: 0, item: 0 }
    },
    villager: {
        name: "villager", impact: "medium", dimension: "overworld", archetype: "utility", components: {
            head: { id: "ornate_emerald_helmet", type: "diamond_helmet", set: { half: 0, full: 0 } },
            body: { id: "ornate_emerald_chestplate", type: "diamond_chestplate", set: { half: 0, full: 0 } },
            legs: { id: "ornate_emerald_leggings", type: "diamond_leggings", set: { half: 0, full: 0 } },
            feet: { id: "ornate_emerald_boots", type: "diamond_boots", set: { half: 0, full: 0 } },
            sign: { id: "exquisite_stick", type: "stick", set: { equip: 0, active: 0 } }
        },
        set: { half: 0, full: 0, item: 0 }
    },
    merrow: {
        name: "merrow", impact: "medium", dimension: "overworld", archetype: "exploration", components: {
            head: { id: "crown_of_rising_tides", type: "diamond_helmet", set: { half: 0, full: 0 } },
            body: { id: "chestpiece_of_parting_seas", type: "diamond_chestplate", set: { half: 0, full: 0 } },
            legs: { id: "ceremonial_gown", type: "diamond_leggings", set: { half: 0, full: 0 } },
            feet: { id: "cerulean_shoes", type: "diamond_boots", set: { half: 0, full: 0 } },
            sign: { id: "archaic_conduit", type: "heart_of_the_sea", set: { equip: 0, active: 0 } }
        },
        set: { half: 0, full: 0, item: 0 }
    },
    creeper: {
        name: "creeper", impact: "high", dimension: "overworld", archetype: "combat", components: {
            head: { id: "camo_bucket_hat", type: "diamond_helmet", set: { half: 0, full: 0 } },
            body: { id: "demolition_vest", type: "diamond_chestplate", set: { half: 0, full: 0 } },
            legs: { id: "camo_leggings", type: "diamond_leggings", set: { half: 0, full: 0 } },
            feet: { id: "blast_proof_boots", type: "diamond_boots", set: { half: 0, full: 0 } },
            sign: { id: "supercharged_flint_and_steel", type: "flint_and_steel", set: { equip: 0, active: 0 } }
        },
        set: { half: 0, full: 0, item: 0 }
    },
    allay: {
        name: "allay", impact: "high", dimension: "overworld", archetype: "utility", components: {
            head: { id: "hoarders_headwear", type: "diamond_helmet", set: { half: 0, full: 0 } },
            body: { id: "kleptomaniacs_corset", type: "diamond_chestplate", set: { half: 0, full: 0 } },
            legs: { id: "spectral_skirt", type: "diamond_leggings", set: { half: 0, full: 0 } },
            feet: { id: "fetchiglass_slippers", type: "diamond_boots", set: { half: 0, full: 0 } },
            sign: { id: "collectors_special", type: "diamond_pickaxe", set: { equip: 0, active: 0 } }
        },
        set: { half: 0, full: 0, item: 0 }
    },
    sculkcritter: {
        name: "sculkcritter", impact: "high", dimension: "overworld", archetype: "exploration", components: {
            head: { id: "senseless_eyes", type: "diamond_helmet", set: { half: 0, full: 0 } },
            body: { id: "soulpowered_wingspan", type: "elytra", set: { half: 0, full: 0 } },
            legs: { id: "seismic_legs", type: "diamond_leggings", set: { half: 0, full: 0 } },
            feet: { id: "watchful_feet", type: "diamond_boots", set: { half: 0, full: 0 } },
            sign: { id: "colony_of_a_thousand_ears", type: "diamond_sword", set: { equip: 0, active: 0 } }
        },
        set: { half: 0, full: 0, item: 0 }
    }

}

const infoGeneric = {

    bandit: {
        name: "bandit",
        components: {
            head: { id: "bandits_eye_mask", set: 0 },
            body: { id: "bandits_striped_shirt", set: 0 },
            legs: { id: "bandits_leggings", set: 0 },
            feet: { id: "bandits_boots", set: 0 }
        }
    },
    diver: {
        name: "diver",
        components: {
            head: { id: "divers_snorkel_mask", set: 0 },
            body: { id: "divers_breathing_tank", set: 0 },
            legs: { id: "divers_swimsuit", set: 0 },
            feet: { id: "divers_scuba_fins", set: 0 }
        }
    },
    dreamer: {
        name: "dreamer",
        components: {
            head: { id: "dreamers_cap", set: 0 },
            body: { id: "dreamers_shirt", set: 0 },
            legs: { id: "dreamers_pants", set: 0 },
            feet: { id: "dreamers_slippers", set: 0 }
        }
    },
    dummy: {
        name: "dummy",
        components: {
            head: { id: "dummys_paper_bag", set: 0 },
            body: { id: "dummys_costume", set: 0 },
            legs: { id: "dummys_knee_guards", set: 0 },
            feet: { id: "dummys_clogs", set: 0 }
        }
    },
    farmer: {
        name: "farmer",
        components: {
            head: { id: "farmers_straw_hat", set: 0 },
            body: { id: "farmers_overalls", set: 0 },
            legs: { id: "farmers_trousers", set: 0 },
            feet: { id: "farmers_boots", set: 0 }
        }
    },
    guard: {
        name: "guard",
        components: {
            head: { id: "guards_helmet", set: 0 },
            body: { id: "guards_chestplate", set: 0 },
            legs: { id: "guards_leggings", set: 0 },
            feet: { id: "guards_boots", set: 0 }
        }
    },
    miner: {
        name: "miner",
        components: {
            head: { id: "miners_helmet", set: 0 },
            body: { id: "miners_gadget_belt", set: 0 },
            legs: { id: "miners_leggings", set: 0 },
            feet: { id: "miners_boots", set: 0 }
        }
    },
    pacifist: {
        name: "pacifist",
        components: {
            head: { id: "pacifists_worn_bandana", set: 0 },
            body: { id: "pacifists_tiedye_shirt", set: 0 },
            legs: { id: "pacifists_flowery_pants", set: 0 },
            feet: { id: "pacifists_opentoed_sandals", set: 0 }
        }
    },
    runner: {
        name: "runner",
        components: {
            head: { id: "runners_headband", set: 0 },
            body: { id: "runners_tank_top", set: 0 },
            legs: { id: "runners_shorts", set: 0 },
            feet: { id: "runners_shoes", set: 0 }
        }
    }

}

const goldTable = [
    "minecraft:emerald",
    "minecraft:lapis_lazuli",
    "minecraft:redstone",
    Ingredient.of("/.*map.*/").itemIds,
    Ingredient.of("/.*ingot.*/").itemIds,
    Ingredient.of("/.*helmet.*/").itemIds,
    Ingredient.of("/.*chestplate.*/").itemIds,
    Ingredient.of("/.*leggings.*/").itemIds,
    Ingredient.of("/.*boots.*/").itemIds
]

const netheriteTable = [
    "minecraft:enchanted_book",
    "minecraft:totem_of_undying",
    ItemFilter.ENCHANTED,
    Ingredient.of("/.*golden_apple/").itemIds,
    Ingredient.of("/.*diamond.*/").itemIds,
    Ingredient.of("/.*netherite.*/").itemIds
]

const goldCrests = [
    "tepids_origins:golden_low_crest",
    "tepids_origins:golden_medium_crest",
    "tepids_origins:golden_high_crest",

    "tepids_origins:golden_overworld_crest",
    "tepids_origins:golden_nether_crest",
    "tepids_origins:golden_end_crest",

    "tepids_origins:golden_combat_crest",
    "tepids_origins:golden_utility_crest",
    "tepids_origins:golden_exploration_crest"
]

const netheriteCrests = [
    "tepids_origins:netherite_low_crest",
    "tepids_origins:netherite_medium_crest",
    "tepids_origins:netherite_high_crest",

    "tepids_origins:netherite_overworld_crest",
    "tepids_origins:netherite_nether_crest",
    "tepids_origins:netherite_end_crest",

    "tepids_origins:netherite_combat_crest",
    "tepids_origins:netherite_utility_crest",
    "tepids_origins:netherite_exploration_crest"
]

const genericDrops = [
    "tepids_origins:bandits_eye_mask",
    "tepids_origins:bandits_striped_shirt",
    "tepids_origins:bandits_leggings",
    "tepids_origins:bandits_boots",

    "tepids_origins:divers_snorkel_mask",
    "tepids_origins:divers_breathing_tank",
    "tepids_origins:divers_swimsuit",
    "tepids_origins:divers_scuba_fins",

    "tepids_origins:dreamers_cap",
    "tepids_origins:dreamers_shirt",
    "tepids_origins:dreamers_pants",
    "tepids_origins:dreamers_slippers",

    "tepids_origins:dummys_paper_bag",
    "tepids_origins:dummys_costume",
    "tepids_origins:dummys_knee_guards",
    "tepids_origins:dummys_clogs",

    "tepids_origins:farmers_straw_hat",
    "tepids_origins:farmers_overalls",
    "tepids_origins:farmers_trousers",
    "tepids_origins:farmers_boots",

    "tepids_origins:guards_helmet",
    "tepids_origins:guards_chestplate",
    "tepids_origins:guards_leggings",
    "tepids_origins:guards_boots",

    "tepids_origins:miners_helmet",
    "tepids_origins:miners_gadget_belt",
    "tepids_origins:miners_leggings",
    "tepids_origins:miners_boots",

    "tepids_origins:pacifists_worn_bandana",
    "tepids_origins:pacifists_tiedye_shirt",
    "tepids_origins:pacifists_flowery_pants",
    "tepids_origins:pacifists_opentoed_sandals",

    "tepids_origins:runners_headband",
    "tepids_origins:runners_tank_top",
    "tepids_origins:runners_shorts",
    "tepids_origins:runners_shoes"
]