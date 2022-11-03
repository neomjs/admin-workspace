import Model from '../../../node_modules/neo.mjs/src/data/Model.mjs';

/**
 * @class Admin.model.User
 * @extends Neo.data.Model
 */
class User extends Model {
    static getConfig() {return {
        /**
         * @member {String} className='Admin.model.User'
         * @protected
         */
        className: 'Admin.model.User',
        /**
         * @member {Object[]} fields
         */
        fields: [{
            name: 'firstname',
            type: 'String'
        }, {
            name: 'id',
            type: 'String'
        }, {
            name: 'lastname',
            type: 'String'
        }]
    }}
}

Neo.applyClassConfig(User);

export default User;
