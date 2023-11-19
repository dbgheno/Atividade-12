const data = [
    { nome: 'Roger Medeiros', sexo: 'M', salario: 3250 },
    { nome: 'Carolina Silva', sexo: 'F', salario: 1200 },
    { nome: 'Cristina Avila', sexo: 'F', salario: 8100 },
    { nome: 'Gustavo Hoffman', sexo: 'M', salario: 5200.35 },
    { nome: 'Eva Trindade', sexo: 'F', salario: 2501 },
    { nome: 'Andre Mathias', sexo: 'M', salario: 1750 },
    { nome: 'Joice Castro da Silva', sexo: 'F', salario: 3350.25 },
]

// 1. Imprima no console a quantidade de pessoas Total.
console.log(data.length)

// 2. Imprima no console a quantidade de pessoas pessoas do sexo Feminino.
const mulheres = data.filter(pessoa => pessoa.sexo === 'F')
console.log(mulheres.length)

// 3. Imprima no console a soma do salário de todas as pessoas.
let somaSalario = 0
data.forEach(pessoa => somaSalario += pessoa.salario)
console.log(somaSalario.toFixed(2))

// 4. Imprima no console a média do salário de todas as pessoas.
console.log((somaSalario / data.length).toFixed(2))

// 5. Imprima no console a soma do salário de todos as pessoas do sexo Masculino
let somaSalarioHomens = 0
const homens = data.filter(pessoa => pessoa.sexo === 'M')
homens.forEach(homem => somaSalarioHomens += homem.salario)
console.log(somaSalarioHomens.toFixed(2))

// 6. Imprima no console a média do salário de todas as pessoas do sexo Masculino
console.log((somaSalarioHomens / homens.length).toFixed(2))

// 7. Utilize a função Some, para descobrir se existe algum salário superior a R$ 7.000, imprima verdadeiro no console caso exista, caso contrário falso.
console.log(data.some(pessoa => pessoa.salario > 7000))

// 8. Utilize a função findIndex, para descobrir a posição da pessoa de nome 'Eva Trindade'.
console.log(data.findIndex(pessoa => pessoa.nome === 'Eva Trindade'))

// 9. Utilize a função filter, para filtrar todas pessoas que o nome possua o sobrenome "Silva".
const silvas = data.filter(pessoa => pessoa.nome.includes('Silva'))
console.log(silvas)

// 10. Imprima os nomes utilizando o MAP
const dataMap = data.map(pessoa => pessoa.nome)
console.log(dataMap)