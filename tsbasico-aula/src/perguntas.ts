import {prompt} from 'inquirer';
import {VpHttp} from './http/vphttp';

export class Questions {

    public askName(){
        prompt(
                [
                    {
                        name: 'name',
                        type: 'input',
                        message: 'Qual o seu nome',
                    }
                ]
            ).then(
                    (answers : any) => {
                        console.log(`\nOlá ${answers.name}!\n`);
                    }
                );
    }
    public formulario(){
        prompt(
                [
                    {
                        name: 'name',
                        type: 'input',
                        message: 'Qual o seu nome?',
                    }, 
                    {
                        name: 'tel',
                        type: 'input',
                        message: 'Qual o seu telefone?',
                    }, 
                    {
                        name: 'tam',
                        type: 'list',
                        message: 'Qual tamanho você vai querer?',
                        choices: ['Pequena', 'Media', 'Grande'],
                        default: 2,
                    },
                    {
                        name: 'sabor',
                        type: 'list',
                        message: 'Qual sabor você deseja?',
                        choices: ['Frango', 'Calabresa', 'Strogonoff de Carne', 'Strogonoff de Frango', 'Kartofell'],
                        default: 2,
                    },
                    {
                        name: 'qtdade',
                        type: 'input',
                        message: 'Quantas vai querer?',
                    }, 
                    {
                        name: 'entrega',
                        type: 'list',
                        message: 'É para entregar ou vem retirar no balcão?',
                        choices: ['Vou retirar no balcão', 'Preciso que me entreguem!!'],
                        default: 2,
                    }, 


                ]
            ).then(
                    (answers : any) => {
                        if (answers.entrega === 'Preciso que me entreguem!!') {
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
                        
                        }
                    ),.then(
                    (answers : any) => {
                        console.log(`\nOlá ${answers.name}. Você pediu ${answers.qtdade} pizza(s) ${answers.tam} de ${answers.sabor}. Qualquer problema entraremos em contato com você através do telefone fornecido ( ${answers.tel} ). Obrigado pela preferencia! \n`);
                    }
    }
}

public getSabores(){
    new VpHttp('http://5c61683a1325a20014976426.mockapi.io/sabor').get().subscribe(
        (data : any) => {
            new VpHttp('http://5c61683a1325a20014976426.mockapi.io/sabor').post({}).subscribe(
                (data : any) => {
                    console.log('Conseguiu dar o post no mockapi')
                },
                (error : any) => {
                    console.log('Não conseguiu dar o post no mockapi');
                }
            )
        },
        (error : any) => {
            console.log(error);
        }
    );
}
