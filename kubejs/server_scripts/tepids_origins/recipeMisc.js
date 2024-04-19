ServerEvents.recipes(e => {

    originLabels.forEach(item => {
        e.shapeless('tepids_origins:' + item + '_skill_book', [ 'minecraft:book', 'tepids_origins:golden_' + item + '_crest' ]),
        e.shaped('tepids_origins:netherite_' + item + '_crest', [ 'ng ', 'Cn ', '   ' ], { C: 'tepids_origins:golden_' + item + '_crest', n: 'minecraft:netherite_scrap', g: 'minecraft:gold_ingot' })
    })
    e.shapeless('tepids_origins:origin_essence', [ '3x #tepids_origins:netherite_crests' ])
    e.shaped('tepids_origins:evolution_encyclopedia', [ ' S ', 'SOS', ' S ' ], { S: '#tepids_origins:skill_books', O: 'origins:orb_of_origin' })
    e.shaped('origins:orb_of_origin', [ ' E ', 'ESE', ' E ' ], { S: 'minecraft:nether_star', E: 'tepids_origins:origin_essence' })
    
})