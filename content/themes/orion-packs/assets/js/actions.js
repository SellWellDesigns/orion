(function(){
	'use strict';

	/**
	 * Tabs
	 */
	$(document).on('click', '[data-tab]', function(){
		var tab = $(this).data('tab');
		
		$('.tab').removeClass('active');
		$('#' + tab).addClass('active');
	});

	/**
	 * AJAX Pagination
	 */
	$(document).on('click', '.pagination a', function(e){
		e.preventDefault();

		var
			$self = $(this),
			href = $self.attr('href') || '/'
		;

		$.get(href, function(data){
			$('#blogRoll').html( $('#blogRoll', data).html() );
		});

		return false;
	});

}());