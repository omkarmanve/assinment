
package com.example.ecommerce.controller;

import com.example.ecommerce.model.Product;
import com.example.ecommerce.repository.ProductRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController  
@RequestMapping("/products")  
public class ProductController {  

  private final ProductRepository repo;  
  public ProductController(ProductRepository repo) { this.repo = repo; }

  @GetMapping  
  public List<Product> list(@RequestParam Optional<String> search) {  
    if (search.isPresent()) {  
      String s = "%" + search.get().toLowerCase() + "%";  
      return repo.findByNameIgnoreCaseLikeOrBrandIgnoreCaseLike(s, s);  
    }  
    return repo.findAll();                                    // returns all when no search :contentReference[oaicite:3]{index=3}
  }

  @GetMapping("/{id}")  
  public Product getById(@PathVariable UUID id) {  
    return repo.findById(id).orElseThrow(() -> new RuntimeException("Not found"));  
  }
}
