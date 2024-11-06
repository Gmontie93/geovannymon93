

SELECT w_s.worker_title
FROM (
    SELECT  t.worker_title, w.salary,
           RANK() OVER (ORDER BY w.salary DESC) AS rank
    FROM title AS t
    INNER JOIN worker AS w
    ON t.worker_ref_id = w.worker_id
) AS w_s
WHERE w_s.rank = 1;
