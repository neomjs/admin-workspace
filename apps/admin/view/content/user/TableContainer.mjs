import Container from '../../../../../node_modules/neo.mjs/src/table/Container.mjs';
import UserStore from '../../../store/Users.mjs'

/**
 * @class Admin.view.content.TableContainer
 * @extends Neo.table.Container
 */
class TableContainer extends Container {
    static getConfig() {return {
        /**
         * @member {String} className='Admin.view.content.UserTableContainer'
         * @protected
         */
        className: 'Admin.view.content.UserTableContainer',
        /**
         * @member {String[]} cls=['admin-user-table','neo-table-container']
         */
        cls: ['admin-user-table', 'neo-table-container'],
        /**
         * @member {Object[]} columns
         */
        columns: [{
            dataField: 'id',
            text     : 'Id'
        }, {
            dataField: 'firstname',
            text     : 'Firstname'
        }, {
            dataField: 'lastname',
            text     : 'Lastname'
        }],
        /**
         * @member {Neo.data.Store} store=UserStore
         */
        store: UserStore
    }}
}

Neo.applyClassConfig(TableContainer);

export default TableContainer;
