/**
 * AdminLTE Demo Menu
 * ------------------
 * You should not use this file in production.
 * This file is for demo purposes only.
 */
(function ($) {
  'use strict'

  var $sidebar   = $('.control-sidebar')
  var $container = $('<div />', {
    class: 'p-3'
  })

  $sidebar.append($container)

  var navbar_dark_skins = [
    'bg-primary',
    'bg-info',
    'bg-success',
    'bg-danger'
  ]

  var navbar_light_skins = [
    'bg-warning',
    'bg-white',
    'bg-gray-light'
  ]

  $container.append(
    '<h5>تنظیمات قالب</h5><hr class="mb-2"/>'
    + '<h6>رنگ‌های نوار ناوبری</h6>'
  )

  var $navbar_variants        = $('<div />', {
    'class': 'd-flex'
  })
  var navbar_all_colors       = navbar_dark_skins.concat(navbar_light_skins)
  var $navbar_variants_colors = createSkinBlock(navbar_all_colors, function (e) {
    var color = $(this).data('color')
    console.log('Adding ' + color)
    var $main_header = $('.main-header')
    $main_header.removeClass('navbar-dark').removeClass('navbar-light')
    navbar_all_colors.map(function (color) {
      $main_header.removeClass(color)
    })

    if (navbar_dark_skins.indexOf(color) > -1) {
      $main_header.addClass('navbar-dark')
      console.log('AND navbar-dark')
    } else {
      console.log('AND navbar-light')
      $main_header.addClass('navbar-light')
    }

    $main_header.addClass(color);
    setCookie('main_header_color', color + ' ' + nav_type,100);
  })

  $navbar_variants.append($navbar_variants_colors)

  $container.append($navbar_variants)

  var $checkbox_container = $('<div />', {
    'class': 'mb-4'
  })
  var main_header_border = '';
  var $navbar_border = $('<input />', {
    type   : 'checkbox',
    value  : 1,
    checked: $('.main-header').hasClass('border-bottom'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-header').addClass('border-bottom');
      main_header_border = 'border-bottom';
    } else {
      $('.main-header').removeClass('border-bottom');
      main_header_border = '';
    }
    setCookie('main_header_border', main_header_border,100);
  })
  $checkbox_container.append($navbar_border)
  $checkbox_container.append('<span>مرز نوار ناوبری</span>')
  $container.append($checkbox_container)


  var sidebar_colors = [
    'bg-primary',
    'bg-warning',
    'bg-info',
    'bg-danger',
    'bg-success'
  ]

  var sidebar_skins = [
    'sidebar-dark-primary',
    'sidebar-dark-warning',
    'sidebar-dark-info',
    'sidebar-dark-danger',
    'sidebar-dark-success',
    'sidebar-light-primary',
    'sidebar-light-warning',
    'sidebar-light-info',
    'sidebar-light-danger',
    'sidebar-light-success'
  ]

  $container.append('<h6>نوار تیره</h6>')
  var $sidebar_variants = $('<div />', {
    'class': 'd-flex'
  })
  $container.append($sidebar_variants)
  $container.append(createSkinBlock(sidebar_colors, function () {
    var color         = $(this).data('color')
    var sidebar_class = 'sidebar-dark-' + color.replace('bg-', '')
    var $sidebar      = $('.main-sidebar')
    sidebar_skins.map(function (skin) {
      $sidebar.removeClass(skin)
    })

    $sidebar.addClass(sidebar_class);
    setCookie('main_sidebar_color', sidebar_class,100);
  }))

  $container.append('<h6>نوار روشن</h6>')
  var $sidebar_variants = $('<div />', {
    'class': 'd-flex'
  })
  $container.append($sidebar_variants)
  $container.append(createSkinBlock(sidebar_colors, function () {
    var color         = $(this).data('color')
    var sidebar_class = 'sidebar-light-' + color.replace('bg-', '')
    var $sidebar      = $('.main-sidebar')
    sidebar_skins.map(function (skin) {
      $sidebar.removeClass(skin)
    })

    $sidebar.addClass(sidebar_class);
    setCookie('main_sidebar_color', sidebar_class,100);
  }))

  var logo_skins = navbar_all_colors
  $container.append('<h6>رنگ برند لوگو</h6>')
  var $logo_variants = $('<div />', {
    'class': 'd-flex'
  })
  $container.append($logo_variants)
  var $clear_btn = $('<a />', {
    href: 'javascript:void(0)'
  }).text('پاک کردن').on('click', function () {
    var $logo = $('.brand-link')
    logo_skins.map(function (skin) {
      $logo.removeClass(skin)
    })
    setCookie('logo_color', color,100);
  })
  $container.append(createSkinBlock(logo_skins, function () {
    var color = $(this).data('color')
    var $logo = $('.brand-link')
    logo_skins.map(function (skin) {
      $logo.removeClass(skin)
    })
    $logo.addClass(color);
    setCookie('logo_color', color,100);
  }).append($clear_btn))

  function createSkinBlock(colors, callback) {
    var $block = $('<div />', {
      'class': 'd-flex flex-wrap mb-3'
    })

    colors.map(function (color) {
      var $color = $('<div />', {
        'class': (typeof color === 'object' ? color.join(' ') : color) + ' elevation-2'
      })

      $block.append($color)

      $color.data('color', color)

      $color.css({
        width       : '40px',
        height      : '20px',
        borderRadius: '25px',
        marginRight : 10,
        marginBottom: 10,
        opacity     : 0.8,
        cursor      : 'pointer'
      })

      $color.hover(function () {
        $(this).css({ opacity: 1 }).removeClass('elevation-2').addClass('elevation-4')
      }, function () {
        $(this).css({ opacity: 0.8 }).removeClass('elevation-4').addClass('elevation-2')
      })

      if (callback) {
        $color.on('click', callback)
      }

    })

    return $block
  }

  $('[data-widget="chat-pane-toggle"]').click(function() {
      $(this).closest('.card').toggleClass('direct-chat-contacts-open')
  });
  $('[data-toggle="tooltip"]').tooltip();


  function ConvertNumberToPersion() {
        let persian = { 0: '۰', 1: '۱', 2: '۲', 3: '۳', 4: '۴', 5: '۵', 6: '۶', 7: '۷', 8: '۸', 9: '۹' };
        function traverse(el) {
            if (el.nodeType == 3) {
                var list = el.data.match(/[0-9]/g);
                if (list != null && list.length != 0) {
                    for (var i = 0; i < list.length; i++)
                        el.data = el.data.replace(list[i], persian[list[i]]);
                }
            }
            for (var i = 0; i < el.childNodes.length; i++) {
                traverse(el.childNodes[i]);
            }
        }
        traverse(document.body);
    }

  ConvertNumberToPersion();

  $('.sidebar-mini .main-header .nav-item').click(function () {
    let sidebar_mini = $('.sidebar-mini');
    let class_name = sidebar_mini.attr('class');
    class_name = class_name.replace('sidebar-mini sans ', '');
    if (class_name == 'sidebar-open') {
      setCookie('sidebar_class', 'sidebar-collapse', 100);
    } else {
      setCookie('sidebar_class', 'sidebar-open', 100);
    }
  });

  let _sidebar_class = checkCookie('sidebar_class') ? getCookie('sidebar_class') : 'sidebar-open';
  let _main_header_color = checkCookie('main_header_color') ? getCookie('main_header_color') : 'navbar-dark bg-success';
  let _main_header_border = checkCookie('main_header_border') ? getCookie('main_header_border') : 'border-bottom';
  let _main_sidebar_color = checkCookie('main_sidebar_color') ? getCookie('main_sidebar_color') : 'sidebar-dark-info';
  let _logo_color = checkCookie('logo_color') ? getCookie('logo_color') : 'bg-success';
  if(_main_header_border == 'border-bottom') $('.control-sidebar input[type=checkbox]').attr('checked', true);
  $('.main-header').addClass(_main_header_color).addClass(_main_header_border);
  $('.main-sidebar').addClass(_main_sidebar_color);
  $('.main-sidebar .brand-link').addClass(_logo_color);
  $('.sidebar-mini').addClass(_sidebar_class);

})(jQuery)

function setCookie(cname, cvalue, exdays) {
  let d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires+"; path=/";
}
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i=0; i<ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}
function checkCookie(cname) {
  let check_cookie = getCookie(cname);
  if(check_cookie == ""){
    return false;
  }
  return true;
}

