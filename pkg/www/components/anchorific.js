const E = {}
export default E;

E.init = function($){
  if (typeof window=='undefined')
    return;
  var Anchorific = {
      init: function(options, elem){
          var _this = this;
          _this.elem = elem;
          _this.$elem = $(elem);
          _this.opt = Object.assign({}, this.opt, options);
          _this.headers = _this.$elem.find(_this.opt.headers);
          _this.previous = 0;
          // Fix bug #1
          if (_this.headers.length)
          {
              _this.first = parseInt(_this.headers.prop('nodeName').substring(1),
                  null);
          }
          _this.build();
      },
      opt: {
          navigation: '.anchorific', // position of navigation
          headers: 'h1, h2, h3, h4, h5, h6', // headers to consider
          speed: 200, // speed of sliding back to top
          anchorClass: 'anchor', // class of anchor links
          anchorText: '#', // prepended or appended to anchor headings
          top: '.top', // back to top button or link class
          spy: true, // scroll spy
          position: 'append', // position of anchor text
          spyOffset: !0 // specify heading offset for spy scrolling
      },
      build: function(){
          var _this = this, obj, navigations = function(){};
          // when navigation configuration is set
          if (_this.opt.navigation)
          {
              $(_this.opt.navigation).append('<ul />');
              _this.previous = $(_this.opt.navigation).find('ul').last();
              navigations = function(obj){
                  return _this.navigations(obj); };
          }
          for (var i=0; i<_this.headers.length; i++)
          {
              obj = _this.headers.eq(i);
              if (obj[0].closest('.popup'))
                  continue;
              navigations(obj);
              _this.anchor(obj);
          }
          if (_this.opt.spy)
              _this.spy();
          if (_this.opt.top)
              _this.back();
      },
      navigations: function(obj){
              var _this = this, link, list, which, name = _this.name(obj);
              var text = obj.text();
              if (obj.attr('id')!==undefined)
                  name = obj.attr('id');
              if (obj.attr('text')!==undefined)
                  text = obj.attr('text');
              var href = '#'+name;
              if (obj.attr('data-href')!==undefined)
                  href = obj.attr('data-href');
              link = $('<a />').attr('href', href).text(text);
              list = $('<li />').append(link);
              which = parseInt(obj.prop('nodeName').substring(1), null);
              list.attr('data-tag', which);
              _this.subheadings(which, list);
              _this.first = which;
      },
      subheadings: function(which, a){
          var _this = this, li = $(_this.opt.navigation).find('li');
          if (which==_this.first)
              _this.previous.append(a);
          else if (which>_this.first)
          {
              li.last().append('<ul />');
              // can't use cache ul; need to find ul once more
              $(_this.opt.navigation).find('ul').last().append(a);
              _this.previous = a.parent();
          }
          else
          {
              $('li[data-tag='+which+']').last().parent().append(a);
              _this.previous = a.parent();
          }
      },
      name: function(obj){
          var name = obj.text().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-')
          .toLowerCase();
          return name;
      },
      anchor: function(obj){
          var _this = this, name = _this.name(obj), anchor;
          var text = _this.opt.anchorText, klass = _this.opt.anchorClass, id;
          if (obj.attr('id')===undefined)
              obj.attr('id', name);
          id = obj.attr('id');
          obj[0].innerHTML = '<a class="anchor-text" href="#'+id+'">'
          +obj[0].innerHTML+'</a>';
          anchor = $('<a />').attr('href', '#'+id).html(text).addClass(klass);
          if (_this.opt.position=='append')
              obj.append(anchor);
          else
              obj.prepend(anchor);
      },
      back: function(){
          var _this = this, body = $('body, html'), top = $(_this.opt.top);
          top.on('click', function(e){
              e.preventDefault();
              body.animate({scrollTop: 0}, _this.opt.speed);
          });
      },
      top: function(that){
          var _this = this, top = _this.opt.top, back;
          if (top!==false)
          {
              back = $(that).scrollTop()>200 ? $(top).fadeIn() :
                  $(top).fadeOut();
          }
      },
      spy: function(){
          var _this = this, current, list, prev;
          $(window).scroll(function(e){
              // show links back to top
              _this.top(this);
              // get all the header on top of the viewport
              current = _this.headers.map(function(e){
                  if ($(this).offset().top-$(window).scrollTop()>=
                      _this.opt.spyOffset)
                  {
                      return this;
                  }
              });
              // get the first header in viewport
              current = $(current).eq(0);
              if (current && current.length)
              {
                  // get all li tag that contains href of # ( all the parents )
                  list = $('li:has(a[href="#'+current.attr('id')+'"])');
                  if (prev!==undefined)
                      prev.removeClass('active');
                  list.addClass('active');
                  prev = list;
              }
          });
      }
  };
  $.fn.anchorific = function(options){
      return this.each(function(){
          options = options||{};
          if (options.rebuild && $.data(this, 'anchorific'))
          {
              $(options.navigation||Anchorific.opt.navigation).empty();
              $.removeData(this, 'anchorific');
          }
          if (!$.data(this, 'anchorific'))
          {
              var anchor = Object.create(Anchorific);
              anchor.init(options, this);
              $.data(this, 'anchorific', anchor);
          }
      });
  };
};

