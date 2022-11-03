import Component from '../../../node_modules/neo.mjs/src/controller/Component.mjs';
import NeoArray  from '../../../node_modules/neo.mjs/src/util/Array.mjs';

/**
 * @class Admin.view.ViewportController
 * @extends Neo.controller.Component
 */
class ViewportController extends Component {
    static getConfig() {return {
        /**
         * @member {String} className='Admin.view.ViewportController'
         * @protected
         */
        className: 'Admin.view.ViewportController'
    }}

    /**
     * @param {Object} data
     */
    onSwitchThemeButtonClick(data) {
        let me         = this,
            button     = data.component,
            viewport   = me.component,
            themeLight = button.text === 'Theme Light',
            buttonText, cls, iconCls, theme;

        if (themeLight) {
            buttonText = 'Theme Dark';
            iconCls    = 'fa fa-moon';
            theme      = 'neo-theme-light';
        } else {
            buttonText = 'Theme Light';
            iconCls    = 'fa fa-sun';
            theme      = 'neo-theme-dark';
        }

        cls = [...viewport.cls];

        viewport.cls.forEach(item => {
            if (item.includes('neo-theme')) {
                NeoArray.remove(cls, item);
            }
        });

        NeoArray.add(cls, theme);
        viewport.cls = cls;

        button.set({
            iconCls,
            text: buttonText
        });
    }
}

Neo.applyClassConfig(ViewportController);

export default ViewportController;
