ItemEvents.armorTierRegistry(e => {

    function tierRegistry(generic) {

        e.add(generic.name, tier => {
            tier.durabilityMultiplier = 15
            tier.enchantmentValue = 9
            tier.slotProtections = generic.tier.protection
            tier.toughness = generic.tier.toughness
            tier.knockbackResistance = 0
            tier.equipSound = "minecraft:item.armor.equip_iron"
            tier.repairIngredient = "minecraft:iron_ingot"
        })

    }

    for (let tier in itemGeneric) {tierRegistry(itemGeneric[tier])}

})