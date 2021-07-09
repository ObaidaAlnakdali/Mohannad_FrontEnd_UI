import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Proxy, Socialmedia } from 'src/services/proxy.service';
import { InfosvcService } from '../infosvc.service';

declare var jQuery : any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  social_media: Socialmedia[];
  Name = "icofont-";

  constructor(
    private proxy : Proxy,
    private svc : InfosvcService,
    public translate : TranslateService
  ) {
    this.getHeaderInfo();
  }

  ngOnInit(): void {
(function($) {

  // Smooth scroll for the navigation menu and links with .scrollto classes

    $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        if (target.length) {
          e.preventDefault();

          var scrollto = target.offset().top;
          var scrolled = 20;

          if ($('#header').length) {
            scrollto -= $('#header').outerHeight()

            if (!$('#header').hasClass('header-scrolled')) {
              scrollto += scrolled;
            }
          }

          if ($(this).attr("href") == '#header') {
            scrollto = 0;
          }

          $('html, body').animate({
            scrollTop: scrollto
          }, 1500, 'easeInOutExpo');

          if ($(this).parents('.nav-menu, .mobile-nav').length) {
            $('.nav-menu .active, .mobile-nav .active').removeClass('active');
            $(this).closest('li').addClass('active');
          }

          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').fadeOut();
          }
          return false;
        }
      }
    });
  // Mobile Navigation

  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }



})(jQuery);

  }

  getHeaderInfo() {
    this.svc.getHeaderInfo(() => {
      this.social_media = this.svc.SocialMedia;
    });
  }

  changeLang(){
    let lang = document.getElementById("language").innerHTML;
    // document.getElementById("language").innerHTML = (lang === "EN") ? "EN":"AR";
    if (lang === "EN"){
      document.getElementById("language").innerHTML="AR";
      this.translate.use('ar');
    }else{
      document.getElementById("language").innerHTML="EN";
      this.translate.use('en');
    }
  }

}
