// This file was automatically generated from gcweb-appPage-en.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace applicationPage.
 * @public
 */

if (typeof applicationPage == 'undefined') { var applicationPage = {}; }


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
applicationPage.appTop = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  var output = '<script>dataLayer = [];<\/script><!-- Google Tag Manager --><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\': new Date().getTime(),event:\'gtm.js\'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';j.async=true;j.src= \'https://www.googletagmanager.com/gtm.js?id=\'+i+dl;f.parentNode.insertBefore(j,f);})(window,document,\'script\',\'dataLayer\',\'GTM-5DBPCQJ\');<\/script><!-- End Google Tag Manager --><ul id="wb-tphp"><li class="wb-slc"><a class="wb-sl" href="#wb-cont">Skip to main content</a></li><li class="wb-slc visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Skip to "' + ((opt_data.topCusMenu == true) ? 'Related links' : 'About this Web application') + '"</a></li>' + ((opt_data.topSecMenu == true) ? '<li class="wb-slc visible-md visible-lg"><a class="wb-sl" href="#wb-sec">Skip to section menu</a></li>' : '') + '</ul><header><div id="wb-bnr" class="container">';
  if (opt_data.lngLinks != null) {
    output += '<section id="wb-lng" class="text-right"><h2 class="wb-inv">Language selection</h2><ul class="list-inline margin-bottom-none">';
    var linkList24 = opt_data.lngLinks;
    var linkListLen24 = linkList24.length;
    for (var linkIndex24 = 0; linkIndex24 < linkListLen24; linkIndex24++) {
      var linkData24 = linkList24[linkIndex24];
      output += '<li><a lang="' + soy.$$escapeHtmlAttribute(linkData24.lang) + '" href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(linkData24.href)) + '">' + soy.$$escapeHtml(linkData24.text) + '</a></li>';
    }
    output += '</ul></section>';
  }
  output += '<div class="row"><div class="brand col-xs-5 col-md-4" property="publisher" typeof="GovernmentOrganization"><img src=\'./gcweb/assets/sig-blk-en.svg\' alt="" property="logo" /><span class="wb-inv" property="name"> Government of Canada / <span lang="fr">Gouvernement du Canada</span></span><meta property="areaServed" typeOf="Country" content="Canada" /><link property="logo" href=\'./gcweb/assets/wmms-blk.svg\' /></div>';
  if (opt_data.customSearch != null) {
    var itemList79 = opt_data.customSearch;
    var itemListLen79 = itemList79.length;
    for (var itemIndex79 = 0; itemIndex79 < itemListLen79; itemIndex79++) {
      var itemData79 = itemList79[itemIndex79];
      if (itemIndex79 == 0) {
        output += '<section id="wb-srch" class="col-lg-8 text-right visible-md visible-lg"><h2>Search' + ((itemData79.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData79.placeholder) : '') + '</h2><form action="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(itemData79.action)) + '" method="' + soy.$$escapeHtmlAttribute(itemData79.method) + '" name="cse-search-box" role="search" class="form-inline"><div class="form-group"><label for="' + ((itemData79.id != null) ? soy.$$escapeHtmlAttribute(itemData79.id) : 'wb-srch-q') + '" class="wb-inv">Search' + ((itemData79.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData79.placeholder) : '') + '</label><input id="' + ((itemData79.id != null) ? soy.$$escapeHtmlAttribute(itemData79.id) : 'wb-srch-q') + '" class="wb-srch-q form-control" name="q" type="search" value="" size="34" maxlength="170" placeholder="Search' + ((itemData79.placeholder != null) ? ' ' + soy.$$escapeHtmlAttribute(itemData79.placeholder) : '') + '">';
        if (itemData79.hiddenInput != null) {
          var inputList71 = itemData79.hiddenInput;
          var inputListLen71 = inputList71.length;
          for (var inputIndex71 = 0; inputIndex71 < inputListLen71; inputIndex71++) {
            var inputData71 = inputList71[inputIndex71];
            output += '<input type="hidden" name="' + soy.$$escapeHtmlAttribute(inputData71.name) + '" value="' + soy.$$escapeHtmlAttribute(inputData71.value) + '" />';
          }
        }
        output += '</div><div class="form-group submit"><button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Search' + ((itemData79.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData79.placeholder) : '') + '</span></button></div></form></section>';
      }
    }
  }
  output += '</div></div><div class="app-bar"><div class="container"><div class="row">' + ((opt_data.appSettings != null || opt_data.signOut != null || opt_data.signIn != null) ? '<section class="col-xs-12 col-sm-7">' : '<section class="col-xs-12">');
  var itemList94 = opt_data.appName;
  var itemListLen94 = itemList94.length;
  for (var itemIndex94 = 0; itemIndex94 < itemListLen94; itemIndex94++) {
    var itemData94 = itemList94[itemIndex94];
    output += (itemIndex94 == 0) ? '<h2 class="wb-inv">Name of Web application</h2><a class="app-name" href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(itemData94.href)) + '">' + soy.$$escapeHtml(itemData94.text) + '</a>' : '';
  }
  output += '</section>';
  if (opt_data.appSettings != null || opt_data.signOut != null || opt_data.signIn != null) {
    output += '<nav class="col-sm-5 hidden-xs hidden-print"><h2 class="wb-inv">Account menu</h2><ul class="app-list-account list-unstyled">';
    if (opt_data.appSettings != null) {
      var itemList107 = opt_data.appSettings;
      var itemListLen107 = itemList107.length;
      for (var itemIndex107 = 0; itemIndex107 < itemListLen107; itemIndex107++) {
        var itemData107 = itemList107[itemIndex107];
        output += (itemIndex107 == 0) ? '<li><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(itemData107.href)) + '" class="btn"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Account settings</a></li>&#32;' : '';
      }
    }
    if (opt_data.signOut != null) {
      var itemList116 = opt_data.signOut;
      var itemListLen116 = itemList116.length;
      for (var itemIndex116 = 0; itemIndex116 < itemListLen116; itemIndex116++) {
        var itemData116 = itemList116[itemIndex116];
        output += (itemIndex116 == 0) ? '<li><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(itemData116.href)) + '" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Sign out</a></li>' : '';
      }
    } else if (opt_data.signIn != null) {
      var itemList124 = opt_data.signIn;
      var itemListLen124 = itemList124.length;
      for (var itemIndex124 = 0; itemIndex124 < itemListLen124; itemIndex124++) {
        var itemData124 = itemList124[itemIndex124];
        output += (itemIndex124 == 0) ? '<li><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(itemData124.href)) + '" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Sign in</a></li>' : '';
      }
    }
    output += '</ul></nav>';
  }
  output += '</div></div></div>';
  if (opt_data.customSearch != null || opt_data.menuPath != null || opt_data.menuLinks != null || opt_data.topSecMenu == true || opt_data.appSettings != null || opt_data.signOut != null || opt_data.signIn != null) {
    output += '<div class="app-bar-mb container visible-xs-block hidden-print">';
    if (opt_data.menuPath != null || opt_data.menuLinks != null || opt_data.topSecMenu == true || opt_data.customSearch != null) {
      output += '<nav><h2 class="wb-inv">' + ((opt_data.menuPath != null || opt_data.menuLinks != null || opt_data.topSecMenu == true) ? 'Menu' + ((opt_data.customSearch != null) ? ' and search' : '') : 'Search') + '</h2><ul class="app-list-main list-unstyled">' + ((opt_data.menuPath != null || opt_data.menuLinks != null || opt_data.topSecMenu == true) ? '<li class="wb-mb-links" id="wb-glb-mn"><a href="#mb-pnl" aria-controls="mb-pnl" class="btn overlay-lnk" role="button">Menu</a><h2>Menu</h2></li>' : '') + ((opt_data.customSearch != null) ? '<li><a href="#app-srch-mb" title="Search" aria-controls="app-srch-mb" class="btn overlay-lnk" role="button"><span class="glyphicon-search glyphicon" aria-hidden="true"></span><span class="wb-inv">Search</span></a></li>' : '') + '</ul><div id="mb-pnl"></div>';
      if (opt_data.customSearch != null) {
        var itemList203 = opt_data.customSearch;
        var itemListLen203 = itemList203.length;
        for (var itemIndex203 = 0; itemIndex203 < itemListLen203; itemIndex203++) {
          var itemData203 = itemList203[itemIndex203];
          if (itemIndex203 == 0) {
            output += '<section id="app-srch-mb" class="wb-overlay modal-content overlay-def wb-bar-t"><div class="modal-header"><h3 class="modal-title">Search' + ((itemData203.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData203.placeholder) : '') + '</h3></div><div class="modal-body"><form action="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(itemData203.action)) + '" method="' + soy.$$escapeHtmlAttribute(itemData203.method) + '" name="cse-search-box" role="search" class="form-inline"><div class="input-group"><label for="' + ((itemData203.id != null) ? 'app-' + soy.$$escapeHtmlAttribute(itemData203.id) : 'app-srch-q-mb') + '" class="wb-inv">Search' + ((itemData203.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData203.placeholder) : '') + '</label><input placeholder="Search' + ((itemData203.placeholder != null) ? ' ' + soy.$$escapeHtmlAttribute(itemData203.placeholder) : '') + '" id="' + ((itemData203.id != null) ? 'app-' + soy.$$escapeHtmlAttribute(itemData203.id) : 'app-srch-q-mb') + '" class="app-srch-q-mb form-control" name="q" type="search" value="" size="27" maxlength="150">';
            if (itemData203.hiddenInput != null) {
              var inputList195 = itemData203.hiddenInput;
              var inputListLen195 = inputList195.length;
              for (var inputIndex195 = 0; inputIndex195 < inputListLen195; inputIndex195++) {
                var inputData195 = inputList195[inputIndex195];
                output += '<input type="hidden" name="' + soy.$$escapeHtmlAttribute(inputData195.name) + '" value="' + soy.$$escapeHtmlAttribute(inputData195.value) + '" />';
              }
            }
            output += '<span class="input-group-btn"><button type="submit" id="app-srch-sub-mb" class="btn btn-primary btn-small" name="app-srch-sub-mb"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Search' + ((itemData203.placeholder != null) ? ' ' + soy.$$escapeHtml(itemData203.placeholder) : '') + '</span></button></span></div></form></div></section>';
          }
        }
      }
      output += '</nav>';
    }
    if (opt_data.appSettings != null || opt_data.signOut != null || opt_data.signIn != null) {
      output += '<nav><h2 class="wb-inv">Account menu</h2><ul class="app-list-account list-unstyled">';
      if (opt_data.appSettings != null) {
        var itemList216 = opt_data.appSettings;
        var itemListLen216 = itemList216.length;
        for (var itemIndex216 = 0; itemIndex216 < itemListLen216; itemIndex216++) {
          var itemData216 = itemList216[itemIndex216];
          output += (itemIndex216 == 0) ? '<li><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(itemData216.href)) + '" class="btn"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Account settings</a></li>&#32;' : '';
        }
      }
      if (opt_data.signOut != null) {
        var itemList225 = opt_data.signOut;
        var itemListLen225 = itemList225.length;
        for (var itemIndex225 = 0; itemIndex225 < itemListLen225; itemIndex225++) {
          var itemData225 = itemList225[itemIndex225];
          output += (itemIndex225 == 0) ? '<li><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(itemData225.href)) + '" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Sign out</a></li>' : '';
        }
      } else if (opt_data.signIn != null) {
        var itemList233 = opt_data.signIn;
        var itemListLen233 = itemList233.length;
        for (var itemIndex233 = 0; itemIndex233 < itemListLen233; itemIndex233++) {
          var itemData233 = itemList233[itemIndex233];
          output += (itemIndex233 == 0) ? '<li><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(itemData233.href)) + '" class="btn"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Sign in</a></li>' : '';
        }
      }
      output += '</ul></nav>';
    }
    output += '</div>';
    if (opt_data.menuLinks != null) {
      output += '<nav id="wb-sm" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"><div class="pnl-strt container nvbar"><h2 class="wb-inv">Main navigation menu</h2><div class="row"><ul class="list-inline menu" role="menubar">';
      var linkList299 = opt_data.menuLinks;
      var linkListLen299 = linkList299.length;
      for (var linkIndex299 = 0; linkIndex299 < linkListLen299; linkIndex299++) {
        var linkData299 = linkList299[linkIndex299];
        if (linkData299.subLinks != null) {
          output += '<li><a href="#' + soy.$$escapeHtmlAttribute(linkData299.id) + '" class="item"' + ((linkData299.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData299.text) + ((linkData299.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a><ul class="sm list-unstyled" id="' + soy.$$escapeHtmlAttribute(linkData299.id) + '" role="menu">';
          var sublinkList283 = linkData299.subLinks;
          var sublinkListLen283 = sublinkList283.length;
          for (var sublinkIndex283 = 0; sublinkIndex283 < sublinkListLen283; sublinkIndex283++) {
            var sublinkData283 = sublinkList283[sublinkIndex283];
            output += (sublinkIndex283 == sublinkListLen283 - 1) ? '<li class="slflnk"><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(sublinkData283.subhref)) + '"' + ((sublinkData283.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(sublinkData283.subtext) + ((sublinkData283.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>' : '<li><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(sublinkData283.subhref)) + '"' + ((sublinkData283.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(sublinkData283.subtext) + ((sublinkData283.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>';
          }
          output += '</ul></li>';
        } else {
          output += '<li><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(linkData299.href)) + '" class="item"' + ((linkData299.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData299.text) + ((linkData299.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>';
        }
      }
      output += '</ul></div></div></nav>';
    } else if (opt_data.menuPath != null) {
      output += '<nav id="wb-sm" data-ajax-replace="' + soy.$$escapeHtmlAttribute(opt_data.menuPath) + '" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"></nav>';
    }
  }
  if (opt_data.breadcrumbs != null) {
    output += '<nav id="wb-bc" property="breadcrumb"><h2>You are here:</h2><div class="container"><div class="row"><ol class="breadcrumb">';
    var itemList328 = opt_data.breadcrumbs;
    var itemListLen328 = itemList328.length;
    for (var itemIndex328 = 0; itemIndex328 < itemListLen328; itemIndex328++) {
      var itemData328 = itemList328[itemIndex328];
      output += '<li>' + ((itemData328.acronym != null) ? '<abbr title="' + soy.$$escapeHtmlAttribute(itemData328.acronym) + '">' : '') + ((itemData328.href != null) ? '<a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(itemData328.href)) + '">' : '') + soy.$$escapeHtml(itemData328.title) + ((itemData328.href != null) ? '</a>' : '') + ((itemData328.acronym != null) ? '</abbr>' : '') + '</li>';
    }
    output += '</ol></div></div></nav>';
  }
  output += '</header>' + ((opt_data.showPreContent != false) ? '' : '');
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  applicationPage.appTop.soyTemplateName = 'applicationPage.appTop';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
applicationPage.appFooter = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  var output = '<footer id="wb-info">';
  if (opt_data.footerSections != null) {
    output += '<div class="landscape"><nav class="container wb-navcurr"><h2 class="wb-inv">Related links</h2><ul class="list-unstyled colcount-sm-2 colcount-md-3">';
    var linkList351 = opt_data.footerSections;
    var linkListLen351 = linkList351.length;
    for (var linkIndex351 = 0; linkIndex351 < linkListLen351; linkIndex351++) {
      var linkData351 = linkList351[linkIndex351];
      output += '<li><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(linkData351.href)) + '"' + ((linkData351.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData351.text) + ((linkData351.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>';
    }
    output += '</ul></nav></div>';
  }
  output += '<div class="brand"><div class="container"><div class="row"><nav class="col-md-10 ftr-urlt-lnk"><h2 class="wb-inv">About this Web application</h2><ul>';
  if (opt_data.contactLink != null) {
    var linkList375 = opt_data.contactLink;
    var linkListLen375 = linkList375.length;
    for (var linkIndex375 = 0; linkIndex375 < linkListLen375; linkIndex375++) {
      var linkData375 = linkList375[linkIndex375];
      output += (linkIndex375 == 0) ? '<li><a ' + ((linkData375.href) ? ' href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(linkData375.href)) + '"' : ' href="https://www.canada.ca/en/contact.html"') + ((linkData375.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Contact information' + ((linkData375.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>' : '';
    }
  } else {
    output += '<li><a href="https://www.canada.ca/en/contact.html">Contact information</a></li>';
  }
  if (opt_data.termsLink != null) {
    var linkList399 = opt_data.termsLink;
    var linkListLen399 = linkList399.length;
    for (var linkIndex399 = 0; linkIndex399 < linkListLen399; linkIndex399++) {
      var linkData399 = linkList399[linkIndex399];
      output += (linkIndex399 == 0) ? '<li><a ' + ((linkData399.href) ? ' href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(linkData399.href)) + '"' : ' href="https://www.canada.ca/en/transparency/terms.html"') + ((linkData399.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Terms and conditions' + ((linkData399.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>' : '';
    }
  } else {
    output += '<li><a href="https://www.canada.ca/en/transparency/terms.html">Terms and conditions</a></li>';
  }
  if (opt_data.privacyLink != null) {
    var linkList423 = opt_data.privacyLink;
    var linkListLen423 = linkList423.length;
    for (var linkIndex423 = 0; linkIndex423 < linkListLen423; linkIndex423++) {
      var linkData423 = linkList423[linkIndex423];
      output += (linkIndex423 == 0) ? '<li><a ' + ((linkData423.href) ? ' href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(linkData423.href)) + '"' : ' href="https://www.canada.ca/en/transparency/privacy.html"') + ((linkData423.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Privacy' + ((linkData423.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>' : '';
    }
  } else {
    output += '<li><a href="https://www.canada.ca/en/transparency/privacy.html">Privacy</a></li>';
  }
  output += '</ul></nav><div class="col-xs-6 visible-sm visible-xs tofpg"><a href="#wb-cont">Top of Page <span class="glyphicon glyphicon-chevron-up"></span></a></div><div class="col-xs-6 col-md-3 col-lg-2 text-right"><img src=\'./gcweb/assets/wmms-blk.svg\' alt="Symbol of the Government of Canada" /></div></div></div></div></footer>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  applicationPage.appFooter.soyTemplateName = 'applicationPage.appFooter';
}
// This file was automatically generated from gcweb-en.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace wet.builder.
 * @public
 */

if (typeof wet == 'undefined') { var wet = {}; }
if (typeof wet.builder == 'undefined') { wet.builder = {}; }


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
wet.builder.serverRefTop = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(serverPage.serverRefTop(opt_data, null, opt_ijData)));
};
if (goog.DEBUG) {
  wet.builder.serverRefTop.soyTemplateName = 'wet.builder.serverRefTop';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
wet.builder.serverTop = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(serverPage.serverTop(opt_data, null, opt_ijData)));
};
if (goog.DEBUG) {
  wet.builder.serverTop.soyTemplateName = 'wet.builder.serverTop';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
wet.builder.serverRefBottom = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(serverPage.serverRefBottom(opt_data, null, opt_ijData)));
};
if (goog.DEBUG) {
  wet.builder.serverRefBottom.soyTemplateName = 'wet.builder.serverRefBottom';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
wet.builder.serverBottom = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(serverPage.serverBottom(opt_data, null, opt_ijData)));
};
if (goog.DEBUG) {
  wet.builder.serverBottom.soyTemplateName = 'wet.builder.serverBottom';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
wet.builder.appTop = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(applicationPage.appTop(opt_data, null, opt_ijData));
};
if (goog.DEBUG) {
  wet.builder.appTop.soyTemplateName = 'wet.builder.appTop';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
wet.builder.appFooter = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(applicationPage.appFooter(opt_data, null, opt_ijData));
};
if (goog.DEBUG) {
  wet.builder.appFooter.soyTemplateName = 'wet.builder.appFooter';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
wet.builder.refTop = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  var output = '<script>dataLayer = [];<\/script><!-- Google Tag Manager --><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\': new Date().getTime(),event:\'gtm.js\'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';j.async=true;j.src= \'https://www.googletagmanager.com/gtm.js?id=\'+i+dl;f.parentNode.insertBefore(j,f);})(window,document,\'script\',\'dataLayer\',\'GTM-5DBPCQJ\');<\/script><!-- End Google Tag Manager -->';
  if (opt_data.webAnalytics != null) {
    output += '<!-- Adobe Analytics --><script src="//assets.adobedtm.com/';
    var aaList455 = opt_data.webAnalytics;
    var aaListLen455 = aaList455.length;
    for (var aaIndex455 = 0; aaIndex455 < aaListLen455; aaIndex455++) {
      var aaData455 = aaList455[aaIndex455];
      output += 'caacec67651710193d2331efef325107c23a0145/satelliteLib-' + ((aaData455.version == 1) ? '92fcbbc24eeebb654a3dfbe688ed2dfe10a53e24' : (aaData455.version == 2) ? 'c2082deaf69c358c641c5eb20f94b615dd606662' : '') + ((aaData455.environment == 'staging') ? '-staging' : '');
    }
    output += '.js"><\/script>';
  }
  output += '<!--[if gte IE 9 | !IE ]><!--><link href=\'./gcweb/assets/favicon.ico\' rel="icon" type="image/x-icon"><link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" /><link rel="stylesheet" href=\'./gcweb/css/theme.min.css\'><link rel="stylesheet" href=\'./cdts/css/cdtsfixes.css\'>' + ((opt_data.isApplication == true) ? '<link rel="stylesheet" href=\'./cdts/css/cdtsapps.css\'>' : '') + '<!--<![endif]--><!--[if lt IE 9]><link href=\'./gcweb/assets/favicon.ico\' rel="shortcut icon" /><link rel="stylesheet" href=\'./gcweb/css/ie8-theme.min.css\' /><script src="http://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"><\/script><script src=\'./wet-boew/js/ie8-wet-boew.min.js\'><\/script><![endif]--><!--[if lte IE 9]><![endif]-->';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  wet.builder.refTop.soyTemplateName = 'wet.builder.refTop';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
wet.builder.top = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  var output = '<!-- Google Tag Manager (noscript) --><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5DBPCQJ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><!-- End Google Tag Manager (noscript) --><nav><ul id="wb-tphp"><li class="wb-slc"><a class="wb-sl" href="#wb-cont">Skip to main content</a></li><li class="wb-slc visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Skip to "About government"</a></li>' + ((opt_data.topSecMenu == true) ? '<li class="wb-slc visible-md visible-lg"><a class="wb-sl" href="#wb-sec">Skip to section menu</a></li>' : '') + '</ul></nav><header><div id="wb-bnr" class="container">';
  if (opt_data.lngLinks != null) {
    output += '<section id="wb-lng" class="text-right"><h2 class="wb-inv">Language selection</h2><ul class="list-inline margin-bottom-none">';
    var linkList481 = opt_data.lngLinks;
    var linkListLen481 = linkList481.length;
    for (var linkIndex481 = 0; linkIndex481 < linkListLen481; linkIndex481++) {
      var linkData481 = linkList481[linkIndex481];
      output += '<li><a hreflang="' + soy.$$escapeHtmlAttribute(linkData481.lang) + '" lang="' + soy.$$escapeHtmlAttribute(linkData481.lang) + '" href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(linkData481.href)) + '">' + soy.$$escapeHtml(linkData481.text) + '</a></li>';
    }
    output += '</ul></section>';
  }
  output += '<div class="row"><div class="brand col-xs-5 col-md-4" property="publisher" typeof="GovernmentOrganization">' + ((opt_data.siteMenu != false) ? '<a href="https://www.canada.ca/en.html" property="url">' : '') + '<img src=\'./gcweb/assets/sig-blk-en.svg\' alt="" property="logo" /><span class="wb-inv" property="name"> Government of Canada / <span lang="fr">Gouvernement du Canada</span></span>' + ((opt_data.siteMenu != false) ? '</a>' : '') + '<meta property="areaServed" typeOf="Country" content="Canada" /><link property="logo" href=\'./gcweb/assets/wmms-blk.svg\' /></div>' + ((opt_data.search != false) ? '<section id="wb-srch" class="col-lg-8 text-right"><h2>Search</h2><form action="https://www.canada.ca/en/sr.html" method="get" name="cse-search-box" role="search" class="form-inline"><div class="form-group"><label for="wb-srch-q" class="wb-inv">Search Canada.ca</label><input name="cdn" value="canada" type="hidden"><input name="st" value="s" type="hidden"><input name="num" value="10" type="hidden"><input name="langs" value="en" type="hidden"><input name="st1rt" value="1" type="hidden"><input name="s5bm3ts21rch" value="x" type="hidden"><input id="wb-srch-q" list="wb-srch-q-ac" class="wb-srch-q form-control" name="q" type="search" value="" size="34" maxlength="170" placeholder="Search Canada.ca"><input type="hidden" name="_charset_" value="UTF-8"><datalist id="wb-srch-q-ac"></datalist></div><div class="form-group submit"><button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Search</span></button></div></form></section>' : '') + '</div></div>' + ((opt_data.siteMenu != false) ? '<nav class="gcweb-menu" typeof="SiteNavigationElement"><div class="container"><h2 class="wb-inv">Menu</h2><button type="button" aria-haspopup="true" aria-expanded="false"><span class="wb-inv">Main </span>Menu <span class="expicon glyphicon glyphicon-chevron-down"></span></button><ul role="menu" aria-orientation="vertical" data-ajax-replace="//www.canada.ca/content/dam/canada/sitemenu/sitemenu-v2-en.html"><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/jobs.html">Jobs and the workplace</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/immigration-citizenship.html">Immigration and citizenship</a></li><li role="presentation"><a role="menuitem" href="https://travel.gc.ca/">Travel and tourism</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/business.html">Business and industry</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/benefits.html">Benefits</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/health.html">Health</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/taxes.html">Taxes</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/environment.html">Environment and natural resources</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/defence.html">National security and defence</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/culture.html">Culture, history and sport</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/policing.html">Policing, justice and emergencies</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/transport.html">Transport and infrastructure</a></li><li role="presentation"><a role="menuitem" href="http://international.gc.ca/world-monde/index.aspx?lang=eng">Canada and the world</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/finance.html">Money and finances</a></li><li role="presentation"><a role="menuitem" href="https://www.canada.ca/en/services/science.html">Science and innovation</a></li></ul></div></nav>' : '<div class="transactBar"></div>');
  if (opt_data.breadcrumbs != false) {
    output += '<nav id="wb-bc" property="breadcrumb"><h2>You are here:</h2><div class="container"><ol class="breadcrumb">';
    if (opt_data.breadcrumbs != null) {
      var itemList526 = opt_data.breadcrumbs;
      var itemListLen526 = itemList526.length;
      for (var itemIndex526 = 0; itemIndex526 < itemListLen526; itemIndex526++) {
        var itemData526 = itemList526[itemIndex526];
        output += '<li>' + ((itemData526.acronym != null) ? '<abbr title="' + soy.$$escapeHtmlAttribute(itemData526.acronym) + '">' : '') + ((itemData526.href != null) ? '<a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(itemData526.href)) + '">' : '') + soy.$$escapeHtml(itemData526.title) + ((itemData526.href != null) ? '</a>' : '') + ((itemData526.acronym != null) ? '</abbr>' : '') + '</li>';
      }
    } else {
      output += '<li><a href="https://www.canada.ca/en.html">Home</a></li>';
    }
    output += '</ol></div></nav>';
  }
  output += '</header>' + ((opt_data.showPreContent != false) ? '' : '');
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  wet.builder.top.soyTemplateName = 'wet.builder.top';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
wet.builder.preFooter = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  var output = '' + ((opt_data.showPostContent != false) ? '' : '');
  if (opt_data.pagedetails != false) {
    output += '<div class="pagedetails' + ((opt_data.isContainer != null) ? ' container' : '') + '">';
    if (opt_data.showFeedback != false || opt_data.showShare != false) {
      output += '<div class="row">' + ((opt_data.showFeedback != false) ? (opt_data.showFeedback != null && opt_data.showFeedback != true) ? '<div class="col-sm-6 col-md-5 col-lg-4"><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.showFeedback)) + '" class="btn btn-default btn-center">Report a problem on this page</a></div>' : '<div class="col-sm-6 col-md-5 col-lg-4"><a href="https://www.canada.ca/en/report-problem.html" class="btn btn-default btn-center">Report a problem on this page</a></div>' : '');
      if (opt_data.showShare != false) {
        if (opt_data.showShare != null) {
          output += '<div class="wb-share col-sm-4 col-md-3 col-sm-offset-' + ((opt_data.showFeedback != false) ? '2' : '8') + ' col-md-offset-' + ((opt_data.showFeedback != false) ? '4' : '9') + ((opt_data.showFeedback != false) ? ' col-lg-offset-5' : '') + '" data-wb-share=\'{"filter": [';
          var itemList582 = opt_data.showShare;
          var itemListLen582 = itemList582.length;
          for (var itemIndex582 = 0; itemIndex582 < itemListLen582; itemIndex582++) {
            var itemData582 = itemList582[itemIndex582];
            output += '"' + soy.$$escapeHtmlAttribute(itemData582) + '"' + ((! (itemIndex582 == itemListLen582 - 1)) ? ', ' : '');
          }
          output += '], "lnkClass": "btn btn-default btn-block"}\'></div>';
        } else {
          output += '<div class="wb-share col-sm-4 col-md-3 col-sm-offset-' + ((opt_data.showFeedback != false) ? '2' : '8') + ' col-md-offset-' + ((opt_data.showFeedback != false) ? '4' : '9') + ((opt_data.showFeedback != false) ? ' col-lg-offset-5' : '') + '" data-wb-share=\'{"lnkClass": "btn btn-default btn-block"}\'></div>';
        }
      }
      output += '</div>';
    }
    output += '<dl id="wb-dtmd">' + ((opt_data.screenIdentifier != null) ? '<dt>Screen Identifier:&#32;</dt><dd property="identifier">' + soy.$$escapeHtml(opt_data.screenIdentifier) + '</dd>' : '') + ((opt_data.dateModified != null) ? '<dt>Date modified:&#32;</dt><dd><time property="dateModified">' + soy.$$escapeHtml(opt_data.dateModified) + '</time></dd>' : '') + ((opt_data.versionIdentifier != null) ? '<dt>Version:&#32;</dt><dd property="version">' + soy.$$escapeHtml(opt_data.versionIdentifier) + '</dd>' : '') + '</dl></div>';
  }
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  wet.builder.preFooter.soyTemplateName = 'wet.builder.preFooter';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
wet.builder.secmenu = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<h2 id="wb-sec-h" class="wb-inv">Section menu</h2>';
  var sectionList685 = opt_data.sections;
  var sectionListLen685 = sectionList685.length;
  for (var sectionIndex685 = 0; sectionIndex685 < sectionListLen685; sectionIndex685++) {
    var sectionData685 = sectionList685[sectionIndex685];
    output += '<section class="list-group menu list-unstyled"><h3>' + ((sectionData685.sectionLink != null) ? '<a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(sectionData685.sectionLink)) + '"' + ((sectionData685.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' : '') + soy.$$escapeHtml(sectionData685.sectionName) + ((sectionData685.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + ((sectionData685.sectionLink != null) ? '</a>' : '') + '</h3><ul class="list-group menu list-unstyled">';
    var linkList682 = sectionData685.menuLinks;
    var linkListLen682 = linkList682.length;
    for (var linkIndex682 = 0; linkIndex682 < linkListLen682; linkIndex682++) {
      var linkData682 = linkList682[linkIndex682];
      if (linkData682.subLinks != null) {
        output += '<li><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(linkData682.href)) + '" class="list-group-item"' + ((linkData682.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData682.text) + ((linkData682.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a><ul class="list-group menu list-unstyled">';
        var sublinkList666 = linkData682.subLinks;
        var sublinkListLen666 = sublinkList666.length;
        for (var sublinkIndex666 = 0; sublinkIndex666 < sublinkListLen666; sublinkIndex666++) {
          var sublinkData666 = sublinkList666[sublinkIndex666];
          output += '<li><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(sublinkData666.subhref)) + '" class="list-group-item"' + ((sublinkData666.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(sublinkData666.subtext) + ((sublinkData666.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>';
        }
        output += '</ul></li>';
      } else {
        output += '<li><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(linkData682.href)) + '" class="list-group-item"' + ((linkData682.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData682.text) + ((linkData682.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>';
      }
    }
    output += '</ul></section>';
  }
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  wet.builder.secmenu.soyTemplateName = 'wet.builder.secmenu';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
wet.builder.footer = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  var output = '<footer id="wb-info">';
  if (opt_data.showFooter != false) {
    output += '<div class="landscape"><nav class="container wb-navcurr"><h2 class="wb-inv">About government</h2><ul class="list-unstyled colcount-sm-2 colcount-md-3">';
    if (opt_data.contactLinks != null) {
      var linkList699 = opt_data.contactLinks;
      var linkListLen699 = linkList699.length;
      for (var linkIndex699 = 0; linkIndex699 < linkListLen699; linkIndex699++) {
        var linkData699 = linkList699[linkIndex699];
        output += (linkIndex699 == 0) ? '<li><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(linkData699.href)) + '">Contact us</a></li>' : '';
      }
    } else {
      output += '<li><a href="https://www.canada.ca/en/contact.html">Contact us</a></li>';
    }
    output += '<li><a href="https://www.canada.ca/en/government/dept.html">Departments and agencies</a></li><li><a href="https://www.canada.ca/en/government/publicservice.html">Public service and military</a></li><li><a href="https://www.canada.ca/en/news.html">News</a></li><li><a href="https://www.canada.ca/en/government/system/laws.html">Treaties, laws and regulations</a></li><li><a href="https://www.canada.ca/en/transparency/reporting.html">Government-wide reporting</a></li><li><a href="http://pm.gc.ca/eng">Prime Minister</a></li><li><a href="https://www.canada.ca/en/government/system.html">How government works</a></li><li><a href="http://open.canada.ca/en/">Open government</a></li></ul></nav></div><div class="brand"><div class="container"><div class="row"><nav class="col-md-9 col-lg-10 ftr-urlt-lnk"><h2 class="wb-inv">About this site</h2><ul><li><a href="https://www.canada.ca/en/social.html">Social media</a></li><li><a href="https://www.canada.ca/en/mobile.html">Mobile applications</a></li><li><a href="https://www1.canada.ca/en/newsite.html">About Canada.ca</a></li><li><a href="https://www.canada.ca/en/transparency/terms.html">Terms and conditions</a></li><li><a href="https://www.canada.ca/en/transparency/privacy.html">Privacy</a></li></ul></nav>';
  } else {
    output += '<div id="transactFooter" class="landscape"></div><div class="brand"><div class="container"><div class="row"><nav class="col-md-9 col-lg-10 ftr-urlt-lnk"><h2 class="wb-inv">About this site</h2><ul>';
    if (opt_data.contactLinks != null) {
      var linkList726 = opt_data.contactLinks;
      var linkListLen726 = linkList726.length;
      for (var linkIndex726 = 0; linkIndex726 < linkListLen726; linkIndex726++) {
        var linkData726 = linkList726[linkIndex726];
        output += (linkIndex726 == 0) ? '<li><a ' + ((linkData726.href) ? ' href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(linkData726.href)) + '"' : ' href="https://www.canada.ca/en/contact.html"') + ((linkData726.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Contact information' + ((linkData726.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>' : '';
      }
    } else {
      output += '<li><a href="https://www.canada.ca/en/contact.html">Contact information</a></li>';
    }
    if (opt_data.termsLink != null) {
      var linkList750 = opt_data.termsLink;
      var linkListLen750 = linkList750.length;
      for (var linkIndex750 = 0; linkIndex750 < linkListLen750; linkIndex750++) {
        var linkData750 = linkList750[linkIndex750];
        output += (linkIndex750 == 0) ? '<li><a ' + ((linkData750.href) ? ' href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(linkData750.href)) + '"' : ' href="https://www.canada.ca/en/transparency/terms.html"') + ((linkData750.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Terms and conditions' + ((linkData750.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>' : '';
      }
    } else {
      output += '<li><a href="https://www.canada.ca/en/transparency/terms.html">Terms and conditions</a></li>';
    }
    if (opt_data.privacyLink != null) {
      var linkList774 = opt_data.privacyLink;
      var linkListLen774 = linkList774.length;
      for (var linkIndex774 = 0; linkIndex774 < linkListLen774; linkIndex774++) {
        var linkData774 = linkList774[linkIndex774];
        output += (linkIndex774 == 0) ? '<li><a ' + ((linkData774.href) ? ' href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(linkData774.href)) + '"' : ' href="https://www.canada.ca/en/transparency/privacy.html"') + ((linkData774.newWindow) ? ' target="_blank"  rel="noopener"' : '') + '>Privacy' + ((linkData774.newWindow == true) ? '<span class="wb-inv"> This link will open in a new window</span>' : '') + '</a></li>' : '';
      }
    } else {
      output += '<li><a href="https://www.canada.ca/en/transparency/privacy.html">Privacy</a></li>';
    }
    output += '</ul></nav>';
  }
  output += '<div class="col-xs-6 visible-sm visible-xs tofpg"><a href="#wb-cont">Top of Page <span class="glyphicon glyphicon-chevron-up"></span></a></div><div class="col-xs-6 col-md-2 text-right"><img src=\'./gcweb/assets/wmms-blk.svg\' alt="Symbol of the Government of Canada" /></div></div></div></div></footer>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  wet.builder.footer.soyTemplateName = 'wet.builder.footer';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
wet.builder.refFooter = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<!--[if gte IE 9 | !IE ]><!--><script src=\'' + ((opt_data.jqueryEnv == 'external') ? 'https://ajax.googleapis.com/ajax/libs/' : './wet-boew/js/') + 'jquery/2.2.4/jquery.min.js\'><\/script><script src=\'./wet-boew/js/wet-boew.min.js\'><\/script><!--<![endif]--><!--[if lt IE 9]><script src=\'./wet-boew/js/ie8-wet-boew2.min.js\'><\/script><![endif]--><script src=\'./gcweb/js/theme.min.js\'><\/script>' + ((opt_data.exitScript == true) ? '<script src=\'./cdts/js/exitScript.js\'><\/script><script data-id="exitScript" data-token="' + soy.$$escapeHtmlAttribute(opt_data.exitURL) + '" data-token-domains="' + soy.$$escapeHtmlAttribute(opt_data.exitDomains) + '" data-token-modal="' + soy.$$escapeHtmlAttribute(opt_data.displayModal) + '">clickA();<\/script><a id="sExitModalLink" class="wb-lbx lbx-modal wb-inv" title="" href="#sExitModal" tabindex="-1">Secure exit notice</a><section id="sExitModal" class="mfp-hide modal-dialog modal-content overlay-def"><header class="modal-header"><h2 class="modal-title">Warning</h2></header><div class="modal-body"><p>' + ((opt_data.exitMsg != null && opt_data.exitMsg.length > 0) ? soy.$$escapeHtml(opt_data.exitMsg) : 'You are about to leave a secure site, do you wish to continue?') + '</p><ul class="list-inline text-center"><li><a class="btn btn-primary popup-modal-dismiss pull-left" id="eCancel" href="javascript:void(0)" type="button">' + ((opt_data.cancelMsg != null && opt_data.cancelMsg.length > 0) ? soy.$$escapeHtml(opt_data.cancelMsg) : 'Cancel') + '</a></li><li><a class="btn btn-default popup-modal pull-right" id="eOK" href="javascript:void(0)" type="button">' + ((opt_data.yesMsg != null && opt_data.yesMsg.length > 0) ? soy.$$escapeHtml(opt_data.yesMsg) : 'Yes') + '</a></li></ul></div></section>' : '') + ((opt_data.isApplication == true) ? '<script src=\'./cdts/js/cdtscustom.js\'><\/script>' : '') + ((opt_data.webAnalytics != null) ? '<script>_satellite.pageBottom();<\/script>' : ''));
};
if (goog.DEBUG) {
  wet.builder.refFooter.soyTemplateName = 'wet.builder.refFooter';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
wet.builder.splashTop = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<!--[if gte IE 9 | !IE ]><!--><link href=\'./gcweb/assets/favicon.ico\' rel="icon" type="image/x-icon"><link rel="stylesheet" href=\'./gcweb/css/theme.min.css\'><!--<![endif]--><link rel="stylesheet" href=\'./gcweb/css/messages.min.css\'><!--[if lt IE 9]><link href=\'./gcweb/assets/favicon.ico\' rel="shortcut icon" /><link rel="stylesheet" href=\'./gcweb/css/messages-ie.min.css\' /><link rel="stylesheet" href=\'./gcweb/css/ie8-theme.min.css\' /><script src="http://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"><\/script><script src=\'./wet-boew/js/ie8-wet-boew.min.js\'><\/script><![endif]--><!--[if lte IE 9]><![endif]-->');
};
if (goog.DEBUG) {
  wet.builder.splashTop.soyTemplateName = 'wet.builder.splashTop';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
wet.builder.splash = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<div id="bg"><img src=\'./gcweb/img/splash/sp-bg-2.jpg\' alt=""></div><main><div class="sp-hb"><div class="sp-bx col-xs-12"><h1 property="name" class="wb-inv">Canada.ca</h1><div class="row"><div class="col-xs-11 col-md-8"><img src=\'./gcweb/assets/sig-spl.svg\' alt="Government of Canada / Gouvernement du Canada" /></div></div><div class="row cdts-splash"><section class="col-xs-6 text-right" lang="en">' + ((opt_data.nameEng != null) ? '<h2>' + soy.$$escapeHtml(opt_data.nameEng) + '</h2>' : '<h2 class="wb-inv">Government of Canada</h2>') + '</section><section class="col-xs-6" lang="fr">' + ((opt_data.nameFra != null) ? '<h2>' + soy.$$escapeHtml(opt_data.nameFra) + '</h2>' : '<h2 class="wb-inv">Gouvernement du Canada</h2>') + '</section></div><row class="text-center">';
  var lang__soy841 = navigator.language;
  output += '<ul class="list-inline lst-spcd"><li>' + ((lang__soy841 == 'en-CA') ? '<a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.indexEng)) + '" class="btn btn-primary" lang="en">English</a>' : '<a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.indexEng)) + '" class="btn btn-default" lang="en">English</a>') + '</li><li>' + ((lang__soy841 == 'fr-CA') ? '<a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.indexFra)) + '" class="btn btn-primary" lang="fr">Fran\u00E7ais</a>' : '<a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.indexFra)) + '" class="btn btn-default" lang="fr">Fran\u00E7ais</a>') + '</li></ul></row></div><div class="sp-bx-bt col-xs-12"><div class="row"><div class="col-xs-7 col-md-8"><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.termsEng)) + '" class="sp-lk">Terms & conditions</a> <span class="glyphicon glyphicon-asterisk"></span> <a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.termsFra)) + '" class="sp-lk" lang="fr">Avis</a></div><div class="col-xs-5 col-md-4 text-right mrgn-bttm-md"><img src=\'./gcweb/assets/wmms-spl.svg\' width="127" alt="Symbol of the Government of Canada / Symbole du gouvernement du Canada" /></div></div></div></div></main><!--[if gte IE 9 | !IE ]><!--><script src="' + ((opt_data.jqueryEnv == 'external') ? 'https://ajax.googleapis.com/ajax/libs' : './wet-boew/js/') + 'jquery/2.2.4/jquery.min.js"><\/script><script src=\'./wet-boew/js/wet-boew.min.js\'><\/script><!--<![endif]--><!--[if lt IE 9]><script src=\'./wet-boew/js/ie8-wet-boew2.min.js\'><\/script><![endif]--><script src=\'./gcweb/js/theme.min.js\'><\/script>' + ((opt_data.webAnalytics != null) ? '<script>_satellite.pageBottom();<\/script>' : '') + '<link rel="stylesheet" href=\'./cdts/css/cdtsfixes.css\'>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  wet.builder.splash.soyTemplateName = 'wet.builder.splash';
}
