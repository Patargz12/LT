SELECT 
    product_id,
    COALESCE(price_on_date, 10) AS price
FROM (
    SELECT DISTINCT product_id FROM Products
) all_products
LEFT JOIN (
    SELECT 
        product_id,
        new_price AS price_on_date
    FROM Products p1
    WHERE change_date = (
        SELECT MAX(change_date)
        FROM Products p2
        WHERE p2.product_id = p1.product_id 
        AND p2.change_date <= '2019-08-16'
    )
) latest_prices
USING (product_id);