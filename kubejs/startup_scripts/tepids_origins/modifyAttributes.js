ItemEvents.modification(e => {

    function modifyAttribute(item) {

        for (let object in item.components) {

            if (item.components[object].stats.valuePrimary[0] != 0) {
                e.modify("tepids_origins:" + item.components[object].id, i => {
                    i.addAttribute(item.components[object].stats.attributePrimary, $UUID.randomUUID(), "Modifier:" + item.components[object].stats.attributePrimary, item.components[object].stats.valuePrimary[0], item.components[object].stats.operationPrimary)
                })
                e.modify("tepids_origins:enhanced_" + item.components[object].id, i => {
                    i.addAttribute(item.components[object].stats.attributePrimary, $UUID.randomUUID(), "Modifier:" + item.components[object].stats.attributePrimary, item.components[object].stats.valuePrimary[1], item.components[object].stats.operationPrimary)
                })
            }
            
            if (item.components[object].stats.valueSecondary[0] != 0) {
                e.modify("tepids_origins:" + item.components[object].id, i => {
                    i.addAttribute(item.components[object].stats.attributeSecondary, $UUID.randomUUID(), "Modifier:" + item.components[object].stats.attributeSecondary, item.components[object].stats.valueSecondary[0], item.components[object].stats.operationSecondary)
                })
                e.modify("tepids_origins:enhanced_" + item.components[object].id, i => {
                    i.addAttribute(item.components[object].stats.attributeSecondary, $UUID.randomUUID(), "Modifier:" + item.components[object].stats.attributeSecondary, item.components[object].stats.valueSecondary[1], item.components[object].stats.operationSecondary)
                })
            }

            if (item.components[object] == item.components.item && item.components[object].stats.attackDamage[0] == 0) {
                e.modify(["tepids_origins:" + item.components[object].id, "tepids_origins:enhanced_" + item.components[object].id], i => {
                    let attackDamage = i.getAttributes("minecraft:generic.attack_damage").get(0)
                    i.removeAttribute("minecraft:generic.attack_damage", attackDamage.id)
                })
            }

            if (item.components[object] == item.components.item && item.components[object].stats.attackSpeed[0] == 0) {
                e.modify(["tepids_origins:" + item.components[object].id, "tepids_origins:enhanced_" + item.components[object].id], i => {
                    let attackSpeed = i.getAttributes("minecraft:generic.attack_speed").get(0)
                    i.removeAttribute("minecraft:generic.attack_speed", attackSpeed.id)
                })
            }

        }
    }

    for (let item in itemOrigin) {modifyAttribute(itemOrigin[item])}

})