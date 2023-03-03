package minibagsbolsas.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import minibagsbolsas.model.Products;
import minibagsbolsas.repository.ProductRepository;

@RestController
public class ProductController {

    @Autowired
    ProductRepository productRepository;

    @GetMapping("/listar-produtos")
    public List<Products> ListProducts() {

        return productRepository.findAll();
    }
    
    @PutMapping("/adicionar")
    public void AdicionarProduto() {
        //String sql = " INSERT INTO produtos(referencia, nome, valor, tamanho, linha)" 
        // "VALUES(referencia, nome, valor, tamanho, linha)";
    }

}