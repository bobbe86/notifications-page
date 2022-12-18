
const toggleButton = document.getElementById('toggleButton');
const targets = document.querySelectorAll(".with-after");
const listItems = document.querySelectorAll("li");


let toggleState = false;

toggleButton.addEventListener('click', function() {
  if (toggleState) {
    toggleState = false;
    toggleButton.innerHTML = "Mark as Unread";
    targets.forEach(function(target) {
      target.classList.remove('with-after');

    
    });
  } else {
    toggleState = true;
    toggleButton.innerHTML = "Mark all as read";
    targets.forEach(function(target) {
      target.classList.add('with-after');
    });
  }
});


listItems.forEach(item => {
  item.addEventListener('click', function() {
    this.classList.remove(".with-after");
  });
});