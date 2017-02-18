var options = [
    {selector: '#staggered-test', offset: 205, callback: function() { Materialize.toast("Visitanos en facebook", 1500 ); } },
    {selector: '#staggered-test', offset: 400, callback: function(el) { Materialize.showStaggeredList($(el)); } },
    {selector: '#list1', offset: 400, callback: function(el) { Materialize.showStaggeredList($(el)); } },
    {selector: '#list2', offset: 550, callback: function(el) { Materialize.showStaggeredList($(el)); } },
    {selector: '#txt1', offset: 0, callback: function(el) { Materialize.showStaggeredList($(el)); } },
    {selector: '#image-test',     offset: 400, callback: function(el) { Materialize.fadeInImage($(el));}}
  ];
  Materialize.scrollFire(options);

  $(document).ready(function(){

      $('.scrollspy').scrollSpy();
      // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();

      //initialize scrollorama
      var scrollorama = $.scrollorama({
          blocks:'.scrollblock'
      });
      scrollorama.animate('#rotate-gear-1a',{ duration: 800, delay: -75, property: 'rotate', start: 360 });
      scrollorama.animate('#rotate-gear-1b',{ duration: 650, delay: -75, property: 'rotate', start: -360 });
      scrollorama.animate('#rotate-gear-1c',{ duration: 480, delay: -75, property: 'rotate', start: 360 });
      scrollorama.animate('#rotate-gear-2a',{ duration: 800, delay: -75, property: 'rotate', start: -360 });
      scrollorama.animate('#rotate-gear-2b',{ duration: 650, delay: -75, property: 'rotate', start: 360 });
      scrollorama.animate('#rotate-gear-2c',{ duration: 480, delay: -75, property: 'rotate', start: -360 });
    });
