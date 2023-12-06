function getAllItems({limit, offset}) {
    const allItems = `SELECT * FROM items ORDER BY id DESC LIMIT $(limit) OFFSET $(offset)
    `
    return allItems;
}

function getItem(id) {
    const item = `SELECT * 
                        FROM 
                            items
                        WHERE id = ${id};
    `
    return item;
}

function createItem(name, descr, qty) {
    const newItem = `
        INSERT INTO 
        items (name, descr, qty) 
            VALUES
                ( '${name}', '${descr}', '${qty}') RETURNING *
    `
    return newItem;
}

function updateItem(id, name, descr, qty) {
    const update = `UPDATE items 
            SET name = '${name}', descr = '${descr}', qty = '${qty}'
            WHERE id = ${id} RETURNING id, name AS new_name, descr AS updated_descr, qty AS new_qty
    `
    return update;
}

function deleteItem(id) {
    const deleteOne =   `DELETE FROM items 
                            WHERE id = ${id} RETURNING id`
    return deleteOne;
}


module.exports = {
    getAllItems,
    createItem,
    updateItem,
    getItem,
    deleteItem
};