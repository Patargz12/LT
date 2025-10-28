WITH product_count AS (
  SELECT 
    customer_id,
    product_id,
    COUNT(*) AS order_count
  FROM Orders
  GROUP BY customer_id, product_id
),
max_count AS (
  SELECT 
    customer_id,
    MAX(order_count) AS max_order_count
  FROM product_count
  GROUP BY customer_id
)
SELECT 
  p.customer_id,
  p.product_id,
  pr.product_name
FROM product_count p
JOIN max_count m 
  ON p.customer_id = m.customer_id 
 AND p.order_count = m.max_order_count
JOIN Products pr 
  ON p.product_id = pr.product_id;
