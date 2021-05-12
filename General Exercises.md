1. Assess your knowledge level on the following languages (1 = none; 5 = expert): 

    * Vanilla JS  `4`
    * jQuery      `3`
    * HTML/HTML5  `4`
    * CSS/CSS3    `4` 
    * Ajax        `2` 
    * AngularJS   `1`
    * Bootstrap   `2` 

2. What is the width of a container with `100px` of width and `5px` of padding?

   If the rule `box-sizing: border-box` is not specified, the width should be `105px`.

3. How to apply a click event to all paragraphs except for the last?

    With jQuery, this can be achieved using the selectors .not() and :last. For example:

    ```js
    $("p").not(":last").click(function () {
      $(this).hide();
    });
    ```

4. Why does the alert show **"Jack"** first and then undefined?

  ```js
  function identity() {
      var name = 'Jack';
      alert(name);
      return
      name
  };

  var who = identity();
  alert(who)
  ```
  
  The JavaScript parser automatically adds a semicolon when there is a `return` statement on its own line, which causes this snippet to be interpreted like this:
  
  ```js
  ...
      return;
      name;
  };
  ```
