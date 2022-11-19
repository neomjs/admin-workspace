import Container from '../../../../../node_modules/neo.mjs/src/table/Container.mjs';
import UserStore from '../../../store/Users.mjs'

/**
 * @class Admin.view.content.user.TableContainer
 * @extends Neo.table.Container
 */
class TableContainer extends Container {
    static getConfig() {return {
        /**
         * @member {String} className='Admin.view.content.user.TableContainer'
         * @protected
         */
        className: 'Admin.view.content.user.TableContainer',
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
        }, {
            renderer: 'renderEditAction'
        }],
        /**
         * @member {Object[]} domListeners
         */
        domListeners: [{
            click   : 'onEditIconClick',
            delegate: '.neo-edit'
        }],
        /**
         * @member {Neo.data.Store} store=UserStore
         */
        store: UserStore
    }}

    /**
     * @param {Object} data
     * @returns {String}
     */
    renderEditAction(data) {
        return `<i class="neo-edit fa fa-pencil" id="${this.id}__${data.record.id}__editAction"></i>`;
    }
}

Neo.applyClassConfig(TableContainer);

export default TableContainer;
