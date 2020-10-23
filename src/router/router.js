const {
    Router
} = require('express');

const router = Router();
router.post("/Usuario", (req, res) => {
    res.json({
        "mensagge": "Prueba Exitosa"
    })

})
router.post("/Producto", (req, res) => {
    res.json({
        "mensagge": "Prueba Exitosa"
    })
})

module.exports = router;