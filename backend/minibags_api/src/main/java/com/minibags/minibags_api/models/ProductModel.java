package com.minibags.minibags_api.models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "produtos")
public class ProductModel { 

	@Id
	@Column(name = "referencia")
	private String reference;
	
	@Column(name = "nome")
	private String name;
	
	@Column(name = "valor")
	private float value;
	
	@Column(name = "tamanho")
	private String size;
	
	@Column(name = "linha")
	private String line;

}
