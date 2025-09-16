SELECT customer_number
FROM Orders
GROUP BY customer_number
HAVING COUNT(order_number) = (
    SELECT MAX(cnt)
    FROM (
        SELECT COUNT(order_number) AS cnt
        FROM Orders
        GROUP BY customer_number
    ) AS t
);
