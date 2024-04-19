StartupEvents.registry("item", e => {

    function itemRegistry(generic) {

        for (let object in generic.components) {

            e.create("tepids_origins:" + generic.components[object].id, generic.components[object].type)
                .tier(generic.name)
                .texture("tepids_origins:item/generic/" + generic.name + "/" + object)
                .displayName(generic.components[object].name)
                .unstackable()

        }

    }

    for (let item in itemGeneric) {itemRegistry(itemGeneric[item])}

})