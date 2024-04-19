PlayerEvents.tick(event => {

    const playerX = event.player.blockX
    const playerY = event.player.blockY
    const playerZ = event.player.blockZ
    let targetX
    let targetY
    let targetZ

    // credits to @kostromdan on discord for this advanced raytrace
    const $RayTraceResultJS = Java.loadClass('dev.latvian.mods.kubejs.entity.RayTraceResultJS')
    function ignoreLiquidRayTrace(player, distance, ignore_liquid) {
        let hitResult = player.pick(distance, 1, !ignore_liquid)
        return new $RayTraceResultJS(player, hitResult, distance)
    }

    const ray = ignoreLiquidRayTrace(event.player, 64, true)
    if (ray.type === 'BLOCK') {
        targetX = ray.block.getX()
        targetY = ray.block.getY()
        targetZ = ray.block.getZ()
    }
    else if (ray.type === 'ENTITY') {
        targetX = ray.entity.blockX
        targetY = ray.entity.blockY
        targetZ = ray.entity.blockZ
    }
    const distanceToTarget = Math.sqrt((((targetX - playerX) ** 2) + ((targetY - playerY) ** 2) + ((targetZ - playerZ) ** 2))) * 10
    let roundedDist = Math.round(distanceToTarget)
    if (ray.type === 'MISS') {roundedDist = -1}

    if (roundedDist >= 0) {event.player.runCommandSilent('resource set @s tepids_origins:stats_distance ' + roundedDist)}
    else if (roundedDist == -1) {event.player.runCommandSilent('resource set @s tepids_origins:stats_distance 1000000')}

})