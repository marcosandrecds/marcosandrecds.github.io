// Seleção dos elementos do DOM
const fotoPerfil = document.getElementById("fotoPerfil");
const nomePerfil = document.getElementById("nomePerfil");
const cursoPerfil = document.getElementById("cursoPerfil");
const biografiaPerfil = document.getElementById("biografiaPerfil");
const perfilSecao = document.getElementById("perfil");

const temaSelect = document.getElementById("temaSelect");
const fonteRange = document.getElementById("fonteRange");
const valorFonte = document.getElementById("valorFonte");
const mostrarBio = document.getElementById("mostrarBio");

const emailInput = document.getElementById("emailInput");
const telefoneInput = document.getElementById("telefoneInput");
const btnAtualizarContato = document.getElementById("btnAtualizarContato");
const emailExibido = document.getElementById("emailExibido");
const telefoneExibido = document.getElementById("telefoneExibido");

const contadorAcoes = document.getElementById("contadorAcoes");
const ultimaAcao = document.getElementById("ultimaAcao");

const btnAlterarNome = document.getElementById("btnAlterarNome");
const btnAlterarCurso = document.getElementById("btnAlterarCurso");
const btnAlterarFoto = document.getElementById("btnAlterarFoto");
const btnDestacarPerfil = document.getElementById("btnDestacarPerfil");
const btnRestaurar = document.getElementById("btnRestaurar");

// Valores originais do perfil, usados na Funcionalidade 5 (Restaurar Perfil)
const nomeOriginal = nomePerfil.textContent.trim();
const cursoOriginal = cursoPerfil.textContent.trim();
const fotoOriginal = fotoPerfil.getAttribute("src");

// Novos valores aplicados pelas funcionalidades de alteração
const novoNome = "Maria Oliveira";
const novoCurso = "Curso: Análise e Desenvolvimento de Sistemas";
const novaFoto = "imagens/perfil2.jpg";

// Contador de ações para a Funcionalidade 10 (Estatísticas da Sessão)
let totalAcoes = 0;

// Atualiza o contador de ações e a última ação executada
function registrarAcao(descricao) {
    totalAcoes++;
    contadorAcoes.textContent = totalAcoes;
    ultimaAcao.textContent = descricao;
}

// Funcionalidade 1 - Alterar Nome
btnAlterarNome.addEventListener("click", function () {
    nomePerfil.textContent = novoNome;
    registrarAcao("Alteração de nome");
});

// Funcionalidade 2 - Alterar Curso
btnAlterarCurso.addEventListener("click", function () {
    cursoPerfil.textContent = novoCurso;
    registrarAcao("Alteração de curso");
});

// Funcionalidade 3 - Alterar Foto
btnAlterarFoto.addEventListener("click", function () {
    fotoPerfil.src = novaFoto;
    registrarAcao("Alteração de foto");
});

// Funcionalidade 4 - Destacar Perfil
btnDestacarPerfil.addEventListener("click", function () {
    perfilSecao.classList.add("perfil-destaque");
    registrarAcao("Destaque do perfil");
});

// Funcionalidade 5 - Restaurar Perfil (nome, curso, foto e destaque)
btnRestaurar.addEventListener("click", function () {
    nomePerfil.textContent = nomeOriginal;
    cursoPerfil.textContent = cursoOriginal;
    fotoPerfil.src = fotoOriginal;
    perfilSecao.classList.remove("perfil-destaque");
    registrarAcao("Restauração do perfil");
});

// Funcionalidade 6 - Alterar Tema da Página
temaSelect.addEventListener("change", function () {
    // Remove qualquer tema aplicado anteriormente
    document.body.classList.remove("tema-claro", "tema-escuro", "tema-azul");

    // Aplica o tema selecionado
    if (temaSelect.value === "claro") {
        document.body.classList.add("tema-claro");
    } else if (temaSelect.value === "escuro") {
        document.body.classList.add("tema-escuro");
    } else if (temaSelect.value === "azul") {
        document.body.classList.add("tema-azul");
    }

    registrarAcao("Alteração de tema");
});

// Funcionalidade 7 - Controle de Tamanho da Fonte (em tempo real)
fonteRange.addEventListener("input", function () {
    const tamanho = fonteRange.value;
    biografiaPerfil.style.fontSize = tamanho + "px";
    valorFonte.textContent = tamanho + "px";

    registrarAcao("Alteração do tamanho da fonte");
});

// Funcionalidade 8 - Exibir ou Ocultar Biografia
mostrarBio.addEventListener("change", function () {
    if (mostrarBio.checked) {
        biografiaPerfil.style.display = "block";
    } else {
        biografiaPerfil.style.display = "none";
    }

    registrarAcao("Exibição/ocultação da biografia");
});

// Funcionalidade 9 - Atualizar Informações de Contato
btnAtualizarContato.addEventListener("click", function () {
    const email = emailInput.value.trim();
    const telefone = telefoneInput.value.trim();

    emailExibido.textContent = "E-mail: " + (email !== "" ? email : "não informado");
    telefoneExibido.textContent = "Telefone: " + (telefone !== "" ? telefone : "não informado");

    registrarAcao("Atualização de contato");
});

// Funcionalidade 10 - Estatísticas da Sessão
// (atualizada automaticamente por registrarAcao() em cada funcionalidade acima)
