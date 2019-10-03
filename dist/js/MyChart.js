window.onload = () => { new MyChart(); }

class MyChart {
    constructor() {
        this.iniciaElementos()
    }
    iniciaElementos() {
        this.cadastrar = document.getElementById('cadastrar')
        this.cadastrar.addEventListener('click', () => {
            this.cadastrarUsuario();
        })


    }
    cadastrarUsuario() {
        var nome = document.querySelector('#nome');
        var sexo = document.querySelector('input[name="sexo"]:checked');
        console.log(sexo)
        const dados = {
            nome: nome.value,
            sexo: sexo.dataset.value,
            data: new Date().toISOString()
        }
        axios.post('/save', dados).then(response => {
            console.log(response)
        }).catch(err => {
            alert('ops. something went wrong!', err)
        })

    }

}