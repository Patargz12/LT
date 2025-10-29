WITH RECURSIVE sub AS (
  SELECT employee_id, manager_id
  FROM Employees
  WHERE manager_id = 1 AND employee_id <> 1
  UNION
  SELECT e.employee_id, e.manager_id
  FROM Employees e
  JOIN sub s ON e.manager_id = s.employee_id
  WHERE e.employee_id <> 1
)
SELECT DISTINCT employee_id
FROM sub;