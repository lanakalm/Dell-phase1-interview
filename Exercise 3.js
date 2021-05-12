/* 
  The source url given for this exercise is not the same as shown in the 
  description image, so I changed the position of the top area to 
  between the "Adapte-se e ajuste a escala em tempo real..." and "Escolha 
  um modelo de consumo de TI..." sections.
*/

const columns = $(".column-control-v3");
const secondColumnHtml = $(columns[1]).html();
$(columns[1]).html($(columns[0]).html());
$(columns[0]).html(secondColumnHtml);
