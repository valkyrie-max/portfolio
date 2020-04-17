const myPortfolio = {}; 


// init
myPortfolio.init = function() {
    // to do things
}

// doc ready
$(function(){
    // animate elements on page load
    $(`.headerWrapper`).hide().addClass(`animated fadeInDown`).fadeIn(100);

    myPortfolio.init();
});