// Original JS
// jQuery(document).ready(function($){
// 	//open the lateral panel
// 	$('.cd-btn').on('click', function(event){
// 		event.preventDefault();
// 		$('.cd-panel').addClass('is-visible');
// 	});
// 	//clode the lateral panel
// 	$('.cd-panel').on('click', function(event){
// 		if( $(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close') ) { 
// 			$('.cd-panel').removeClass('is-visible');
// 			event.preventDefault();
// 		}
// 	});
// });

$(document).ready(function($){
	$('.msharp-content, .umap-content, .ecology-content').hide();				

	//open the lateral panel
	$('.view-msharp-case').on('click', function(event){
		event.preventDefault();

		$('.msharp-content').show();
		$('.ecology-content, .umap-content').hide;

		$('.overlay-panel-content').scrollTop(0);
		$('.overlay-panel').addClass('is-visible');
		$('body').addClass('disable-scroll');

		// Vertical Timeline 
		var timelineBlocks = $('.cd-timeline-block'), offset = 0.8;
		//hide timeline blocks which are outside the viewport
		hideBlocks(timelineBlocks, offset);
		//on scolling, show/animate timeline blocks when enter the viewport
		$('.msharp-content').on('scroll', function(){
			(!window.requestAnimationFrame) 
				? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
				: window.requestAnimationFrame(function(){ 
					showBlocks(timelineBlocks, offset); });
		});
		function hideBlocks(blocks, offset) {	
			blocks.each(function(){
				( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) 
				&& $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
			});
		}
		function showBlocks(blocks, offset) {
			blocks.each(function(){
				( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset 
				&& $(this).find('.cd-timeline-img').hasClass('is-hidden') ) 
				&& $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			});
		}
	});

	$('.view-umap-case').on('click', function(event){
		event.preventDefault();

		$('.umap-content').show();
		$('.ecology-content, .msharp-content').hide;

		$('.overlay-panel-content').scrollTop(0);
		$('.overlay-panel').addClass('is-visible');
		$('body').addClass('disable-scroll');
	});

	$('.view-ecology-case').on('click', function(event){
		event.preventDefault();

		$('.ecology-content').show();
		$('.umap-content, .msharp-content').hide();

		$('overlay-panel-content').scrollTop(0);
		$('.overlay-panel').addClass('is-visible');
		$('body').addClass('disable-scroll');
	});

	//close the lateral panel
	$('.overlay-panel').on('click', function(event){
		if($(event.target).is('.overlay-panel') || $(event.target).is('.overlay-panel-close')) { 
			$('.overlay-panel').removeClass('is-visible');
			$('body').removeClass('disable-scroll');
			$('.msharp-content, .ecology-content, .umap-content').fadeOut();				
			event.preventDefault();	
		}
	});

	// close panel in mobile
	$('.overlay-panel').on('click', function(event){
		if($(event.target).is('.overlay-panel') || $(event.target).is('.overlay-panel-return-to-work')) { 
			$('.overlay-panel').removeClass('is-visible');
			$('body').removeClass('disable-scroll');
			$('.msharp-content, .ecology-content, .umap-content').fadeOut();				
			event.preventDefault();
		}
	});
});