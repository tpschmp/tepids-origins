ServerEvents.commandRegistry (e => {

    // Change this to modify the duration of the trial.
    const trialTime = 30 * MINUTE

    let originSuggestions = []
    for (let origin in infoOrigin) {
        originSuggestions.push(origin.name)
    }
    const {commands: Commands, arguments: Arguments, builtinSuggestions: Suggestions} = e
    
    // Trial command
    e.register(
        Commands.literal('trial')
        .then(Commands.argument('help> | <origin', Arguments.STRING.create(e))
            .executes(ctx => {
                const origin = Arguments.STRING.getResult(ctx, 'help> | <origin')
                let currentOrigin = ' '
                const originHas = 'origin has @s origins:origin tepids_origins:'
                const originSet = 'origin set @s origins:origin tepids_origins:'

                if (!originSuggestions.includes(origin) && !(origin == 'help')) {
                    ctx.source.getPlayer().tell('Incorrect argument. This command currently accepts:\n' + originSuggestions.join(', ') + '\n \nPlease use "/trial help" if you are not sure about what this command does.')
                } else if (origin == 'help') {ctx.source.getPlayer().tell('Trials let you test any of tepid\'s origins for ' + trialTime / MINUTE + ' minutes.\nAny progress made is saved. You can\'t use Orbs of Origin until the trial is over.')}

                if (originSuggestions.includes(origin) && ctx.source.getPlayer().runCommandSilent('execute if entity @s[tag=!inTrial]') && ctx.source.getPlayer().runCommandSilent('execute if entity @s[tag=!' + origin + 'Done]')) {

                    originSuggestions.forEach(origin => {
                        if (ctx.source.getPlayer().runCommandSilent(originHas + 'human')) {currentOrigin = 'human'}
                        else if (ctx.source.getPlayer().runCommandSilent(originHas + 'overworld/' + origin)) {currentOrigin = 'overworld/' + origin}
                        else if (ctx.source.getPlayer().runCommandSilent(originHas + 'nether/' + origin)) {currentOrigin = 'nether/' + origin}
                        else if (ctx.source.getPlayer().runCommandSilent(originHas + 'end/' + origin)) {currentOrigin = 'end/' + origin}
                    })

                    ctx.source.getPlayer().runCommandSilent('tag @s add inTrial')

                    ctx.source.getPlayer().runCommandSilent(originSet + 'overworld/' + origin)
                    ctx.source.getPlayer().runCommandSilent(originSet + 'nether/' + origin)
                    ctx.source.getPlayer().runCommandSilent(originSet + 'end/' + origin)

                    ctx.source.getPlayer().tell('Trial initiated.')
                    
                    ctx.source.server.schedule(trialTime, () => {

                        ctx.source.server.runCommandSilent('execute as ' + ctx.source.getPlayer().getUsername() + ' run tag @s remove inTrial')
                        ctx.source.server.runCommandSilent('execute as ' + ctx.source.getPlayer().getUsername() + ' run tag @s add ' + origin + 'Done')

                        ctx.source.server.runCommandSilent('execute as ' + ctx.source.getPlayer().getUsername() + ' run ' + originSet + currentOrigin)

                        ctx.source.server.runCommandSilent('tellraw ' + ctx.source.getPlayer().getUsername() + ' "Trial finished."')

                    })

                } else if (ctx.source.getPlayer().runCommandSilent('execute if entity @s[tag=inTrial]') || ctx.source.getPlayer().runCommandSilent('execute if entity @s[tag=' + origin + 'Done]')) {ctx.source.getPlayer().tell('You cannot start this trial at this time.')}

                return 1
            })
        )
    )

    // Wiki command
    e.register(
        Commands.literal('wiki')
        .executes(ctx => {
            ctx.source.getPlayer().runCommandSilent('tellraw @s ["",{"text":"Click here to access the wiki.","clickEvent":{"action":"open_url","value":"https://tepschmep.notion.site/tepid-s-origins-b3ca3dd170e74b898b0372bf6f82fdf1?pvs=4"},"hoverEvent":{"action":"show_text","contents":"tepschmep.notion.site"}}]')
            return 1
        })
    )

    // Add some custom commands here if you'd like
    // e.register()

})