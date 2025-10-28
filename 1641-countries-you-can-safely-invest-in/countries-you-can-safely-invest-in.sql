WITH CallsWithCountry AS (
    SELECT 
        c.duration,
        SUBSTRING(p.phone_number, 1, 3) AS country_code
    FROM Calls c
    JOIN Person p ON c.caller_id = p.id
    
    UNION ALL
    
    SELECT 
        c.duration,
        SUBSTRING(p.phone_number, 1, 3) AS country_code
    FROM Calls c
    JOIN Person p ON c.callee_id = p.id
),
GlobalAvg AS (
    SELECT AVG(duration) AS global_avg
    FROM Calls
),
CountryAvg AS (
    SELECT 
        country_code,
        AVG(duration) AS country_avg
    FROM CallsWithCountry
    GROUP BY country_code
)

SELECT co.name AS country
FROM CountryAvg ca
JOIN Country co ON ca.country_code = co.country_code
CROSS JOIN GlobalAvg g
WHERE ca.country_avg > g.global_avg;