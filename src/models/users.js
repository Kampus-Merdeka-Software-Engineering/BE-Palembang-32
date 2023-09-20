const dbpool = require('../config/database');

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users';
    
    return dbpool.execute(SQLQuery);
}

const createNewUser = (body) => {
    const SQLQuery = `  INSERT INTO users (nama, email, adress) 
                        VALUES ('${body.nama}', '${body.email}', '${body.adress}')`;
    
    return dbpool.execute(SQLQuery);
}

const updateUser = (body, idUser) => {
    const SQLQuery = `  UPDATE users 
                        SET nama='${body.nama}', email='${body.email}', adress='${body.adress}'
                        WHERE id=${idUser}`;

    return dbpool.execute(SQLQuery);                   
}

const deleteUser = (idUser) => {
    const SQLQuery = `DELETE FROM users WHERE id=${idUser}`;

    return dbpool.execute(SQLQuery);                   
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}