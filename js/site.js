window.addEventListener('load',function(){
	console.log(window.pageYOffset);

	var list = document.querySelector(".project-list");
	var previews = list.querySelectorAll(".preview");
	var didScroll = false;

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
				}else{
					previews[i].classList.remove("-in-focus");
				}
			}
	    }
	}, 200);

	function isInViewport(e){
		var offset = window.pageYOffset;
		return offset > (e.top + offset) - (window.innerHeight * .5) && window.pageYOffset < (e.bottom + offset);
	}

	window.addEventListener('scroll', checkScroll);
});