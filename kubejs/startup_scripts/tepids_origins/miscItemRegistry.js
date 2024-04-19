StartupEvents.registry("item", e => {

    for (let item in itemLabels) {
        
        e.create("tepids_origins:golden_" + itemLabels[item].type + "_crest")
        .texture("tepids_origins:item/misc/crests/golden/" + itemLabels[item].type)
        .displayName("Golden Crest of the " + itemLabels[item].name)
        .maxStackSize(16)

    }

    for (let item in itemLabels) {

        e.create("tepids_origins:netherite_" + itemLabels[item].type + "_crest")
        .texture("tepids_origins:item/misc/crests/netherite/" + itemLabels[item].type)
        .displayName("Netherite Crest of the " + itemLabels[item].name)
        .rarity('rare')
        .maxStackSize(16)

    }

    for (let item in itemLabels) {

        e.create("tepids_origins:" + itemLabels[item].type + "_skill_book")
        .texture("tepids_origins:item/misc/books/" + itemLabels[item].type)
        .displayName("Manual for the " + itemLabels[item].name)
        .rarity('rare')
        .maxStackSize(16)

    }

    e.create('tepids_origins:origin_essence')
    .texture('tepids_origins:item/misc/essence')
    .displayName('Origin Essence')
    .rarity('epic')
    .maxStackSize(16)

    e.create('tepids_origins:evolution_encyclopedia')
    .texture('tepids_origins:item/misc/encyclopedia')
    .displayName('The Evolution Encyclopedia')
    .rarity('epic')
    .unstackable()

})