package com.minibags.minibags_api.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.minibags.minibags_api.repository.*;
import com.minibags.minibags_api.models.*;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository productRepository;

	public Object addProduct(Product reqData) {
		return productRepository.save(reqData);
	}

	public Object getAllProducts() {
		return productRepository.findAll();
	}
	
	public Object getProductById(String reference) {
		return productRepository.findById(reference);
	}

	public Object updateProduct(Product reqData) {

		//TO-DO
		
		return "";
		
	}

	public Object deleteProductById(String id) {
		productRepository.deleteById(id);
		return null;
	}

}
