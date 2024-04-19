ServerEvents.tags("item", e => {

    for (let item in infoOrigin) {

        e.add("tepids_origins:" + infoOrigin[item].name + "_crests", ["tepids_origins:netherite_" + infoOrigin[item].impact + "_crest", "tepids_origins:netherite_" + infoOrigin[item].dimension + "_crest", "tepids_origins:netherite_" + infoOrigin[item].archetype + "_crest",])
        e.add("tepids_origins:" + infoOrigin[item].name + "_books", ["tepids_origins:" + infoOrigin[item].impact + "_skill_book", "tepids_origins:" + infoOrigin[item].dimension + "_skill_book", "tepids_origins:" + infoOrigin[item].archetype + "_skill_book",])
        e.add("tepids_origins:" + infoOrigin[item].name + "_armor", [
            "tepids_origins:" + infoOrigin[item].components.head.id, "tepids_origins:enhanced_" + infoOrigin[item].components.head.id,
            "tepids_origins:" + infoOrigin[item].components.body.id, "tepids_origins:enhanced_" + infoOrigin[item].components.body.id,
            "tepids_origins:" + infoOrigin[item].components.legs.id, "tepids_origins:enhanced_" + infoOrigin[item].components.legs.id,
            "tepids_origins:" + infoOrigin[item].components.feet.id, "tepids_origins:enhanced_" + infoOrigin[item].components.feet.id
        ])
        e.add("tepids_origins:enhanced_" + infoOrigin[item].name + "_armor", [
            "tepids_origins:enhanced_" + infoOrigin[item].components.head.id,
            "tepids_origins:enhanced_" + infoOrigin[item].components.body.id,
            "tepids_origins:enhanced_" + infoOrigin[item].components.legs.id,
            "tepids_origins:enhanced_" + infoOrigin[item].components.feet.id
        ])
        e.add("tepids_origins:" + infoOrigin[item].name + "_item", ["tepids_origins:" + infoOrigin[item].components.sign.id, "tepids_origins:enhanced_" + infoOrigin[item].components.sign.id])
        e.add("tepids_origins:" + infoOrigin[item].name + "_set", ["#tepids_origins:" + infoOrigin[item].name + "_armor", "#tepids_origins:enhanced_" + infoOrigin[item].name + "_armor", "#tepids_origins:" + infoOrigin[item].name + "_item"])
        e.add("tepids_origins:origin_armor", ["#tepids_origins:" + infoOrigin[item].name + "_armor"])
        e.add("tepids_origins:enhanced_origin_armor", ["#tepids_origins:enhanced_" + infoOrigin[item].name + "_armor"])
        e.add("tepids_origins:origin_items", ["#tepids_origins:" + infoOrigin[item].name + "_item"])

    }

})