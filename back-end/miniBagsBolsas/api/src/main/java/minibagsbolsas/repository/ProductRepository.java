package minibagsbolsas.repository;

import minibagsbolsas.model.Products;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Products, String>{
    
}
