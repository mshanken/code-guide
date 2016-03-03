module.exports = {
	less: [
	    {
	      pattern: /(@import ")(\w*|\w*-\w*|mixins\/\w*|mixins\/\w*-\w*)(.less");/g,
	      replacement: '$1bower_components/bootstrap/less/$2";'
	    },
	    {
	      pattern: /(@import ")(bower_components\/bootstrap\/less\/)(variables)";/g,
	      replacement: '@import "../$3";'
	    }
	],
	bscontent: [
		{
			pattern: /(---)([\s\S]+)(---)/g,
			replacement: ''
		},
		{
			pattern: /((( [\w]+=\"| aria-[\w-]+=\")([\#]|[\#\w]+|[\#\w-]+|[\w]+|[\w.]+|[\w-!\s]+)(\")){1,})((([\s]{1,}data-[\w-]+=\")([\#]|[\#\w]+|[\#\w-]+|[\w]+|[\w.\-!\s]+)(\")){1,})/g,
	      	replacement: '$6$1'
		},
		{
			pattern: /((( [\w]+=\"| data-[\w-]+=\")([\#]|[\#\w]+|[\#\w-]+|[\w]+|[\w.\-!\s]+)(\")){1,})([\s]{1,}name=\"[\w-\s]+\")/g,
	      	replacement: '$6$1'
		},
		{
			pattern: /((( [\w]+=\"| data-[\w-]+=\")([\#]|[\#\w]+|[\#\w-]+|[\w]+|[\w.\-!\s]+)(\")){1,})([\s]{1,}id=\"[\w-\s]+\")/g,
	      	replacement: '$6$1'
		},
		{
			pattern: /((( [\w]+=\"| data-[\w-]+=\")([\#]|[\#\w]+|[\#\w-]+|[\w]+|[\w.\-!\s]+)(\")){1,})([\s]{1,}class=\"[\w-\s]+\")/g,
	      	replacement: '$6$1'
		},
		/* {
			pattern: /( class=\"[\w-\s]+\")((( [\w]+=\"| data-[\w-]+=\")([\#]|[\#\w]+|[\#\w-]+|[\w]+|[\w.\-!]+)(\")){1,})( id=\"[\w-\s]+\")/g,
	      	replacement: '$1$7$2'
		},
		{
			pattern: /( class=\"[\w-\s]+\")(( [\w]+=\"| data-[\w-]+=\")([\#]|[\#\w]+|[\#\w-]+|[\w]+|[\w.\-!]+)(\")){1,5}( id=\"[\w-\s]+\")/g,
			replacement: '$1$6$2'
		},
		{
			pattern: /( class=\"[\w-\s]+\")((?! id)( [\w]+)(=\")([\#]|[\#\w]+|[\#\w-]+|[\w]+|[\w.]+|[\w-]+)(\")){1,5}( data-[\w-]+=\"[\w-\s]+\")/g,
	      	replacement: '$1$7$3'
		},
		{
			pattern: /( id=\"[\w-\s]+\")(( [\w]+=\")([\#]|[\#\w]+|[\#\w-]+|[\w]+|[\w.]+|[\w-]+)(\")){1,5}( data-[\w-]+=\"[\w-\s]+\")/g,
	      	replacement: '$1$6$3'
		},
		{
			pattern: /( [\w]+=\")([\#]|[\#\w]+|[\w]+)(\")( class=\"[\w-\s]+\")( data-[\w-]+=\"[\w-\s]+\")/g,
	      	replacement: '$4$5$1$2$3'
		},
		{
			pattern: /( [\w]+=\")([\#]|[\#\w]+|[\w]+)(\")( class=\"[\w-\s]+\")( id=\"[\w-\s]+\")/g,
	      	replacement: '$4$5$1$2$3'
		},
		{
			pattern: /( [\w]+=\")([\#]|[\#\w]+|[\w]+)(\")( id=\"[\w-\s]+\")( class=\"[\w-\s]+\")/g,
	      	replacement: '$5$4$1$2$3'
		},
		{
			pattern: /( [\w-\s]+=\")([\#]|[\#\w]+|[\w]+|[\w\s]+|...)(\")( class=\"[\w-\s]+\"| id=\"[\w-\s]+\")/g,
	      	replacement: '$4$1$2$3'
		}, */
		{
			pattern: /( id=\"[\w-\s]+\")( class=\"[\w-\s]+\")/g,
	      	replacement: '$2$1'
		},
		{
			pattern: /(<!DOCTYPE html>\n)(<html lang="en">\n)(<head><title>[\w\s]+<\/title><\/head>\n)(<body>)/g,
	      	replacement: '<div class="bs-docs-section">'
		},
		{
			pattern: /(<\/body>\n)(<\/html>)/g,
	      	replacement: '</div>'
		},
		{
			pattern: /(data-src="holder.js)/g,
	      	replacement: '$1" src="https://placehold.it'
		},
		{
			pattern: /("https:\/\/placehold.it)(\/100%x100%")/g,
	      	replacement: '$1/100x100"'
		},
		{
			pattern: /("https:\/\/placehold.it\/)(100%)(x[\d]+")/g,
	      	replacement: '$1300$3'
		},
		{
			pattern: /(\{% for iconClassName in site\.data\.glyphicons %\})([\s\S]+)(\{% endfor %\})/g,
	 	 	replacement: function(a,b,c,d){
	 	 		b = '<% for(var i in public.docs.globals._data.glyphicons.glyphicons){\n\t\t\t\tvar iconClassName = public.docs.globals._data.glyphicons.glyphicons[i] %>';
	 	 		d = '<% } %>';
	 	 		return b + c + d;
	 	 	}
		},
		{
			pattern: /(\{\{ )(iconClassName)( \}\})/g,
	 	 	replacement: function(a,b,c,d){
	 	 		b = '<%= ';
	 	 		d = ' %>';
	 	 		return b + c + d;
	 	 	}
		},
		{
			pattern: /({%)( include js\/)([\w]+)(-example)(.html )(%})/g,
	 	 	replacement: function(a,b,c,d,e,f,g) {
		        b = '<%';
		        c = '- partial("_examples/';
		        g = '") %>';
		        return b + c + d + e + g;
		    }
		},
		{
			pattern: /({%)( include )([\w\/\-]+)(.html )(%})/g,
	      	replacement: function(a,b,c,d,e,f){
	      		b = '<%';
		        c = '- partial("_';
		        e = '") %>';
		        return b + c + d + e;
		    }
		},
		{
			pattern: /(\{% highlight html %\})([\s\S]*?)(\{% endhighlight %\})/g,
	      	replacement: function(string) {
	      		var entityMap = {
				    "&": "&amp;",
				    "<": "&lt;",
				    ">": "&gt;",
				    '"': '&quot;',
				    "'": '&#39;',
				    "/": '&#x2F;'
				};
		        return String(string).replace(/[&<>"'\/]/g, function (s) {
			      	return entityMap[s];
			    });
		    }
		},
		{
			pattern: /(\{% highlight )(js|html|css|less|sass|scss)( %\})/g,
	      	replacement: '<figure class="highlight"><pre><code class="$2">'
		},
		{
			pattern: /\{% endhighlight %\}/g,
	      	replacement: '</code></pre></figure>'
		}
	],
	themes: [
	    {
	      pattern: /(@import "fuelux-core.less");/g,
	      replacement: ''
	    },
	    {
	      pattern: /(@import "forms.less");/g,
	      replacement: ''
	    }// To remove fluel-ux class
	    ,
	    {
	      pattern: /(.fuelux )({)([\s\S]+)(})/g,
	      replacement: '$3'
	    },
	    {
	      pattern: /(}[\s]+)(.fuelux {)/g,
	      replacement: ''
	    }/* ,
	    {
	      pattern: /(.fuelux )|(.fuelux)/g,
	      replacement: ''
	    }, extra not need it.
	    {
	      pattern: /((,)( )([.:&\s~\s\-\w="\(\)\[\]]+)){1,2}( {)/g,
	      replacement: '$2\n$3$4$5'
	    } */
	],
	uidocs: [
		{
			pattern: /(---)([\s\S]+)(---)/g,
			replacement: ''
		},
		{
			pattern: /<%- @partial\('header'\) %>/g,
			replacement: ''
		},
		{
			pattern: /(<%- @partial\('header')(,[\s\S]+)(\) %>)/g,
			replacement: ''
		},
		{
			pattern: /(<%- @partial\(')([\w\/\-]+)('\) %>)/g,
			replacement: '<%- partial(\'../_$2$3'
		},
		{
			pattern: /( class="main ui container")/g,
			replacement: ' class="bs-docs-section"'
		}
	]
};
