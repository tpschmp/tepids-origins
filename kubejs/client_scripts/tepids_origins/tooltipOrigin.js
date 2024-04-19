ItemEvents.tooltip(e => {

    function tooltipOrigin(set) {
        e.addAdvanced(["#tepids_origins:" + set.origin + "_set"], (item, advanced, text) => {
            if (!e.shift) {
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
            } else {
                text.add(1, [Text.of("Part of the ").gray(), Text.of(set.name).gold(), Text.of(" set.").gray()])
                if (item.hasTag("tepids_origins:" + set.origin + "_armor")) {
                    text.add(2, Text.darkGray("Textures by " + set.texture.set + "."))
                } else if (item.hasTag("tepids_origins:" + set.origin + "_item")) {
                    text.add(2, Text.darkGray("Textures by " + set.texture.item + "."))
                }
                text.add(3, Text.gray(" "))
            }
            if (!e.shift) {
                text.add(3, [Text.of("Hold ").gray(), Text.of("Shift").gold(), Text.of(" for more information.").gray()])
                text.add(4, Text.gray(" "))
            } else {
                if (item.hasTag("tepids_origins:" + set.origin + "_armor")) {
                    text.add(4, Text.gold("Half Set Bonus:"))
                    text.add(5, Text.darkPurple(set.half))
                    text.add(6, Text.gray(" "))
                } else if (item.hasTag("tepids_origins:" + set.origin + "_item")) {
                    text.add(4, Text.gold("Equip Bonus:"))
                    text.add(5, Text.darkPurple(set.equip))
                    text.add(6, Text.darkGray("These effects are only active if you are a(n) " + set.archetype.charAt(0).toUpperCase() + set.archetype.slice(1) + " origin."))
                    text.add(7, Text.gray(" "))
                }
                if (item.hasTag("tepids_origins:enhanced_" + set.origin + "_armor")) {
                    text.add(7, Text.gold("Full Set Bonus:"))
                    text.add(8, Text.darkPurple(set.full))
                    text.add(9, Text.darkGray("These effects are only active if you are a(n) " + set.archetype.charAt(0).toUpperCase() + set.archetype.slice(1) + " origin."))
                    text.add(10, Text.gray(" "))
                } else if (item.id === "tepids_origins:enhanced_" + set.components.sign.id) {
                    text.add(8, Text.gold("Active Ability:"))
                    text.add(9, Text.darkPurple(set.active))
                    text.add(10, Text.darkGray("These effects are only active if you are a(n) " + set.origin.charAt(0).toUpperCase() + set.origin.slice(1) + "."))
                    text.add(11, Text.gray(" "))
                }
            }
        })
    }

    for (let object in originSets) tooltipOrigin(originSets[object])

})