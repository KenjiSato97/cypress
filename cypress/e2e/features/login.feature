#language: pt
Funcionalidade: Login de Usuário
    Como um usuário registrado
    Eu quero fazer login no swag labs
    Para acessar a loja (tela Products) ou não acessar com credenciais inválidas

    Cenário: Login bem-sucedido com credenciais válidas
        Dado que o usuário está na página de login do swag labs
        Quando o usuário insere o nome de usuário "standard_user"
        E o usuário insere a senha "secret_sauce"
        E o usuário clica no botão de login
        Então o usuário deve ser redirecionado para a página Products

    Cenário: Falha no login com credenciais inválidas
        Dado que o usuário está na página de login do swag labs
        Quando o usuário insere o nome de usuário "invalid_user"
        E o usuário insere a senha "wrong_password"
        E o usuário clica no botão de login
        Então o usuário deve ver uma mensagem de erro indicando credenciais inválidas
        E o usuário permanece na página de login do swag labs

    Cenário: Tentativa de login com campos vazios
        Dado que o usuário está na página de login do swag labs
        Quando o usuário deixa o campo de nome de usuário vazio
        E o usuário deixa o campo de senha vazio
        E o usuário clica no botão de login
        Então o usuário deve ver uma mensagem de erro indicando que os campos são obrigatórios
        E o usuário permanece na página de login do swag labs
    