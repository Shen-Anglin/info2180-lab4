function addResults()
{
    $('#search_results').load('http://localhost/info2180-lab4/superheroes.php');
}

$(document).ready(function() {
    $('#btn').click(function(s) {
		s.preventDefault();
        addResults();
    });
});