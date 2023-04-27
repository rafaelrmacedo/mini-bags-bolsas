package com.minibags.minibags_api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.minibags.minibags_api.models.Product;
import com.minibags.minibags_api.repository.ProductRepository;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/produtos")
public class ProductController {
	
	@Autowired
	private ProductRepository productRepository;

	@PostMapping("/adicionar-produtos")
	public Product addProduct(@RequestBody Product product){
		return productRepository.save(product);
	}

	@GetMapping("/todos-produtos")
	public List<Product> getAllProducts() {
		return productRepository.findAll();
	}

	@GetMapping("/procurar-produto-por-referencia/{reference}")
	public Object getProductById(@PathVariable("reference") String reference) {
		return productRepository.findById(reference);
	}

	@PutMapping("/atualizar-produto")
	public ProductRepository updateProduct(@RequestBody Product reqData) {
		return null;
	}

	@DeleteMapping("/deletar-produto-por-referencia/{reference}")
	public ProductRepository deleteProductById(@PathVariable("referencia") String id) {
		return null;
	}


}
