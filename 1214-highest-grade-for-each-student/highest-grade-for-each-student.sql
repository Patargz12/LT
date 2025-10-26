SELECT student_id, course_id, grade
FROM (
    SELECT 
        student_id,
        course_id,
        grade,
        ROW_NUMBER() OVER (
            PARTITION BY student_id 
            ORDER BY grade DESC, course_id ASC
        ) AS rn
    FROM Enrollments
) ranked
WHERE rn = 1
ORDER BY student_id;