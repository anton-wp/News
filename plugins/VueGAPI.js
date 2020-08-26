import Vue from 'vue'
import GAuth from 'vue-google-oauth2'

const gauthOption = {
    clientId: '503606903762-g8h7qf5t7pq6t0ekivpbb19idqe9trpr.apps.googleusercontent.com',
    scope: 'profile email',
    prompt: 'select_account'
}
console.log('gauthOption', gauthOption)
Vue.use(GAuth, gauthOption)