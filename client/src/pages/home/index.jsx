import React from 'react'
import Main from '../../components/main'

const headerProps = {
    icon: 'home',
    title: 'Início',
    subtitle: 'Aprendendo React'
}

export default function Home(props) {
    return (
        <Main {...headerProps}>
            <div className='display-4'>Bem Vindo!</div>
            <hr />
            <p className="mb-0">Sistema para exemplificar a construção
                de um cadastro desenvolvido em React!</p>
        </Main>
    )
}