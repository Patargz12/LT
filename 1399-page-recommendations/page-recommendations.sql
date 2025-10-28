SELECT DISTINCT page_id AS recommended_page
FROM Likes
WHERE user_id IN (
    -- Find all friends of user 1
    SELECT user2_id FROM Friendship WHERE user1_id = 1
    UNION
    SELECT user1_id FROM Friendship WHERE user2_id = 1
)
AND page_id NOT IN (
    -- Exclude pages user 1 already likes
    SELECT page_id FROM Likes WHERE user_id = 1
);