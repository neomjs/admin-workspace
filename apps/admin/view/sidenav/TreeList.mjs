import BaseTreeList from '../../../../node_modules/neo.mjs/src/tree/List.mjs';
import SideNavStore from '../../store/SideNav.mjs';

/**
 * @class Admin.view.sidenav.TreeList
 * @extends Neo.tree.List
 */
class TreeList extends BaseTreeList {
    static getConfig() {return {
        /**
         * @member {String} className='Admin.view.sidenav.TreeList'
         * @protected
         */
        className: 'Admin.view.sidenav.TreeList',
        /**
         * @member {Boolean} showCollapseExpandAllIcons=false
         */
        showCollapseExpandAllIcons: false,
        /**
         * @member {Neo.data.Store} store=SideNavStore
         */
        store: SideNavStore
    }}

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        Neo.Xhr.promiseJson({
            url: '../../../resources/data/sidenavitems.json'
        }).then(data => {
            me.store.data = data.json;
            me.createItems(null, me.getListItemsRoot(), 0);
            me.update();
        });
    }

    /**
     * @param {Boolean} value
     * @param {Boolean} oldValue
     */
    afterSetMounted(value, oldValue) {
        super.afterSetMounted(value, oldValue);

        if (value) {
            console.log(this.store);
            console.log(this.getVdomRoot());
            // this.update();
        }
    }
}

Neo.applyClassConfig(TreeList);

export default TreeList;
