import { Entity, Column, PrimaryColumn, Double } from "typeorm"

@Entity("produtos") // Nome da tabela
export class Product{
    
    @PrimaryColumn({name: 'referencia', type: 'varchar'}) // Chave primária
    reference: String;

    @Column({ name: 'nome', type: 'varchar' }) // Coluna
    name: String;

    @Column({ name: 'preco', type: 'float' }) // Coluna
    price: Double;

    @Column({ name: 'tamanho', type: 'varchar' }) // Coluna
    size: String;

    @Column({ name: 'linha', type: 'varchar' }) // Coluna
    line: String;

}