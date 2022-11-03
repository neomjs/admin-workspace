import Component from '../../../node_modules/neo.mjs/src/controller/Component.mjs';

/**
 * @class Admin.view.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends Component {
    static getConfig() {return {
        /**
         * @member {String} className='Admin.view.MainContainerController'
         * @protected
         */
        className: 'Admin.view.MainContainerController'
    }}

    /**
     * @param {Object} record
     */
    onSideNavItemClick(record) {
        console.log('onSideNavItemClick', record.path);

        let contentContainer = this.getReference('content-container');

        if (contentContainer.items.length > 0) {
            contentContainer.removeAt(0);
        }

        import(`../view/content/${record.path}.mjs`).then(module => {
            console.log(module.default);

            contentContainer.add({
                module: module.default
            });

            contentContainer.layout.activeIndex = 0;
        })
    }
}

Neo.applyClassConfig(MainContainerController);

export default MainContainerController;
