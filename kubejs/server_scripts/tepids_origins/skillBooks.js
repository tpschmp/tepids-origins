// These dictate the XP CONSUMED by using a skill book.
const lowXP = 130
const mediumXP = 390
const highXP = 650

// These dictate the MINIMUM LEVEL REQUIREMENT to use a skill book.
const lowLevel = 15
const mediumLevel = 20
const highLevel = 25

let skillBooks = []
originLabels.forEach(item => {
    skillBooks.push("tepids_origins:" + item + "_skill_book")
})

ItemEvents.rightClicked(e => {

    const { player, player: { username }, item } = e
    const playerXP = player.getXp()
    const playerLevel = player.getXpLevel()
    let totalXP = 0
    const originHas = 'origin has ' + `${username}` + ' origins:origin tepids_origins:'
    let lowCost = ["overworld/villager"]
    let mediumCost = []
    let highCost = ["overworld/druid"]
    let originCheck = " "
    let originName = " "
    let originImpact = " "
    let originDimension = " "
    let originArchetype = " "

    if (item.id == "tepids_origins:evolution_encyclopedia") {
        e.server.runCommandSilent("clear " + `${username}` + "tepids_origins:evolution_encyclopedia 1")
        e.server.runCommandSilent("origin gui " + `${username}`)
    }


    if (skillBooks.includes(item.id)) {

        for (let origin in infoOrigin) {

            mediumCost.push("overworld/" + infoOrigin[origin].name)
            mediumCost.push("nether/" + infoOrigin[origin].name)
            mediumCost.push("end/" + infoOrigin[origin].name)
            mediumCost = mediumCost.filter(c => !lowCost.includes(c))
            mediumCost = mediumCost.filter(c => !highCost.includes(c))

            if (e.server.runCommandSilent(originHas + 'overworld/' + infoOrigin[origin].name)) {
                originCheck = 'overworld/' + infoOrigin[origin].name
                originName = infoOrigin[origin].name
                originImpact = infoOrigin[origin].impact
                originDimension = infoOrigin[origin].dimension
                originArchetype = infoOrigin[origin].archetype
            }
            else if (e.server.runCommandSilent(originHas + 'nether/' + infoOrigin[origin].name)) {
                originCheck = 'nether/' + infoOrigin[origin].name
                originName = infoOrigin[origin].name
                originImpact = infoOrigin[origin].impact
                originDimension = infoOrigin[origin].dimension
                originArchetype = infoOrigin[origin].archetype
            }
            else if (e.server.runCommandSilent(originHas + 'end/' + infoOrigin[origin].name)) {
                originCheck = 'end/' + infoOrigin[origin].name
                originName = infoOrigin[origin].name
                originImpact = infoOrigin[origin].impact
                originDimension = infoOrigin[origin].dimension
                originArchetype = infoOrigin[origin].archetype
            }

        }

        if (playerLevel <= 16) {
            totalXP = Math.pow(playerLevel, 2) + 6 * playerLevel + playerXP
        }
        else if (playerLevel <= 31) {
            totalXP = 2.5 * Math.pow(playerLevel, 2) - 40.5 * playerLevel + 360 + playerXP
        }
        else if (playerLevel >= 32) {
            totalXP = 4.5 * Math.pow(playerLevel, 2) - 162.5 * playerLevel + 2220 + playerXP
        }

        console.log("tepids_origins:" + originName + "_books")
        if (lowCost.includes(originCheck) && totalXP >= lowXP && playerLevel >= lowLevel) {

            switch (item.id) {
                case "tepids_origins:" + originImpact + "_skill_book":
                    e.server.runCommandSilent("clear " + `${username}` + " tepids_origins:" + originImpact + "_skill_book" + " 1")
                    break;
                case "tepids_origins:" + originDimension + "_skill_book":
                    e.server.runCommandSilent("clear " + `${username}` + " tepids_origins:" + originDimension + "_skill_book" + " 1")
                    break;
                case "tepids_origins:" + originArchetype + "_skill_book":
                    e.server.runCommandSilent("clear " + `${username}` + " tepids_origins:" + originArchetype + "_skill_book" + " 1")
            }

            e.server.runCommandSilent("xp add " + `${username}` + " " + (lowXP * -1) + " points")
            e.server.runCommandSilent("puffish_skills points add " + `${username}` + " tepids_origins:" + originName + " 1")

        } else if (lowCost.includes(originCheck)) {
            if (totalXP < lowXP || playerLevel < lowLevel) { e.server.runCommandSilent("tellraw " + `${username}` + " \"You need to have at least " + lowLevel + " XP levels to use this item.\"") }
        }

        if (mediumCost.includes(originCheck) && totalXP >= mediumXP && playerLevel >= mediumLevel) {

            switch (item.id) {
                case "tepids_origins:" + originImpact + "_skill_book":
                    e.server.runCommandSilent("clear " + `${username}` + " tepids_origins:" + originImpact + "_skill_book" + " 1")
                    break;
                case "tepids_origins:" + originDimension + "_skill_book":
                    e.server.runCommandSilent("clear " + `${username}` + " tepids_origins:" + originDimension + "_skill_book" + " 1")
                    break;
                case "tepids_origins:" + originArchetype + "_skill_book":
                    e.server.runCommandSilent("clear " + `${username}` + " tepids_origins:" + originArchetype + "_skill_book" + " 1")
            }

            e.server.runCommandSilent("xp add " + `${username}` + " " + (mediumXP * -1) + " points")
            e.server.runCommandSilent("puffish_skills points add " + `${username}` + " tepids_origins:" + originName + " 1")

        } else if (mediumCost.includes(originCheck)) {
            if (totalXP < mediumXP || playerLevel < mediumLevel) { e.server.runCommandSilent("tellraw " + `${username}` + " \"You need to have at least " + mediumLevel + " XP levels to use this item.\"") }
        }

        if (highCost.includes(originCheck) && totalXP >= highXP && playerLevel >= highLevel) {

            switch (item.id) {
                case "tepids_origins:" + originImpact + "_skill_book":
                    e.server.runCommandSilent("clear " + `${username}` + " tepids_origins:" + originImpact + "_skill_book" + " 1")
                    break;
                case "tepids_origins:" + originDimension + "_skill_book":
                    e.server.runCommandSilent("clear " + `${username}` + " tepids_origins:" + originDimension + "_skill_book" + " 1")
                    break;
                case "tepids_origins:" + originArchetype + "_skill_book":
                    e.server.runCommandSilent("clear " + `${username}` + " tepids_origins:" + originArchetype + "_skill_book" + " 1")
            }

            e.server.runCommandSilent("xp add " + `${username}` + " " + (highXP * -1) + " points")
            e.server.runCommandSilent("puffish_skills points add " + `${username}` + " tepids_origins:" + originName + " 1")

        } else if (highCost.includes(originCheck)) {
            if (totalXP < highXP || playerLevel < highLevel) { e.server.runCommandSilent("tellraw " + `${username}` + " \"You need to have at least " + highLevel + " XP levels to use this item.\"") }
        }

    }

})