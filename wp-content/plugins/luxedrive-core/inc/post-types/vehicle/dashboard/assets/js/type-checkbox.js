(function ( $ ) {
	'use strict';

	$( document ).ready(
		function () {
			qodefTypeCheckbox.init();
		}
	);

	var qodefTypeCheckbox = {
		init: function() {
			var $check = $('#vehicle-typechecklist input[type="checkbox"]');

			$check.on(
				'change',
				function(event) {
					var checked = jQuery( this ).prop( 'checked' );
					// Clear all other inputs on this level:
					jQuery( this ).closest( 'ul' ).find( 'input[type="checkbox"]' ).removeAttr( 'checked' );
					// Set the value:
					jQuery( this ).prop(
						'checked',
						checked
					)
				}
			);
		}
	};

})( jQuery );