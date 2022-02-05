import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.group(() => {
    Route.on('/login').render('pages/administrator/guest/login').as('administrator.guest.login')
    Route.on('/recovery').render('pages/administrator/guest/recovery').as('administrator.guest.recovery')
    Route.post('/login', 'Dashboard/Administrator/AuthenticatesController.signin').as('administrator.guest.signin')
    Route.post('/recovery', 'Dashboard/Administrator/AuthenticatesController.recoverybyemail').as('administrator.guest.recoverybyemail')
  }).middleware(['guestadmin'])
  
  Route.group(() => {
    Route.get('/home', 'Dashboard/Administrator/ViewersController.home').as('administrator.home')
    Route.get('/signout', 'Dashboard/Administrator/AuthenticatesController.signout').as('administrator.auth.signout')
    Route.get('/tickets', 'Dashboard/Administrator/ViewersController.tickets').as('administrator.tickets')
    Route.get('/faqs', 'Dashboard/Administrator/ViewersController.faqs').as('administrator.faqs')
    Route.get('/users', 'Dashboard/Administrator/ViewersController.users').as('administrator.users')
    Route.get('/clients', 'Dashboard/Administrator/ViewersController.clients').as('administrator.clients')
    
    Route.group(() => {
      Route.get('/user/:id', 'Dashboard/Administrator/UsersController.updateview').as('administrator.user.view.update')
      Route.post('/user/:id', 'Dashboard/Administrator/UsersController.update').as('administrator.user.update')

      Route.get('/client/:id', 'Dashboard/Administrator/ClientsController.updateview').as('administrator.client.view.update')
      Route.post('/client/:id', 'Dashboard/Administrator/ClientsController.update').as('administrator.client.update')

      Route.get('/ticket/:id', 'Dashboard/Administrator/TicketsController.updateview').as('administrator.ticket.view.update')
      Route.post('/ticket/:id', 'Dashboard/Administrator/TicketsController.update').as('administrator.ticket.update')

      Route.get('/faq/:id', 'Dashboard/Administrator/FaqsController.updateview').as('administrator.faq.view.update')
      Route.post('/faq/:id', 'Dashboard/Administrator/FaqsController.update').as('administrator.faq.update')
    }).prefix('update') 

    Route.group(() => {
      Route.get('/user', 'Dashboard/Administrator/UsersController.createview').as('administrator.user.view.create')
      Route.post('/user', 'Dashboard/Administrator/UsersController.create').as('administrator.user.create')

      Route.get('/client', 'Dashboard/Administrator/ClientsController.createview').as('administrator.client.view.create')
      Route.post('/client', 'Dashboard/Administrator/ClientsController.create').as('administrator.client.create')

      Route.get('/ticket', 'Dashboard/Administrator/TicketsController.createview').as('administrator.ticket.view.create')
      Route.post('/ticket', 'Dashboard/Administrator/TicketsController.create').as('administrator.ticket.create')

      Route.get('/faq', 'Dashboard/Administrator/FaqsController.createview').as('administrator.faq.view.create')
      Route.post('/faq', 'Dashboard/Administrator/FaqsController.create').as('administrator.faq.create')
    }).prefix('create')

    Route.group(() => {
      Route.get('/user/:id', 'Dashboard/Administrator/UsersController.delete').as('administrator.user.delete')
      Route.get('/client/:id', 'Dashboard/Administrator/ClientsController.delete').as('administrator.client.delete')
      Route.get('/ticket/:id', 'Dashboard/Administrator/TicketsController.delete').as('administrator.ticket.delete')
      Route.get('/faq/:id', 'Dashboard/Administrator/FaqsController.delete').as('administrator.faq.delete')
    }).prefix('delete')
  }).middleware(['admin'])
}).prefix('administrator')
