# 19-awsdeploy-michelle

Deploying is the worst, but if you have to do it you should follow these steps:
1. Set up an AWS account with secret keys and enter those into your .envs and test.envs. Test.env must be outside of any containing folder except __test__
2. Make sure your tests are passing locally
3. Upload all your test.env info to Travis, including the port. Push changes to your staging branch and run that through travis
4. Run it in Travis and monkey around with the code until it is finally working
5. Open up a Heroku account, start a pipeline, make two apps (one for staging, one for production)
6. Link your github account up to Heroku and the two apps
7. Put in the .env vars for your test enviro into heroku, enable the M Labs add on
8. Deploy staging
9. promote staging to production
