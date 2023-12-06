function getAllUsers() {
    const allItems = `SELECT * FROM users;`
    return allItems;
}

function findUser(id) {
    const singleUser = `SELECT * FROM users WHERE id = ${id};`
    return singleUser;
}

function createUser(name, email) {
    const newUser = `
        INSERT INTO 
        users (name, email) 
            VALUES
                ( '${name}', '${email}') RETURNING *;
    `
    return newUser;
}

function editUser(id, name, email) {
    const userUpdate = `UPDATE users 
            SET name = '${name}', email = '${email}'
            WHERE id = ${id} RETURNING *;
    `
    return userUpdate;
}

function deleteUser(id) {
    const deleteOne =   `DELETE FROM users 
                            WHERE id = ${id} RETURNING id`
    return deleteOne;
}



module.exports = {
    getAllUsers,
    findUser,
    createUser,
    editUser,
    deleteUser,
}