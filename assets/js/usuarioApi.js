const BASE_URL = 'http://localhost:4000';

// Função para criar usuário
async function criarUsuario(nome, email, senha) {
    const response = await fetch(`${BASE_URL}/usuario`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, senha })
    })

    return response.json();
}

//Função para listar usuários
async function listarUsuarios() {
    const response = await fetch(`${BASE_URL}/usuario`);
    return response.json();
}

// Função para buscar usuário por email
async function buscarUsuarioPorEmail(email) {
    const response = await fetch(`${BASE_URL}/usuario/${email}`);
    return response.json();
}

// Função para atualizar usuário
async function atualizarUsuario(email, nome, senha) {
    const response = await fetch(`${BASE_URL}/usuario/${encodeURIComponent(email)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, senha })
    })

    return response.json();
}

// Função para deletar usuário
async function deletarUsuario(id) {
    const response = await fetch(`${BASE_URL}/usuario/${id}`, {
        method: 'DELETE'
    })

    return response.status === 204;
}

export { 
    criarUsuario, 
    listarUsuarios, 
    buscarUsuarioPorEmail, 
    atualizarUsuario, 
    deletarUsuario 
}
