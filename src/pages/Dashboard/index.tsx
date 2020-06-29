import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';
import logo from '../../assets/logo.svg';
import { Title, Form, Repositories, InputError } from "./styles";
import { Link } from 'react-router-dom';

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string,
        avatar_url: string
    }
}

const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('');
    const [inputError, setInputError] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>(
        () => {
            const storagedRepositories = localStorage.getItem('@GithubExplorer:repositories');
            if(storagedRepositories) {
                return JSON.parse(storagedRepositories);
            }
            return [];
        }
    );

    useEffect(() => {
        localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories));
    }, [repositories])

    async function handleAddRepository(event:FormEvent<HTMLFormElement>): Promise<void>{
        event.preventDefault();

        if(!newRepo.trim()) {
            setInputError('Digite o autor/nome do repositório');
            return;
        }

        try {
            const response = await api.get<Repository>(`/repos/${newRepo}`);

            setRepositories([...repositories, response.data]);
            setNewRepo('')
            setInputError('');
        } catch (err) {
            setInputError('Erro ao buscar o repositório');
        }
    }

    return (
        <>
            <img src={logo} alt="Github Exploer"/>
            <Title>Explore repositórios no Github</Title>

            <Form onSubmit={handleAddRepository} hasError={!!inputError}>
                <input placeholder="Digite o nome do respositório"
                    value={newRepo}
                    onChange={(event) => setNewRepo(event.target.value)}
                />
                <button>Pesquisar</button>
            </Form>

            {inputError &&
                <InputError>{inputError}</InputError>
            }

            <Repositories>
                {repositories.length > 0 ? (
                    repositories.map(repository => (
                        <Link key={repository.full_name} to={`repository/${repository.full_name}`}>
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                        />

                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>

                        <FiChevronRight size={26} />
                    </Link>
                    ))
                ):(
                    <strong>Nehum repositório encontrado</strong>
                )}
            </Repositories>
        </>
    )
}

export default Dashboard;
