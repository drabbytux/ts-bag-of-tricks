// ----------------------------------------------------------
// THE BAG OF TRICKS!
// ... but first, the vars!
const tsbot_console_style = 'background:#feffe0;color:#7a4500';
let windowURL = window.location.href;


// ----------------------------------------------------------
// FUNCTION 1 - Removing the bottom,overlapping dev tab with stats - DevUi
function removeDevUI(){
	//let devUI = 'div[data-portal-id=DevUI-portal-4]';
	// let devUI = '.SUsBa';
	let devUI = 'button[aria-label="Open developer UI"]';
	var trickOneInterval = setInterval(function () {
		clearInterval(trickOneInterval);
		$(devUI).css( {display: "none"} );
		console.log('%cAttempted to remove devUI.', tsbot_console_style);
	},2000);
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
				$(this).parent().prepend(`<a alt="Edit the ${arrItemFileName[3]}.liquid file" title="Edit the ${arrItemFileName[3]}.liquid file" target="_blank" class="item-edit-ts-bot" style="" href="${windowURL.replace('/editor','')}?key=sections/${arrItemFileName[3]}.liquid">EDIT</a>`);
			}
		});
		console.log('%cAttempted to ADD Section shortcut tabs.', tsbot_console_style);
	},2000);

}

// ----------------------------------------------------------
// FUNCTION 3 - Change the Notification Text area for the better
function changeNotificationLayout(){
		$('.ui-layout__section--secondary').remove();
		$('#email_template_body_html').removeAttr( 'style' );
		$('#email_template_body_html').css({'min-height':'400px','max-height':'400px','height':'400px','resize':'both','overflow':'auto'});
		console.log('%cNotifications - Attempted to change textarea.', tsbot_console_style);
}


// ----------------------------------------------------------
// FUNCTION 4 - ADD a TS Dropdown for links like Language in the header
function addTSButton(){
	//let strThemeLanguageHTML = `<a href="${location.pathname}/language" class="ui-button ui-button--transparent ui-button--size-small" target="_blank">Edit Language</a>`;
	let strThemeLanguageHTML = `<form>
	<select class="tsbot-quick-links">
	  <option value="">TS Links</option>
		<option value="${location.pathname}/language" >Edit Language</option>
		<option value="/admin/settings/files" >Files</option>
		</select>
		<form>`;
	$('.template-editor-titlebar__actions').append(strThemeLanguageHTML);
	console.log('%cLanguage button added', tsbot_console_style);
}


// ----------------------------------------------------------
// FUNCTION 5 - Go to the bottom of stylesheets
function goToBottomOfPage(){
	let strThemeBTNScrollBottom = '<button class="ui-button ui-button--size-small tsbot-scroll-down">Scroll down</button>'
  //	$('.theme-asset-actions>.ui-button-group').append(strThemeBTNScrollBottom);
}

// ----------------------------------------------------------
// S T A R T    I T    U P !!!!

chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// The Tasks!
		console.group('TS Bag of Tricks');
		removeDevUI();
		addShortcutToSections();
		changeNotificationLayout();
		addTSButton();
		goToBottomOfPage();
		console.groupEnd();
	}
	}, 3000);
});


// ----------------------------------------------------------
// D O C    R E A D Y
$( document ).ready(function() {

	var showEditInterval = setInterval(function () {
		clearInterval(showEditInterval);
		$('.theme-editor-action-list__item').on('mouseover', function() {
			$('.item-edit-ts-bot').css("display", "none");
			$( this ).parent().find('.item-edit-ts-bot').css("display", "block");
		});


		$(function(){
			$('.tsbot-quick-links').on('change', function () {
					var url = $(this).val(); // get selected value
					console.log(url);
					if (url) { // require a URL
							window.open( url ); // redirect
							console.log('Tried to open...');
					}
					return false;
			});
		});

	
				$('.tsbot-scroll-down').on('click', function() {
					console.log('scroll clicked');
					//window.scrollTo(0,document.body.scrollHeight);
					//window.scrollTo(0,document.querySelector(".CodeMirror-sizer").scrollHeight);
					window.scrollTo(0,document.querySelector(".code-asset-container").scrollHeight);
				});
	
	},4000);





});
