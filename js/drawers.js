(function($){
  // Declare the class
  function Drawer($el, edge){
    console.log('Drawer(%s)', edge);
    this.$el = $el;
    this.edge = edge;
    this._edgeType = (function(edge){
      if(edge === 'top' || edge === 'bottom'){
        return 'h';
      } else {
        return 'v';
      }})(edge);
    this.state = 'hidden';
    var cssDef = {};
    cssDef[edge] = -(this._edgeType === 'h' ? $el.outerHeight() : $el.outerWidth());
    $el.css(cssDef);
  }
  // Methods
  /**
   * Hides the drawer.
   * 
   * Parameters: accepts any parameters you'd pass to jQuery#animate
   * after the option object. Example:
   * 
   *     $('.drawer').drawer('hide', 10000)
   *
   * Will hide the drawer over a looong time.
   */
  Drawer.prototype.hide = function(){
    console.log('Drawer(%s)#hide()', this.edge, arguments);
    var $self = this.$el,
        animDef = {};
    animDef[this.edge] = -(this._edgeType === 'h' ? $self.outerHeight() : $self.outerWidth());
    this.state = 'hidden';
    return $self.animate.apply($self, [].concat(animDef, Array.prototype.slice.call(arguments)));
  };
  /**
   * Shows the drawer.
   *
   * Parameters: accepts any parameteters you'd pass to
   * jQuery#animate() after the options object.
   */
  Drawer.prototype.show = function(){
    console.log('Drawer(%s)#show()', this.edge, Array.prototype.slice.call(arguments));
    var $self = this.$el,
        animDef = {};
    animDef[this.edge] = 0;
    this.state = 'shown';
    return $self.animate.apply($self, [].concat(animDef, Array.prototype.slice.call(arguments)));
  };
  /**
   * Toggles the drawer.
   *
   * Parameters: accepts any parameteters you'd pass to
   * jQuery#animate() after the options object.
   */
  Drawer.prototype.toggle = function(){
    console.log('Drawer(%s)#toggle()', this.edge);
    if(this.state === 'hidden') this.show.apply(this, Array.prototype.slice.call(arguments));
    else this.hide.apply(this, Array.prototype.slice.call(arguments));
  };
  // Expose it
  /**
   * Usage: $('.drawer').drawer('left').drawer('show', 'slow').drawer('hide', 150, function(){})
   * and so on and so forth.
   *
   * Note that the drawer must be a single element, as the plugin doesn't work with
   * multiple element collections (yet).
   */
  $.fn.drawer = function(param){
    console.log('$#drawer(%s)', param);
    var $self = $(this);
    if($self.length !== 1) throw new Error('Drawer only works on single element jQuery sets!');
    var data = $self.data('drawers.drawer');
    if (!data) $self.data('drawers.drawer', (data = new Drawer($self, param)));
    if (typeof param === 'string' && data[param]) data[param].apply(data, Array.prototype.slice.call(arguments, 1));
    return $self;
  };
}(jQuery));
