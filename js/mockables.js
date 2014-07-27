
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
  var table = '<table class="table table-condensed table-hover">';
  table = table.concat('<tr><th style="width: 50px"></th><th>Title</th><th>Submitted</th><th>State</th><th style="width: 400px"></th></tr>');
  for(i = 0; i < 130; i++) {
    table = table.concat('<tr' + cls(i) + '><td style="width: 50px"><img src="http://placehold.it/48x48"/></td><td>Portal Title Here</td><td>23rd of July 2014</td><td>Submitted</td><td><div class="progress"><div class="progress-bar" style="margin-left: ' + offs(i) + '; width: 20%"></div></div></tr>');
  }
  table = table.concat('</table>');
  $('#portalTable').html(table);
});
