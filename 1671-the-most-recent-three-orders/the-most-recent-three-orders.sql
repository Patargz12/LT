WITH ranked_orders AS (
  SELECT 
    o.order_id,
    o.order_date,
    o.customer_id,
    c.name AS customer_name,
    ROW_NUMBER() OVER (PARTITION BY o.customer_id ORDER BY o.order_date DESC) AS rnk
  FROM Orders o
  JOIN Customers c
    ON o.customer_id = c.customer_id
)
SELECT 
  customer_name,
  customer_id,
  order_id,
  order_date
FROM ranked_orders
WHERE rnk <= 3
ORDER BY customer_name, customer_id, order_date DESC;
