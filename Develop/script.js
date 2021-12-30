let nineOclock = moment('09:00:00', 'HH');

$('#hour1').text(nineOclock.format('LT'))
$('#hour2').text(nineOclock.add(1, 'hour').format('LT'))
$('#hour3').text(nineOclock.add(1, 'hour').format('LT'))
$('#hour4').text(nineOclock.add(1, 'hour').format('LT'))
$('#hour5').text(nineOclock.add(1, 'hour').format('LT'))
$('#hour6').text(nineOclock.add(1, 'hour').format('LT'))
$('#hour7').text(nineOclock.add(1, 'hour').format('LT'))
$('#hour8').text(nineOclock.add(1, 'hour').format('LT'))
$('#hour9').text(nineOclock.add(1, 'hour').format('LT'))