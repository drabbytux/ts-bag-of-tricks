// ----------------------------------------------------------
// THE BAG OF TRICKS!
// ... but first, the vars!
const tsbot_console_style = 'background:#eee;color:#7a4500';


// ----------------------------------------------------------
// FUNCTION 1 - Removing the bottom,overlapping dev tab with stats - DevUi
function removeDevUI(){
	//let devUI = 'div[data-portal-id=DevUI-portal-4]';
	// let devUI = '.SUsBa';
	let devUI = 'button[aria-label="Open developer UI"]';
	var trickOneInterval = setInterval(function () {
		clearInterval(trickOneInterval);
		$(devUI).css( {display: "none"} );
		console.log('%cTS BOT: Attempted to remove devUI.', tsbot_console_style);
	},1000);
}

// ----------------------------------------------------------
// FUNCTION 2 - ADD in shortcut edit areas to Sections items
function addShortcutToSections(){
	//let sectionDiv = "div[component='UI.SectionList']";
	let sectionDiv = ".theme-editor-action-list";
	let sectionDivData = "data-bind-attribute";
	
	var trickTwoInterval = setInterval(function () {
		clearInterval(trickTwoInterval);
		// console.log( $(`${sectionDiv} li a `) );

		// $(`${sectionDiv} li a`).css( { "background-color": "#ccc"} );theme-editor__icon
		$(`${sectionDiv} li a`).each(function( item ) {
			let sectionElement = $(this).find('.theme-editor__icon');
			if( $(this).parent().attr('data-bind-attribute') ){
				let itemFile = $(this).parent().attr('data-bind-attribute');
				let arrItemFileName = String(itemFile).split('"');
				let windowURL = window.location.href;
				$(this).parent().prepend(`<a alt="Edit the ${arrItemFileName[3]}.liquid file" title="Edit the ${arrItemFileName[3]}.liquid file" target="_blank" class="btn item-edit-ts-bot" style="padding: 5px 10px; font-size: 8px; display: block; margin: 5px;z-index: 99999;position: absolute; display: none;" href="${windowURL.replace('/editor','')}?key=sections/${arrItemFileName[3]}.liquid">EDIT</a>`);
			}
		});
		console.log('%cTS BOT: Attempted to ADD Section shortcut tabs.', tsbot_console_style);
	},3000);

}


chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// Check settings...
		removeDevUI();
		addShortcutToSections();


		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

	}
	}, 10);
});

$( document ).ready(function() {
   
	$( ".theme-editor-action-list li a" )
  .on("mouseup", function () {
		console.log('%cTS BOT: TEST change.', tsbot_console_style);
	});


	var showEditInterval = setInterval(function () {
		clearInterval(showEditInterval);
		$('.theme-editor-action-list__item').on('mouseover', function() {
			$('.item-edit-ts-bot').css("display", "none");
			$( this ).parent().find('.item-edit-ts-bot').css("display", "block");
		});

	},4000);

	


});

	console.log('testhere');
