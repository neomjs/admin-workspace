import Component from '../../../../../node_modules/neo.mjs/src/controller/Component.mjs';

/**
 * @class Admin.view.content.user.ContainerController
 * @extends Neo.controller.Component
 */
class ContainerController extends Component {
    /**
     * @member {Admin.view.content.user.Dialog|null} dialog=null
     */
    dialog = null

    static getConfig() {return {
        /**
         * @member {String} className='Admin.view.content.user.ContainerController'
         * @protected
         */
        className: 'Admin.view.content.user.ContainerController'
    }}

    /**
     * @param {Object} data
     */
    onCreateUserButtonClick(data) {
        let me     = this,
            button = data.component;

        if (!me.dialog) {
            import('./Dialog.mjs').then(module => {
                me.dialog = Neo.create({
                    module         : module.default,
                    animateTargetId: button.id,
                    appName        : button.appName,
                    closeAction    : 'hide',
                    height         : 400,
                    width          : 300,

                    listeners: {
                        submit: me.onUserFormSubmit.bind(me)
                    }
                });
            });
        } else {
            me.dialog.show();
        }
    }

    /**
     * @param {Object} data
     */
    onUserFormSubmit(data) {
        this.getReference('user-table').store.add({
            firstname: data.firstname,
            id       : 'user_4', // todo: dynamic ids
            lastname : data.lastname
        });
    }
}

Neo.applyClassConfig(ContainerController);

export default ContainerController;
