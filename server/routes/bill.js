const express = require('express');
const router = express.Router();
const { getBills, postBill, getBillById, updateBillById, deleteBillById, deleteBills, getLastBill, getLatestBills } = require('../controllers/bill');
const { forbiddenGet, forbiddenPost, forbiddenPut, forbiddenDelete } = require('../controllers/forbiddenController');

const { verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin, } = require('../middleware/authenticate');

router.route('/')
    .get(verifyTokenAndAdmin, getBills)
    .post(verifyToken, postBill)
    .put(forbiddenPut)
    .delete(verifyTokenAndAdmin, deleteBills)

router.route('/last')
    .get(verifyTokenAndAdmin, getLastBill)


router.route('/latest')
    .get(verifyTokenAndAdmin, getLatestBills)

router.route('/:id')
    .get(verifyTokenAndAuthorization, getBillById)
    .post(forbiddenPost)
    .put(verifyTokenAndAdmin, updateBillById)
    .delete(verifyTokenAndAdmin, deleteBillById)


module.exports = router