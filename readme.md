
# HTML5

    Estrutura e conteúdo

    Elemento de HTML
        tag de abertura e tag de fechamento -> ex: <p></p>

        - Head
            título, ícone, metadados, importação de scripts, etc.

        - Body
            Conteúdo visível: parágrafos, frases, tabelas, imagens, etc.

        - Atributos
            Todos os elementos de HTML podem conter atributos. Em alguns casos são obrigatórios.
            São propriedades adicionais para configurar ou ajustar o comportamento dos elementos.
            Os atributos são fundamentais na relação HTML com o CSS e JavaScript.
            Os atributos são definidos dentro da tag de abertura dos elementos HTML.

            - Atributos Globais
                Podem ser usados em todos os elementos HTML.
                Existem atributos específicos para alguns elementos.
                Atributos globais muito comuns: id e class
                    id: identifica de forma única um elemento no documento HTML.
                    class: lista as classes de um elemento HTML.

            - Elementos semânticos
                São elementos de HTML para agrupar outros elementos.
                Não tem conteúdo.
                Permitem melhorar a organização da página HTML.
                Criar condições para usar o CSS da melhor forma.

    Por que index.html?
        - Os servidores adotam o index.html como "base/entrada" para apresentar ao usuário, caso não tenha, será mostrada uma lista de arquivos daquela página no servidor;

        Hiperlinks 
            -> criado com o elemento <a>
            -> permite navegar entre páginas
            -> permite navegar no conteúdo da mesma página

    Segurança
        - As validações de HTML5 não são seguras;
        - Pode ser utilizado como um primeiro layer de validação
        - Pode ser utilizado validação de JavaScript, porém também não é a solução mais segura pois é feito do lado do usuário;

            Como validar?
                usar validação de html5 como primeira camada;
                usar javascript como segunda camada;
                fazer SEMPRE validação do lado do servidor;
        
        
# CSS3

    Aplicação de estilos - Cascading Style Sheets

    Organização de layouts de HTML.

    Declarações de CSS
        - Propriedade
            Propriedades tem nomes facilitadores ex: font-size, backgroud.

        - Valor
            Valores que as propriedades podem ter ex: red, 18px.

    Cores
        - Palavras chaves de cores
            Cerca de 140 cores.
        
        - RGB e RGBA
            Red, green e blue (alpha).

        - Código hexadecimal
            6 ou 8 caracteres (no caso do alpha) que permitem definir as cores.

        - Outros

# JavaScript

    JavaScript = ECMA Script

    A mais popular linguagem de programação de scripts para execução do lado do cliente;

    Criada para adicionar interatividade e dinamismo ao HTML;
    
        - Fundamentos gerais
        - Interação com HTML no browser

        