Platform.setModName("tepids_origins", "tepid's origins")

const $UUID = Java.loadClass("java.util.UUID")
const $AM$Operation = Java.loadClass("net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation")

const itemOrigin = {

    chelonian: {

        name: "chelonian",
        tier: {
            protection: [3, 5, 10, 3],
            toughness: 0
        },
        components: { 
            head: {
                id: "sturdy_shellmet",
                name: "Sturdy Shellmet",
                type: "helmet",
                stats: {
                    attributePrimary: "undefined",
                    valuePrimary: [0, 0],
                    operationPrimary: "undefined",
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            }, 
            body: {
                id: "sturdy_caraplate",
                name: "Sturdy Caraplate",
                type: "chestplate",
                stats: {
                    attributePrimary: "undefined",
                    valuePrimary: [0, 0],
                    operationPrimary: "undefined",
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            }, 
            legs: {
                id: "sturdy_carapants",
                name: "Sturdy Carapants",
                type: "leggings",
                stats: {
                    attributePrimary: "undefined",
                    valuePrimary: [0, 0],
                    operationPrimary: "undefined",
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            }, 
            feet: {
                id: "sturdy_scoots",
                name: "Sturdy Scoots",
                type: "boots",
                stats: {
                    attributePrimary: "undefined",
                    valuePrimary: [0, 0],
                    operationPrimary: "undefined",
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            },
            item: {
                id: "shelled_sword",
                name: "Shelled Sword",
                type: "sword",
                stats: {
                    attackDamage: [8, 9],
                    attackSpeed: [1.5, 1.6],
                    attributePrimary: "undefined",
                    valuePrimary: [0, 0],
                    operationPrimary: "undefined",
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            }
        }
    
    },

    druid: {

        name: "druid",
        tier: {
            protection: [3, 6, 8, 3],
            toughness: 0
        },
        components: { 
            head: {
                id: "stewards_crown",
                name: "Steward's Crown",
                type: "helmet",
                stats: {
                    attributePrimary: "minecraft:generic.max_health",
                    valuePrimary: [1, 1],
                    operationPrimary: $AM$Operation.ADDITION,
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            }, 
            body: {
                id: "stewards_bark",
                name: "Steward's Bark",
                type: "chestplate",
                stats: {
                    attributePrimary: "undefined",
                    valuePrimary: [0, 0],
                    operationPrimary: "undefined",
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            }, 
            legs: {
                id: "stewards_trunk",
                name: "Steward's Trunk",
                type: "leggings",
                stats: {
                    attributePrimary: "undefined",
                    valuePrimary: [0, 0],
                    operationPrimary: "undefined",
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            }, 
            feet: {
                id: "stewards_roots",
                name: "Steward's Roots",
                type: "boots",
                stats: {
                    attributePrimary: "minecraft:generic.max_health",
                    valuePrimary: [1, 1],
                    operationPrimary: $AM$Operation.ADDITION,
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            },
            item: {
                id: "sower_of_life",
                name: "Sower of Life",
                type: "hoe",
                stats: {
                    attackDamage: [1, 2],
                    attackSpeed: [0, 0],
                    attributePrimary: "additionalentityattributes:dropped_experience",
                    valuePrimary: [0.1, 0.2],
                    operationPrimary: $AM$Operation.MULTIPLY_TOTAL,
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            }
        }
    
    },

    anuran: {

        name: "anuran",
        tier: {
            protection: [2, 5, 6, 2],
            toughness: 4
        },
        components: { 
            head: {
                id: "frogboys_hat",
                name: "Frogboy's Hat",
                type: "helmet",
                stats: {
                    attributePrimary: "undefined",
                    valuePrimary: [0, 0],
                    operationPrimary: "undefined",
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            }, 
            body: {
                id: "frogboys_jacket",
                name: "Frogboy's Jacket",
                type: "chestplate",
                stats: {
                    attributePrimary: "undefined",
                    valuePrimary: [0, 0],
                    operationPrimary: "undefined",
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            }, 
            legs: {
                id: "frogboys_pantaloons",
                name: "Frogboy's Pantaloons",
                type: "leggings",
                stats: {
                    attributePrimary: "undefined",
                    valuePrimary: [0, 0],
                    operationPrimary: "undefined",
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            }, 
            feet: {
                id: "frogboys_boots",
                name: "Frogboy's Boots",
                type: "boots",
                stats: {
                    attributePrimary: "undefined",
                    valuePrimary: [0, 0],
                    operationPrimary: "undefined",
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            },
            item: {
                id: "sticky_lasso",
                name: "Sticky Lasso ",
                type: "sword",
                stats: {
                    attackDamage: [4, 6],
                    attackSpeed: [0, 0],
                    attributePrimary: "minecraft:generic.movement_speed",
                    valuePrimary: [0.1, 0.1],
                    operationPrimary: $AM$Operation.MULTIPLY_TOTAL,
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            }
        }
    
    },

    lycan: {

        name: "lycan",
        tier: {
            protection: [3, 6, 8, 3],
            toughness: 3
        },
        components: { 
            head: {
                id: "hunters_hood",
                name: "Hunter's Hood",
                type: "helmet",
                stats: {
                    attributePrimary: "undefined",
                    valuePrimary: [0, 0],
                    operationPrimary: "undefined",
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            }, 
            body: {
                id: "hunters_cloak",
                name: "Hunter's Cloak",
                type: "chestplate",
                stats: {
                    attributePrimary: "undefined",
                    valuePrimary: [0, 0],
                    operationPrimary: "undefined",
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            }, 
            legs: {
                id: "hunters_leggings",
                name: "Hunter's Leggings",
                type: "leggings",
                stats: {
                    attributePrimary: "undefined",
                    valuePrimary: [0, 0],
                    operationPrimary: "undefined",
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            }, 
            feet: {
                id: "hunters_boots",
                name: "Hunter's Boots",
                type: "boots",
                stats: {
                    attributePrimary: "undefined",
                    valuePrimary: [0, 0],
                    operationPrimary: "undefined",
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            },
            item: {
                id: "protector_of_a_kin",
                name: "Protector of a Kin",
                type: "axe",
                stats: {
                    attackDamage: [12, 14],
                    attackSpeed: [0.5, 0.5],
                    attributePrimary: "undefined",
                    valuePrimary: [0, 0],
                    operationPrimary: "undefined",
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            }
        }
    
    },

    villager: {

        name: "villager",
        tier: {
            protection: [3, 6, 8, 3],
            toughness: 0
        },
        components: { 
            head: {
                id: "ornate_emerald_helmet",
                name: "Ornate Emerald Helmet",
                type: "helmet",
                stats: {
                    attributePrimary: "minecraft:generic.attack_damage",
                    valuePrimary: [0.5, 0.5],
                    operationPrimary: $AM$Operation.ADDITION,
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            }, 
            body: {
                id: "ornate_emerald_chestplate",
                name: "Ornate Emerald Chestplate",
                type: "chestplate",
                stats: {
                    attributePrimary: "undefined",
                    valuePrimary: [0, 0],
                    operationPrimary: "undefined",
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            }, 
            legs: {
                id: "ornate_emerald_leggings",
                name: "Ornate Emerald Leggings",
                type: "leggings",
                stats: {
                    attributePrimary: "undefined",
                    valuePrimary: [0, 0],
                    operationPrimary: "undefined",
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            }, 
            feet: {
                id: "ornate_emerald_boots",
                name: "Ornate Emerald Boots",
                type: "boots",
                stats: {
                    attributePrimary: "minecraft:generic.attack_damage",
                    valuePrimary: [0.5, 0.5],
                    operationPrimary: $AM$Operation.ADDITION,
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            },
            item: {
                id: "exquisite_stick",
                name: "Exquisite Stick",
                type: "sword",
                stats: {
                    attackDamage: [4, 4],
                    attackSpeed: [0, 0],
                    attributePrimary: "minecraft:generic.knockback_resistance",
                    valuePrimary: [0.2, 0.4],
                    operationPrimary: $AM$Operation.ADDITION,
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            }
        }
    
    },

    merrow: {

        name: "merrow",
        tier: {
            protection: [2, 5, 6, 2],
            toughness: 0
        },
        components: { 
            head: {
                id: "crown_of_rising_tides",
                name: "Crown of Rising Tides",
                type: "helmet",
                stats: {
                    attributePrimary: "additionalentityattributes:water_speed",
                    valuePrimary: [0.05, 0.05],
                    operationPrimary: $AM$Operation.MULTIPLY_TOTAL,
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            }, 
            body: {
                id: "chestpiece_of_parting_seas",
                name: "Chestpiece of Parting Seas",
                type: "chestplate",
                stats: {
                    attributePrimary: "additionalentityattributes:water_speed",
                    valuePrimary: [0.05, 0.05],
                    operationPrimary: $AM$Operation.MULTIPLY_TOTAL,
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            }, 
            legs: {
                id: "ceremonial_gown",
                name: "Ceremonial Gown",
                type: "leggings",
                stats: {
                    attributePrimary: "additionalentityattributes:water_speed",
                    valuePrimary: [0.05, 0.05],
                    operationPrimary: $AM$Operation.MULTIPLY_TOTAL,
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            }, 
            feet: {
                id: "cerulean_shoes",
                name: "Cerulean Shoes",
                type: "boots",
                stats: {
                    attributePrimary: "additionalentityattributes:water_speed",
                    valuePrimary: [0.05, 0.05],
                    operationPrimary: $AM$Operation.MULTIPLY_TOTAL,
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            },
            item: {
                id: "archaic_conduit",
                name: "Archaic Conduit",
                type: "sword",
                stats: {
                    attackDamage: [0, 0],
                    attackSpeed: [0, 0],
                    attributePrimary: "minecraft:generic.luck",
                    valuePrimary: [1, 2],
                    operationPrimary: $AM$Operation.ADDITION,
                    attributeSecondary: "additionalentityattributes:water_speed",
                    valueSecondary: [0.1, 0.1],
                    operationSecondary: $AM$Operation.MULTIPLY_TOTAL
                }
            }
        }
    
    },

    creeper: {

        name: "creeper",
        tier: {
            protection: [3, 6, 8, 3],
            toughness: 3
        },
        components: { 
            head: {
                id: "camo_bucket_hat",
                name: "Camo Bucket Hat",
                type: "helmet",
                stats: {
                    attributePrimary: "undefined",
                    valuePrimary: [0, 0],
                    operationPrimary: "undefined",
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            }, 
            body: {
                id: "demolition_vest",
                name: "Demolition Vest",
                type: "chestplate",
                stats: {
                    attributePrimary: "undefined",
                    valuePrimary: [0, 0],
                    operationPrimary: "undefined",
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            }, 
            legs: {
                id: "camo_leggings",
                name: "Camo Leggings",
                type: "leggings",
                stats: {
                    attributePrimary: "undefined",
                    valuePrimary: [0, 0],
                    operationPrimary: "undefined",
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            }, 
            feet: {
                id: "blast_proof_boots",
                name: "Blast-Proof Boots",
                type: "boots",
                stats: {
                    attributePrimary: "undefined",
                    valuePrimary: [0, 0],
                    operationPrimary: "undefined",
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            },
            item: {
                id: "supercharged_flint_and_steel",
                name: "Supercharged Flint and Steel",
                type: "sword",
                stats: {
                    attackDamage: [0, 0],
                    attackSpeed: [0, 0],
                    attributePrimary: "reach-entity-attributes:attack_range",
                    valuePrimary: [1, 1],
                    operationPrimary: $AM$Operation.ADDITION,
                    attributeSecondary: "reach-entity-attributes:reach",
                    valueSecondary: [0.5, 1],
                    operationSecondary: $AM$Operation.ADDITION
                }
            }
        }
    
    },

    allay: {

        name: "allay",
        tier: {
            protection: [2, 5, 6, 2],
            toughness: 0
        },
        components: { 
            head: {
                id: "hoarders_headwear",
                name: "Hoarder's Headwear",
                type: "helmet",
                stats: {
                    attributePrimary: "reach-entity-attributes:reach",
                    valuePrimary: [0.25, 0.25],
                    operationPrimary: $AM$Operation.ADDITION,
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            }, 
            body: {
                id: "kleptomaniacs_corset",
                name: "Kleptomaniac's Corset",
                type: "chestplate",
                stats: {
                    attributePrimary: "reach-entity-attributes:reach",
                    valuePrimary: [0.25, 0.25],
                    operationPrimary: $AM$Operation.ADDITION,
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            }, 
            legs: {
                id: "spectral_skirt",
                name: "Spectral Skirt",
                type: "leggings",
                stats: {
                    attributePrimary: "reach-entity-attributes:reach",
                    valuePrimary: [0.25, 0.25],
                    operationPrimary: $AM$Operation.ADDITION,
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            }, 
            feet: {
                id: "fetchiglass_slippers",
                name: "Fetchiglass Slippers",
                type: "boots",
                stats: {
                    attributePrimary: "reach-entity-attributes:reach",
                    valuePrimary: [0.25, 0.25],
                    operationPrimary: $AM$Operation.ADDITION,
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            },
            item: {
                id: "collectors_special",
                name: "Collector's Special",
                type: "pickaxe",
                stats: {
                    attackDamage: [4, 4],
                    attackSpeed: [0, 0],
                    attributePrimary: "additionalentityattributes:dig_speed",
                    valuePrimary: [0.1, 0.2],
                    operationPrimary: $AM$Operation.MULTIPLY_TOTAL,
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            }
        }
    
    },

    sculkcritter: {

        name: "sculkcritter",
        tier: {
            protection: [3, 6, 0, 3],
            toughness: 3
        },
        components: { 
            head: {
                id: "senseless_eyes",
                name: "Senseless Eyes",
                type: "helmet",
                stats: {
                    attributePrimary: "undefined",
                    valuePrimary: [0, 0],
                    operationPrimary: "undefined",
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            }, 
            body: {
                id: "soulpowered_wingspan",
                name: "Soul-Powered Wingspan",
                type: "chestplate",
                stats: {
                    attributePrimary: "undefined",
                    valuePrimary: [0, 0],
                    operationPrimary: "undefined",
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            }, 
            legs: {
                id: "seismic_legs",
                name: "Seismic Legs",
                type: "leggings",
                stats: {
                    attributePrimary: "undefined",
                    valuePrimary: [0, 0],
                    operationPrimary: "undefined",
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            }, 
            feet: {
                id: "watchful_feet",
                name: "Watchful Feet",
                type: "boots",
                stats: {
                    attributePrimary: "undefined",
                    valuePrimary: [0, 0],
                    operationPrimary: "undefined",
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            },
            item: {
                id: "colony_of_a_thousand_ears",
                name: "Colony of a Thousand Ears",
                type: "sword",
                stats: {
                    attackDamage: [6, 8],
                    attackSpeed: [1.5, 1.5],
                    attributePrimary: "undefined",
                    valuePrimary: [0, 0],
                    operationPrimary: "undefined",
                    attributeSecondary: "undefined",
                    valueSecondary: [0, 0],
                    operationSecondary: "undefined"
                }
            }
        }
    
    }

}

const itemGeneric = {

    bandit: {

        name: "bandit",
        tier: {
            protection: [1, 4, 5, 2],
            toughness: 2
        },
        components: { 
            head: {
                id: "bandits_eye_mask",
                name: "Bandit's Eye Mask",
                type: "helmet"
            }, 
            body: {
                id: "bandits_striped_shirt",
                name: "Bandit's Striped Shirt",
                type: "chestplate"
            }, 
            legs: {
                id: "bandits_leggings",
                name: "Bandit's Leggings",
                type: "leggings"
            }, 
            feet: {
                id: "bandits_boots",
                name: "Bandit's Boots",
                type: "boots"
            }
        }

    },

    diver: {

        name: "diver",
        tier: {
            protection: [2, 5, 6, 2],
            toughness: 1
        },
        components: { 
            head: {
                id: "divers_snorkel_mask",
                name: "Diver's Snorkel Mask",
                type: "helmet"
            }, 
            body: {
                id: "divers_breathing_tank",
                name: "Diver's Breathing Tank",
                type: "chestplate"
            }, 
            legs: {
                id: "divers_swimsuit",
                name: "Diver's Swimsuit",
                type: "leggings"
            }, 
            feet: {
                id: "divers_scuba_fins",
                name: "Diver's Scuba Fins",
                type: "boots"
            }
        }

    },

    dreamer: {

        name: "dreamer",
        tier: {
            protection: [1, 4, 5, 2],
            toughness: 2
        },
        components: { 
            head: {
                id: "dreamers_cap",
                name: "Dreamer's Cap",
                type: "helmet"
            }, 
            body: {
                id: "dreamers_shirt",
                name: "Dreamer's Shirt",
                type: "chestplate"
            }, 
            legs: {
                id: "dreamers_pants",
                name: "Dreamer's Pants",
                type: "leggings"
            }, 
            feet: {
                id: "dreamers_slippers",
                name: "Dreamer's Slippers",
                type: "boots"
            }
        }

    },

    dummy: {

        name: "dummy",
        tier: {
            protection: [2, 5, 6, 2],
            toughness: 1
        },
        components: { 
            head: {
                id: "dummys_paper_bag",
                name: "Dummy's Paper Bag",
                type: "helmet"
            }, 
            body: {
                id: "dummys_costume",
                name: "Dummy's Costume",
                type: "chestplate"
            }, 
            legs: {
                id: "dummys_knee_guards",
                name: "Dummy's Knee Guards",
                type: "leggings"
            }, 
            feet: {
                id: "dummys_clogs",
                name: "Dummy's Clogs",
                type: "boots"
            }
        }

    },

    farmer: {

        name: "farmer",
        tier: {
            protection: [1, 4, 5, 2],
            toughness: 2
        },
        components: { 
            head: {
                id: "farmers_straw_hat",
                name: "Farmer's Straw Hat",
                type: "helmet"
            }, 
            body: {
                id: "farmers_overalls",
                name: "Farmer's Overalls",
                type: "chestplate"
            }, 
            legs: {
                id: "farmers_trousers",
                name: "Farmer's Trousers",
                type: "leggings"
            }, 
            feet: {
                id: "farmers_boots",
                name: "Farmer's Boots",
                type: "boots"
            }
        }

    },

    guard: {

        name: "guard",
        tier: {
            protection: [2, 5, 6, 2],
            toughness: 1
        },
        components: { 
            head: {
                id: "guards_helmet",
                name: "Guard's Helmet",
                type: "helmet"
            }, 
            body: {
                id: "guards_chestplate",
                name: "Guard's Chestplate",
                type: "chestplate"
            }, 
            legs: {
                id: "guards_leggings",
                name: "Guard's Leggings",
                type: "leggings"
            }, 
            feet: {
                id: "guards_boots",
                name: "Guard's Boots",
                type: "boots"
            }
        }

    },

    miner: {

        name: "miner",
        tier: {
            protection: [1, 4, 5, 2],
            toughness: 2
        },
        components: { 
            head: {
                id: "miners_helmet",
                name: "Miner's Helmet",
                type: "helmet"
            }, 
            body: {
                id: "miners_gadget_belt",
                name: "Miner's Gadget Belt",
                type: "chestplate"
            }, 
            legs: {
                id: "miners_leggings",
                name: "Miner's Leggings",
                type: "leggings"
            }, 
            feet: {
                id: "miners_boots",
                name: "Miner's Boots",
                type: "boots"
            }
        }

    },

    pacifist: {

        name: "pacifist",
        tier: {
            protection: [2, 5, 6, 2],
            toughness: 1
        },
        components: { 
            head: {
                id: "pacifists_worn_bandana",
                name: "Pacifist's Worn Bandana",
                type: "helmet"
            }, 
            body: {
                id: "pacifists_tiedye_shirt",
                name: "Pacifist's Tie-Dye Shirt",
                type: "chestplate"
            }, 
            legs: {
                id: "pacifists_flowery_pants",
                name: "Pacifist's Flowery Pants",
                type: "leggings"
            }, 
            feet: {
                id: "pacifists_opentoed_sandals",
                name: "Pacifist's Open-Toed Sandals",
                type: "boots"
            }
        }

    },

    runner: {

        name: "runner",
        tier: {
            protection: [1, 4, 5, 2],
            toughness: 2
        },
        components: { 
            head: {
                id: "runners_headband",
                name: "Runner's Headband",
                type: "helmet"
            }, 
            body: {
                id: "runners_tank_top",
                name: "Runner's Tank Top",
                type: "chestplate"
            }, 
            legs: {
                id: "runners_shorts",
                name: "Runner's Shorts",
                type: "leggings"
            }, 
            feet: {
                id: "runners_shoes",
                name: "Runner's Shoes",
                type: "boots"
            }
        }

    }

}

const itemLabels = {

    low: { type: "low", name: "Facile" },
    medium: { type: "medium", name: "Daring" },
    high: { type: "high", name: "Reckless" },
    overworld: { type: "overworld", name: "Planewalking" },
    nether: { type: "nether", name: "Hellbound" },
    end: { type: "end", name: "Forgotten" },
    combat: { type: "combat", name: "Fierce" },
    utility: { type: "utility", name: "Resourceful" },
    exploration: { type: "exploration", name: "Wayfaring" }

}

const soundList = {

    chelonian: {
        name: "chelonian",
        sounds: [ "item.4pc_proc", "item.4pc_release", "item.equip", "item.active", "origin.fortify_activate", "origin.fortify_deactivate" ]
    },

    druid: {
        name: "druid",
        sounds: [ "item.4pc", "item.equip", "item.active", "origin.revitalize" ]
    },

    anuran: {
        name: "anuran",
        sounds: [ "item.4pc", "item.equip", "item.active", "origin.lick" ]
    },
    
    lycan: {
        name: "lycan",
        sounds: [ "item.4pc", "item.equip", "item.active", "origin.pounce", "origin.ambush" ]
    },
    
    villager: {
        name: "villager",
        sounds: [ "item.4pc", "item.equip", "item.active", "origin.take_my_stuff" ]
    },

    merrow: {
        name: "merrow",
        sounds: [ "item.equip", "item.active", "origin.propel" ]
    },

    creeper: {
        name: "creeper",
        sounds: [ "item.4pc_buildclock", "item.4pc_buildstatic", "item.4pc_release", "origin.light_fuse", "origin.detonate", "origin.recharge" ]
    },

    allay: {
        name: "allay",
        sounds: [ "item.4pc", "item.active", "origin.the_search_begins", "origin.the_search_begins_break", "origin.the_search_begins_buff_1", "origin.the_search_begins_buff_2", "origin.the_search_begins_buff_3", "origin.express_delivery" ]
    },

    sculkcritter: {
        name: "sculkcritter",
        sounds: [ "item.4pc", "item.active", "origin.take_flight", "origin.take_flight_sonar", "origin.sonic_boom" ]
    }
    
}