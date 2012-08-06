$(function () {
	var ircopen = false;
	var anim = function (to) {
		var list = $('#list');
		var logo = $('#logo');
		$('#listwrap').animate(to, {
			duration: 500,
			queue:    false,
			step:     function (now, fx) {
				if (fx.prop != 'height') {
					return;
				}
				var half = now / 2;
				list.css('top', (-40 + half) + 'px');
				logo.css('margin-top', (80 - half) + 'px');
			}
		});
	};
	$('#logo a').click(function (ev) {
		ev.stopPropagation();
	});
	$('#logo').bind('mouseenter click', function (ev) {
		anim({
			'height':         '80px',
			'letter-spacing': '2px'
		});
		return false;
	});
	$('#logo').bind('mouseleave', function (ev) {
		var closelogo = function () {
			anim({
				'height':         '0px',
				'letter-spacing': '-2px'
			});
		};
		var ircclosed = function () {
			ircopen = false;
			closelogo();
		};
		if (ircopen) {
			$('#listwrap').animate({
				'height': '80px'
			}, {
				duration: 300,
				complete: ircclosed
			});
		} else {
			closelogo();
		}
	});
	$('#irc a:first').click(function (ev) {
		if (ircopen) {
			ircopen = false;
			$('#listwrap').animate({
				'height': '80px'
			}, {
				duration: 300
			});
		} else {
			ircopen = true;
			$('#listwrap').animate({
				'height': '181px'
			}, {
				duration: 500
			});
		}
		return false;
	});
});
