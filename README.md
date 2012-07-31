jQuery E-mail Converter
=======================

Anti-spam script to prevent spam bots.

You can use this script when there is a need to enter the e-mail in text format, the body of the html.

#Usage:
```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/libs/jquery-1.7.2.min.js"><\/script>')</script>
<script src="js/jquery.emailconverter.js"></script>
<script>
$(function() {
  $('.email').emailConverter({
		'mailTo' : false //remove the link address and return pure e-mail text
	});
}); 
</script>

<span class="email">your-name at servername dot com</span>
```
The script will convert to:
```html
<span class="email"><a href="mailto:your-name@servername.com">your-name@servername.com</a></span>
```

You can set to false the 'mailTo' parameter to remove the link address.
Result: 
```html
<span class="email">your-name@servername.com</span>
```

