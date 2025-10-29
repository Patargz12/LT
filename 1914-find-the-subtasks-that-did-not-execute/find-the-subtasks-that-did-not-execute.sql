WITH RECURSIVE subtask_nums AS (
  SELECT 1 AS subtask_id
  UNION ALL
  SELECT subtask_id + 1
  FROM subtask_nums
  WHERE subtask_id < 20
)
SELECT t.task_id, s.subtask_id
FROM Tasks t
JOIN subtask_nums s
  ON s.subtask_id <= t.subtasks_count
LEFT JOIN Executed e
  ON t.task_id = e.task_id AND s.subtask_id = e.subtask_id
WHERE e.subtask_id IS NULL;
