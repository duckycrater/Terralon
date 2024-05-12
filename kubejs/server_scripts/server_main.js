
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
})
