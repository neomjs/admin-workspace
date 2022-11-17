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
            text: '',
            renderer: data => {
                return '<i class="neo-edit fa fa-pencil"></i>';
            }
        }],
        /**
         * @member {Neo.data.Store} store=UserStore
         */
        store: UserStore
    }}

    construct(config) {
        super.construct(config);

        let me    = this,
            scope = me.getController();

        // todo: string based listener does not work

        me.addDomListeners({
            click   : scope.onEditIconClick,
            delegate: '.neo-edit',
            scope
        })
    }
}

Neo.applyClassConfig(TableContainer);

export default TableContainer;
