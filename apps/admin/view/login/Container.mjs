import Base                from '../../../../node_modules/neo.mjs/src/container/Base.mjs';
import Button              from '../../../../node_modules/neo.mjs/src/button/Base.mjs';
import ContainerController from './ContainerController.mjs';
import FormContainer       from '../../../../node_modules/neo.mjs/src/form/Container.mjs';
import Label               from '../../../../node_modules/neo.mjs/src/component/Label.mjs';
import PasswordField       from '../../../../node_modules/neo.mjs/src/form/field/Password.mjs';
import TextField           from '../../../../node_modules/neo.mjs/src/form/field/Text.mjs';

/**
 * @class Admin.view.login.Container
 * @extends Neo.container.Base
 */
class Container extends Base {
    static getConfig() {return {
        /**
         * @member {String} className='Admin.view.login.Container'
         * @protected
         */
        className: 'Admin.view.login.Container',
        /**
         * @member {String[]} cls=['admin-login-container','neo-container']
         */
        cls: ['admin-login-container', 'neo-container'],
        /**
         * @member {Neo.controller.Component} controller=ContainerController
         */
        controller: ContainerController,
        /**
         * @member {Object[]} items
         */
        items: [{
            module   : FormContainer,
            layout   : {ntype: 'vbox', align: 'center', pack: 'center'},
            reference: 'form-container',

            itemDefaults: {
                labelPosition: 'inline',
                required     : true,
                width        : '20vw'
            },
            items: [{
                module: Label,
                text  : 'Login',
                cls: ['login-header', 'neo-label']
            }, {
                module       : TextField,
                name         : 'UserName',
                labelText    : 'Username',
                // @param [silent=true]
                validate     : function() {
                    let regex = /\d/,
                        hasError = regex.test(this.value);

                    this.error = hasError ? 'Dont use Numbers' : null;

                    return !hasError;
                }
            }, {
                module       : PasswordField,
                name         : 'Password',
                labelText    : 'Password',
                minLength    : 4,
                maxLength    : 4
            }]
        }, {
            module : Button,
            handler: 'onSubmitButtonClick',
            text   : 'Submit'
        }],
        /**
         * @member {object} layout={ntype:'vbox',align:'center',pack:'center'}
         */
        layout: {ntype: 'vbox', align: 'center', pack: 'center'}
    }}
}

Neo.applyClassConfig(Container);

export default Container;
