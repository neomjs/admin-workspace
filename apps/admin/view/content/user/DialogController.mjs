import Component from '../../../../../node_modules/neo.mjs/src/controller/Component.mjs';

/**
 * @class Admin.view.content.user.DialogController
 * @extends Neo.controller.Component
 */
class DialogController extends Component {
    static getConfig() {return {
        /**
         * @member {String} className='Admin.view.content.user.DialogController'
         * @protected
         */
        className: 'Admin.view.content.user.DialogController'
    }}

    /**
     * @param {Object} data
     */
    onSubmitButtonClick(data) {
        let me     = this,
            dialog = me.component,
            form   = me.getReference('user-form');

        dialog.fire('submit', {
            formValues: form.getValues(),
            scope     : dialog
        });
    }
}

Neo.applyClassConfig(DialogController);

export default DialogController;
