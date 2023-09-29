const dbpool = require('../config/database');

const getAllBook = () => {
    const SQLQuery = 'SELECT * FROM Book';
    
    return dbpool.execute(SQLQuery);
}

const createNewBook = (body) => {
    const SQLQuery = `  INSERT INTO Book (nama, number, namaDokter, dateBook) 
                        VALUES ('${body.nama}', '${body.number}', '${body.namaDokter}', '${body.dateBook}')`;
    
    return dbpool.execute(SQLQuery);
}

const updateBook = (body, idBook) => {
    const SQLQuery = `  UPDATE Book 
                        SET nama='${body.nama}', number='${body.number}', namaDokter='${body.namaDokter}', dateBook='${body.dateBook}'
                        WHERE id=${idBook}`;

    return dbpool.execute(SQLQuery);                   
}

const deleteBook = (idBook) => {
    const SQLQuery = `DELETE FROM Book WHERE id=${idBook}`;

    return dbpool.execute(SQLQuery);                   
}

module.exports = {
    getAllBook,
    createNewBook,
    updateBook,
    deleteBook,
}