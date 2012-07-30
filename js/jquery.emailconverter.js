/*
*
* E-Mail Converter
*
* Author: José Carlos Araújo < jcwd at josecarloswd dot com >
* Website: www.josecarloswd.com
*
* Usage:
* <span class="email">your-name at servername dot com</span>
* The script will convert to: <span class="email"><a href="mailto:your-name@servername.com">your-name@servername.com</a></span>
*
* You can set false the 'mailTo' parameter to remove the link address.
* Result: <span class="email">your-name@servername.com</span>
*
*/

(function($){
	$.fn.emailConverter = function(options){
		
		var defaults = {
			'mailTo' : true //Insert <a href="mailto:your@email.com">
		};
		
		var settings = $.extend({} , defaults, options);
		
		return this.each (function(){
			var emailAddress = $(this).text().replace(/\at/g,'@').replace(/\sdot/g,'.').replace(/\s+/g,'').toLowerCase();	
			
			if(settings.mailTo){
				var link = 'mailto:' + emailAddress;
                $(this).html($('<a></a>').attr('href', link).text(emailAddress));
			} else {
				$(this).text(emailAddress);
			}
		});
	};
})(jQuery);