ItemEvents.tooltip(e => {

    function tooltipGeneric(set) {
        e.addAdvanced(["#tepids_origins:" + set.name + "_armor"], (item, advanced, text) => {
            if (!e.shift) {
                switch (item.id) {
                    case "tepids_origins:" + set.components.head.id: {
                        text.add(1, Text.gray(set.components.head.text))
                        break;
                    }
                    case "tepids_origins:" + set.components.body.id: {
                        text.add(1, Text.gray(set.components.body.text))
                        break;
                    }
                    case "tepids_origins:" + set.components.legs.id: {
                        text.add(1, Text.gray(set.components.legs.text))
                        break;
                    }
                    case "tepids_origins:" + set.components.feet.id: {
                        text.add(1, Text.gray(set.components.feet.text))
                        break;
                    }
                }
                text.add(2, Text.gray(" "))
            } else {
                text.add(1, [Text.of("Part of the ").gray(), Text.of(set.name.charAt(0).toUpperCase() + set.name.slice(1)).gold(), Text.of(" set.").gray()])
                text.add(2, Text.darkGray("Textures by " + set.texture + "."))
                text.add(3, Text.gray(" "))
            }
            if (!e.shift) {
                text.add(3, [Text.of("Hold ").gray(), Text.of("Shift").gold(), Text.of(" for more information.").gray()])
                text.add(4, Text.gray(" "))
            } else {
                text.add(4, Text.gold("Half Set Bonus:"))
                text.add(5, Text.darkPurple(set.half))
                text.add(6, Text.gray(" "))
            }
        })
    }

    for (let object in genericSets) tooltipGeneric(genericSets[object])
    
})