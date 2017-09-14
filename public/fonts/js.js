$(document).ready(function() {
  $.simpleWeather({
    location: '',//'Yekaterinburg, Russia',
    woeid: '2112237', // id города см тут http://www.woeidlookup.com/
    unit: 'c',
    success: function(weather) {

	  html = '<h5>'+'в екатеринбурге: '+'<i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h5>';
		
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});
