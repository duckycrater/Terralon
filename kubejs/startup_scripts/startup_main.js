// Listen to item registry event
StartupEvents.registry('item', e => {
    e.create('robot_upgrade_core').texture('fayne_origins:item/robot_upgrade_core')
    e.create('robot_upgrade_kit').texture('fayne_origins:item/robot_upgrade_kit')
    e.create('incomplete_robot_upgrade_kit').texture('fayne_origins:item/incomplete_robot_upgrade_kit')
    e.create('light_repair_pack').texture('fayne_origins:item/light_repair_pack')
    e.create('robust_repair_pack').texture('fayne_origins:item/robust_repair_pack')
    e.create('galvanized_square_steel').texture('kubejs:item/galvanized_square_steel')
    e.create('galvanized_steel_rod').texture('kubejs:item/galvanized_steel_rod')
    e.create('iron_screw').texture('kubejs:item/iron_screw')
    e.create('expansion_screw_from_your_aunt').texture('kubejs:item/expansion_screw_from_your_aunt')
})