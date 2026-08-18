const alunos = [
    {nome: "Beatriz", nota: 8},
    {nome: "Camila", nota: 9},
    {nome: "Matheus", nota:6}
]

const aprovados = alunos.filter((aluno) => aluno.nota >= 7);

console.log(aprovados);