'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function getRoot() {
  var path = decodeURI(location.pathname);
  var index = path.search(/photo\/\d+\/item\/\d+\/?$/i);

  if (~index) {
    path = path.slice(0, index);
  }

  return path;
}

var router = new LilRouter({ root: getRoot() });

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

var Photorep = (function () {
  function Photorep(elem, options) {
    _classCallCheck(this, Photorep);

    this.isFullscreen = false;
    this.$fotorama = $(elem);
    this.id = this.$fotorama.data('id');

    var re = new RegExp('.*/photo/' + this.id + '/item/(\\d)+/?$', 'i');
    this.re = re;
    // console.log(this.re);
    this.elemIDs = this.getElemIDs(re);

    this.fotorama = this.initFotorama(options);

    router //.add(re, this.showFrame.bind(this))
    .listen().check();

    this.$fotorama.on('fotorama:fullscreenenter', (function () {
      this.fotorama.setOptions({ captions: true });
      this.isFullscreen = true;
      this.navigate();
    }).bind(this));

    this.$fotorama.on('fotorama:fullscreenexit', (function () {
      this.fotorama.setOptions({ captions: false });
      this.isFullscreen = false;
      router.navigate();
    }).bind(this));

    this.$fotorama.on('fotorama:showend', (function () {
      if (this.isFullscreen) {
        this.navigate();
      }
    }).bind(this));
  }

  _createClass(Photorep, [{
    key: 'showFrame',
    value: function showFrame(index) {
      // var photoID = decodeURI(location.pathname).match(this.re)[1]
      // console.log(photoID);
    }
  }, {
    key: 'navigate',
    value: function navigate() {
      console.log(this.elemIDs[this.fotorama.activeIndex]);
      router.navigate('photo/' + this.id + '/item/' + this.elemIDs[this.fotorama.activeIndex] + '/');
    }
  }, {
    key: 'getElemIDs',
    value: function getElemIDs(re, id) {
      var elemIDs = [];
      this.$fotorama.find('.m-photorep__fotorama-elem').each(function () {
        elemIDs.push($(this).attr('href').match(re)[1]);
      });
      return elemIDs;
    }
  }, {
    key: 'initFotorama',
    value: function initFotorama(options) {
      return this.$fotorama.fotorama(options).data('fotorama');
    }
  }]);

  return Photorep;
})();

$(function () {
  $('.fotorama').each(function () {
    new Photorep(this, fotoramaOptions);
  });
});