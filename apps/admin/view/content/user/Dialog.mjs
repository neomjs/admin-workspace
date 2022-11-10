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
        headerConfig: {
            flex: 'none' // todo: framework level
        },
        /**
         * @member {Neo.controller.Component} controller=DialogController
         */
        controller: DialogController,
        /**
         * @member {Object[]} items
         */
        items: [{
            module   : FormContainer,
            flex     : 1,
            reference: 'user-form',
            style    : {padding: 0},

            itemDefaults: {
                flex: 'none'
            },

            items: [{
                module   : TextField,
                labelText: 'Firstname',
                name     : 'firstname'
            }, {
                module   : TextField,
                labelText: 'Lastname',
                name     : 'lastname'
            }]
        }, {
            module : Button,
            flex   : 'none',
            handler: 'onSubmitButtonClick',
            style  : {marginTop: 'auto'},
            text   : 'Submit'
        }],
        /**
         * @member {Object} layout
         */
        layout: {ntype: 'vbox', align: 'stretch'}
    }}
}

Neo.applyClassConfig(Dialog);

export default Dialog;
