window.addEventListener('load',function(){

	var list = document.querySelector(".project-list");
	var form = document.querySelector(".contact-form");
	// The message and case-study layouts load this script too, without either element.
	if (!list || !form) return;
	var previews = list.querySelectorAll(".preview");
	var didScroll = false;

	// No form backend: open the visitor's mail app with the fields filled in.
	// The form's own mailto action is the fallback when this script doesn't run.
	form.addEventListener('submit', function(event) {
	  event.preventDefault();
	  var field = function(id) { return form.querySelector('#' + id).value.trim(); };
	  var body = field('info') + '\n\n' + field('name') + '\n' + field('phone') + '\n' + field('email');
	  window.location.href = 'mailto:kevin@trimm.co'
	    + '?subject=' + encodeURIComponent('Hello from trimm.co')
	    + '&body=' + encodeURIComponent(body.trim());
	});

	function checkScroll() {
	    didScroll = true;
	}

	setInterval(function() {
	    if(didScroll) {
	        didScroll = false;
	        for (var i = 0; i < previews.length; i++) {
				var bounds = previews[i].getBoundingClientRect();
				if(isInViewport(bounds)){
					previews[i].classList.add("-in-focus");
				}
                else{
					previews[i].classList.remove("-in-focus");
				}
			}
	    }
	}, 200);

	function isInViewport(e){
		var offset = window.pageYOffset;
		return offset > (e.top + offset) - (window.innerHeight * .1)
            && offset < (e.bottom + offset) - (window.innerHeight * .5);
	}

	window.addEventListener('scroll', checkScroll);

});
