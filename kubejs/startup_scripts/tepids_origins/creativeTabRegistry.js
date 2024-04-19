StartupEvents.modifyCreativeTab("kubejs:tab", e => {

    e.remove(Ingredient.of(/tepids_origins:/))
    e.icon = "minecraft:air"
    e.displayName = " "

})

StartupEvents.registry("creative_mode_tab", e => {

    /*
    this doesn't work:

    for (let item in itemOrigin) {
        for (let component in item.components) {
            e.create("tepids_origins:origin_armor").displayName("tepid's origins: origin equipment").content(() => 
            "tepids_origins:" + Ingredient.of(item.components[component].id).itemIds,
            "tepids_origins:enhanced_" + Ingredient.of(item.components[component].id).itemIds
            ).icon(() => Item.of("tepids_origins:origin_essence"))
        }
    }

    for (let item in itemGeneric) {
        for (let component in item.components) {
            e.create("tepids_origins:generic_armor").displayName("tepid's origins: generic equipment").content(() => 
            "tepids_origins:" + Ingredient.of(item.components[component].id).itemIds
            ).icon(() => Item.of("tepids_origins:origin_essence"))
        }
    }
    
    great
    */

    e.create("tepids_origins:armor").displayName("tepid's origins: equipment").content(() => 
            Ingredient.of(/tepids_origins:(?!.*netherite.*crest.*)(?!.*golden.*crest.*)(?!.*skill_book)(?!origin_essence)(?!evolution_encyclopedia).*/).itemIds
            ).icon(() => Item.of("tepids_origins:origin_essence"))

    e.create("tepids_origins:miscellaneous").displayName("tepid's origins: miscellaneous").content(() =>
        Ingredient.of(/tepids_origins:(?!(?!.*netherite.*crest.*)(?!.*golden.*crest.*)(?!.*skill_book)(?!origin_essence)(?!evolution_encyclopedia)).*/).itemIds
    ).icon(() => Item.of("tepids_origins:evolution_encyclopedia"))
    
})