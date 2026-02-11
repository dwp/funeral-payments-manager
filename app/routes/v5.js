module.exports = function (router) {

// GENERIC NEXT PAGE ELEMENT
// router.post('*', function (req, res, next) {
//   console.log(req.body);
//   if (req.body['next-page']) {
//     res.redirect(req.body['next-page']);
//   } else {
//     next();
//   }
// });

// Is there any money to help pay for the funeral?

  router.post('/money-answer-v5', function(request, response) {

    var money = request.session.data['moneyavailable']
    if (money == "yes"){
        response.redirect("/v5/money/type")
    } else {
        response.redirect("/v5/tasklist-blank")
    }
  }) 

  // Is the claimant using a funeral director?

  router.post('/funeral-director-answer-v5', function(request, response) {

    var director = request.session.data['director']
    if (director == "no"){
        response.redirect("/v5/payee/claimant-bank")
    } else {
        response.redirect("/v5/payee/director-details")
    }
  }) 

  // Who do you want to pay?

  router.post('/who-to-pay-answer-v5', function(request, response) {

    var payee = request.session.data['whotopay']
    if (payee == "claimant"){
        response.redirect("/v5/payee/claimant-bank")
    } else {
        response.redirect("/v5/payee/director-details")
    }
  }) 

    // Make payment now?

    router.post('/make-payment-answer-v5', function(request, response) {

      var payment = request.session.data['makepayment']
      if (payment == "yes"){
          response.redirect("/v5/payment/send-payment")
      } else {
          response.redirect("/v5/tasklist-blank")
      }
    }) 

        // Make payment now?

        router.post('/make-payment-answer-single-v5', function(request, response) {

          var payment = request.session.data['makepayment']
          if (payment == "yes"){
              response.redirect("/v5/payment/single/send-payment")
          } else {
              response.redirect("/v5/tasklist-blank")
          }
        }) 

}