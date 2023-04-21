package com.minibags.minibags_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.minibags.minibags_api.models.Product;

public interface ProductRepository extends JpaRepository<Product, String>{ 

}
