StartupEvents.registry("sound_event", e => {

    for (let event in soundList) {
        soundList[event].sounds.forEach(element => {
            e.create("tepids_origins:" + soundList[event].name + "." + element)
        })
    }

})