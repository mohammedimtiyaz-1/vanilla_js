document.addEventListener("DOMContentLoaded", function () {
  // grab all checkboxes
  const checkboxes = document.querySelectorAll(".inbox input[type=checkbox]");
  let lastChecked;

  function handleCheck(e) {
    let inBetween = false;
    // see if Shift key was pressed AND item is being checked (not unchecked)
    if (e.shiftKey && this.checked) {
      // loop through every checkbox
      checkboxes.forEach((checkbox) => {
        // if this checkbox or the last one checked is selected
        if (checkbox === this || checkbox === lastChecked) {
          // reverse inBetween true<->false
          inBetween = !inBetween;
        }
        // if item is inBetween
        if (inBetween) {
          // check it
          checkbox.checked = true;
        }
      });
    }
    lastChecked = this;
  }

  // call handleCheck whenever a checkbox is checked
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", handleCheck);
  });

  // select all items
  function selectAllItems(e) {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = true;
    });
  }
  const selectAll = document.getElementById("selectAll");
  selectAll.addEventListener("click", selectAllItems);

  // deselect all items
  function deselectAllItems(e) {
    console.log(e);
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }
  const deselectAll = document.getElementById("deselectAll");
  deselectAll.addEventListener("click", deselectAllItems);
});
