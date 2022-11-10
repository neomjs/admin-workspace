import Base                from '../../../../../node_modules/neo.mjs/src/container/Base.mjs';
import ContainerController from './ContainerController.mjs';
import Toolbar             from '../../../../../node_modules/neo.mjs/src/toolbar/Base.mjs';
import TableContainer      from './TableContainer.mjs'

/**
 * @class Admin.view.content.user.Container
 * @extends Neo.container.Base
 */
class Container extends Base {
    static getConfig() {return {
        /**
         * @member {String} className='Admin.view.content.user.Container'
         * @protected
         */
        className: 'Admin.view.content.user.Container',
        /**
         * @member {Neo.controller.Component} controller=ContainerController
         */
        controller: ContainerController,
        /**
         * @member {Object[]} items
         */
        items: [{
            module: Toolbar,
            flex  : 'none',
            items : ['->', {
                handler: 'onCreateUserButtonClick',
                text   : 'Create User'
            }]
        }, {
            module   : TableContainer,
            reference: 'user-table'
        }]
    }}
}

Neo.applyClassConfig(Container);

export default Container;
