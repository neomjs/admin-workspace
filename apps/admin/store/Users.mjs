import Store from '../../../node_modules/neo.mjs/src/data/Store.mjs';
import User  from '../model/User.mjs';

/**
 * @class Admin.store.Users
 * @extends Neo.data.Store
 */
class Users extends Store {
    static getConfig() {return {
        /**
         * @member {String} className='Admin.store.Users'
         * @protected
         */
        className: 'Admin.store.Users',
        /**
         * @member {Neo.data.Model} model=User
         */
        model: User,
        /**
         * @member {Object[]} data
         */
        data: [{
            firstname: 'Kiattipoom',
            id: 'user_1',
            lastname: 'Pensuwan'
        }, {
            firstname: 'Ion',
            id: 'user_2',
            lastname: 'Chircu'
        }, {
            firstname: 'Tobias',
            id: 'user_3',
            lastname: 'Uhlig'
        }]
    }}
}

Neo.applyClassConfig(Users);

export default Users;
