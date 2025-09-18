WITH ValidRecords AS (
    SELECT id, visit_date, people
    FROM Stadium
    WHERE people >= 100
),
ConsecutiveGroups AS (
    SELECT 
        id, 
        visit_date, 
        people,
        id - ROW_NUMBER() OVER (ORDER BY id) AS group_id
    FROM ValidRecords
),
GroupSizes AS (
    SELECT 
        group_id,
        COUNT(*) as group_size
    FROM ConsecutiveGroups
    GROUP BY group_id
    HAVING COUNT(*) >= 3
)
SELECT 
    c.id,
    c.visit_date,
    c.people
FROM ConsecutiveGroups c
JOIN GroupSizes g ON c.group_id = g.group_id
ORDER BY c.visit_date;