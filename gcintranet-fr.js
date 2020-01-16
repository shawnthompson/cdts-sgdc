// This file was automatically generated from gcintranet-fr.soy.
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
wet.builder.refTop = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<!--[if gte IE 9 | !IE ]><!--><link href=\'./gcweb/assets/favicon.ico\' rel="icon" type="image/x-icon"><link rel="stylesheet" href=\'./gcweb/css/theme.min.css\'><!--<![endif]--><!--[if lt IE 9]><link href=\'./gcweb/assets/favicon.ico\' rel="shortcut icon" /><link rel="stylesheet" href=\'./gcweb/css/ie8-theme.min.css\' /><script src="http://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"><\/script><script src=\'./wet-boew/js/ie8-wet-boew.min.js\'><\/script><![endif]--><!--[if lte IE 9]><![endif]--><link rel="stylesheet" href=\'./cdts/css/gctheme.css\'>' + ((opt_data.subTheme == 'esdc' || opt_data.subTheme == 'labour') ? '<link rel="stylesheet" href=\'./cdts/css/esdc.css\'>' : (opt_data.subTheme == 'eccc') ? '<link rel="stylesheet" href=\'./cdts/css/eccc.css\'>' : '') + '<link rel="stylesheet" href=\'./cdts/css/intranet.css\'>');
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
  var output = '<ul id="wb-tphp"><li class="wb-slc"><a class="wb-sl" href="#wb-cont">Passer au contenu principal</a></li><li class="wb-slc visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Passer \u00E0 \u00AB&#160;\u00C0 propos de ce site&#160;\u00BB</a></li>' + ((opt_data.topSecMenu == true) ? '<li class="wb-slc visible-md visible-lg"><a class="wb-sl" href="#wb-sec">Passer au menu de la section</a></li>' : '') + '</ul><header role="banner"><div id="wb-bnr"><div id="app-brand"><div class="container"><div class="row"><section class="' + ((opt_data.intranetTitle != null || opt_data.subTheme != null) ? 'col-lg-6 col-md-6' : 'col-lg-2 col-md-3') + ' col-sm-9 col-xs-8"><div class="app-name' + ((opt_data.intranetTitle != null) ? ' app-name-lg' : '') + '">';
  if (opt_data.intranetTitle != null) {
    var itemList66 = opt_data.intranetTitle;
    var itemListLen66 = itemList66.length;
    for (var itemIndex66 = 0; itemIndex66 < itemListLen66; itemIndex66++) {
      var itemData66 = itemList66[itemIndex66];
      output += (itemIndex66 == 0) ? '<a href="' + ((itemData66.href != null) ? soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(itemData66.href)) : 'http://intranet.ec.gc.ca/default.asp?lang=Fr') + '">' + ((itemData66.acronym != null) ? '<abbr title="' + soy.$$escapeHtmlAttribute(itemData66.acronym) + '">' : '') + '<span><span class="bold-gc">' + ((itemData66.boldText != null) ? soy.$$escapeHtml(itemData66.boldText) : 'GC') + '</span>' + ((itemData66.acronym != null) ? '</abbr>' : '') + ((itemData66.text != null) ? soy.$$escapeHtml(itemData66.text) : 'intranet') + '</span></a>' : '';
    }
  } else {
    output += '<a href="https://intranet.canada.ca/index-fra.asp"><span><span class="bold-gc">GC</span> intranet</span></a>';
  }
  output += '</div></section>' + ((opt_data.GCToolsModal == true) ? '<section id="gctoolsSection" class="' + ((opt_data.intranetTitle != null) ? 'col-lg-2 col-md-1' : 'col-lg-6 col-md-1') + ((opt_data.search == false) ? ' col-md-offset-3' : '') + ' hidden-sm hidden-xs text-right"><h2 class="wb-inv">Liens OutilsGC</h2><div class="row"><div class="col-md-12"><ul class="list-inline margin-bottom-none gcbarlng"><li><a class="wb-lbx" href="#gctools">Outils<span class="bold-gc">GC</span></a></li></ul></div></div><section id="gctools" class="mfp-hide modal-dialog modal-content overlay-def" tabindex="-1"><header class="modal-header"><h2 class="modal-title">Outils<span class="bold-gc">GC</span></h2></header><div class="modal-body"><ul class="list-unstyled lst-spcd"><li><a href="https://gcconnex.gc.ca/splash/" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>connex</a></li><li><a href="http://www.gcpedia.gc.ca/wiki/?setlang=fr" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>p\u00E9dia</a></li><li><a href="http://gcdirectory-gcannuaire.gc.ca/fr/GCD/?pgid=002" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>annuaire</a></li><li><a href="https://gccollab.ca/splash/" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>collab</a></li><li><a href="https://intranet.canada.ca/index-fra.asp" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>intranet</a></li></ul></div></section></section>' : (opt_data.intranetTitle != null) ? '' : '<section id="wb-gctools" class="col-lg-6 visible-lg"><div class="pull-left tool-link"><a href="https://gcconnex.gc.ca/splash/" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>connex</a></div><div class="pull-left tool-link"><a href="http://www.gcpedia.gc.ca/wiki/?setlang=fr" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>p\u00E9dia</a></div><div class="pull-left tool-link"><a href="http://gcdirectory-gcannuaire.gc.ca/fr/GCA/?pgid=002" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>annuaire</a></div><div class="pull-left tool-link"><a href="https://gccollab.ca/splash/" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>collab</a></div></section>');
  if (opt_data.lngLinks != null) {
    output += '<section id="wb-lng" class="' + ((opt_data.intranetTitle != null && opt_data.GCToolsModal != true) ? 'mrgn-bttm-md col-md-offset-1 col-lg-offset-2 ' : '') + 'col-md-1 hidden-sm hidden-xs text-right"><h2 class="wb-inv">S\u00E9lection de la langue</h2><div class="row"><div class="col-md-12"><ul class="list-inline margin-bottom-none gcbarlng">';
    var linkList102 = opt_data.lngLinks;
    var linkListLen102 = linkList102.length;
    for (var linkIndex102 = 0; linkIndex102 < linkListLen102; linkIndex102++) {
      var linkData102 = linkList102[linkIndex102];
      output += '<li><a hreflang="' + soy.$$escapeHtmlAttribute(linkData102.lang) + '" lang="' + soy.$$escapeHtmlAttribute(linkData102.lang) + '" href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(linkData102.href)) + '">' + soy.$$escapeHtml(linkData102.text) + '</a></li>';
    }
    output += '</ul></div></div></section>';
  }
  if (opt_data.search != false) {
    output += '<section id="wb-srch" class="col-lg-3 col-md-4 hidden-sm hidden-xs"><h2>Recherche</h2>';
    if (opt_data.customSearch != null) {
      var itemList173 = opt_data.customSearch;
      var itemListLen173 = itemList173.length;
      for (var itemIndex173 = 0; itemIndex173 < itemListLen173; itemIndex173++) {
        var itemData173 = itemList173[itemIndex173];
        if (itemIndex173 == 0) {
          output += '<form action="' + ((itemData173.action != null) ? soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(itemData173.action)) : 'https://intranet.canada.ca/search-recherche/query-recherche-fra.aspx') + '" method="' + ((itemData173.method != null) ? soy.$$escapeHtmlAttribute(itemData173.method) : 'get') + '" name="' + ((itemData173.name != null) ? soy.$$escapeHtmlAttribute(itemData173.name) : 'cse-search-box') + '" role="search" class="form-inline"><div class="form-group"><label for="' + ((itemData173.id != null) ? soy.$$escapeHtmlAttribute(itemData173.id) : 'wb-srch-q') + '" class="wb-inv">' + ((itemData173.placeholder != null) ? soy.$$escapeHtml(itemData173.placeholder) : 'Rechercher GCintranet') + '</label><input class="wb-srch-q form-control pull-right" id="' + ((itemData173.id != null) ? soy.$$escapeHtmlAttribute(itemData173.id) : 'wb-srch-q') + '" name="' + ((itemData173.name != null) ? soy.$$escapeHtmlAttribute(itemData173.name) : 'q') + '"  value="" size="21" maxlength="150" placeholder="' + ((itemData173.placeholder != null) ? soy.$$escapeHtmlAttribute(itemData173.placeholder) : 'Rechercher GCintranet') + '">';
          if (itemData173.hiddenInput != null) {
            var inputList168 = itemData173.hiddenInput;
            var inputListLen168 = inputList168.length;
            for (var inputIndex168 = 0; inputIndex168 < inputListLen168; inputIndex168++) {
              var inputData168 = inputList168[inputIndex168];
              output += '<input type="hidden" name="' + soy.$$escapeHtmlAttribute(inputData168.name) + '" value="' + soy.$$escapeHtmlAttribute(inputData168.value) + '" />';
            }
          } else {
            output += '<input type="hidden" name="a" value="s" /><input type="hidden" name="s" value="1" /><input type="hidden" name="chk2" value="True" />';
          }
          output += '</div>';
        }
      }
    } else {
      output += '<form action="https://intranet.canada.ca/search-recherche/query-recherche-fra.aspx" method="get" name="cse-search-box" role="search" class="form-inline"><div class="form-group"><label for="wb-srch-q" class="wb-inv">Rechercher GCintranet</label><input class="wb-srch-q form-control pull-right" id="wb-srch-q" name="q"  value="" size="21" maxlength="150" placeholder="Rechercher GCintranet"><input type="hidden" name="a" value="s" /><input type="hidden" name="s" value="1" /><input type="hidden" name="chk2" value="True" /></div>';
    }
    output += '<div class="form-group submit">&nbsp;<button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Recherche</span></button></div></form></section>';
  }
  output += '<section id="wb-glb-mn" class="wb-mb-links col-xs-4 col-sm-3 visible-sm visible-xs"><h2>' + ((opt_data.search == false) ? 'Menu' + ((opt_data.topSecMenu != null) ? 's' : '') : 'Recherche et menu' + ((opt_data.topSecMenu != null) ? 's' : '')) + '</h2><ul class="list-inline text-right chvrn"><li><a href="#mb-pnl" title="' + ((opt_data.search == false) ? 'Menu' + ((opt_data.topSecMenu != null) ? 's' : '') : 'Recherche et menu' + ((opt_data.topSecMenu != null) ? 's' : '')) + '" aria-controls="mb-pnl" class="overlay-lnk" role="button">' + ((opt_data.search != false) ? '<span class="glyphicon glyphicon-search">' : '') + '<span class="glyphicon glyphicon-th-list"><span class="wb-inv">' + ((opt_data.search == false) ? 'Menu' + ((opt_data.topSecMenu != null) ? 's' : '') : 'Recherche et menu' + ((opt_data.topSecMenu != null) ? 's' : '')) + '</span>' + ((opt_data.search == false) ? '</span>' : '') + '</span></a></li></ul><div id="mb-pnl"></div></section></div>' + ((opt_data.GCToolsModal != true) ? '<div id="tools-sm" class="row' + ((opt_data.intranetTitle != null) ? '' : ' visible-md') + '"><section id="tool-container-sm" class="col-md-12 col-sm-12"><div class="pull-left tool-link"><a href="https://gcconnex.gc.ca/splash/" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>connex</a></div><div class="pull-left tool-link"><a href="http://www.gcpedia.gc.ca/wiki/?setlang=fr" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>p\u00E9dia</a></div><div class="pull-left tool-link"><a href="http://gcdirectory-gcannuaire.gc.ca/fr/GCA/?pgid=002" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>annuaire</a></div><div class="pull-left tool-link"><a href="https://gccollab.ca/splash/" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>collab</a></div></section></div>' : '') + '</div></div></div>' + ((opt_data.siteMenu != false) ? (opt_data.subTheme == 'esdc' || opt_data.subTheme == 'labour') ? '<nav role="navigation" id="wb-sm" data-wb-ajax=\'{"url": "' + ((opt_data.menuPath != null) ? soy.$$escapeHtmlAttribute(opt_data.menuPath) : 'http://esdc.prv/includes/edsc-esdc_prv/wet4/fr/mega_menu/esdcmenu-fra.html') + '", "type": "replace", "nocache": true }\' data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"><div class="container nvbar"><h2>Menu des sujets</h2><div class="row"><ul class="list-inline menu"><li><a href="http://rhdcc.prv/fra/ministere/index.page?">Notre minist\u00E8re</a></li><li><a href="http://rhdcc.prv/fra/directions_generales/index.page?">Directions g\u00E9n\u00E9rales et r\u00E9gions</a></li><li><a href="http://iservice.prv/fra/">iService</a></li><li><a href="http://rhdcc.prv/fra/outils_travail/index.page?">Outils de travail</a></li><li><a href="http://rhdcc.prv/fra/liens_rapides/index.page?">Liens rapides</a></li></ul></div></div></nav>' : (opt_data.subTheme == 'eccc') ? '<nav role="navigation" id="wb-sm" data-wb-ajax=\'{"url": "' + ((opt_data.menuPath != null) ? soy.$$escapeHtmlAttribute(opt_data.menuPath) : './cdts/ajax/sitemenu-fra.html') + '", "type": "replace", "nocache": true }\' data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"><div class="container nvbar"><h2>Topics menu</h2><div class="row"><ul class="list-inline menu"><li><a href="#">About ECCC</a></li><li><a href="#">Branches</a></li><li><a href="#">Services</a></li><li><a href="#">Tools and References</a></li><li><a href="#">Resources</a></li><li><a href="#">Forms</a></li><li><a href="#">DMs\' Corner</a></li></ul></div></div></nav>' : '<nav role="navigation" id="wb-sm" data-ajax-replace="https://ssl-templates.services.gc.ca/app/cls/WET/gcintranet/v4_0_32/cdts/ajax/sitemenu-fra.html" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"><div class="container nvbar"><h2>Menu des sujets</h2><div class="row"><ul class="list-inline menu"><li><a href="https://intranet.canada.ca/psc-fsc/index-fra.asp">Nouvelles</a></li><li><a href="https://intranet.canada.ca/hr-rh/index-fra.asp">Ressources humaines</a></li><li><a href="https://intranet.canada.ca/cdl-dca/index-fra.asp">D\u00E9veloppement de carri\u00E8re et apprentissage</a></li><li><a href="https://intranet.canada.ca/wg-tg/index-fra.asp">Services et outils</a></li></ul></div></div></nav>' : '');
  if (opt_data.breadcrumbs != false) {
    output += '<nav role="navigation" id="wb-bc" property="breadcrumb"><h2>Vous \u00EAtes ici :</h2><div class="container"><div class="row"><ol class="breadcrumb">';
    if (opt_data.breadcrumbs != null) {
      var itemList277 = opt_data.breadcrumbs;
      var itemListLen277 = itemList277.length;
      for (var itemIndex277 = 0; itemIndex277 < itemListLen277; itemIndex277++) {
        var itemData277 = itemList277[itemIndex277];
        output += '<li>' + ((itemData277.acronym != null) ? '<abbr title="' + soy.$$escapeHtmlAttribute(itemData277.acronym) + '">' : '') + ((itemData277.href != null) ? '<a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(itemData277.href)) + '">' : '') + soy.$$escapeHtml(itemData277.title) + ((itemData277.href != null) ? '</a>' : '') + ((itemData277.acronym != null) ? '</abbr>' : '') + '</li>';
      }
    } else {
      output += '<li><a href="https://intranet.canada.ca/index-fra.asp">Accueil</a></li>';
    }
    output += '</ol></div></div></nav>';
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
wet.builder.appTop = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  var output = '<ul id="wb-tphp"><li class="wb-slc"><a class="wb-sl" href="#wb-cont">Passer au contenu principal</a></li><li class="wb-slc visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Passer \u00E0 \u00AB&#160;\u00C0 propos de ce site&#160;\u00BB</a></li>' + ((opt_data.topSecMenu == true) ? '<li class="wb-slc visible-md visible-lg"><a class="wb-sl" href="#wb-sec">Passer au menu de la section</a></li>' : '') + '</ul><header role="banner"><div id="wb-bnr"><div id="app-brand"><div class="container"><div class="row"><section class="' + ((opt_data.intranetTitle != null || opt_data.subTheme != null) ? 'col-lg-6 col-md-6' : 'col-lg-2 col-md-3') + ' col-sm-9 col-xs-8"><div class="app-name' + ((opt_data.intranetTitle != null) ? ' app-name-lg' : '') + '">';
  if (opt_data.intranetTitle != null) {
    var itemList333 = opt_data.intranetTitle;
    var itemListLen333 = itemList333.length;
    for (var itemIndex333 = 0; itemIndex333 < itemListLen333; itemIndex333++) {
      var itemData333 = itemList333[itemIndex333];
      output += (itemIndex333 == 0) ? '<a href="' + ((itemData333.href != null) ? soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(itemData333.href)) : 'http://intranet.ec.gc.ca/default.asp?lang=Fr') + '">' + ((itemData333.acronym != null) ? '<abbr title="' + soy.$$escapeHtmlAttribute(itemData333.acronym) + '">' : '') + '<span><span class="bold-gc">' + ((itemData333.boldText != null) ? soy.$$escapeHtml(itemData333.boldText) : 'GC') + '</span>' + ((itemData333.acronym != null) ? '</abbr>' : '') + ((itemData333.text != null) ? soy.$$escapeHtml(itemData333.text) : 'intranet') + '</span></a>' : '';
    }
  } else {
    output += '<a href="https://intranet.canada.ca/index-fra.asp"><span><span class="bold-gc">GC</span> intranet</span></a>';
  }
  output += '</div></section>' + ((opt_data.GCToolsModal == true) ? '<section id="gctoolsSection" class="' + ((opt_data.intranetTitle != null) ? 'col-lg-2' : 'col-lg-6') + ((opt_data.search == false) ? ' col-md-offset-3' : '') + ' col-md-1 hidden-sm hidden-xs text-right"><h2 class="wb-inv">Liens OutilsGC</h2><div class="row"><div class="col-md-12"><ul class="list-inline margin-bottom-none gcbarlng"><li><a class="wb-lbx" href="#gctools">Outils<span class="bold-gc">GC</span></a></li></ul></div></div><section id="gctools" class="mfp-hide modal-dialog modal-content overlay-def"><header class="modal-header"><h2 class="modal-title">Outils<span class="bold-gc">GC</span></h2></header><div class="modal-body"><ul class="list-unstyled lst-spcd"><li><a href="https://gcconnex.gc.ca/splash/" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>connex</a></li><li><a href="http://www.gcpedia.gc.ca/wiki/?setlang=fr" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>p\u00E9dia</a></li><li><a href="http://gcdirectory-gcannuaire.gc.ca/fr/GCD/?pgid=002" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>annuaire</a></li><li><a href="https://gccollab.ca/splash/" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>collab</a></li><li><a href="https://intranet.canada.ca/index-fra.asp" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>intranet</a></li></ul></div></section></section>' : '<section id="wb-gctools" class="' + ((opt_data.intranetTitle != null && opt_data.GCToolsModal != true) ? 'pull-right col-md-4' : 'col-lg-6') + ' visible-lg"><div class="pull-left tool-link"><a href="https://gcconnex.gc.ca/splash/" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>connex</a></div><div class="pull-left tool-link"><a href="http://www.gcpedia.gc.ca/wiki/?setlang=fr" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>p\u00E9dia</a></div><div class="pull-left tool-link"><a href="http://gcdirectory-gcannuaire.gc.ca/fr/GCA/?pgid=002" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>annuaire</a></div><div class="pull-left tool-link"><a href="https://gccollab.ca/splash/" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>collab</a></div></section>');
  if (opt_data.lngLinks != null) {
    output += '<section id="wb-lng" class="' + ((opt_data.intranetTitle != null && opt_data.GCToolsModal != true) ? 'mrgn-bttm-md col-md-offset-1 col-lg-offset-2 ' : '') + 'col-md-1 hidden-sm hidden-xs text-right"><h2 class="wb-inv">S\u00E9lection de la langue</h2><div class="row"><div class="col-md-12"><ul class="list-inline margin-bottom-none gcbarlng">';
    var linkList372 = opt_data.lngLinks;
    var linkListLen372 = linkList372.length;
    for (var linkIndex372 = 0; linkIndex372 < linkListLen372; linkIndex372++) {
      var linkData372 = linkList372[linkIndex372];
      output += '<li><a lang="' + soy.$$escapeHtmlAttribute(linkData372.lang) + '" href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(linkData372.href)) + '">' + soy.$$escapeHtml(linkData372.text) + '</a></li>';
    }
    output += '</ul></div></div></section>';
  }
  if (opt_data.search != false) {
    output += '<section id="wb-srch" class="col-lg-3 col-md-4 hidden-sm hidden-xs"><h2>Recherche</h2>';
    if (opt_data.customSearch != null) {
      var itemList446 = opt_data.customSearch;
      var itemListLen446 = itemList446.length;
      for (var itemIndex446 = 0; itemIndex446 < itemListLen446; itemIndex446++) {
        var itemData446 = itemList446[itemIndex446];
        if (itemIndex446 == 0) {
          output += '<form action="' + ((itemData446.action != null) ? soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(itemData446.action)) : 'https://intranet.canada.ca/search-recherche/query-recherche-fra.aspx') + '" method="' + ((itemData446.method != null) ? soy.$$escapeHtmlAttribute(itemData446.method) : 'get') + '" name="' + ((itemData446.name != null) ? soy.$$escapeHtmlAttribute(itemData446.name) : 'cse-search-box') + '" role="search" class="form-inline"><div class="form-group"><label for="' + ((itemData446.id != null) ? soy.$$escapeHtmlAttribute(itemData446.id) : 'wb-srch-q') + '" class="wb-inv">' + ((itemData446.placeholder != null) ? soy.$$escapeHtml(itemData446.placeholder) : 'Rechercher GCintranet') + '</label><input class="wb-srch-q form-control pull-right" id="' + ((itemData446.id != null) ? soy.$$escapeHtmlAttribute(itemData446.id) : 'wb-srch-q') + '" name="' + ((itemData446.name != null) ? soy.$$escapeHtmlAttribute(itemData446.name) : 'q') + '"  value="' + ((itemData446.value != null) ? soy.$$escapeHtmlAttribute(itemData446.value) : '') + '" size="21" maxlength="150" placeholder="' + ((itemData446.placeholder != null) ? soy.$$escapeHtmlAttribute(itemData446.placeholder) : 'Rechercher GCintranet') + '">';
          if (itemData446.hiddenInput != null) {
            var inputList443 = itemData446.hiddenInput;
            var inputListLen443 = inputList443.length;
            for (var inputIndex443 = 0; inputIndex443 < inputListLen443; inputIndex443++) {
              var inputData443 = inputList443[inputIndex443];
              output += '<input type="hidden" name="' + soy.$$escapeHtmlAttribute(inputData443.name) + '" value="' + soy.$$escapeHtmlAttribute(inputData443.value) + '" />';
            }
          }
          output += '</div>';
        }
      }
    } else {
      output += '<form action="https://intranet.canada.ca/search-recherche/query-recherche-eng.aspx" method="get" name="cse-search-box" role="search" class="form-inline"><div class="form-group"><label for="wb-srch-q" class="wb-inv">Rechercher GCintranet</label><input class="wb-srch-q form-control pull-right" id="wb-srch-q" name="q"  value="" size="21" maxlength="150" placeholder="Rechercher GCintranet"><input type="hidden" name="a" value="s" /><input type="hidden" name="s" value="1" /><input type="hidden" name="chk2" value="True" /></div>';
    }
    output += '<div class="form-group submit">&nbsp;<button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub"><span class="glyphicon-search glyphicon"></span><span class="wb-inv">Recherche</span></button></div></form></section>';
  }
  output += '<section id="wb-glb-mn" class="wb-mb-links col-xs-4 col-sm-3 visible-sm visible-xs"><h2>' + ((opt_data.search == false) ? 'Menu' + ((opt_data.topSecMenu != null) ? 's' : '') : 'Recherche et menu' + ((opt_data.topSecMenu != null) ? 's' : '')) + '</h2><ul class="list-inline text-right chvrn"><li><a href="#mb-pnl" title="' + ((opt_data.search == false) ? 'Menu' + ((opt_data.topSecMenu != null) ? 's' : '') : 'Recherche et menu' + ((opt_data.topSecMenu != null) ? 's' : '')) + '" aria-controls="mb-pnl" class="overlay-lnk" role="button">' + ((opt_data.search != false) ? '<span class="glyphicon glyphicon-search">' : '') + '<span class="glyphicon glyphicon-th-list"><span class="wb-inv">' + ((opt_data.search == false) ? 'Menu' + ((opt_data.topSecMenu != null) ? 's' : '') : 'Recherche et menu' + ((opt_data.topSecMenu != null) ? 's' : '')) + '</span>' + ((opt_data.search == false) ? '</span>' : '') + '</span></a></li></ul><div id="mb-pnl"></div></section></div>' + ((opt_data.GCToolsModal != true) ? '<div id="tools-sm" class="row' + ((opt_data.intranetTitle != null) ? '' : ' visible-md') + '"><section id="tool-container-sm" class="col-md-12 col-sm-12"><div class="pull-left tool-link"><a href="https://gcconnex.gc.ca/splash/" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>connex</a></div><div class="pull-left tool-link"><a href="http://www.gcpedia.gc.ca/wiki/?setlang=fr" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>p\u00E9dia</a></div><div class="pull-left tool-link"><a href="http://gcdirectory-gcannuaire.gc.ca/fr/GCA/?pgid=002" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>annuaire</a></div><div class="pull-left tool-link"><a href="https://gccollab.ca/splash/" class="GCTBannerOnclick-fra"><span class="bold-gc">GC</span>collab</a></div></section></div>' : '') + '</div></div></div><div id="gcappbanner"><div class="container"><div class="row gc-' + ((opt_data.subTheme) ? 'app' : 'intra') + '-br">';
  var itemList541 = opt_data.appName;
  var itemListLen541 = itemList541.length;
  for (var itemIndex541 = 0; itemIndex541 < itemListLen541; itemIndex541++) {
    var itemData541 = itemList541[itemIndex541];
    output += '<div id="wb-sttl" class="col-md-1' + ((opt_data.signOut || opt_data.signIn) ? '0' : '2') + '">' + ((itemData541.acronym != null) ? '<abbr title="' + soy.$$escapeHtmlAttribute(itemData541.acronym) + '">' : '') + ((itemData541.href) ? '<a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(itemData541.href)) + '">' : '') + '<span>' + ((opt_data.secure == true) ? '<i class="glyphicon glyphicon-lock mrgn-rght-md"></i>' : '') + soy.$$escapeHtml(itemData541.text) + '</span>' + ((itemData541.href) ? '</a>' : '') + ((itemData541.acronym != null) ? '</abbr>' : '') + '</div>';
  }
  if (opt_data.signOut != null) {
    output += '<div class="text-right col-md-2"><div class="row">';
    var buttonList551 = opt_data.signOut;
    var buttonListLen551 = buttonList551.length;
    for (var buttonIndex551 = 0; buttonIndex551 < buttonListLen551; buttonIndex551++) {
      var buttonData551 = buttonList551[buttonIndex551];
      output += (buttonIndex551 == 0) ? '<p><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(buttonData551.href)) + '" class="btn btn-default btn btn-signoff"><i class="glyphicon glyphicon-off mrgn-rght-md"></i>D\u00E9connexion</a></p>' : '';
    }
    output += '</div></div>';
  } else if (opt_data.signIn != null) {
    output += '<div class="text-right col-md-2"><div class="row">';
    var buttonList561 = opt_data.signIn;
    var buttonListLen561 = buttonList561.length;
    for (var buttonIndex561 = 0; buttonIndex561 < buttonListLen561; buttonIndex561++) {
      var buttonData561 = buttonList561[buttonIndex561];
      output += (buttonIndex561 == 0) ? '<p><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(buttonData561.href)) + '" class="btn btn-default btn btn-signoff"><i class="glyphicon glyphicon-off mrgn-rght-md"></i>Connexion</a></p>' : '';
    }
    output += '</div></div>';
  } else {
  }
  output += '</div></div></div>';
  if (opt_data.menuLinks != null) {
    output += '<nav role="navigation" id="wb-smapp" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"><div class="pnl-strt container nvbar"><h2 class="wb-inv">Menu de navigation principal</h2><div class="row"><ul class="list-inline menu" role="menubar">';
    var linkList628 = opt_data.menuLinks;
    var linkListLen628 = linkList628.length;
    for (var linkIndex628 = 0; linkIndex628 < linkListLen628; linkIndex628++) {
      var linkData628 = linkList628[linkIndex628];
      if (linkData628.subLinks != null) {
        output += '<li><a href="#' + soy.$$escapeHtmlAttribute(linkData628.id) + '" class="item"' + ((linkData628.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData628.text) + ((linkData628.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fen\u00EAtre</span>' : '') + '</a><ul class="sm list-unstyled" id="' + soy.$$escapeHtmlAttribute(linkData628.id) + '" role="menu">';
        var sublinkList612 = linkData628.subLinks;
        var sublinkListLen612 = sublinkList612.length;
        for (var sublinkIndex612 = 0; sublinkIndex612 < sublinkListLen612; sublinkIndex612++) {
          var sublinkData612 = sublinkList612[sublinkIndex612];
          output += (sublinkIndex612 == sublinkListLen612 - 1) ? '<li class="slflnk"><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(sublinkData612.subhref)) + '"' + ((sublinkData612.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(sublinkData612.subtext) + ((sublinkData612.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fen\u00EAtre</span>' : '') + '</a></li>' : '<li><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(sublinkData612.subhref)) + '"' + ((sublinkData612.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(sublinkData612.subtext) + ((sublinkData612.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fen\u00EAtre</span>' : '') + '</a></li>';
        }
        output += '</ul></li>';
      } else {
        output += '<li><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(linkData628.href)) + '" class="item"' + ((linkData628.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData628.text) + ((linkData628.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fen\u00EAtre</span>' : '') + '</a></li>';
      }
    }
    output += '<li class="hidden-md hidden-lg"><a href="#mnuTools" class="item">OutilsGC</a><ul class="sm list-unstyled" id="mnuTools" role="menu"><li><a href="https://gcconnex.gc.ca"><span class="bold-gc">GC</span>connex</a></li><li><a href="http://www.gcpedia.gc.ca/wiki/?setlang=fr"><span class="bold-gc">GC</span>p\u00E9dia</a></li><li><a href="http://gcannuaire-gcdirectory.gc.ca/fr/GCA/?pgid=002"><span class="bold-gc">GC</span>annuaire</a></li><li><a href="https://gccollab.ca/splash/"><span class="bold-gc">GC</span>collab</a></li></ul></li></ul></div></div></nav>';
  } else if (opt_data.menuPath != null) {
    output += '<nav role="navigation" id="wb-smapp" data-ajax-replace="' + soy.$$escapeHtmlAttribute(opt_data.menuPath) + '" data-trgt="mb-pnl" class="wb-menu visible-md visible-lg" typeof="SiteNavigationElement"></nav>';
  } else {
    output += '<div id="wb-sm" data-ajax-replace="https://ssl-templates.services.gc.ca/app/cls/WET/gcintranet/v4_0_32/cdts/ajax/appmenu-fra.html" data-trgt="mb-pnl" class="wb-menu hidden-sm hidden-xs"></div>';
  }
  if (opt_data.breadcrumbs != null) {
    output += '<nav role="navigation" id="wb-bc" property="breadcrumb"><h2>Vous \u00EAtes ici :</h2><div class="container"><div class="row"><ol class="breadcrumb">';
    var itemList659 = opt_data.breadcrumbs;
    var itemListLen659 = itemList659.length;
    for (var itemIndex659 = 0; itemIndex659 < itemListLen659; itemIndex659++) {
      var itemData659 = itemList659[itemIndex659];
      output += '<li>' + ((itemData659.acronym != null) ? '<abbr title="' + soy.$$escapeHtmlAttribute(itemData659.acronym) + '">' : '') + ((itemData659.href != null) ? '<a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(itemData659.href)) + '">' : '') + soy.$$escapeHtml(itemData659.title) + ((itemData659.href != null) ? '</a>' : '') + ((itemData659.acronym != null) ? '</abbr>' : '') + '</li>';
    }
    output += '</ol></div></div></nav>';
  }
  output += '</header>' + ((opt_data.showPreContent != false) ? '' : '');
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
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
wet.builder.preFooter = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(((opt_data.showPostContent != false) ? '' : '') + ((opt_data.pagedetails != false) ? '<div class="row pagedetails"><div class="col-sm-5 col-xs-12 datemod"><dl id="wb-dtmd">' + ((opt_data.screenIdentifier != null) ? '<dt>Identificateur d\'\u00E9cran&#160;:&#32;</dt><dd>' + soy.$$escapeHtml(opt_data.screenIdentifier) + '</dd>' : '') + ((opt_data.dateModified != null) ? '<dt>Date de modification&#160;:&#32;</dt><dd><time property="dateModified">' + soy.$$escapeHtml(opt_data.dateModified) + '</time></dd>' : '') + ((opt_data.versionIdentifier != null) ? '<dt>Version&#160;:&#32;</dt><dd>' + soy.$$escapeHtml(opt_data.versionIdentifier) + '</dd>' : '') + '</dl></div></div>' : ''));
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
  var output = '<h2 id="wb-sec-h" class="wb-inv">Menu de la section</h2>';
  var sectionList752 = opt_data.sections;
  var sectionListLen752 = sectionList752.length;
  for (var sectionIndex752 = 0; sectionIndex752 < sectionListLen752; sectionIndex752++) {
    var sectionData752 = sectionList752[sectionIndex752];
    output += '<section class="list-group menu list-unstyled"><h3>' + ((sectionData752.sectionLink != null) ? '<a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(sectionData752.sectionLink)) + '"' + ((sectionData752.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' : '') + soy.$$escapeHtml(sectionData752.sectionName) + ((sectionData752.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fen\u00EAtre</span>' : '') + ((sectionData752.sectionLink != null) ? '</a>' : '') + '</h3><ul class="list-group menu list-unstyled">';
    var linkList749 = sectionData752.menuLinks;
    var linkListLen749 = linkList749.length;
    for (var linkIndex749 = 0; linkIndex749 < linkListLen749; linkIndex749++) {
      var linkData749 = linkList749[linkIndex749];
      if (linkData749.subLinks != null) {
        output += '<li><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(linkData749.href)) + '" class="list-group-item"' + ((linkData749.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData749.text) + ((linkData749.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fen\u00EAtre</span>' : '') + '</a><ul class="list-group menu list-unstyled">';
        var sublinkList733 = linkData749.subLinks;
        var sublinkListLen733 = sublinkList733.length;
        for (var sublinkIndex733 = 0; sublinkIndex733 < sublinkListLen733; sublinkIndex733++) {
          var sublinkData733 = sublinkList733[sublinkIndex733];
          output += '<li><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(sublinkData733.subhref)) + '" class="list-group-item"' + ((sublinkData733.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(sublinkData733.subtext) + ((sublinkData733.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fen\u00EAtre</span>' : '') + '</a></li>';
        }
        output += '</ul></li>';
      } else {
        output += '<li><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(linkData749.href)) + '" class="list-group-item"' + ((linkData749.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData749.text) + ((linkData749.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fen\u00EAtre</span>' : '') + '</a></li>';
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
  var output = ((opt_data.showFeatures == true) ? '<section class="ajaxed-in" data-ajax-replace="https://ssl-templates.services.gc.ca/app/cls/WET/gcintranet/v4_0_32/cdts/ajax/activities-footer-fra.html"></section>' : '') + '<footer role="contentinfo" id="wb-info"><nav role="navigation" class="container wb-navcurr"><h2 class="wb-inv">Au sujet du gouvernement</h2><ul class="list-unstyled colcount-sm-2 colcount-md-4">';
  if (opt_data.contactLinks != null) {
    var linkList766 = opt_data.contactLinks;
    var linkListLen766 = linkList766.length;
    for (var linkIndex766 = 0; linkIndex766 < linkListLen766; linkIndex766++) {
      var linkData766 = linkList766[linkIndex766];
      output += '<li><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(linkData766.href)) + '">' + soy.$$escapeHtml(linkData766.text) + '</a></li>';
    }
  } else {
    output += '<li><a href="https://intranet.canada.ca/contact/contactgc-fra.aspx">Communiquez avec nous</a></li>';
  }
  output += '<li><a href="https://intranet.canada.ca/ict-oci/index-fra.asp">\u00C0 propos des OutilsGC</a></li><li><a href="https://www.canada.ca/fr.html">Canada.ca</a></li><li><a href="https://intranet.canada.ca/terms-avis-fra.asp">Avis</a></li></ul></nav><div class="brand"><div class="container"><div class="row"><div class="col-xs-12 col-md-8"><a href="https://www.canada.ca/fr.html"><img src=\'./gcweb/assets/sig-blk-fr.svg\' alt="" /><span class="wb-inv">Gouvernement du Canada</span></a></div><div class="col-xs-6 visible-sm visible-xs tofpg"><a href="#wb-cont">Haut de la page<span class="glyphicon glyphicon-chevron-up"></span></a></div><div class="col-xs-6 col-md-4 text-right"><img src=\'./gcweb/assets/wmms-blk.svg\' alt="Symbole du Gouvernement du Canada" /></div></div></div></div></footer>';
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
wet.builder.appFooter = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  var output = ((opt_data.showFeatures == true) ? '<section class="ajaxed-in" data-ajax-replace="https://ssl-templates.services.gc.ca/app/cls/WET/gcintranet/v4_0_32/cdts/ajax/activities-footer-fra.html"></section>' : '') + '<footer role="contentinfo" id="wb-info">';
  if (opt_data.footerSections != null) {
    if (opt_data.subTheme == 'esdc' || opt_data.subTheme == 'labour') {
      output += '<nav role="navigation" class="container wb-navcurr"><h2 class="wb-inv">Liens connexes</h2><div class="row">';
      var footerSectionList830 = opt_data.footerSections;
      var footerSectionListLen830 = footerSectionList830.length;
      for (var footerSectionIndex830 = 0; footerSectionIndex830 < footerSectionListLen830; footerSectionIndex830++) {
        var footerSectionData830 = footerSectionList830[footerSectionIndex830];
        if (footerSectionData830.customFooterLinks != null) {
          if (footerSectionIndex830 < 3) {
            output += '<section class="col-md-3 col-sm-6 col-lg-3">' + ((footerSectionData830.sectionName != null) ? '<h3>' + soy.$$escapeHtml(footerSectionData830.sectionName) + '</h3>' : '') + '<ul class="list-unstyled">';
            var linkList804 = footerSectionData830.customFooterLinks;
            var linkListLen804 = linkList804.length;
            for (var linkIndex804 = 0; linkIndex804 < linkListLen804; linkIndex804++) {
              var linkData804 = linkList804[linkIndex804];
              output += '<li><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(linkData804.href)) + '"' + ((linkData804.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData804.text) + ((linkData804.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fen\u00EAtre</span>' : '') + '</a></li>';
            }
            output += '</ul></section>';
          }
        } else if (footerSectionIndex830 == 0) {
          output += '<section class="col-md-3 col-sm-6 col-lg-3">' + ((footerSectionData830.sectionName != null) ? '<h3>' + soy.$$escapeHtml(footerSectionData830.sectionName) + '</h3>' : '') + '<ul class="list-unstyled">';
          var linkList827 = opt_data.footerSections;
          var linkListLen827 = linkList827.length;
          for (var linkIndex827 = 0; linkIndex827 < linkListLen827; linkIndex827++) {
            var linkData827 = linkList827[linkIndex827];
            output += '<li><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(linkData827.href)) + '"' + ((linkData827.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData827.text) + ((linkData827.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fen\u00EAtre</span>' : '') + '</a></li>';
          }
          output += '</ul></section>';
        }
      }
      output += '<section class="col-md-3 col-sm-6 col-lg-3"><h3>Minist\u00E8re</h3><ul class="list-unstyled"><li><a href="http://esdc.prv/fr/directions_regions/index.shtml">EDSC/SC IntraWeb</a></li><li><a href="http://edsc.prv/fr/nouvelles/index.shtml">Nouvelles</a></li><li><a href="http://edsc.prv/fr/coordonnees/index.shtml">Coordonn\u00E9es et r\u00E9troaction</a></li><li><a href="http://edsc.prv/fr/restez_branche/index.shtml">Restez branch\u00E9s</a></li><li><a href="http://edsc.prv/fr/aide.shtml">Aide et avis importants</a></li></ul></section></div></nav>';
    } else if (opt_data.subTheme == 'eccc') {
      output += '<nav role="navigation" class="container wb-navcurr"><h2 class="wb-inv">Liens connexes</h2><div class="row">';
      var footerSectionList884 = opt_data.footerSections;
      var footerSectionListLen884 = footerSectionList884.length;
      for (var footerSectionIndex884 = 0; footerSectionIndex884 < footerSectionListLen884; footerSectionIndex884++) {
        var footerSectionData884 = footerSectionList884[footerSectionIndex884];
        if (footerSectionData884.customFooterLinks != null) {
          if (footerSectionIndex884 < 3) {
            output += '<section class="col-md-3 col-sm-6 col-lg-3">' + ((footerSectionData884.sectionName != null) ? '<h3>' + soy.$$escapeHtml(footerSectionData884.sectionName) + '</h3>' : '') + '<ul class="list-unstyled">';
            var linkList858 = footerSectionData884.customFooterLinks;
            var linkListLen858 = linkList858.length;
            for (var linkIndex858 = 0; linkIndex858 < linkListLen858; linkIndex858++) {
              var linkData858 = linkList858[linkIndex858];
              output += '<li><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(linkData858.href)) + '"' + ((linkData858.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData858.text) + ((linkData858.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fen\u00EAtre</span>' : '') + '</a></li>';
            }
            output += '</ul></section>';
          }
        } else if (footerSectionIndex884 == 0) {
          output += '<section class="col-md-3 col-sm-6 col-lg-3">' + ((footerSectionData884.sectionName != null) ? '<h3>' + soy.$$escapeHtml(footerSectionData884.sectionName) + '</h3>' : '') + '<ul class="list-unstyled">';
          var linkList881 = opt_data.footerSections;
          var linkListLen881 = linkList881.length;
          for (var linkIndex881 = 0; linkIndex881 < linkListLen881; linkIndex881++) {
            var linkData881 = linkList881[linkIndex881];
            output += '<li><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(linkData881.href)) + '"' + ((linkData881.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData881.text) + ((linkData881.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fen\u00EAtre</span>' : '') + '</a></li>';
          }
          output += '</ul></section>';
        }
      }
      output += '<section class="col-md-3 col-sm-6 col-lg-3"><h3>Contact Us</h3><ul class="list-unstyled"><li><a href="#">EnviroTel (Fr)</a></li><li><a href="#">GEDS (Fr)</a></li><li><a href="#">Organizational Chart (Fr)</a></li><li><a href="#">Service Desk (Fr)</a></li><li><a href="#">Feedback (Fr)</a></li><li><a href="#">Services Catalogue (Fr)</a></li></ul></section></div></nav>';
    } else {
      output += '<nav role="navigation" class="container wb-navcurr"><h2 class="wb-inv">Liens connexes</h2><div class="row">';
      var footerSectionList938 = opt_data.footerSections;
      var footerSectionListLen938 = footerSectionList938.length;
      for (var footerSectionIndex938 = 0; footerSectionIndex938 < footerSectionListLen938; footerSectionIndex938++) {
        var footerSectionData938 = footerSectionList938[footerSectionIndex938];
        if (footerSectionData938.customFooterLinks != null) {
          if (footerSectionIndex938 < 3) {
            output += '<section class="col-md-3 col-sm-6 col-lg-3">' + ((footerSectionData938.sectionName != null) ? '<h3>' + soy.$$escapeHtml(footerSectionData938.sectionName) + '</h3>' : '') + '<ul class="list-unstyled">';
            var linkList912 = footerSectionData938.customFooterLinks;
            var linkListLen912 = linkList912.length;
            for (var linkIndex912 = 0; linkIndex912 < linkListLen912; linkIndex912++) {
              var linkData912 = linkList912[linkIndex912];
              output += '<li><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(linkData912.href)) + '"' + ((linkData912.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData912.text) + ((linkData912.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fen\u00EAtre</span>' : '') + '</a></li>';
            }
            output += '</ul></section>';
          }
        } else if (footerSectionIndex938 == 0) {
          output += '<section class="container-fluid">' + ((footerSectionData938.sectionName != null) ? '<h3>' + soy.$$escapeHtml(footerSectionData938.sectionName) + '</h3>' : '') + '<ul class="list-unstyled colcount-sm-2 colcount-md-4">';
          var linkList935 = opt_data.footerSections;
          var linkListLen935 = linkList935.length;
          for (var linkIndex935 = 0; linkIndex935 < linkListLen935; linkIndex935++) {
            var linkData935 = linkList935[linkIndex935];
            output += '<li><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(linkData935.href)) + '"' + ((linkData935.newWindow == true) ? ' target="_blank"  rel="noopener"' : '') + '>' + soy.$$escapeHtml(linkData935.text) + ((linkData935.newWindow == true) ? '<span class="wb-inv"> Ce lien ouvrira dans une nouvelle fen\u00EAtre</span>' : '') + '</a></li>';
          }
          output += '</ul></section>';
        }
      }
      output += '</div></nav>';
    }
  } else if (opt_data.globalNav == true) {
    output += '<nav role="navigation" class="container wb-navcurr"><h2 class="wb-inv">Au sujet du gouvernement</h2><ul class="list-unstyled colcount-sm-2 colcount-md-4 container-fluid" ><li><a href="https://intranet.canada.ca/psc-fsc/index-fra.asp">Nouvelles</a></li><li><a href="https://intranet.canada.ca/hr-rh/index-fra.asp">Ressources humaines</a></li><li><a href="https://intranet.canada.ca/cdl-dca/index-fra.asp">D\u00E9veloppement de carri\u00E8re et apprentissage</a></li><li><a href="https://intranet.canada.ca/wg-tg/index-fra.asp">Services et outils</a></li></ul></nav>';
  } else if (opt_data.subTheme == 'esdc' || opt_data.subTheme == 'labour') {
    output += '<nav role="navigation" class="container visible-sm visible-md visible-lg wb-navcurr" data-wb-ajax=\'{"url": "./cdts/ajax/esdcfooter-fra.html", "type": "replace", "nocache": true }\'></nav>';
  } else {
  }
  output += '<div class="brand"><div class="container"><div class="row"><div class="col-xs-12 col-md-8"><a href="https://www.canada.ca/fr.html"><img src=\'./gcweb/assets/sig-blk-fr.svg\' alt="" /><span class="wb-inv">Gouvernement du Canada</span></a></div><div class="col-xs-6 visible-sm visible-xs tofpg"><a href="#wb-cont">Haut de la page<span class="glyphicon glyphicon-chevron-up"></span></a></div><div class="col-xs-6 col-md-4 text-right"><img src=\'./gcweb/assets/wmms-blk.svg\' alt="Symbole du Gouvernement du Canada" /></div></div></div></div></footer>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
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
wet.builder.refFooter = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<!--[if gte IE 9 | !IE ]><!--><script src=\'' + ((opt_data.jqueryEnv == 'external') ? 'https://ajax.googleapis.com/ajax/libs/' : './wet-boew/js/') + 'jquery/2.2.4/jquery.min.js\'><\/script><script src=\'./wet-boew/js/wet-boew.min.js\'><\/script><!--<![endif]--><!--[if lt IE 9]><script src=\'./wet-boew/js/ie8-wet-boew2.min.js\'><\/script><![endif]--><script src=\'./gcweb/js/theme.min.js\'><\/script>' + ((opt_data.exitScript == true) ? '<script src=\'./cdts/js/exitScript.js\'><\/script><script data-id="exitScript" data-token="' + soy.$$escapeHtmlAttribute(opt_data.exitURL) + '" data-token-domains="' + soy.$$escapeHtmlAttribute(opt_data.exitDomains) + '" data-token-modal="' + soy.$$escapeHtmlAttribute(opt_data.displayModal) + '">clickA();<\/script><a id="sExitModalLink" class="wb-lbx lbx-modal wb-inv" title="" href="#sExitModal" tabindex="-1">Avis de sortie s\u00E9curis\u00E9e</a><section id="sExitModal" class="mfp-hide modal-dialog modal-content overlay-def"><header class="modal-header"><h2 class="modal-title">Avertissement</h2></header><div class="modal-body"><p>' + ((opt_data.exitMsg != null && opt_data.exitMsg.length > 0) ? soy.$$escapeHtml(opt_data.exitMsg) : 'Vous \u00EAtes sur le point de quitter un site s\u00E9curis\u00E9. Voulez-vous continuer?') + '</p><ul class="list-inline text-center"><li><a class="btn btn-primary popup-modal-dismiss pull-left" id="eCancel" href="javascript:void(0)" type="button">' + ((opt_data.cancelMsg != null && opt_data.cancelMsg.length > 0) ? soy.$$escapeHtml(opt_data.cancelMsg) : 'Annuler') + '</a></li><li><a class="btn btn-default popup-modal pull-right" id="eOK" href="javascript:void(0)" type="button">' + ((opt_data.yesMsg != null && opt_data.yesMsg.length > 0) ? soy.$$escapeHtml(opt_data.yesMsg) : 'Oui') + '</a></li></ul></div></section>' : ''));
};
if (goog.DEBUG) {
  wet.builder.refFooter.soyTemplateName = 'wet.builder.refFooter';
}
