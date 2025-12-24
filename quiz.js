document.addEventListener("DOMContentLoaded", function () {

  // Envio do quiz (garante que existe o formulário)
  var quizForm = document.getElementById("quiz");
  if (quizForm) {
    quizForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var total = 0;

      for (var i = 1; i <= 15; i++) {
        var val = document.querySelector('input[name="q' + i + '"]:checked');
        if (val) total += parseInt(val.value);
      }

      sessionStorage.setItem("pontuacao_quiz", total);
      window.location.href = "preview.html";
    });
  }

});

// Função de pagamento
function pagar(valor, descricao){
  var link = "";

  if (descricao === "Completo"){
    link = "https://pag.ae/81kL5Z_2P";
  }

  if (descricao === "Avançado"){
    link = "https://pag.ae/81kLga4-o";
  }

  var pagDiv = document.getElementById("pagseguro");
  if (pagDiv) {
    pagDiv.innerHTML = `
      <p><strong>Você está a um passo de desbloquear seu resultado:</strong></p>
      <a href="${link}" target="_blank" class="btn">
        Pagar R$${valor}
      </a>
      <p style="font-size:14px;opacity:.8;margin-top:10px;">
        Após o pagamento, você será redirecionado automaticamente.
      </p>
    `;
  }
}

// Função para mostrar conteúdo antes do pagamento
function mostrarConteudo(tipo){
  var texto = "";
  if(tipo === "completo"){
    texto = `
      <h3>O que você vai descobrir na versão completa:</h3>
      <ul>
        <li>Seu nível real de narcisismo e como ele aparece no dia a dia;</li>
        <li>Como suas atitudes são interpretadas por outras pessoas;</li>
        <li>Comportamentos automáticos que você talvez não perceba;</li>
        <li>Dicas práticas para melhorar relações e comunicação.</li>
      </ul>
    `;
    pagar(7.99, "Completo");
  } else if(tipo === "avancado"){
    texto = `
      <h3>O que você vai descobrir na versão avançada:</h3>
      <ul>
        <li>Tudo o que existe na versão completa;</li>
        <li>Padrões psicológicos mais profundos do seu comportamento;</li>
        <li>Impactos desses traços na carreira, relacionamentos e decisões;</li>
        <li>Estratégias avançadas para reconhecer e lidar com esses padrões;</li>
        <li>Uma leitura mais profunda e reveladora do seu perfil.</li>
      </ul>
    `;
    pagar(9.99, "Avançado");
  }

  var conteudoDiv = document.getElementById("conteudo_desbloqueio");
  if (conteudoDiv) {
    conteudoDiv.innerHTML = texto;
  }
}