import { hash } from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

import createConnection from '../index';

async function create() {
    const id = uuidv4();
    const password = await hash('admin', 8);
    console.log(id, password);

    const connection = await createConnection('localhost');

    await connection.query(
        `INSERT INTO USERS (id, name, email, password, "isAdmin", created_at,driver_license) 
          values ('${id}','admin','admin@rentalx.com.br','${password}','true','now()','XXXXX')`
    );
}

create().then(() => console.log('User admin created!'));
