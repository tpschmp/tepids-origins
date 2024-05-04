PlayerEvents.tick(e => {
    global.playerLuck = e.player.getAttributeValue("minecraft:generic.luck")
})

LootJS.modifiers(e => {

    // Tweak these variables to tweak the drop odds of this script.
    const baseChance = 0.5
    const luckChance = global.playerLuck / (15 * Math.max(1, global.playerLuck / 5))
    const luckRolls = Math.max(0, Math.floor(global.playerLuck) - 5)

    e.addLootTypeModifier(LootType.CHEST)
        .matchLoot([goldTable, netheriteTable])
        .pool(p => {
            p.rolls([1, 2 + luckRolls])
            p.randomChance(baseChance + luckChance)
            p.addWeightedLoot(goldCrests)
        })

    e.addLootTypeModifier(LootType.CHEST)
        .matchLoot([netheriteTable])
        .pool(p => {
            p.rolls([1, luckRolls])
            p.randomChance((baseChance / 2) + luckChance)
            p.addWeightedLoot(netheriteCrests)
        })

    e.addLootTypeModifier(LootType.CHEST)
        .matchLoot([goldTable, netheriteTable])
        .pool(p => {
            p.rolls([1, 2 + luckRolls])
            p.randomChance(baseChance / 1.5)
            p.addWeightedLoot(genericDrops)
        })

})