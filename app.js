// Festa Vip
function Verificar() {
    const cliente = document.querySelector('.nomecliente').value;
    const convidado = document.querySelector('.name').value;
    const nomeConvidado = convidado.toUpperCase();
    const meusConvidados = ['KUAN','LETICIA','FABIO','JUAN','LUKY','KAUAN'];
    const permissao = document.querySelector('.permissao')

    permissao.innerHTML = "Verificando..."

    setTimeout(function(){ 
        if (cliente === "") {
            permissao.innerHTML = "Digite seu nome!"
        }else if (nomeConvidado === "") {
            permissao.innerHTML = "Digite quem o convidou!"
        }else if (meusConvidados.includes(nomeConvidado)) {
            permissao.innerHTML = "Você foi convidado"
        }else {
            permissao.innerHTML = "Você não foi convidado"
        }
     }, 2000);
    
     console.log(nomeConvidado);
    
}