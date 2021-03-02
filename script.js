let state = {
  target: 'color',
  red: 0,
  green: 0,
  blue: 0,
}

const p = $('#text');
p.css({color: `rgb(0, 0, 0)`})

$('.slider').slider({
  max: 255,
  min: 0,
  value: 0,
  range: 'min',
  animate: true,
  slide: function (e, ui) {
    if ($(this).hasClass('red')) {
      p.css(state.target, `rgb(${ui.value}, ${state.green}, ${state.blue})`);
    } else if ($(this).hasClass('green')) {
      p.css(state.target, `rgb(${state.red}, ${ui.value}, ${state.blue})`);
    } else {
      p.css(state.target, `rgb(${state.red}, ${state.green}, ${ui.value})`);
    }
  },
  stop: function (e, ui) {
    if ($(this).hasClass('red')) {
      state.red = ui.value;
    } else if ($(this).hasClass('green')) {
      state.green = ui.value;
    } else {
      state.blue = ui.value;
    }
  }
});

$('.btn').button().on('click', function (e) {
  if (!($(e.target).hasClass('activeBtn'))) {
    $('.activeBtn').removeClass('activeBtn');
    $(e.target).addClass('activeBtn');
  }

  if ($(this).hasClass('colorOn')) {
    state.target = 'color';
    p.css(state.target, `rgb(${state.red}, ${state.green}, ${state.blue})`);
  } else {
    state.target = 'background';
    p.css(state.target, `rgb(${state.red}, ${state.green}, ${state.blue})`);
  }
});

$('.colorOn').addClass('activeBtn');