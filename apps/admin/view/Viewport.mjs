import BaseViewport       from '../../../node_modules/neo.mjs/src/container/Viewport.mjs';
import HeaderContainer    from './HeaderContainer.mjs';
import MainContainer      from './MainContainer.mjs';
import ViewportController from './ViewportController.mjs';

/**
 * @class Admin.view.Viewport
 * @extends Neo.container.Viewport
 */
class Viewport extends BaseViewport {
    static getConfig() {return {
        /**
         * @member {String} className='Admin.view.Viewport'
         * @protected
         */
        className: 'Admin.view.Viewport',
        /**
         * @member {Boolean} autoMount=true
         */
        autoMount: true,
        /**
         * @member {Neo.controller.Component} controller=ViewportController
         */
        controller: ViewportController,
        /**
         * @member {Object[]} items
         */
        items: [{
            module: HeaderContainer,
            flex  : 'none'
        }, {
            module: MainContainer
        }]
    }}
}

Neo.applyClassConfig(Viewport);

export default Viewport;
