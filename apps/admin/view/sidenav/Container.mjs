import Base     from '../../../../node_modules/neo.mjs/src/container/Base.mjs';
import TreeList from './TreeList.mjs';

/**
 * @class Admin.view.sidenav.Container
 * @extends Neo.container.Base
 */
class Container extends Base {
    static getConfig() {return {
        /**
         * @member {String} className='Admin.view.sidenav.Container'
         * @protected
         */
        className: 'Admin.view.sidenav.Container',
        /**
         * @member {Object[]} items
         */
        items: [{
            module   : TreeList,
            listeners: {
                leafItemClick: 'onSideNavItemClick'
            }
        }],
        /**
         * @member {Object} layout={ntype:'fit'}
         */
        layout: {ntype: 'fit'}
    }}
}

Neo.applyClassConfig(Container);

export default Container;
