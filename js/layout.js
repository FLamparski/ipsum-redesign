$(function(){
  function _resizePortalTableHeader(){
    $('#portalTable > header').width($('#portalTable').width())
      .css('top', ($('.app-bar').height() - 10).toString().concat('px'));
  }
  $('#portalTable > header').on('affix.bs.affix', _resizePortalTableHeader);
  $(window).on('resize', _resizePortalTableHeader);

  function _resizePortalTableHeaderCells(){
    console.log('_resizePortalTableHeaderCells()');
    $('#portalTable > table tr:nth-child(1) > td').each(function(i){
      if (i === 0) {
        // This absolutely HAS to be (desired width) - 10 pixels.
        // Some really DUMB feature in Bootstrap resets the widths
        // and somehow adds +10px to the first one. No, I don't
        // know what it is, but it sucks.
        $('#portalTable > header > table tr').children().eq(i).width(54);
      } else {
        $('#portalTable > header > table tr').children().eq(i).width($(this).width());
      }
    });
  }
  $(window).on('resize', _resizePortalTableHeaderCells);
  $('#portalTable').on('custom.update', _resizePortalTableHeaderCells);

  $('#portalTable > header').affix({
    offset: {
      top: $('.app-bar').height()
    }
  });

  window.$navDrawer = $('.nav-drawer').drawer('left');
  $('.drawer-toggle').on('click', function(){
    var $this = $(this);
    $($this.data('target')).drawer('toggle', 150);
  });
});
