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

  router.post('/money-answer-v4', function(request, response) {

    var money = request.session.data['moneyavailable']
    if (money == "yes"){
        response.redirect("/v4/money/type")
    } else {
        response.redirect("/v4/money/cya")
    }
  }) 

  // Is the claimant using a funeral director?

  router.post('/funeral-director-answer-v4', function(request, response) {

    var director = request.session.data['director']
    if (director == "no"){
        response.redirect("/v4/payee/claimant-bank")
    } else {
        response.redirect("/v4/payee/director-details")
    }
  }) 

  // Who do you want to pay?

  router.post('/who-to-pay-answer-v4', function(request, response) {

    var payee = request.session.data['whotopay']
    if (payee == "claimant"){
        response.redirect("/v4/payee/claimant-bank")
    } else {
        response.redirect("/v4/payee/director-bank")
    }
  }) 

    // Make payment now?

    router.post('/make-payment-answer-v4', function(request, response) {

      var payment = request.session.data['makepayment']
      if (payment == "yes"){
          response.redirect("/v4/payment/single/send-payment")
      } else {
          response.redirect("/v4/tasklist-blank")
      }
    }) 

      // Update conact details

      router.post('/check-details-answer-v4', function(request, response) {

        var updatenumber = request.session.data['updatenumber']
        if (updatenumber == "appointee"){
            response.redirect("/v4/appointee-name")
        } else {
            response.redirect("/v4/partner")
        }
      })     


     // Registering a partner of claimant 

     router.post('/partner-answer-v4', function(request, response) {

      var partner = request.session.data['partner']
      if (partner == "yes"){
          response.redirect("/v4/partner-search")
      } else {
          response.redirect("/v4/deceased-search")
      }
    }) 

}