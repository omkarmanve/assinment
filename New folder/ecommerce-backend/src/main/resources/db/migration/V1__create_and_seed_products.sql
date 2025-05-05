-- src/main/resources/db/migration/V1__create_and_seed_products.sql
CREATE TABLE product (
  id UUID PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(2000),
  price DECIMAL(10,2),
  brand VARCHAR(255),
  category VARCHAR(50),
  image_url VARCHAR(1024)
);

-- Insert 20 sample products :contentReference[oaicite:6]{index=6}
INSERT INTO product(id,name,description,price,brand,category,image_url) VALUES
  (random_uuid(),'iPhone 14','Apple smartphone',799.00,'Apple','Electronics','https://...'),
  (random_uuid(),'Galaxy S23','Samsung flagship phone',699.00,'Samsung','Electronics','https://...'),
  (random_uuid(),'ThinkPad X1','Lenovo laptop',1299.00,'Lenovo','Electronics','https://...'),
  (random_uuid(),'Air Jordan','Nike sneakers',150.00,'Nike','Fashion','https://...'),
  (random_uuid(),'Levi’s Jeans','Denim pants',59.99,'Levi’s','Fashion','https://...'),
  (random_uuid(),'Harry Potter','Fantasy novel',19.99,'Bloomsbury','Books','https://...'),
  (random_uuid(),'Kindle Paperwhite','E-reader',129.99,'Amazon','Electronics','https://...'),
  (random_uuid(),'OLED TV','55-inch smart TV',699.99,'LG','Electronics','https://...'),
  (random_uuid(),'Bluetooth Speaker','Portable speaker',49.99,'JBL','Electronics','https://...'),
  (random_uuid(),'Backpack','Travel backpack',39.99,'Samsonite','Fashion','https://...'),
  (random_uuid(),'Office Chair','Ergonomic chair',149.99,'Ikea','Fashion','https://...'),
  (random_uuid(),'Gaming Mouse','High DPI mouse',29.99,'Logitech','Electronics','https://...'),
  (random_uuid(),'Cookbook','Healthy recipes',24.99,'Penguin','Books','https://...'),
  (random_uuid(),'Yoga Mat','Non‑slip mat',19.99,'Gaiam','Fashion','https://...'),
  (random_uuid(),'Noise Cancelling Headphones','Wireless',199.99,'Sony','Electronics','https://...'),
  (random_uuid(),'Desk Lamp','LED lamp',25.00,'Philips','Electronics','https://...'),
  (random_uuid(),'Sneakers','Running shoes',89.99,'Adidas','Fashion','https://...'),
  (random_uuid(),'Sci‑Fi Novel','Space adventure',14.99,'Tor','Books','https://...'),
  (random_uuid(),'Smart Watch','Fitness tracker',149.00,'Fitbit','Electronics','https://...'),
  (random_uuid(),'Sunglasses','UV protection',79.00,'Ray‑Ban','Fashion','https://...');
