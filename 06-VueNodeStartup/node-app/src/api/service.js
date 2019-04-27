let router = require('express').Router();
/**
 * @swagger
 * /service/{entity}:
 *   get:
 *     summary:
 *     description:
 *     tags:
 *       - service
 *     produces:
 *       - application/json
 *     parameters:
 *         - name: entity
 *           required: true
 *           in: path
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully
 */
router.get('/:entity', (req, res) => {
    return res.json({
        message:'Data Returned Successfully'
    });
    //return res.send('GET HTTP method on user resource');
});
/**
* @swagger
 * /service/{entity}/{id}:
 *   get:
 *     summary:
 *     description:
 *     tags:
 *       - service
 *     produces:
 *       - application/json
 *     parameters:
 *         - name: entity
 *           required: true
 *           in: path
 *           type: string
 *         - name: id
 *           required: true
 *           in: path
 *           type: integer
 *     responses:
 *       200:
 *         description: Successfully
 */
router.get('/:entity/:id', (req, res) => {
    return res.json({
        message:'Data Retrived Successfully ' +req.params.id
    });
    //return res.send('GET HTTP method on user resource');
});
/**
 * @swagger
 * /service/{entity}:
 *   post:
 *     summary:
 *     description:
 *     tags:
 *       - service
 *     produces:
 *       - application/json
 *     parameters:
 *         - name: entity
 *           required: true
 *           in: path
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully
 */
router.post('/:entity', (req, res) => {
    return res.json({
        message:'Data Saved Successfully'
    });
    //return res.send('POST HTTP method on user resource');
});
/**
 * @swagger
 * /service/{entity}/{id}:
 *   put:
 *     summary:
 *     description:
 *     tags:
 *       - service
 *     produces:
 *       - application/json
 *     parameters:
 *         - name: entity
 *           required: true
 *           in: path
 *           type: string
 *         - name: id
 *           required: true
 *           in: path
 *           type: integer
 *     responses:
 *       200:
 *         description: Successfully
 */
router.put('/:entity/:id', (req, res) => {
    return res.json({
        message:'Data Updated Successfully'
    });
    //return res.send('PUT HTTP method on user resource');
});
/**
 * @swagger
 * /service/{entity}/{id}:
 *   delete:
 *     summary:
 *     description:
 *     tags:
 *       - service
 *     produces:
 *       - application/json
 *     parameters:
 *         - name: entity
 *           required: true
 *           in: path
 *           type: string
 *         - name: id
 *           required: true
 *           in: path
 *           type: integer
 *     responses:
 *       200:
 *         description: Successfully
 */
router.delete('/:entity/:id', (req, res) => {
    return res.json({
        message:'Data Deleted Successfully'
    });
    //return res.send('DELETE HTTP method on user resource');
});

module.exports = router;