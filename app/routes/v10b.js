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

  router.post('/money-answer-v10b', function(request, response) {

    var money = request.session.data['moneyavailable']
    if (money == "yes"){
        response.redirect("/v10/b/money/type")
    } else {
        response.redirect("/v10/b/tasklist")
    }
  }) 

  // Is the claimant using a funeral director?

  router.post('/funeral-director-answer-v10b', function(request, response) {

    var director = request.session.data['director']
    if (director == "no"){
        response.redirect("/v10/b/payee/claimant-bank")
    } else {
        response.redirect("/v10/b/payee/director-details")
    }
  }) 

  // Who do you want to pay?

  router.post('/who-to-pay-answer-v10b', function(request, response) {

    var payee = request.session.data['whotopay']
    if (payee == "claimant"){
        response.redirect("/v10/b/payee/claimant-bank")
    } else {
        response.redirect("/v10/b/payee/director-details")
    }
  }) 

    // Make payment now?

    router.post('/make-payment-answer-v10b', function(request, response) {

      var payment = request.session.data['makepayment']
      if (payment == "yes"){
          response.redirect("/v10/b/payment/send-payment")
      } else {
          response.redirect("/v10/b/tasklist")
      }
    }) 

        // Make payment now?

        router.post('/make-payment-answer-single-v10b', function(request, response) {

          var payment = request.session.data['makepayment']
          if (payment == "yes"){
              response.redirect("/v10/b/payment/single/send-payment")
          } else {
              response.redirect("/v10/b/tasklist")
          }
        }) 


    // Eligibility filter question

  router.post('/eligibility-filter-v10b', function(request, response) {

    var eligible = request.session.data['eligibilefilter']
    if (eligible == "yes"){
        response.redirect("/v10/b/eligibility/relationship")
    } else {
        response.redirect("/v10/b/eligibility/disallow-reason")
    }
  }) 

   // Why are you disallowing this claim?

      router.post('/disallow-reason-v10b', function(request, response) {

        var disallow = request.session.data['disallowreason']
        if (disallow == "Claimant is not the responsible person"){
            response.redirect("/v10/b/eligibility/why-not-responsible")


        } else if (disallow == "None of these apply, claimant is eligible") {
        response.redirect("/v10/b/eligibility/relationship")

        } else {
            response.redirect("/v10/b/eligibility/about-to-disallow")
        }
      }) 


    // Registration - Update conact details

            router.post('/check-details-answer-v10b', function(request, response) {

              var updatenumber = request.session.data['updatenumber']
              if (updatenumber == "appointee"){
                  response.redirect("/v10/b/reg/appointee-name")
              } else {
                  response.redirect("/v10/b/reg/partner")
              }
            })     
      
     // Registration a partner of claimant 

     router.post('/partner-answer-v10b', function(request, response) {

      var partner = request.session.data['partner']
      if (partner == "yes"){
          response.redirect("/v10/b/reg/partner-search")
      } else {
          response.redirect("/v10/b/reg/deceased-search")
      }
    }) 

      // Registration - is deceased a child?

      router.post('/is-deceased-a-child-v10b', function(request, response) {

        var deceasedchild = request.session.data['deceased-a-child']
        if (deceasedchild == "Yes"){
            response.redirect("/v10/b/reg/child-details")
        } else {
            response.redirect("/v10/b/reg/deceased-details")
        }
      }) 

}