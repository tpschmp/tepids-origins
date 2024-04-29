ItemEvents.tooltip(e => {

    function tooltipOrigin(set) {
        e.addAdvanced(["#tepids_origins:" + set.origin + "_set"], (item, advanced, text) => {

            switch (item.id) {
                case "tepids_origins:enhanced_" + set.components.head.id:
                case "tepids_origins:" + set.components.head.id: {
                    text.add(1, Text.gray(set.components.head.text))
                    break;
                }
                case "tepids_origins:enhanced_" + set.components.body.id:
                case "tepids_origins:" + set.components.body.id: {
                    text.add(1, Text.gray(set.components.body.text))
                    break;
                }
                case "tepids_origins:enhanced_" + set.components.legs.id:
                case "tepids_origins:" + set.components.legs.id: {
                    text.add(1, Text.gray(set.components.legs.text))
                    break;
                }
                case "tepids_origins:enhanced_" + set.components.feet.id:
                case "tepids_origins:" + set.components.feet.id: {
                    text.add(1, Text.gray(set.components.feet.text))
                    break;
                }
                case "tepids_origins:enhanced_" + set.components.sign.id:
                case "tepids_origins:" + set.components.sign.id: {
                    text.add(1, Text.gray(set.components.sign.text))
                    break;
                }
            }

            text.add(2, Text.gray(" "))
            text.add(3, [Text.of("SET: ").gray(), Text.of(set.name.toUpperCase()).white()])
            
            if (item.hasTag("tepids_origins:" + set.origin + "_armor")) {
                text.add(4, Text.darkGray("Textures by " + set.texture.set))
            } else if (item.hasTag("tepids_origins:" + set.origin + "_item")) {
                text.add(4, Text.darkGray("Textures by " + set.texture.item))
            }

            text.add(5, Text.gray(" "))
            text.add(6, [Text.darkGray("  Hold ["), Text.gray("Shift"), Text.darkGray("]")])
            
            if (!e.shift) {
                if (item.hasTag("tepids_origins:" + set.origin + "_armor")) {
                    text.add(7, Text.white("  ▲ Half Set Bonus"))
                } else if (item.hasTag("tepids_origins:" + set.origin + "_item")) {
                    text.add(7, Text.white("  ▲ Equip Bonus"))
                }
            } else {
                if (item.hasTag("tepids_origins:" + set.origin + "_armor")) {
                    text.add(7, Text.white("  ▼ Half Set Bonus"))
                    text.add(8, [Text.darkGray("    "), Text.gray(set.half)])
                } else if (item.hasTag("tepids_origins:" + set.origin + "_item")) {
                    text.add(7, Text.white("  ▼ Equip Bonus"))
                    text.add(8, [Text.darkGray("    "), Text.gray(set.equip + "\n"), Text.darkGray("    Archetype Requirement: "), Text.gray(set.archetype.charAt(0).toUpperCase() + set.archetype.slice(1))])
                } 
            }

            text.add(9, Text.gray(" "))
            text.add(10, [Text.darkGray("  Hold ["), Text.gray("Ctrl"), Text.darkGray("]")])

            if (!e.ctrl) {
                if (item.hasTag("tepids_origins:" + set.origin + "_armor")) {
                    text.add(11, Text.white("  ▲ Full Set Bonus"))
                } else if (item.hasTag("tepids_origins:" + set.origin + "_item")) {
                    text.add(11, Text.white("  ▲ Active Ability"))
                }
                text.add(12, Text.gray(" "))
            } else {
                if (item.hasTag("tepids_origins:" + set.origin + "_armor")) {
                    text.add(11, Text.white("  ▼ Full Set Bonus"))
                    text.add(12, [Text.darkGray("    "), Text.gray(set.full + "\n"), Text.darkGray("    Archetype Requirement: "), Text.gray(set.archetype.charAt(0).toUpperCase() + set.archetype.slice(1))])
                    text.add(13, Text.gray(" "))
                } else if (item.hasTag("tepids_origins:" + set.origin + "_item")) {
                    text.add(11, Text.white("  ▼ Active Ability"))
                    text.add(12, [Text.darkGray("    "), Text.gray(set.active + "\n"), Text.darkGray("    Origin Requirement: "), Text.gray(set.origin.charAt(0).toUpperCase() + set.origin.slice(1))])
                    text.add(13, Text.gray(" "))
                } 
            }
            
        })
    }

    for (let object in originSets) tooltipOrigin(originSets[object])

})