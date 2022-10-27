import Base                    from '../../../node_modules/neo.mjs/src/container/Base.mjs';
import ContentContainer        from './ContentContainer.mjs';
import MainContainerController from './MainContainerController.mjs';
import SideNavContainer        from './sidenav/Container.mjs';

/**
 * @class Admin.view.MainContainer
 * @extends Neo.container.Base
 */
class MainContainer extends Base {
    static getConfig() {return {
        /**
         * @member {String} className='Admin.view.MainContainer'
         * @protected
         */
        className: 'Admin.view.MainContainer',
        /**
         * @member {Neo.controller.Component} controller=MainContainerController
         */
        controller: MainContainerController,
        /**
         * @member {Object[]} items
         */
        items: [{
            module: SideNavContainer,
            flex  : 'none',
            width : 150
        }, {
            module   : ContentContainer,
            reference: 'content-container'
        }],
        /**
         * @member {Object} layout
         */
        layout: {ntype: 'hbox', align: 'stretch'}
    }}
}

Neo.applyClassConfig(MainContainer);

export default MainContainer;
