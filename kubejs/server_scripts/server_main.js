
console.info('Hello, World! (Loading server scripts)')
ServerEvents.recipes(e=>{
    e.remove({output: 'tempad:tempad'})
    e.shaped('tempad:tempad', [
        ' P ',
        'CHA',
        ' N '
    ], {
        C: 'ae2:charged_certus_quartz_crystal',
        A: 'modern_industrialization:advanced_upgrade',
        P: 'modern_industrialization:processing_unit',
        H: 'modern_industrialization:highly_advanced_machine_hull',
        N: 'powah:capacitor_nitro'
    })
})
console.info('Hello, World! (Loaded server scripts)')
