ItemEvents.tooltip(e => {

    function tooltipGeneric(set) {
        e.addAdvanced(["#tepids_origins:" + set.name + "_armor"], (item, advanced, text) => {

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
            text.add(3, [Text.of("SET: ").gray(), Text.of(set.name.toUpperCase()).white()])
            text.add(4, Text.darkGray("Textures by " + set.texture))
            
            text.add(5, Text.gray(" "))
            text.add(6, [Text.darkGray("  Hold ["), Text.gray("Shift"), Text.darkGray("]")])

            if (!e.shift) {
                text.add(7, Text.white("  ▲ Half Set Bonus"))
            } else {
                text.add(7, Text.white("  ▼ Half Set Bonus"))
                text.add(8, [Text.darkGray("    "), Text.gray(set.half)]) 
            }
            text.add(9, Text.gray(" "))

        })
    }

    for (let object in genericSets) tooltipGeneric(genericSets[object])
    
})