
window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let tabs = require('./parts/tabs.js'),
    timer = require('./parts/timer.js'),
    modalWindow = require('./parts/modal.js'),
    forms = require('./parts/forms.js'),
    slider = require('./parts/slider.js'),
    calc = require('./parts/calc.js');
    
    tabs();
    timer();
    modalWindow();
    forms();
    slider();
    calc();
});

