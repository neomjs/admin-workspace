import Button  from '../../../node_modules/neo.mjs/src/button/Base.mjs';
import Label   from '../../../node_modules/neo.mjs/src/component/Label.mjs';
import Toolbar from '../../../node_modules/neo.mjs/src/toolbar/Base.mjs';

/**
 * @class Admin.view.HeaderContainer
 * @extends Neo.toolbar.Base
 */
class HeaderContainer extends Toolbar {
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
        }, '->', {
            module : Button,
            handler: 'onSwitchThemeButtonClick',
            iconCls: 'fa fa-moon',
            text   : 'Dark Theme'
        }]
    }}
}

Neo.applyClassConfig(HeaderContainer);

export default HeaderContainer;
