update estados 
set nome = 'Maranhão'
where sigla ='MA'

SELECT nome from estados where sigla= "MA";
--OU
SELECT `nome` from estados where sigla= "MA";
--OU
SELECT est.`nome` from estados est where sigla= "MA";