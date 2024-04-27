ItemEvents.tooltip(e => {

    e.addAdvanced(["tepids_origins:origin_essence"], (item, advanced, text) => {
        text.add(1, [Text.of("Used to upgrade ").gray(), Text.of("Origin Items").white(), Text.of(" and craft ").gray(), Text.of("Orbs of Origin").white(), Text.of(".").gray()])
    })

    e.addAdvanced(["tepids_origins:evolution_encyclopedia"], (item, advanced, text) => {
        text.add(1, [Text.of("Functions like an ").gray(), Text.of("Orb of Origin").white(), Text.of(".").gray()])
        text.add(2, [Text.of("Additionally resets all ").gray(), Text.of("Skill Trees").white(), Text.of(" for all Origins.").gray()])
    })

    e.addAdvanced(["#tepids_origins:golden_crests"], (item, advanced, text) => {

        text.add(1, [Text.of("Used to craft ").gray(), Text.of("Origin Items").white(), Text.of(" and ").gray(), Text.of("Skill Books").white(), Text.of(".").gray()])
        text.add(2, Text.gray(" "))

        if (!e.shift) {
            text.add(3, [Text.gray("  ▲ Hold ["), Text.white("Shift"), Text.gray("]")])
        } else {
            text.add(3, [Text.gray("  ▼ Hold ["), Text.white("Shift"), Text.gray("]")])
            switch (item.id) {
                case "tepids_origins:golden_low_crest": { labelText = "Low Impact"; break; }
                case "tepids_origins:golden_medium_crest": { labelText = "Medium Impact"; break; }
                case "tepids_origins:golden_high_crest": { labelText = "High Impact"; break; }
                case "tepids_origins:golden_overworld_crest": { labelText = "Overworld"; break; }
                case "tepids_origins:golden_nether_crest": { labelText = "Nether"; break; }
                case "tepids_origins:golden_end_crest": { labelText = "End"; break; }
                case "tepids_origins:golden_combat_crest": { labelText = "Combat"; break; }
                case "tepids_origins:golden_utility_crest": { labelText = "Utility"; break; }
                case "tepids_origins:golden_exploration_crest": { labelText = "Exploration"; break; }
            }
            text.add(4, [Text.of("    This item is related to ").gray(), Text.of(labelText).white(), Text.of(" origins.").gray()])
        }

    })

    e.addAdvanced(["#tepids_origins:netherite_crests"], (item, advanced, text) => {

        text.add(1, [Text.of("Used to upgrade ").gray(), Text.of("Origin Items").white(), Text.of(" and craft ").gray(), Text.of("Origin Essence").white(), Text.of(".").gray()])
        text.add(2, Text.gray(" "))

        if (!e.shift) {
            text.add(3, [Text.gray("  ▲ Hold ["), Text.white("Shift"), Text.gray("]")])
        } else {
            text.add(3, [Text.gray("  ▼ Hold ["), Text.white("Shift"), Text.gray("]")])
            switch (item.id) {
                case "tepids_origins:netherite_low_crest": { labelText = "Low Impact"; break; }
                case "tepids_origins:netherite_medium_crest": { labelText = "Medium Impact"; break; }
                case "tepids_origins:netherite_high_crest": { labelText = "High Impact"; break; }
                case "tepids_origins:netherite_overworld_crest": { labelText = "Overworld"; break; }
                case "tepids_origins:netherite_nether_crest": { labelText = "Nether"; break; }
                case "tepids_origins:netherite_end_crest": { labelText = "End"; break; }
                case "tepids_origins:netherite_combat_crest": { labelText = "Combat"; break; }
                case "tepids_origins:netherite_utility_crest": { labelText = "Utility"; break; }
                case "tepids_origins:netherite_exploration_crest": { labelText = "Exploration"; break; }
            }
            text.add(4, [Text.of("    This item is related to ").gray(), Text.of(labelText).white(), Text.of(" origins.").gray()])
        }

    })

    e.addAdvanced(["#tepids_origins:skill_books"], (item, advanced, text) => {

        text.add(1, [Text.of("Grants ").gray(), Text.of("Skill Points").white(), Text.of(" to certain origins at the cost of ").gray(), Text.of("XP").white(), Text.of(".").gray()])
        text.add(2, Text.gray(" "))

        if (!e.shift) {
            text.add(3, [Text.gray("  ▲ Hold ["), Text.white("Shift"), Text.gray("]")])
        } else {
            text.add(3, [Text.gray("  ▼ Hold ["), Text.white("Shift"), Text.gray("]")])
            switch (item.id) {
                case "tepids_origins:low_skill_book": { labelText = "Low Impact"; break; }
                case "tepids_origins:medium_skill_book": { labelText = "Medium Impact"; break; }
                case "tepids_origins:high_skill_book": { labelText = "High Impact"; break; }
                case "tepids_origins:overworld_skill_book": { labelText = "Overworld"; break; }
                case "tepids_origins:nether_skill_book": { labelText = "Nether"; break; }
                case "tepids_origins:end_skill_book": { labelText = "End"; break; }
                case "tepids_origins:combat_skill_book": { labelText = "Combat"; break; }
                case "tepids_origins:utility_skill_book": { labelText = "Utility"; break; }
                case "tepids_origins:exploration_skill_book": { labelText = "Exploration"; break; }
            }
            text.add(4, [Text.of("    This item grants skill points to ").gray(), Text.of(labelText).white(), Text.of(" origins.").gray()])
        }

    })

})