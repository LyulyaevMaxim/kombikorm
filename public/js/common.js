function uiController(e){var t=e.data();e.toggleClass("active"),$(t.target).toggleClass("active"),$(t.remove).removeClass("active")}function putElement(){$(window).outerWidth()<768&&$(".news--js").appendTo(".news-put-here--js")}var indexPageAccordion=".accordeon_index",accordion=$(".accordeon"),mainAccordion=$(".main-accordeon"),purchased=$(".purchased"),signIn=$(".sign-in_js"),open="open",autorization=$(".autorization__item"),basket=$(".basket-container"),catalogList=$(".catalog_list"),btnChangeView=$(".button-change-view"),body=$("body"),bodyOverflow="body_overflow-hidden",tabletMenu=$(".catalog-menu > li");$(".ui-controller").click(function(e){uiController($(this)),e.preventDefault()}),mainAccordion.parent().hasClass("accordeon_main-page")||mainAccordion.accordion({collapsible:!0,active:!0,heightStyle:"content"}),$(".accordeon_show-mobile").accordion({collapsible:!0,active:!1,heightStyle:"content"}),$(".second-accordeon").accordion({collapsible:!0,active:0,heightStyle:"content"}),$(".accordeon-btn").on("click",function(){$(this).find(".arrow").toggleClass("arrow_top")}),$(".button-change-view_rows").on("click",function(){catalogList.addClass("catalog_list-rows")}),$(".button-change-view_column").on("click",function(){catalogList.removeClass("catalog_list-rows")}),btnChangeView.on("click",function(){btnChangeView.removeClass("button-change-view_active"),$(this).toggleClass("button-change-view_active")}),$(".filter-1").selectmenu({appendTo:".select-1"}),$(".filter-2").selectmenu({appendTo:".select-2"}),$(".filter-3").selectmenu({appendTo:".wrapper-pagination"}),$(".select-menu").selectmenu({appendTo:".container-select-menu"}),$(".payment-method-select").selectmenu({appendTo:".payment-method-container"}),$(".delivery, .delivery-time").selectmenu({appendTo:".delivery-container"}),$(".breadcrumbs-select__item").selectmenu({appendTo:".breadcrumbs-select",width:!1}),$(".spinner").spinner({step:1,min:0,numberFormat:!1}),$(".manufacture__carousel").owlCarousel({items:1,dots:!0,responsive:{768:{items:3,margin:55},1440:{items:6,margin:35}}}),$(window).on("scroll",function(){var e=$(document).scrollTop(),t=$(".header__bg--js");e>$(".header__bg--js").outerHeight()?$(t).addClass("header__bg--stick"):0===e&&$(t).removeClass("header__bg--stick")}),putElement(),$(window).on("load resize",function(){$(window).outerWidth()<1024?(tabletMenu.on("click",function(){return $(this).siblings().removeClass("active"),uiController($(this)),!1}),$(".catalog-menu li ul li").on("click",function(){event.stopPropagation()})):tabletMenu.removeClass("active")}),$(".compare-products--js").owlCarousel({items:1,dots:!1,nav:!0,navText:!1,responsive:{320:{dots:!0},768:{dots:!1},800:{items:2},1400:{items:3}}});for(var ul=$(".feature-list--js"),li=ul.first().find("li").length,productName=$(".catalog-item-product-name--js"),array=[],maximum,i=0;i<productName.length;i++)array[i]=productName.eq(i).outerHeight();maximum=Math.max.apply(null,array);for(var i=0;i<productName.length;i++)productName.eq(i).css("height",maximum);for(var i=0;i<li;i++){array=[],maximum=0;for(var x=0;x<ul.length;x++)array[x]=ul.eq(x).find("li").eq(i).outerHeight();maximum=Math.max.apply(null,array);for(var x=0;x<ul.length;x++)ul.eq(x).find("li").eq(i).css("height",maximum)}