WITH all_days AS (
  SELECT fail_date AS dt, 'failed' AS state
  FROM Failed
  WHERE fail_date BETWEEN '2019-01-01' AND '2019-12-31'
  UNION ALL
  SELECT success_date AS dt, 'succeeded' AS state
  FROM Succeeded
  WHERE success_date BETWEEN '2019-01-01' AND '2019-12-31'
),
grouped AS (
  SELECT
    dt,
    state,
    DATE_SUB(dt, INTERVAL ROW_NUMBER() OVER (PARTITION BY state ORDER BY dt) DAY) AS grp
  FROM all_days
)
SELECT
  state AS period_state,
  MIN(dt) AS start_date,
  MAX(dt) AS end_date
FROM grouped
GROUP BY state, grp
ORDER BY start_date;
