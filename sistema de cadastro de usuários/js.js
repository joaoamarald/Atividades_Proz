class CadastroUsuarios {
    constructor() {
        this.usuarios = [];
    }

    incluirUsuario(cpf, nome, dataNascimento, email) {
        if (this.usuarios.some(user => user.CPF === cpf)) {
            console.log("Usuário com este CPF já existe!");
            return;
        }
        this.usuarios.push({
            CPF: cpf,
            Nome: nome,
            "Data de Nascimento": dataNascimento,
            Email: email
        });
        console.log("Usuário cadastrado com sucesso!");
    }

    alterarUsuario(cpf, nome = null, dataNascimento = null, email = null) {
        const user = this.usuarios.find(user => user.CPF === cpf);
        if (user) {
            if (nome) user.Nome = nome;
            if (dataNascimento) user["Data de Nascimento"] = dataNascimento;
            if (email) user.Email = email;
            console.log("Usuário atualizado com sucesso!");
        } else {
            console.log("Usuário não encontrado!");
        }
    }

    excluirUsuario(cpf) {
        const index = this.usuarios.findIndex(user => user.CPF === cpf);
        if (index !== -1) {
            this.usuarios.splice(index, 1);
            console.log("Usuário removido com sucesso!");
        } else {
            console.log("Usuário não encontrado!");
        }
    }

    pesquisarUsuario(nome) {
        const encontrados = this.usuarios.filter(user => user.Nome.toLowerCase().includes(nome.toLowerCase()));
        if (encontrados.length) {
            console.log(encontrados);
        } else {
            console.log("Nenhum usuário encontrado com esse nome!");
        }
    }

    listarUsuarios() {
        if (!this.usuarios.length) {
            console.log("Nenhum usuário cadastrado!");
            return;
        }
        console.log(this.usuarios);
    }
}

// Exemplo de uso
const database = new CadastroUsuarios();
database.incluirUsuario("12345678900", "João Silva", "01/01/1990", "joao@email.com");
database.incluirUsuario("09876543211", "Maria Oliveira", "15/05/1985", "maria@email.com");
database.listarUsuarios();
database.pesquisarUsuario("Maria");
database.alterarUsuario("12345678900", null, null, "joao.novo@email.com");
database.excluirUsuario("09876543211");
database.listarUsuarios();
