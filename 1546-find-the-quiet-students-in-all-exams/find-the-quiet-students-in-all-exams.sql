SELECT s.student_id, s.student_name
FROM Student s
JOIN Exam e ON s.student_id = e.student_id
WHERE s.student_id NOT IN (
    SELECT DISTINCT e1.student_id
    FROM Exam e1
    JOIN (
        SELECT exam_id, MAX(score) AS max_score, MIN(score) AS min_score
        FROM Exam
        GROUP BY exam_id
    ) t ON e1.exam_id = t.exam_id
    WHERE e1.score = t.max_score OR e1.score = t.min_score
)
GROUP BY s.student_id, s.student_name
ORDER BY s.student_id;
