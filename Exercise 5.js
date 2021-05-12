const features = $(".feature");
const preppendText = (elem, value) => $(elem).text(value + $(elem).text());

features.each((_index, elem) => {
  const label = $(elem).text().trim().split(" ")[0];
  const parent = $(elem).parent();
  $(parent).find("#category-list-container li a").each((_index, innerElem) => 
    preppendText(innerElem, label + " - ")
  );
});
