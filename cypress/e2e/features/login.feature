#language: pt
Funcionalidade: Login de Usuário
    Como um usuário registrado
    Eu quero fazer login no swag labs
    Para acessar a loja (tela Products) ou não acessar com credenciais inválidas
    Contexto: Página de Login do Swag Labs
        Dado que o usuário está na página de login do swag labs

    Esquema do Cenário: Testes de Login
        Quando o usuário insere o nome de usuário <username> e a senha <password>
        E o usuário clica no botão de login
        Então o usuário deve ver a mensagem <errorMessage>

        Exemplos:
            | username          | password         | errorMessage                                         |
            | "invalid_user"    | "secret_sauce"   | "Epic sadface: Username and password do not match"   |
            | ""                | "secret_sauce"   | "Epic sadface: Username is required"                 |
            | "standard_user"   | ""               | "Epic sadface: Password is required"                 |
            | "locked_out_user" | "secret_sauce"   | "Epic sadface: Sorry, this user has been locked out."|
    
    Cenário: Login bem-sucedido com credenciais válidas
        Quando o usuário insere o nome de usuário "standard_user"
        E o usuário insere a senha "secret_sauce"
        E o usuário clica no botão de login
        Então o usuário deve ser redirecionado para a página Products

    Cenário: Falha no login com credenciais inválidas
        Quando o usuário insere o nome de usuário "invalid_user"
        E o usuário insere a senha "wrong_password"
        E o usuário clica no botão de login
        Então o usuário deve ver uma mensagem de erro indicando credenciais inválidas
        E o usuário permanece na página de login do swag labs

    Cenário: Tentativa de login com campo username vazio e a senha correta
        Quando o usuário deixa o campo de nome de usuário vazio
        E o usuário insere a senha "secret_sauce"
        E o usuário clica no botão de login
        Então o usuário deve ver uma mensagem de erro indicando que o campo de usuário é obrigatório
        E o usuário permanece na página de login do swag labs
    
     Cenário: Tentativa de login com campo username correto e a senha vazia
        Quando o usuário insere o nome de usuário "standard_user"
        E o usuário deixa o campo de senha vazio
        E o usuário clica no botão de login
        Então o usuário deve ver uma mensagem de erro indicando que o campo de senha é obrigatório
        E o usuário permanece na página de login do swag labs