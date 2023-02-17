SELECT address
FROM (
    SELECT address, SUM(balance_amount) as total_balance
    FROM (
        SELECT address,
        CASE denom 
            WHEN 'usdc' THEN amount * 0.000001
            WHEN "swth" THEN amount * 0.00000005
            WHEN "tmz" THEN amount * 0.003
        END as balance_amount
        FROM balances
    )
    GROUP BY address
)
WHERE total_balance >= 500
INTERSECT
SELECT DISTINCT address
FROM trades
WHERE block_height > 730000