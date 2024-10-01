let skillsOn;

$(document).ready(function() {
    $('#extra-container').load('./html/skills.html', function(response, status, xhr) {
        if (status == "error") {
            console.log("Houve um erro");
        } else {
            skillsOn = true;
        }
    });

    const button = $('#btn-projects');
    button.on('click', function() {
        if (skillsOn) {
            $('#extra-container').load('./html/projects.html', function(response, status, xhr) {
                if (status == "error") {
                    console.log("Houve um erro");
                }
            });
            button.find('#button-text').text('Ver skills');
            skillsOn = false;
        } else {
            $('#extra-container').load('./html/skills.html', function(response, status, xhr) {
                if (status == "error") {
                    console.log("Houve um erro");
                }
            });
            button.find('#button-text').text('Ver projetos');
            skillsOn = true;
        }

    })
});