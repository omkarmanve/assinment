
package com.example.ecommerce.model;

import jakarta.persistence.*;  
import java.math.BigDecimal;  
import java.util.UUID;

@Entity  
public class Product {  
  @Id  
  @GeneratedValue  
  private UUID id;                                          // UUID primary key :contentReference[oaicite:0]{index=0}
  
  @Column(nullable = false)  
  private String name;                                      // mandatory name :contentReference[oaicite:1]{index=1}
  
  @Column(length = 2000)  
  private String description;                               // long description
  
  private BigDecimal price;                                 // decimal price
  
  private String brand;                                     // brand field
  
  @Enumerated(EnumType.STRING)  
  private Category category;                                // enum category
  
  private String imageUrl;                                  // image URL

  // getters & setters omitted for brevity  
}
