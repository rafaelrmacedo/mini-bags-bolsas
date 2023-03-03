package minibagsbolsas.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@EqualsAndHashCode (onlyExplicitlyIncluded = true)
@Getter
@Setter
@Entity
@Table(name = "produtos")
public class Products {
   
    @Id
    @EqualsAndHashCode.Include
    @Column(name = "referencia")
    private String referencia;
    
    @Column(name = "nome")
    private String nome;

    @Column(name = "valor")
    private double valor;

    @Column(name = "tamanho")
    private String tamanho;

    @Column(name = "linha")
    private String linha;

}
