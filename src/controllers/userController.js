const db = require ('../config/config');
const query = require('..//queries/userQueries');

const getUsers = async (req, res) => {
    try {
        const allUsers = await db.any(query.getAllUsers)
        return res.status(200).json({
            status: 'Success',
            message: 'All users',
            data: allUsers
        })
    } catch (err) {
        if (err) {
            return err;
        }
    }
};

const searchUser = async (req, res) => {
    try {
        const { id, email } = req.params;
        const oneUser = await db.one(query.findUser(id, email))
        return res.status(200).json({
            status: 'Success',
            message: `User with id: ${id} Found`,
            data: oneUser
        })
    } catch (err) {
        if (err) {
            return err;
        }
    }
}

const addUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const create = await db.one(query.createUser(name, email, password))
        return res.status(200).json({
            message: `User Added successfully`,
            data: create
        })
    } catch (err) {
        if (err) {
            return err;
        }
    }
}
// const addUser = async (req, res) => {
//     try {
//         const { name, email, password } = req.body;
//         const userExists = await searchUser({email})
//         if(userExists) {
//             throw new Error('User with this email already exists')
//         }
//         const create = await db.one(query.createUser(name, email, password))
//         return res.status(200).json({
//             message: `User Added succesfully`,
//             data: create
//         })
//     } catch (err) {
//         if (err) {
//             return err;
//         }
//     }
// }

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;

        const update = await db.one(query.editUser(id, name, email))
        return res.status(200).json({
            message: `User with ID: ${id} Updated`,
            data: update
        })
    } catch (err) {
        if (err) {
            return err;
        }
    }
}

const deleteUser = async (req, res) => {
    try {  
        const { id } = req.params;  
        await db.one(query.deleteUser(id))
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
    getUsers,
    searchUser,
    addUser,
    updateUser,
    deleteUser,
}