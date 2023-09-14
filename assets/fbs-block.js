(function ($) {
	$(document).ready(function () {

		$("body").on("click", ".fbs-pricing-table .checkbox", function (e) {
      
      if( this.checked ){
        $('#basic').text('$199.99');
        $('#professional').text('$249.99');
        $('#master').text('$399.99');
      }else{
        $('#basic').text('$19.99');
        $('#professional').text('$24.99');
        $('#master').text('$39.99'); 
      }

		});

	});
})(jQuery);
