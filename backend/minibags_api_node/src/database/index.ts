import { createConnection } from 'typeorm';

createConnection() // Cria a conexão com o banco de dados
  .then(() => console.log('Database connection established successfully'))
  .catch((error) => console.log('Error while connecting to the database.', error));