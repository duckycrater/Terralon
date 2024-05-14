
ServerEvents.recipes(e=>{
    // Removed OP sword from MI.
    e.remove({output: 'modern_industrialization:quantum_sword'})
    
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

    e.replaceOutput({output:'minecraft:end_portal_frame'})
})

ServerEvents.customCommand('origin', event => {
    event.server.runCommand('origin gui @p')
})

ServerEvents.tags('item', e=>{
    e.add('fayne_origins:metal_repair_resources','minecraft:iron_nugget')
    e.add('fayne_origins:metal_repair_resources','minecraft:copper_ingot')
    e.add('fayne_origins:metal_repair_resources','minecraft:gold_ingot')
    e.add('fayne_origins:strong_metal_repair_resources','minecraft:iron_ingot')
    e.add('fayne_origins:strong_metal_repair_resources','modern_industrialization:titanium_ingot')
    e.add('fayne_origins:energy_sources','minecraft:coal')
    e.add('fayne_origins:energy_sources','minecraft:charcoal')
    e.add('fayne_origins:energy_sources','modern_industrialization:lignite_coal')
    e.add('fayne_origins:energy_sources','minecraft:redstone')
    e.add('fayne_origins:energy_sources','minecraft:glowstone_dust')
    e.add('fayne_origins:energy_sources','minecraft:blaze_powder')
    e.add('fayne_origins:high_energy_sources','minecraft:blaze_rod')
    e.add('fayne_origins:upgrade_items','minecraft:nether_star')
    e.add('fayne_origins:upgrade_items','modern_industrialization:advanced_upgrade')
})

PlayerEvents.loggedIn(e=>{
    // Check if player doesn't have "starting_items" stage yet
    if (!e.player.stages.has('starting_items')) {
        // Add the stage
        e.player.stages.add('starting_items')
        e.server.scheduleInTicks(1 * 50, callback => {
            //e.player.inventory.clear()
            e.player.give(Item.of('eccentrictome:tome', '{"eccentrictome:mods":{bewitchment:{0:{Count:1b,id:"bewitchment:book_of_shadows"}},botania:{0:{Count:1b,id:"botania:lexicon"}},byg:{0:{Count:1b,id:"byg:biomepedia"}},haema:{0:{Count:1b,id:"haema:book_of_blood"}},hexcasting:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"hexcasting:thehexbook"}}},modern_industrialization:{0:{Count:1b,id:"modern_industrialization:guidebook"}},powah:{0:{Count:1b,id:"powah:book"}},spectrum:{0:{Count:1b,id:"spectrum:guidebook"}}}}').enchant('yigd:soulbound', 1))
        });
    }
})

function removeAdvancement(advancementFilePath) {
    let arr = []
    if (typeof (advancementFilePath) == 'string') arr = [advancementFilePath]
    else if (typeof (advancementFilePath) == 'object') arr = advancementFilePath
    else console.log(`Invalid type for removeAdvancement(${advancementFilePath})`)

    ServerEvents.highPriorityData(event => {
        event.addJson('yourmodpack:advancements/removed', {
            display: { hidden: true },
        })
        arr.forEach(advancement => {
            event.addJson(`${advancement}.json`, {
                parent: 'yourmodpack:advancements/removed',
                display: { hidden: true },
                criteria: {
                    impossible: {
                        trigger: 'minecraft:impossible'
                    }
                },
                requirements: [['impossible']]
            })
        })
    })
}
// removes the haema advancements because I think they're annoying, and a few book giver achievements.
removeAdvancement([
    'haema:advancements/use_blood',
    'haema:advancements/drink_blood',
    'haema:advancements/drink_good_blood',
    'haema:advancements/drink_player_blood',
    'haema:advancements/fail_conversion',
    'haema:advancements/get_blood',
    'haema:advancements/kill_vampire_hunter',
    'haema:advancements/root',
    'haema:advancements/store_blood',
    'haema:advancements/trigger_vampire_hunters',
'haema:advancements/use_invis',
'haema:advancements/use_dash',
'haema:advancements/use_mist',
'haema:advancements/use_ritual_table',
'haema:advancements/fulfil_contract',
'haema:advancements/create_ritual_table',
'haema:advancements/get_contract',
'hexcasting:advancements/grant_patchi_book',
])

