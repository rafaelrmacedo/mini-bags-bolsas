import { Double, getManager } from 'typeorm';
import { Product } from '../entities/Product';

type ProductRequest = {
  reference: string;
  name: string;
  price: Double;
  size: string;
  line: string;
};

export class CreateProductService {
    async create({
        reference, name, price, size, line
    }: ProductRequest): Promise<Product | Error>{ // Método create para criar um produto no banco de dados
        const repo = getManager().getRepository(Product);

        if (await repo.findOne({ reference })) // TODO: Verificar se o produto já existe
            throw new Error('Product already exists');
      
    const product = repo.create({
      reference,
      name,
      price,
      size,
      line,
    });

    await repo.save(product);

    return product;
  }
}