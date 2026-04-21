module.exports = function (router) {

// GENERIC NEXT PAGE ELEMENT
router.post('*', function (req, res, next) {
  console.log(req.body);
  if (req.body['next-page']) {
    res.redirect(req.body['next-page']);
  } else {
    next();
  }
});

// Is there any money to help pay for the funeral?

  router.post('/money-answer-v7', function(request, response) {

    var money = request.session.data['moneyavailable']
    if (money == "yes"){
        response.redirect("/v7/money/type")
    } else {
        response.redirect("/v7/tasklist")
    }
  }) 

  // Is the claimant using a funeral director?

  router.post('/funeral-director-answer-v7', function(request, response) {

    var director = request.session.data['director']
    if (director == "no"){
        response.redirect("/v7/payee/claimant-bank")
    } else {
        response.redirect("/v7/payee/director-details")
    }
  }) 

  // Who do you want to pay?

  router.post('/who-to-pay-answer-v7', function(request, response) {

    var payee = request.session.data['whotopay']
    if (payee == "claimant"){
        response.redirect("/v7/payee/claimant-bank")
    } else {
        response.redirect("/v7/payee/director-details")
    }
  }) 

    // Make payment now?

    router.post('/make-payment-answer-v7', function(request, response) {

      var payment = request.session.data['makepayment']
      if (payment == "yes"){
          response.redirect("/v7/payment/send-payment")
      } else {
          response.redirect("/v7/tasklist")
      }
    }) 

        // Make payment now?

        router.post('/make-payment-answer-single-v7', function(request, response) {

          var payment = request.session.data['makepayment']
          if (payment == "yes"){
              response.redirect("/v7/payment/single/send-payment")
          } else {
              response.redirect("/v7/tasklist")
          }
        }) 


    // Eligibility filter question

  router.post('/eligibility-filter-v7', function(request, response) {

    var eligible = request.session.data['eligibilefilter']
    if (eligible == "yes"){
        response.redirect("/v7/eligibility/relationship")
    } else {
        response.redirect("/v7/eligibility/disallow-reason")
    }
  }) 

   // Why are you disallowing this claim?

      router.post('/disallow-reason-v7', function(request, response) {

        var disallow = request.session.data['disallowreason']
        if (disallow == "Claimant is not the responsible person"){
            response.redirect("/v7/eligibility/why-not-responsible")


        } else if (disallow == "None of these apply, claimant is eligible") {
        response.redirect("/v7/eligibility/relationship")

        } else {
            response.redirect("/v7/eligibility/about-to-disallow")
        }
      }) 


    // Registration - Update conact details

            router.post('/check-details-answer-v7', function(request, response) {

              var updatenumber = request.session.data['updatenumber']
              if (updatenumber == "appointee"){
                  response.redirect("/v7/reg/appointee-name")
              } else {
                  response.redirect("/v7/reg/partner")
              }
            })     
      
     // Registration a partner of claimant 

     router.post('/partner-answer-v7', function(request, response) {

      var partner = request.session.data['partner']
      if (partner == "yes"){
          response.redirect("/v7/reg/partner-search")
      } else {
          response.redirect("/v7/reg/deceased-search")
      }
    }) 

      // Registration - is deceased a child?

      router.post('/is-deceased-a-child-v7', function(request, response) {

        var deceasedchild = request.session.data['deceased-a-child']
        if (deceasedchild == "Yes"){
            response.redirect("/v7/reg/child-details")
        } else {
            response.redirect("/v7/reg/deceased-details")
        }
      }) 

        // Deceased task - Are you able to find deceased Nino?

            router.post('/trace-nino-answer-v7', function(request, response) {

              var tracenino = request.session.data['trace-nino']
              if (tracenino == "No"){
                  response.redirect("/v7/deceased/why-not-available")
              } else {
                  response.redirect("/v7/deceased/search")
              }
            }) 

                    // Deceased task - Are you able to find deceased Nino?

                    router.post('/trace-nino-answer-v7-c', function(request, response) {

                      var tracenino = request.session.data['trace-nino']
                      if (tracenino == "No"){
                          response.redirect("/v7/c/deceased/why-not-available")
                      } else {
                          response.redirect("/v7/c/deceased/search")
                      }
                    }) 

}