$( function() {
	var navBtns$ = $( '.navBtn'),
		aboutPage$ = $( '#aboutPage' ),
		teamPage$ = $( '#teamPage' );

	var isFirstTime = true,
		fadeInSpeed = 850,
		currentlyShowing = "";

	var startURL = window.location.hash;


	navBtns$.on( 'click', function(e) {
		var who = $(e.target).text();

		console.log( 'click on ' + who );


		if ( currentlyShowing !== "" ) {
			if ( currentlyShowing === "about" ) {
				aboutPage$.hide();
			} else
			if ( currentlyShowing === "team" ) {
				teamPage$.hide();
			}
		}

		if ( who === 'about' ) {
			aboutPage$.show( fadeInSpeed );
			currentlyShowing = 'about';
		} else
		if ( who === 'team' ) {
			teamPage$.show( fadeInSpeed );
			currentlyShowing = 'team';
		}

		if ( isFirstTime ) {
			$( '#bkgdMain' ).fadeOut( 500 );
			isFirstTime = false;
		}

		window.location.hash =  startURL + ( '#' + currentlyShowing );
	});

});