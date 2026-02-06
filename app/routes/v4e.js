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

      // Update conact details

      router.post('/check-details-answer-v4-e', function(request, response) {

        var updatenumber = request.session.data['updatenumber']
        if (updatenumber == "appointee"){
            response.redirect("/v4/e/appointee-name")
        } else {
            response.redirect("/v4/e/partner")
        }
      })     


     // Registering a partner of claimant 

     router.post('/partner-answer-v4-e', function(request, response) {

      var partner = request.session.data['partner']
      if (partner == "yes"){
          response.redirect("/v4/e/partner-search")
      } else {
          response.redirect("/v4/e/deceased-search")
      }
    }) 

}