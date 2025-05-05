
package com.example.ecommerce.repository;

import com.example.ecommerce.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.UUID;

public interface ProductRepository extends JpaRepository<Product, UUID> {
  // partial‐match search on name or brand :contentReference[oaicite:2]{index=2}
  List<Product> findByNameIgnoreCaseLikeOrBrandIgnoreCaseLike(String name, String brand);
}
