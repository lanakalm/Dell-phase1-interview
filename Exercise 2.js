$(".cta-body:contains('Confira a pesquisa')")
  .css({"background-color":"transparent", "color": "#fff"})
  .mouseover(function() { 
    $(this).css({
      "background-color":"#fff", 
      "border-color":"#fff", 
      "color": "#0076ce",
    });
  })
  .mouseout(function() {
    $(this).css({
      "background-color":"transparent", 
      "border-color":"#fff", 
      "color": "#fff",
    });
  });

$(".cta-body:contains('Ver todos os artigos')")
  .css({"background-color": "#fff", "color":"#0076ce"})
  .mouseover(function() {
    $(this).css({
      "background-color":"#00447c", 
      "border-color":"#00447c", 
      "color": "#fff",
    });
  })
  .mouseout(function() {
    $(this).css({
      "background-color":"#fff", 
      "border-color":"#fff", 
      "color": "#0076ce",
    });
  });
