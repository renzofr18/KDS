const {Routes} = require('express')

const router = router();

router.post('/', (req,res) =>{
    res.send('Aqui vamos a crear nuevos pedidos')
})

module.exports = router;