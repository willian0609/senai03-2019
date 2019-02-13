import {prompt} from 'inquirer';

export class Delivery {
    private dadosPedido : any = null;
    private dadosEntrega : any = null;

    public fazerPedido(){
        this.perguntarDadosPedido();
    }

    private perguntarDadosPedido(){
        prompt(
            [
                {
                    name: 'delivery',
                    type: 'list',
                    message: 'Deseja que seja entregue',
                    choices : ['Sim', 'Não']
                }
            ]
        ).then(
                (answers : any) => {
                    this.dadosPedido = answers;

                    if (answers.delivery === 'sim'){
                        this.perguntarDadosEntrega();
                    } else {
                        this.imprimirRelatorio();
                    }
                }
            );
    }

    private perguntarDadosEntrega(){
        prompt(
            [
                {
                    name: 'city',
                    type: 'input',
                    message: 'Cidade:'
                },
                {
                    name: 'neighborhood',
                    type: 'input',
                    message: 'Bairro:'
                },
                {
                    name: 'street',
                    type: 'input',
                    message: 'Rua:'
                },
                {
                    name: 'number',
                    type: 'input',
                    message: 'Número:'
                },
                {
                    name: 'complement',
                    type: 'input',
                    message: 'Complemento:'
                }
            ]
         
        ).then(
                (answers : any) => {
                    this.dadosEntrega = answers;
                    this.imprimirRelatorio();
                }
            );
    }

    private imprimirRelatorio(){
        console.log(this.dadosPedido.nome);

        if (this.dadosEntrega !== null) {
            //Imprimir dados da entrega
        }
    }
}