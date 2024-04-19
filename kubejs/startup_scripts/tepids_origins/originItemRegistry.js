StartupEvents.registry("item", e => {

    function itemRegistry(origin) {

        for (let object in origin.components) {

            if (origin.components[object].name == origin.components.item.name) {

                e.create("tepids_origins:" + origin.components.item.id, origin.components.item.type)
                    .tier("generic_regular")
                    .attackDamageBaseline(origin.components.item.stats.attackDamage[0])
                    .speedBaseline(origin.components.item.stats.attackSpeed[0] - 4)
                    .texture("tepids_origins:item/" + origin.name + "/item")
                    .displayName(origin.components.item.name)
                    .rarity("uncommon")
                    .unstackable()

                e.create("tepids_origins:enhanced_" + origin.components.item.id, origin.components.item.type)
                    .tier("generic_enhanced")
                    .attackDamageBaseline(origin.components.item.stats.attackDamage[1])
                    .speedBaseline(origin.components.item.stats.attackSpeed[1] - 4)
                    .texture("tepids_origins:item/" + origin.name + "/item")
                    .displayName("Enhanced " + origin.components.item.name)
                    .rarity("epic")
                    .glow(true)
                    .unstackable()

            } else {

                e.create("tepids_origins:" + origin.components[object].id, origin.components[object].type)
                    .tier(origin.name + "_regular")
                    .texture("tepids_origins:item/" + origin.name + "/armor/" + object)
                    .displayName(origin.components[object].name)
                    .rarity("uncommon")
                    .unstackable()

                e.create("tepids_origins:enhanced_" + origin.components[object].id, origin.components[object].type)
                    .tier(origin.name + "_enhanced")
                    .texture("tepids_origins:item/" + origin.name + "/armor/" + object)
                    .displayName("Enhanced " + origin.components[object].name)
                    .rarity("epic")
                    .glow(true)
                    .unstackable()

            }
            
        }

    }

    for (let item in itemOrigin) {itemRegistry(itemOrigin[item])}

})