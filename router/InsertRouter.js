var express = require('express')
var router = express.Router()

router.get('/',(req,res)=>{
    res.render('Insert', {dataMemo: "" })
})

router.route('/insert_memo').post((req,res)=>{
    console.log("/insert_memo에서 처리함")

    var paramMemo = req.body.memo || req.query.memo

    res.render('Insert', {dataMemo:paramMemo})
})

module.exports = router;
