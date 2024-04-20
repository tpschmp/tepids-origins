PlayerEvents.tick(e => {

    const { headArmorItem, chestArmorItem, legsArmorItem, feetArmorItem, mainHandItem, offHandItem } = e.player
    const { player, player: {username} } = e

    let checkInterval = 1
    // IMPORTANT: The number above means the code below runs once every X ticks, or X/20 seconds. If the server you're running is struggling, bumping this number up could help.
    // Do note that longer intervals may make this feel unresponsive.

    if (player.age % checkInterval == 0) {
        
        for (let item in infoOrigin) {

            switch (headArmorItem.id) {
                case ("tepids_origins:enhanced_" + infoOrigin[item].components.head.id): { infoOrigin[item].components.head.set.full = 1 }
                case ("tepids_origins:" + infoOrigin[item].components.head.id): { infoOrigin[item].components.head.set.half = 1; break; }
                default: { infoOrigin[item].components.head.set.full = 0; infoOrigin[item].components.head.set.half = 0; break; }
            }
            switch (chestArmorItem.id) {
                case ("tepids_origins:enhanced_" + infoOrigin[item].components.body.id): { infoOrigin[item].components.body.set.full = 1 }
                case ("tepids_origins:" + infoOrigin[item].components.body.id): { infoOrigin[item].components.body.set.half = 1; break; }
                default: { infoOrigin[item].components.body.set.full = 0; infoOrigin[item].components.body.set.half = 0; break; }
            }
            switch (legsArmorItem.id) {
                case ("tepids_origins:enhanced_" + infoOrigin[item].components.legs.id): { infoOrigin[item].components.legs.set.full = 1 }
                case ("tepids_origins:" + infoOrigin[item].components.legs.id): { infoOrigin[item].components.legs.set.half = 1; break; }
                default: { infoOrigin[item].components.legs.set.full = 0; infoOrigin[item].components.legs.set.half = 0; break; }
            }
            switch (feetArmorItem.id) {
                case ("tepids_origins:enhanced_" + infoOrigin[item].components.feet.id): { infoOrigin[item].components.feet.set.full = 1 }
                case ("tepids_origins:" + infoOrigin[item].components.feet.id): { infoOrigin[item].components.feet.set.half = 1; break; }
                default: { infoOrigin[item].components.feet.set.full = 0; infoOrigin[item].components.feet.set.half = 0; break; }
            }
            if (
                mainHandItem.id == "tepids_origins:" + infoOrigin[item].components.sign.id || 
                mainHandItem.id == "tepids_origins:enhanced_" + infoOrigin[item].components.sign.id || 
                offHandItem.id == "tepids_origins:" + infoOrigin[item].components.sign.id ||
                offHandItem.id == "tepids_origins:enhanced_" + infoOrigin[item].components.sign.id
            ) 
            {infoOrigin[item].components.sign.set.equip = 1}
            else {infoOrigin[item].components.sign.set.equip = 0}
            if (
                mainHandItem.id == "tepids_origins:enhanced_" + infoOrigin[item].components.sign.id || 
                offHandItem.id == "tepids_origins:enhanced_" + infoOrigin[item].components.sign.id
            ) 
            {infoOrigin[item].components.sign.set.active = 1}
            else {infoOrigin[item].components.sign.set.active = 0}
    
            infoOrigin[item].set.half = infoOrigin[item].components.head.set.half + infoOrigin[item].components.body.set.half + infoOrigin[item].components.legs.set.half + infoOrigin[item].components.feet.set.half
            infoOrigin[item].set.full = infoOrigin[item].components.head.set.full + infoOrigin[item].components.body.set.full + infoOrigin[item].components.legs.set.full + infoOrigin[item].components.feet.set.full
            infoOrigin[item].set.item = infoOrigin[item].components.sign.set.equip + infoOrigin[item].components.sign.set.active
            
            if (infoOrigin[item].set.half >= 2) {e.server.runCommandSilent("execute as " + `${username}` + " run power grant @s tepids_origins:items/" + infoOrigin[item].name + "/2pc tepids_origins:set_bonuses")}
            else if (infoOrigin[item].set.half < 2) {e.server.runCommandSilent("execute as " + `${username}` + " run power revoke @s tepids_origins:items/" + infoOrigin[item].name + "/2pc tepids_origins:set_bonuses")}
    
            if (infoOrigin[item].set.full == 4 && e.server.runCommandSilent("execute as " + `${username}` + " run power has @s tepids_origins:labels/archetypes/" + infoOrigin[item].archetype)) {e.server.runCommandSilent("execute as " + `${username}` + " run power grant @s tepids_origins:items/" + infoOrigin[item].name + "/4pc tepids_origins:set_bonuses")}
            else if (infoOrigin[item].set.full != 4 || !e.server.runCommandSilent("execute as " + `${username}` + " run power has @s tepids_origins:labels/archetypes/" + infoOrigin[item].archetype)) {e.server.runCommandSilent("execute as " + `${username}` + " run power revoke @s tepids_origins:items/" + infoOrigin[item].name + "/4pc tepids_origins:set_bonuses")}

            if (infoOrigin[item].set.item >= 1 && e.server.runCommandSilent("execute as " + `${username}` + " run power has @s tepids_origins:labels/archetypes/" + infoOrigin[item].archetype)) {e.server.runCommandSilent("execute as " + `${username}` + " run power grant @s tepids_origins:items/" + infoOrigin[item].name + "/equip tepids_origins:set_bonuses")}
            else if (infoOrigin[item].set.item < 1 || !e.server.runCommandSilent("execute as " + `${username}` + " run power has @s tepids_origins:labels/archetypes/" + infoOrigin[item].archetype)) {e.server.runCommandSilent("execute as " + `${username}` + " run power revoke @s tepids_origins:items/" + infoOrigin[item].name + "/equip tepids_origins:set_bonuses")}
    
            if (infoOrigin[item].set.item >= 2 && e.server.runCommandSilent("execute as " + `${username}` + " run origin has @s origins:origin tepids_origins:overworld/" + infoOrigin[item].name)) {e.server.runCommandSilent("execute as " + `${username}` + " run power grant @s tepids_origins:items/" + infoOrigin[item].name + "/active tepids_origins:set_bonuses")}
            else if (infoOrigin[item].set.item < 2 || !e.server.runCommandSilent("execute as " + `${username}` + " run origin has @s origins:origin tepids_origins:overworld/" + infoOrigin[item].name)) {e.server.runCommandSilent("execute as " + `${username}` + " run power revoke @s tepids_origins:items/" + infoOrigin[item].name + "/active tepids_origins:set_bonuses")}

        }

        for (let item in infoGeneric) {

            switch (headArmorItem.id) {
                case ("tepids_origins:" + infoGeneric[item].components.head.id): { infoGeneric[item].components.head.set = 1; break; }
                default: { infoGeneric[item].components.head.set = 0; break; }
            }
            switch (chestArmorItem.id) {
                case ("tepids_origins:" + infoGeneric[item].components.body.id): { infoGeneric[item].components.body.set = 1; break; }
                default: { infoGeneric[item].components.body.set = 0; break; }
            }
            switch (legsArmorItem.id) {
                case ("tepids_origins:" + infoGeneric[item].components.legs.id): { infoGeneric[item].components.legs.set = 1; break; }
                default: { infoGeneric[item].components.legs.set = 0; break; }
            }
            switch (feetArmorItem.id) {
                case ("tepids_origins:" + infoGeneric[item].components.feet.id): { infoGeneric[item].components.feet.set = 1; break; }
                default: { infoGeneric[item].components.feet.set = 0; break; }
            }
    
            infoGeneric[item].set = infoGeneric[item].components.head.set + infoGeneric[item].components.body.set + infoGeneric[item].components.legs.set + infoGeneric[item].components.feet.set
            
            if (infoGeneric[item].set >= 2) {e.server.runCommandSilent("execute as " + `${username}` + " run power grant @s tepids_origins:items/generic/" + infoGeneric[item].name + " tepids_origins:set_bonuses")}
            else if (infoGeneric[item].set < 2) {e.server.runCommandSilent("execute as " + `${username}` + " run power revoke @s tepids_origins:items/generic/" + infoGeneric[item].name + " tepids_origins:set_bonuses")}
    
        }

    }

})