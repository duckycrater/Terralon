
ServerEvents.recipes(e=>{
    e.remove({output: 'tempad:tempad'})
    e.shaped('tempad:tempad', [
        'SPS',
        'MHU',
        'SNS'
    ], {
        M: 'ae2:monitor',
        U: 'modern_industrialization:basic_upgrade',
        P: 'modern_industrialization:analog_circuit',
        H: 'modern_industrialization:basic_machine_hull',
        N: 'powah:capacitor_nitro',
        S: '#c:steel_plates'
    })
    e.shaped('tempad:he_who_remains_tempad', [
        'SPS',
        'THU',
        'SCS'
    ], {
        T: 'tempad:tempad',
        H: 'modern_industrialization:highly_advanced_machine_hull',
        P: 'modern_industrialization:processing_unit',
        U: 'modern_industrialization:highly_advanced_upgrade',
        C: 'powah:energy_cell_nitro',
        S: '#c:titanium_plates'
    })
})

PlayerEvents.loggedIn(e=>{
    // Check if player doesn't have "starting_items" stage yet
    if (!e.player.stages.has('starting_items')) {
        // Add the stage
        e.player.stages.add('starting_items')
        // Give some items to player
        e.player.give(Item.of('eccentrictome:tome', '{"eccentrictome:mods":{bewitchment:{0:{Count:1b,id:"bewitchment:book_of_shadows"}},botania:{0:{Count:1b,id:"botania:lexicon"}},haema:{0:{Count:1b,id:"haema:book_of_blood"}},hexcasting:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"hexcasting:thehexbook"}}},modern_industrialization:{0:{Count:1b,id:"modern_industrialization:guidebook"}},powah:{0:{Count:1b,id:"powah:book"}},spectrum:{0:{Count:1b,id:"spectrum:guidebook"}}}}').enchant('yigd:soulbound', 1))
    }
})
