
let bag =[];                    // initialize price array   
                  // Animation:
$(document).ready(function(){
  $('.cart').click(function(){
    $('.checkout-container').fadeToggle();
  });
  
  $('.checkout').addClass('disabled');
  $('#bin').addClass('disabled');
});

$(document).on('click','.add-to-cart',function(e){
  e.preventDefault();
  $('.empty').hide();
  
  //---------------------------------------------------------
  if($(this).hasClass('disable')){    //disable mutiple clicks
    return false;
  }
  $(document).find('.add-to-cart').addClass('disable');
  //---------------------------------------------------------
  
  
  
  let parent = $(this).parents('.snip');
  let src = parent.find('img').attr('src');
  let cart = $(document).find('.cart');
  
  let posTop = parent.offset().top;   
  let posLeft = parent.offset().left;
 
  $('<img />', { 
   class: 'animation-fly',
   src: src
}).appendTo('body').css({
    'top': posTop,      
    'left': parseInt(posLeft)
  }); 
  
  setTimeout(function(){
    $(document).find('.animation-fly').css({
      'top': cart.offset().top,
      'left': cart.offset().left
    });
    setTimeout(function(){
      $(document).find('.animation-fly').remove(); 
      let quantity = parseInt(cart.find('#count-item').data('count'))+1;

      cart.find('#count-item').text(quantity + (quantity<2 ?' item':' items')).data('count', quantity);
      
    //add item to cart
    let name = parent.find('h4').text();
    let price = parent.find('.real').text();
    let txt3 = document.createElement("hr");
    let txt4 = document.createElement("hr");
       
    $('.col1-name').append(name,txt3);
    $('.col2-price').append(price,txt4);
    $('.checkout').addClass('add-animation');
    $('.checkout').removeClass('disabled');
    
    $('#bin').addClass('add-animation2');
    $('#bin').removeClass('disabled');
    
    //find total amount
    let price2 = parseFloat(parent.find('.real').data('price')); //get "data-price" from <div class="real">
    bag.push(price2);                                            
    let total = 0;
    $(".total-amount").text(function(){
     for(let i in bag){
      total += bag[i];    //calculate sum of all numbers in the array 
     }
     let last = "R " + total.toFixed(2);
     $('.pay-last').text(last);
     return last;   // return total only 
     
    });
      
      $(document).find('.add-to-cart').removeClass('disable');
    },1000);
  },500);
  
  $('.bin').on('click',function(){     
   $('.col1-name').empty();
   $('.col2-price').empty();
   $('.empty').show();
   $('.checkout').removeClass('add-animation');
   $('#bin').removeClass('add-animation2');
   $('.checkout').addClass('disabled');
   $('#bin').addClass('disabled');
   bag = [];
   $('.total-amount').add('.pay-last').text("R " + bag.length);
   cart.find('#count-item').text(0 + ' item').data('count', 0);
 });
  
});




//bill
//coupon alert
$(document).ready(function(){
  $('#coupon').on('click',function(){
    alert('25% off!')
  });
});
//confirm order alert
$(document).ready(function(){
  $('#end').on('click',function(){
    alert('Your order number: xxxx')
  });
});
//shipping alert
$(document).ready(function(){
  $('#shipping').on('click',function(){
    alert('Add shipping @ an additional R200')
  });
});







/*Hide and show buttons*/
$(document).ready(function(){
  $("button").click(function(){
    $("p").toggle();
  });
});

/*dropdown*/
$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});

/*chain effect*/
$(document).ready(function(){
  $("button").click(function(){
    $("#p1").css("color", "red")
      .slideUp(2000)
      .slideDown(2000);
  });
});

