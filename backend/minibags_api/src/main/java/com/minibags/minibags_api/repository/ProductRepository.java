package com.minibags.minibags_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.minibags.minibags_api.models.ProductModel;

@Repository
public interface ProductRepository extends JpaRepository<ProductModel, String>{ 

}
