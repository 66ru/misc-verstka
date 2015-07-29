'use strict';

function getRoot() {
  var path = decodeURI(location.pathname);
  var index = path.search(/photo\/\d+\/item\/\d+\/?$/i);

  if (~index) {
    path = path.slice(0, index);
  }

  return path;
}

var router = new LilRouter({root: getRoot()});

var fotoramaOptions = {
  fit: 'scaledown',
  width: '100%',
  maxheight: '80%',
  ratio: '4/3', // Ask about this.
  allowfullscreen: true,
  nav: 'thumbs',
  thumbheight: 45,
  thumbmargin: 0,
  thumbborderwidth: 1,
  captions: false,
  click: false
};

class Photorep {
  constructor(elem, options) {
    this.isFullscreen = false;
    this.$fotorama = $(elem);
    this.id = this.$fotorama.data('id');

    let re = new RegExp(`.*\/photo\/${this.id}\/item\/(\\d)+\/?$`, 'i');
    this.re = re;
    this.elemURLs = this.getElemURLs(re);

    this.fotorama = this.initFotorama(options);

    router.add(re, this.showFrame.bind(this))
      .listen()
      .check();

    this.$fotorama.on('fotorama:fullscreenenter', function() {
      this.fotorama.setOptions({captions:true});
      this.isFullscreen = true;
      this.navigate();
    }.bind(this));

    this.$fotorama.on('fotorama:fullscreenexit', function() {
      this.fotorama.setOptions({captions:false});
      this.isFullscreen = false;
      router.navigate();
    }.bind(this));

    this.$fotorama.on('fotorama:showend', function() {
      if (this.isFullscreen) {
        this.navigate();
      }
    }.bind(this));
  }

  showFrame(index) {
    var photoID = decodeURI(location.pathname).match(this.re)[1]
  }

  navigate() {
    router.navigate(`photo/${this.id}/item/` + this.elemURLs[this.fotorama.activeIndex] + '/');
  }

  getElemURLs(re, id) {
    var elemURLs = [];
    this.$fotorama.find('.m-photorep__fotorama-elem')
      .each(function() {
        elemURLs.push( $(this).attr('href').match(re)[1] );
      });
    return elemURLs;
  }

  initFotorama(options) {
    return this.$fotorama.fotorama(options).data('fotorama');
  }
}

$(window).onload(function() {
  $(function() {
    $('.fotorama').each(function() {
      new Photorep(this, fotoramaOptions);
    });
  });
});
