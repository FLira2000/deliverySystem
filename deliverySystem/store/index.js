import { createStore } from 'redux';

function reducer(){
    return [
        {
            key: 1,
            nome: "Fábio",
            origem: "Rua Joaquim Moreira - Sepetiba",
            destino: "Estrada do Magarça - Magarça",
            data: '26/06/2018'
        },
        {
            key: 2,
            nome: "Adrielly",
            origem: "Rua Joaquim Moreira - Sepetiba",
            destino: "Rua Sargento Rosa - Diplomata",
            data: '12/05/2001'
        },
        {
            key: 3,
            nome: "Zenaide",
            origem: "Rua Joaquim Moreira - Sepetiba",
            destino: "Rua Dona Júlia - Sepetiba",
            data: '19/12/1954'
        },
        {
            key: 4,
            nome: "Gabriel S.",
            origem: "Rua Parazinho - Vila Nova",
            destino: "UEZO",
            data: '19/12/1954'
        }
    ]
}

const store = createStore(reducer);

export default store;