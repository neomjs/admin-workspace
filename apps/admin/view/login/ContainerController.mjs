import Component from '../../../../node_modules/neo.mjs/src/controller/Component.mjs';

/**
 * @class Admin.view.login.ContainerController
 * @extends Neo.controller.Component
 */
class ContainerController extends Component {
    static getConfig() {return {
        /**
         * @member {String} className='Admin.view.login.ContainerController'
         * @protected
         */
        className: 'Admin.view.login.ContainerController'
    }}

    /**
     * @param {Object} data
     */
    onSubmitButtonClick(data) {
        let formContainer = this.getReference('form-container');

        formContainer.validate();

        if (formContainer.isValid()) {
            Neo.Main.setRoute({
                value: '/main'
            });
        }
    }
}

Neo.applyClassConfig(ContainerController);

export default ContainerController;
