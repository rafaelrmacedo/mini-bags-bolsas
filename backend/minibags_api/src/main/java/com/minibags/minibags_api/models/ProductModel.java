package com.minibags.minibags_api.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import lombok.Data;

@Entity
@Table(name = "produtos")
public @Data class ProductModel { //@Data from lombok for hide boiler plate code

	@Id
	@NotEmpty(message = "")
	@Column(name = "referencia")
	private String reference;
	
	@NotEmpty(message = "Referencia não pode ser nula.")
	@Column(name = "nome")
	private String name;
	
	@NotEmpty(message = "Valor não pode ser nulo.")
	@Column(name = "valor")
	private float value;
	
	@NotEmpty(message = "Tamanho não pode ser nulo.")
	@Column(name = "tamanho")
	private String size;
	
	@NotEmpty(message = "Linha não pode ser nula.")
	@Column(name = "linha")
	private String line;
	
}
