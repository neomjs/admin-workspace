import Base   from '../../../node_modules/neo.mjs/src/container/Base.mjs';
import Label from '../../../node_modules/neo.mjs/src/component/Label.mjs';

/**
 * @class Admin.view.HeaderContainer
 * @extends Neo.container.Base
 */
class HeaderContainer extends Base {
    static getConfig() {return {
        /**
         * @member {String} className='Admin.view.HeaderContainer'
         * @protected
         */
        className: 'Admin.view.HeaderContainer',
        /**
         * @member {String[]} cls=['admin-headercontainer','neo-container']
         */
        cls: ['admin-headercontainer', 'neo-container'],
        /**
         * @member {Object[]} items
         */
        items: [{
            module: Label,
            text  : 'Header'
        }]
    }}
}

Neo.applyClassConfig(HeaderContainer);

export default HeaderContainer;
