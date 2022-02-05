import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.group(() => {
    Route.get('/home', 'Dashboard/ViewersController.home').as('auth.home')
    Route.get('/logout', 'Dashboard/AuthenticatesController.signout').as('auth.signout')
  }).middleware(['clientauth'])
  
  Route.group(() => {
    Route.on('/login').render('pages/dashboard/guest/login').as('client.guest.login')
    Route.on('/register').render('pages/dashboard/guest/register').as('client.guest.register')
    Route.on('/recovery').render('pages/dashboard/guest/recovery').as('client.guest.recovery')
  
    Route.post('/login', 'Dashboard/AuthenticatesController.signin').as('client.guest.signin')
    Route.post('/register', 'Dashboard/AuthenticatesController.signup').as('client.guest.signup')
    Route.post('/recovery', 'Dashboard/AuthenticatesController.recoverybyemail').as('client.guest.recoverybyemail')
  }).middleware(['guest'])
}).prefix('client')