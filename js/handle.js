$(document).ready(
    function() {
    	console.log("pija");
        $("#next").on("click", loadNext); //assings the send button the propetie to call the send funtion when clicked
    });
function loadNext() {
	$("#arts").append($("<article></article>")
		.html("<img src='http://www.zbrastudios.com/wp-content/uploads/2013/02/Lorem-Ipsum_2-14-13.jpg' alt='Imagen'></img>"));
}