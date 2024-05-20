// Listen to item registry event
StartupEvents.registry('item', e => {
    e.create('robot_upgrade_core').texture('fayne_origins:item/robot_upgrade_core')
    e.create('robot_upgrade_kit').texture('fayne_origins:item/robot_upgrade_kit')
    e.create('incomplete_robot_upgrade_kit').texture('fayne_origins:item/incomplete_robot_upgrade_kit')
    e.create('light_repair_pack').texture('fayne_origins:item/light_repair_pack')
    e.create('robust_repair_pack').texture('fayne_origins:item/robust_repair_pack')
})