class Caixamsg{
    static origem = document.body
    static chamarResultado (result){
        // Criando Fundo da caixa de erro
        const msgErroFundoEstilo = `
        position: absolute;
        background-color: rgba(0, 0, 0, 0.493);
        width: 100%;
        height: 100%;
        z-index:1;`
        const msgErroFundo = document.createElement('div')
        msgErroFundo.setAttribute('id','msgErroFundo')
        msgErroFundo.setAttribute('style',msgErroFundoEstilo)
        this.origem.prepend(msgErroFundo)

        // Criando Caixa de erro
        const caixaErroEstilo = `
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        background-color: #ececec;
        width: 400px;
        height: 200px;
        border:  none;
        border-bottom: 3px ridge #b4b4b4ce;
        border-right: 3px ridge #b4b4b4ce;
        border-left: 3px solid #ffffff;
        border-top: 3px solid #ffffff;
        z-index: 1;`
        const caixaErro = document.createElement('div')
        caixaErro.setAttribute('id','caixaErro')
        caixaErro.setAttribute('style',caixaErroEstilo)
        msgErroFundo.appendChild(caixaErro)

        // Criando título da caixa de erro
        const msgErroTituloEstilo = `
        background-image: linear-gradient(to right,${result.cor[0]},${result.cor[1]});
        text-align: center;
        color: white;`
        const msgErroTitulo = document.createElement('div')
        msgErroTitulo.setAttribute('id','msgErroTitulo')
        msgErroTitulo.setAttribute('style',msgErroTituloEstilo)
        msgErroTitulo.innerHTML=`<h2>${result.titulo}</h2>`
        caixaErro.appendChild(msgErroTitulo)

        // Criando caixa de texto do erro
        const msgErroTextoEstilo = `
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        align-items: center;
        padding: 10px;`
        const msgErroTexto = document.createElement('div')
        msgErroTexto.setAttribute('id','msgErroTexto')
        msgErroTexto.setAttribute('style',msgErroTextoEstilo)
        msgErroTexto.innerHTML=`<p>${result.texto}</p>`
        caixaErro.appendChild(msgErroTexto)

        // Criando botão da caixa de erro
        const btnOk = document.createElement('button')
        btnOk.setAttribute('id','btnOk')
        btnOk.innerHTML='ok'
        btnOk.addEventListener('click',(el)=>{
            const origemErro = el.target.parentNode.parentNode
            this.fecharErro(origemErro)
        })
        caixaErro.appendChild(btnOk)
    }

    static fecharErro(erro){
       erro.remove()
    }
}
export {Caixamsg}