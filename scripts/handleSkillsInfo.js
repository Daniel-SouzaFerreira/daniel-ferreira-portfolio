
$(document).ready(function() {
    const skillsInfoContainer = $('#skill-info');
    const skillElement = $('#skills-container .skills-box i');

    displayHoverSkill(skillsInfoContainer, skillElement);

    skillElement.mouseleave(function() {
        skillsInfoContainer.fadeOut(200, function() {
            skillsInfoContainer.empty();
        });
    });
});

function displayHoverSkill(skillsInfoContainer, skillElement) {
    skillElement.click(function() {
        const iconElement = $(this);

        skillsInfoContainer.empty();
        skillsInfoContainer.append(`<p id="skills-info-title">${iconElement.attr('id')}</p>`);

        const skillIconClasses = iconElement.attr('class');
        const skillIcon = $('<i></i>').addClass(skillIconClasses);
        skillsInfoContainer.append(skillIcon);

        const skillId = iconElement.attr('id');
        if (!skillsInfoContainer.find('#skills-description').length) {
            skillsInfoContainer.append(`<p id="skills-description">${getSkillInfoText(skillId)}</p>`);
        }

        skillsInfoContainer.slideDown(300);
    });
}

function getSkillInfoText(skillId) {
    return {
        "HTML5": "Linguagem de marcação usada para estruturar o conteúdo na web",
        "CSS3": "Linguagem de estilos para projetar e personalizar a aparência de páginas web",
        "Javascript": "Linguagem de programação para criar interatividade e funcionalidades dinâmicas em páginas web",
        "NodeJS": "Ambiente de execução JavaScript no servidor, permitindo construir aplicações back-end escaláveis",
        "Python": "Linguagem de programação de alto nível, versátil e usada para automação, desenvolvimento web e ciência de dados",
        "MySQL": "Sistema de gerenciamento de banco de dados relacional, amplamente utilizado para armazenar dados estruturados",
        "MongoDB": "Banco de dados NoSQL orientado a documentos, ideal para armazenar dados não estruturados e flexíveis",
        "Elasticsearch": "Motor de busca e análise em tempo real, usado para lidar com grandes volumes de dados de forma eficiente",
        "Sequelize": "ORM (Mapeamento Objeto-Relacional) para Node.js que facilita a interação com bancos de dados SQL",
        "Mongoose": "Biblioteca Node.js que oferece uma modelagem robusta para trabalhar com MongoDB",
        "React": "Biblioteca JavaScript para construir interfaces de usuário dinâmicas e reutilizáveis em aplicações web",
        "jQuery": " Biblioteca JavaScript que simplifica a manipulação de elementos DOM e a gestão de eventos",
        "Handlebars": "Motor de templates que facilita a criação de HTML dinâmico com JavaScript",
        "Postman": "Ferramenta de testes para APIs, permitindo enviar requisições HTTP e visualizar respostas",
        "GIT": "Sistema de controle de versão distribuído, utilizado para rastrear mudanças no código-fonte de projetos"
    }[skillId] || "";
}