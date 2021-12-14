<h1>Projeto Vue-desafio</h1>

<div>
    <p>
        1° Serviço de encurtamento de urls
    </p>
    <p>
        2° Cadastro de usuário sign up/login
    </p>
    <p>
        3° Usuários podem criar urls de forma anonima
    </p>
    <p>
        4° Usuários registrados podem deleter urls criadas por eles mesmos
    </p>
    <p>
        5° Redirecionar para a url original quando a url encurtada for visitada
    </p>
    <p>

    </p>
</div>

<div>
    <h2>Configurações</h2>
        <p>1 ° Criar um arquivo .env seguindo o exemplo do .env-example</p>
        <p>2 ° Criar banco de dados para armazenamento dos usuários registrados e urls cadastradas</p>
        <p>3 ° Criar tabelas no bd conforme documentação</p>
</div>


<div>
    <p>Tabelas</p>
    <p>1° users(nome_user(unique), password) </p>
    <p>2° urls(url_completa,url_encurtada(unique)), fk_id_user</p>
    <pre> 
    Modelagem do banco de dados:
        
    create table users(
        id_user int not null auto_increment,
        user_name varchar(255) not null unique,
        password char(40) not null,
        primary key(id_user)
    );

    create table urls(
	    id_url int not null auto_increment,
        fk_user int null,
        url_completa varchar(255) null unique,
        url_encurtada varchar(100) null unique,
        foreign key(fk_user) references users(id_user),
        primary key(id_user)
    )    
    </pre>
</div>
