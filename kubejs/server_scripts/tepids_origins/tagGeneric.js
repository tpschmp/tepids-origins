ServerEvents.tags("item", e => {

    for (let item in infoGeneric) {

        e.add("tepids_origins:" + infoGeneric[item].name + "_armor", [
            "tepids_origins:" + infoGeneric[item].components.head.id,
            "tepids_origins:" + infoGeneric[item].components.body.id,
            "tepids_origins:" + infoGeneric[item].components.legs.id,
            "tepids_origins:" + infoGeneric[item].components.feet.id
        ])

        e.add("tepids_origins:generic_armor", ["#tepids_origins:" + infoGeneric[item].name + "_armor"])

    }

})