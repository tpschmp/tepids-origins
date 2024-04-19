ServerEvents.tags("item", e => {

    e.add("tepids_origins:crests", ["#tepids_origins:golden_crests", "#tepids_origins:netherite_crests"])
    e.add("tepids_origins:golden_crests", [Ingredient.of("/tepids_origins:.*golden.*crest.*/").itemIds])
    e.add("tepids_origins:netherite_crests", [Ingredient.of("/tepids_origins:netherite.*crest/").itemIds])
    e.add("tepids_origins:skill_books", [Ingredient.of("/tepids_origins:.*skill_book/").itemIds])

    e.add("tepids_origins:wooden_tier", [Ingredient.of("/.*wooden.*/").itemIds])
    e.add("tepids_origins:golden_tier", [Ingredient.of("/.*golden.*/").itemIds])
    e.add("tepids_origins:stone_tier", [Ingredient.of("/.*stone.*/").itemIds])
    e.add("tepids_origins:iron_tier", [Ingredient.of("/.*iron.*/").itemIds])
    e.add("tepids_origins:diamond_tier", [Ingredient.of("/.*diamond.*/").itemIds])
    e.add("tepids_origins:netherite_tier", [Ingredient.of("/.*netherite.*/").itemIds])

    e.add("tepids_origins:seeds", [Ingredient.of("/.*seeds.*/").itemIds, Ingredient.of("/.*carrot.*/").itemIds, Ingredient.of("/.*potato.*/").itemIds])

})

ServerEvents.tags("block", e => {

    e.add("tepids_origins:sculk", [Ingredient.of("/.*sculk.*/").itemIds])

})
