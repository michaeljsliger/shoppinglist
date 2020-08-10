'use strict';
// append button
// take input and append to .shopping-list
// formatted the same, with the check and delete buttons
// can just copy and paste

$('form').submit(function(e) {
  e.preventDefault();
  const input = $('#shopping-list-entry').val();
  const listAddition = `<li>
    <span class="shopping-item">${input}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`;
  $('.shopping-list').append(listAddition);
});

$('.shopping-list').on('click', 'li', function(e) {
  const clicked = e.target;

  // reassign button if child element is clicked, for
  // consistency of input across that whole button element
  let buttonCheck = $(clicked).attr('class');
  if ($(clicked).attr('class') === 'button-label'){
    buttonCheck = $(clicked).parent().attr('class');
  }

//   console.log(e.target);
//   console.log(this);  
//   console.log(buttonCheck);

  if (buttonCheck === 'shopping-item-delete') {
    this.remove();
}
  if (buttonCheck === 'shopping-item-toggle') {
      $(this).find('.shopping-item').toggleClass('shopping-item__checked');
}

});


// this
// check button
// delete button
