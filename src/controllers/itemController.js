const db = require ('../config/config');
const query = require('..//queries/itemQueries');

const getAllItems = async (req, res) => {
    try {
        const { size = 5, page = 1 } = req.query
        const limit = 5
        const offset = (parseInt(page) - 1) * limit

        const allItems = await db.any(query.getAllItems, {limit, offset})
        return res.status(200).json({
            status: 'Success',
            message: 'All fashion items',
            data: allItems
        })
    } catch (err) {
        if (err) {
            console.log(err)
            return err;
        }
    }
};

const getSingleItem = async (req, res) => {
    try {
        const { id } = req.params;
        const oneItem = await db.one(query.getItem(id))
        return res.status(200).json({
            status: 'Success',
            message: `Item with id: ${id} Found`,
            data: oneItem
        })
    } catch (err) {
        if (err) {
            console.log(err)
            return err;
        }
    }
}

const addNewItem = async (req, res) => {
    try {
        const { name, descr, qty } = req.body;
        console.log(`${name} ,${descr}, ${qty}`)
        const create = await db.one(query.createItem(name, descr, qty))
        return res.status(200).json({
            status: 'Success',
            message: `Item Added`,
            data: create
        })
    } catch (err) {
        if (err) {
            console.log(err)
            return err;
        }
    }
}

const updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, descr, qty } = req.body;

        const update = await db.one(query.updateItem(id, name, descr, qty))
        return res.status(200).json({
            status: 'Success',
            message: `Item with ID: ${id} Updated`,
            data: update
        })
    } catch (err) {
        if (err) {
            console.log(err)
            return err;
        }
    }
}

const deleteItem = async (req, res) => {
    try {  
        const { id } = req.params;  
        await db.one(query.deleteItem(id))
        return res.status(200).json({
            status: 'Success',
            message: `Item with id: ${id} deleted`,
        })
    } catch (err) {
        if (err) {
            console.log(err)
            return err;
        }
    }
}


module.exports = {
    getAllItems,
    addNewItem,
    updateItem,
    getSingleItem,
    deleteItem,
};