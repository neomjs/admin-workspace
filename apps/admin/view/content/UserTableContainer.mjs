import Container from '../../../../node_modules/neo.mjs/src/table/Container.mjs';
import UserStore from '../../store/Users.mjs'

/**
 * @class Admin.view.content.UserTableContainer
 * @extends Neo.table.Container
 */
class UserTableContainer extends Container {
    static getConfig() {return {
        /**
         * @member {String} className='Admin.view.content.UserTableContainer'
         * @protected
         */
        className: 'Admin.view.content.UserTableContainer',
        /**
         * @member {Object[]} columns
         */
        columns: [{
            dataField: 'id',
            flex     : 1,
            text     : 'Id'
        }, {
            dataField: 'firstname',
            flex     : 1,
            text     : 'Firstname'
        }, {
            dataField: 'lastname',
            flex     : 1,
            text     : 'Lastname'
        }],
        /**
         * @member {Neo.data.Store} store=UserStore
         */
        store: UserStore
    }}
}

Neo.applyClassConfig(UserTableContainer);

export default UserTableContainer;
