import Component from '../../../../../node_modules/neo.mjs/src/controller/Component.mjs';

/**
 * @class Admin.view.content.user.ContainerController
 * @extends Neo.controller.Component
 */
class ContainerController extends Component {
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
        console.log('onCreateUserButtonClick', data);
    }
}

Neo.applyClassConfig(ContainerController);

export default ContainerController;
