//function status(request, response) {
//response.status(200).send("alunos do curso.dev");
// esse metodo send não assume o UFT por padrão por isso vamos utilizar o json
//}

function status(request, response) {
  response.status(200).json({ chave: "são acima da média" });
}

// isso daqui está sendo feito para exportar como padrão a função status
// se eu não colocar isso acaba dando um erro, de internal server error
export default status;
