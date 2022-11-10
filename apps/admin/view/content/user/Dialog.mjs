import Base from '../../../../../node_modules/neo.mjs/src/dialog/Base.mjs';

/**
 * @class Admin.view.content.user.Dialog
 * @extends Neo.dialog.Base
 */
class Dialog extends Base {
    static getConfig() {return {
        /**
         * @member {String} className='Admin.view.content.user.Dialog'
         * @protected
         */
        className: 'Admin.view.content.user.Dialog',
        /**
         * @member {Object[]} items
         */
        items: []
    }}
}

Neo.applyClassConfig(Dialog);

export default Dialog;
