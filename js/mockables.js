
$(function(){
  function cls (i) {
    if (i === 2)
      return ' class="portal-live active" ';
    else if (i <= 4)
      return ' class="portal-live" ';
    else if (i <= 8)
      return ' class="portal-rejected" ';
    else if (i <= 10)
      return ' class="portal-duplicate" ';
    else
      return ' class="portal-submitted" ';
  }
  function offs(i) {
    return Math.ceil(80 * (i / 130)).toString() + "%";
  }
  var table = '<table class="table table-hover">';
  for(i = 0; i < 130; i++) {
    table = table.concat('<tr' + cls(i) + '><td><img src="http://placehold.it/48x48" class="img img-circle"/></td><td>Portal Title Here</td><td>23rd of July 2014</td><td class="hidden-xs">Submitted</td><td class="hidden-xs"><b>83</b> days</tr>');
  }
  table = table.concat('</table>');
  $(table).appendTo('#portalTable');
  setTimeout(function(){
    $('#portalTable').trigger('custom.update'); // needed for positioning
  }, 200);
});
