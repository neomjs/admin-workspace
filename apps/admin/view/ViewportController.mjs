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
            themeLight = button.text === 'Theme Light',
            buttonText, iconCls, oldTheme, theme;

        if (themeLight) {
            buttonText = 'Theme Dark';
            iconCls    = 'fa fa-moon';
            oldTheme   = 'neo-theme-dark';
            theme      = 'neo-theme-light';
        } else {
            buttonText = 'Theme Light';
            iconCls    = 'fa fa-sun';
            oldTheme   = 'neo-theme-light';
            theme      = 'neo-theme-dark';
        }

        Neo.applyDeltas(me.appName, {
            cls: {
                add   : [theme],
                remove: [oldTheme]
            }
        });

        button.set({
            iconCls,
            text: buttonText
        });
    }
}

Neo.applyClassConfig(ViewportController);

export default ViewportController;
