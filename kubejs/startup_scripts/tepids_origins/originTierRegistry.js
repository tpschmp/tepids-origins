ItemEvents.toolTierRegistry(e => {

    e.add("generic_regular", tier => {
        tier.uses = 2501
        tier.attackDamageBonus = -1.0
        tier.speed = 9.0
        tier.level = 2
        tier.enchantmentValue = 18
        tier.repairIngredient = "minecraft:netherite_ingot"
    })
  
    e.add("generic_enhanced", tier => {
        tier.uses = 3441
        tier.attackDamageBonus = -1.0
        tier.speed = 12.0
        tier.level = 3
        tier.enchantmentValue = 22
        tier.repairIngredient = "minecraft:netherite_ingot"
    })

})

ItemEvents.armorTierRegistry(e => {

    function tierRegistry(origin) {

        e.add(origin.name + "_regular", tier => {
            tier.durabilityMultiplier = 41
            tier.enchantmentValue = 18
            tier.slotProtections = origin.tier.protection
            tier.toughness = origin.tier.toughness
            tier.knockbackResistance = 0
            tier.equipSound = "minecraft:item.armor.equip_diamond"
            tier.repairIngredient = "minecraft:netherite_ingot"
        })

        e.add(origin.name + "_enhanced", tier => {
            tier.durabilityMultiplier = 49
            tier.enchantmentValue = 22
            tier.slotProtections = origin.tier.protection
            tier.toughness = origin.tier.toughness
            tier.knockbackResistance = 0
            tier.equipSound = "minecraft:item.armor.equip_netherite"
            tier.repairIngredient = "minecraft:netherite_ingot"
        })

    }

    for (let tier in itemOrigin) {tierRegistry(itemOrigin[tier])}

})