
$(function(){
  function cls (i) {
    if (i <= 4)
      return 'portal-live';
    else if (i <= 8)
      return 'portal-rejected';
    else if (i <= 10)
      return 'portal-duplicate';
    else
      return 'portal-submitted';
  }
  function offs(i) {
    return Math.ceil(80 * (i / 130)).toString() + "%";
  }
  var table = '<table class="table table-hover">';
  for(i = 0; i < 130; i++) {
    table = table.concat('<tr class="' + cls(i) + ' portal" data-index="' + i + '"><td><img src="http://placehold.it/48x48" class="img img-circle"/></td><td>Portal Title Here</td><td>23rd of July 2014</td><td class="hidden-xs">Submitted</td><td class="hidden-xs"><b>83</b> days</tr>');
  }
  table = table.concat('</table>');
  $(table).appendTo('#portalTable');
  setTimeout(function(){
    $('#portalTable').trigger('custom.update'); // needed for positioning
  }, 200);
});
