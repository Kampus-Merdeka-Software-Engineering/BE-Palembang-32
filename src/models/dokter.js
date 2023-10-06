const dbpool = require('../config/database');

const getAllDokter = () => {
    const SQLQuery = 'SELECT * FROM dokter';
    
    return dbpool.execute(SQLQuery);
}

const createNewDokter = (body) => {
    const SQLQuery = `  INSERT INTO dokter (nama, bidang) 
                        VALUES ('${body.nama}', '${body.bidang}')`;
    
    return dbpool.execute(SQLQuery);
}

const updateDokter = (body, idDokter) => {
    const SQLQuery = `  UPDATE dokter 
                        SET nama='${body.nama}', bidang='${body.bidang}'
                        WHERE id=${idDokter}`;

    return dbpool.execute(SQLQuery);                   
}

const deleteDokter = (idDokter) => {
    const SQLQuery = `DELETE FROM dokter WHERE id=${idDokter}`;

    return dbpool.execute(SQLQuery);                   
}

module.exports = {
    getAllDokter,
    createNewDokter,
    updateDokter,
    deleteDokter,
}