ServerEvents.recipes(e => {

    function createRecipe(item) {
        for (let piece in item.components) {
            e.shapeless("tepids_origins:" + item.components[piece].id, ["tepids_origins:golden_" + item.impact + "_crest", "tepids_origins:golden_" + item.dimension + "_crest", "tepids_origins:golden_" + item.archetype + "_crest", Item.of(item.components[piece].type), "netherite_ingot"]).modifyResult((grid, result) => {
                let enchants = grid.find(Item.of(item.components[piece].type))
                return result.withNBT(enchants.nbt)
            })
            if (piece == "sign") {
                // e.shaped("tepids_origins:enhanced_" + item.components[piece].id, [ " E ", "EXE", " E " ], { E: "tepids_origins:origin_essence", X: Item.of("tepids_origins:" + item.components[piece].id) } ).modifyResult((grid, result) => {
                e.shapeless("tepids_origins:enhanced_" + item.components[piece].id, ["3x tepids_origins:origin_essence", Item.of("tepids_origins:" + item.components[piece].id)]).modifyResult((grid, result) => {
                    let enchants = grid.find(Item.of("tepids_origins:" + item.components[piece].id))
                    return result.withNBT(enchants.nbt)
                })
            } else {
                e.shapeless("tepids_origins:enhanced_" + item.components[piece].id, ["3x #tepids_origins:" + item.name + "_crests", Item.of("tepids_origins:" + item.components[piece].id)]).modifyResult((grid, result) => {
                    let enchants = grid.find(Item.of("tepids_origins:" + item.components[piece].id))
                    return result.withNBT(enchants.nbt)
                })
            }
        }
    }

    for (let item in infoOrigin) {
        createRecipe(infoOrigin[item])
    }

})