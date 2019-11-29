// ----------------------------------------------------------
// THE BAG OF TRICKS!

/* -------- Vars! Arrrrggg! --- */
const tsbot_console_style = 'background:#feffe0;color:#7a4500';
let arrThemeLabels = ['Brooklyn','Classic', 'Debut','Jumpstart','Launchpad Star','Minimal','Pop','Simple','Supply','Venture','Narrative'];
let windowPath = window.location.href;


/* -------- Functions... deal with it! --- */

// Returns the checked text to the proper radio element
function isThemeCurrentlySelected( themeName ){
  if( windowPath.search(themeName) >= 1 ){
    return ' checked';
  } else{
    return "";
  }
}

// Loops through the theme labels defined
function themeOptions() {
  var str = `<input type="radio" name="theme-name" class="theme-item" id="themes-all" checked></li><label for="themes-all">All Themes</label>`;;
  arrThemeLabels.forEach(theme => {
    str = str +  `<input type="radio" name="theme-name" class="theme-item" id="${theme}" ${isThemeCurrentlySelected(theme)}></li><label for="${theme}">${theme}</label>`;
  });
  return str;
}


/* * * * * * *  GET TO WORK ! * * * * * * * * * */

$( document ).ready( function() {
  /* -------- Output to the DOM --- */
  let strTSThemeSelector = `<form class="ts-form">${ themeOptions() }</form>`;
  let strOutput = `<div class="ts-gists-header"><h3>Theme Search</h3>${ strTSThemeSelector }<div class="new-testing" id="result"></div></div>`;
  $('.repository-content').prepend(strOutput);

  /* -------- Events. Wait... wait... wait and see!! --- */
  $('.theme-item').on('click', item => {
    // item.currenTarget.id
    if( item.currentTarget.id == 'themes-all') {
      window.location.href = `/Shopify/ts-gists/issues`;
    } else {
      window.location.href = `/Shopify/ts-gists/labels/Theme%3A%20${item.currentTarget.id}`;
    }
  });
}); 
