package com.minibags.minibags_api.models;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "produtos")
public class Product { 

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

	public String getReference() {
		return reference;
	}

	public void setReference(String reference) {
		this.reference = reference;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public float getValue() {
		return value;
	}

	public void setValue(float value) {
		this.value = value;
	}

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}

	public String getLine() {
		return line;
	}

	public void setLine(String line) {
		this.line = line;
	}

	@Override
	public int hashCode() {
		return Objects.hash(line, name, reference, size, value);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Product other = (Product) obj;
		return Objects.equals(line, other.line) && Objects.equals(name, other.name)
				&& Objects.equals(reference, other.reference) && Objects.equals(size, other.size)
				&& Float.floatToIntBits(value) == Float.floatToIntBits(other.value);
	}
	
}
