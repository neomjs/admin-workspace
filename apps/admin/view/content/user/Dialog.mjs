import Base             from '../../../../../node_modules/neo.mjs/src/dialog/Base.mjs';
import Button           from '../../../../../node_modules/neo.mjs/src/button/Base.mjs';
import DialogController from './DialogController.mjs';
import FormContainer    from '../../../../../node_modules/neo.mjs/src/form/Container.mjs';
import TextField        from '../../../../../node_modules/neo.mjs/src/form/field/Text.mjs';

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
         * @member {Object} containerConfig
         */
        containerConfig: {
            style: {
                padding: '1em'
            }
        },
        /**
         * @member {Neo.controller.Component} controller=DialogController
         */
        controller: DialogController,
        /**
         * @member {Object[]} items
         */
        items: [{
            module      : FormContainer,
            flex        : 1,
            itemDefaults: {flex: 'none'},
            reference   : 'user-form',
            style       : {padding: 0},

            items: [{
                module   : TextField,
                labelText: 'Firstname',
                name     : 'firstname',
                value    : '@config:record.lastname'
            }, {
                module   : TextField,
                labelText: 'Lastname',
                name     : 'lastname',
                value    : '@config:record.lastname'
            }]
        }, {
            module : Button,
            flex   : 'none',
            handler: 'onSubmitButtonClick',
            style  : {marginTop: 'auto'},
            text   : 'Submit'
        }],
        /**
         * @member {Object} record_=null
         */
        record_: null
    }}

    /**
     * Triggered after the record config got changed
     * @param {Object} value
     * @param {Object} oldValue
     * @protected
     */
    afterSetRecord(value, oldValue) {
        oldValue && this.down({reference: 'user-form'}).setValues(value)
    }
}

Neo.applyClassConfig(Dialog);

export default Dialog;
