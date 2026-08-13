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

  router.post('/money-answer-v10', function(request, response) {

    var money = request.session.data['moneyavailable']
    if (money == "yes"){
        response.redirect("/v10/a/money/type")
    } else {
        response.redirect("/v10/a/tasklist")
    }
  }) 

  // Is the claimant using a funeral director?

  router.post('/funeral-director-answer-v10', function(request, response) {

    var director = request.session.data['director']
    if (director == "no"){
        response.redirect("/v10/payee/claimant-bank")
    } else {
        response.redirect("/v10/payee/director-details")
    }
  }) 

  // Who do you want to pay?

  router.post('/who-to-pay-answer-v10', function(request, response) {

    var payee = request.session.data['whotopay']
    if (payee == "claimant"){
        response.redirect("/v10/payee/claimant-bank")
    } else {
        response.redirect("/v10/payee/director-details")
    }
  }) 

    // Make payment now?

    router.post('/make-payment-answer-v10', function(request, response) {

      var payment = request.session.data['makepayment']
      if (payment == "yes"){
          response.redirect("/v10/payment/send-payment")
      } else {
          response.redirect("/v10/tasklist")
      }
    }) 

        // Make payment now?

        router.post('/make-payment-answer-single-v10', function(request, response) {

          var payment = request.session.data['makepayment']
          if (payment == "yes"){
              response.redirect("/v10/payment/single/send-payment")
          } else {
              response.redirect("/v10/tasklist")
          }
        }) 


    // Eligibility filter question

  router.post('/eligibility-filter-v10', function(request, response) {

    var eligible = request.session.data['eligibilefilter']
    if (eligible == "yes"){
        response.redirect("/v10/a/eligibility/relationship")
    } else {
        response.redirect("/v10/a/eligibility/disallow-reason")
    }
  }) 

   // Why are you disallowing this claim?

      router.post('/disallow-reason-v10', function(request, response) {

        var disallow = request.session.data['disallowreason']
        if (disallow == "Claimant is not the responsible person"){
            response.redirect("/v10/a/eligibility/why-not-responsible")


        } else if (disallow == "None of these apply, claimant is eligible") {
        response.redirect("/v10/a/eligibility/relationship")

        } else {
            response.redirect("/v10/a/eligibility/about-to-disallow")
        }
      }) 


    // Registration - Update conact details

            router.post('/check-details-answer-v10', function(request, response) {

              var updatenumber = request.session.data['updatenumber']
              if (updatenumber == "appointee"){
                  response.redirect("/v10/reg/appointee-name")
              } else {
                  response.redirect("/v10/reg/partner")
              }
            })     
      
     // Registration a partner of claimant 

     router.post('/partner-answer-v10', function(request, response) {

      var partner = request.session.data['partner']
      if (partner == "yes"){
          response.redirect("/v10/reg/partner-search")
      } else {
          response.redirect("/v10/reg/deceased-search")
      }
    }) 

      // Registration - is deceased a child?

      router.post('/is-deceased-a-child-v10', function(request, response) {

        var deceasedchild = request.session.data['deceased-a-child']
        if (deceasedchild == "Yes"){
            response.redirect("/v10/reg/child-details")
        } else {
            response.redirect("/v10/reg/deceased-details")
        }
      }) 

}