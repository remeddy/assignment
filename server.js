import { createServer, Model } from 'miragejs'
import { transactionTypes } from './constants/transactionTypes'
export function makeServer ({ environment = 'development' } = {}) {
  const server = createServer({
    environment,

    models: {
      account: Model,
      transaction: Model
    },

    seeds (server) {
      server.create('account', {
        id: 1,
        firstName: 'Ilon',
        lastName: 'Mask',
        phone: '+12482879459',
        email: 'name@email.com',
        logo: 'ilon1.png',
        balance: 560,
        transactions: 3, // counts from Transactions table by user Id
        mainCard: {
          firstName: 'Ilon',
          lastName: 'Mask',
          number: '4111 2345 8799 3478',
          valid: '11/15',
          expiry: '06/23'
        }
      })

      server.create('transaction', {
        id: 1,
        type: transactionTypes.CREDIT,
        description: 'COMPANY 123-123-1234 ZIP CODE UK.',
        balance: -201,
        date: '16.02.2021'
      })

      server.create('transaction', {
        id: 2,
        type: transactionTypes.DEBIT,
        description: 'AppStore 2937927 USA',
        balance: -54,
        date: '21.05.2021',
        fake: true
      })

      server.create('transaction', {
        id: 3,
        type: transactionTypes.DEBIT,
        description: 'Smart Shop UK.',
        balance: -313,
        date: '25.05.2021'
      })

      server.create('transaction', {
        id: 4,
        type: transactionTypes.DEBIT,
        description: 'Spam Transactions UK.',
        balance: -112,
        date: '29.05.2021',
        spam: true
      })

      server.create('transaction', {
        id: 5,
        type: transactionTypes.CREDIT,
        description: 'GameStop LTD.',
        balance: -21,
        date: '16.06.2021'
      })
    },

    routes () {
      this.namespace = 'api'

      this.get('/account/:id', (schema, request) => {
        const id = request.params.id
        const user = schema.accounts.find(id)
        return user.attrs
      })

      this.get('/transactions', (schema) => {
        return schema.transactions.all()
      })

      this.patch('/transactions/:id', function (schema, request) {
        const id = request.params.id
        const attrs = JSON.parse(request.requestBody)

        return schema.transactions.find(id).update(attrs)
      })
    }
  })

  return server
}
