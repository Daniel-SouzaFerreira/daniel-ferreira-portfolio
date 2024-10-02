let skillsOn;

$(document).ready(function() {
    $('#tabs-navbar').on('click', 'ul li', function() {
        $('#tabs-navbar ul li').removeClass('selected');
        $(this).addClass('selected');
        
        const selectedOption = $(this).attr('id');
        loadHtml(selectedOption);
    })
});

function loadHtml(selectedOption) {
    $('#extra-container').load(`./html/${selectedOption}.html`, function(response, status, xhr) {
        if (status == "error") {
            console.log("Houve um erro");
        }
    });
}