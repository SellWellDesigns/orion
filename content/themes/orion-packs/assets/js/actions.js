(function(){
	'use strict';

	/**
	 * Tabs
	 */
	$(document).on('click', '[data-tab]', function(){
		var tab = $(this).data('tab');
		
		$('[data-tab]').add('.tab').removeClass('active');
		$('[data-tab="' + tab + '"]').add('#' + tab).addClass('active');
	});

}());