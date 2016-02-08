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
	bootstrap: [
		{
			pattern: /(\{% highlight html %\})([\s\S]+)(\{% endhighlight %\})/g,
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
	      	replacement: '<pre><code class="$2">'
		},
		{
			pattern: /\{% endhighlight %\}/g,
	      	replacement: '</code></pre>'
		}
	]
};