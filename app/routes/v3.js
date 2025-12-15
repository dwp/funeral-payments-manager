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

  router.post('/money-answer-v3', function(request, response) {

    var money = request.session.data['moneyavailable']
    if (money == "yes"){
        response.redirect("/v3/money/type")
    } else {
        response.redirect("/v3/money/cya")
    }
  }) 

  // Is the claimant using a funeral director?

  router.post('/funeral-director-answer-v3', function(request, response) {

    var director = request.session.data['director']
    if (director == "no"){
        response.redirect("/v3/payee/claimant-bank")
    } else {
        response.redirect("/v3/payee/director-details")
    }
  }) 

  // Who do you want to pay?

  router.post('/who-to-pay-answer-v3', function(request, response) {

    var payee = request.session.data['whotopay']
    if (payee == "claimant"){
        response.redirect("/v3/payee/claimant-bank")
    } else {
        response.redirect("/v3/payee/director-bank")
    }
  }) 

    // Make payment now?

    router.post('/make-payment-answer-v3', function(request, response) {

      var payment = request.session.data['makepayment']
      if (payment == "yes"){
          response.redirect("/v3/payment/single/send-payment")
      } else {
          response.redirect("/v3/tasklist-blank")
      }
    }) 

}