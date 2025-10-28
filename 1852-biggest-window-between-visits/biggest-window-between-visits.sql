WITH next_visit AS (
  SELECT
    user_id,
    visit_date,
    LEAD(visit_date, 1, '2021-01-01') OVER (
      PARTITION BY user_id ORDER BY visit_date
    ) AS next_date
  FROM UserVisits
)
SELECT
  user_id,
  MAX(DATEDIFF(next_date, visit_date)) AS biggest_window
FROM next_visit
GROUP BY user_id
ORDER BY user_id;
