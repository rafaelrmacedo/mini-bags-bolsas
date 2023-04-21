package com.minibags.minibags_api.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.minibags.minibags_api.models.*;
import com.minibags.minibags_api.repository.*;
import com.minibags.minibags_api.services.*;

@RestController
@RequestMapping("adicionar-produtos")
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@Autowired
	private ProductRepository productRepository;

	@PostMapping("/adicionar-produtos")
	public ProductRepository addProduct(Product reqData){
		return null;
	}

	@GetMapping("/todos-produtos")
	public ProductRepository getAllProducts() {
		return null;
	}

	@GetMapping("/procurar-produto-por-referencia/{reference}")
	public ProductRepository getProductById(@PathVariable("reference") String reference) {
		return null;
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
