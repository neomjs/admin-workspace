import SideNavModel from '../model/SideNav.mjs';
import Store        from '../../../node_modules/neo.mjs/src/data/Store.mjs';

/**
 * @class Admin.store.SideNav
 * @extends Neo.data.Store
 */
class SideNav extends Store {
    static getConfig() {return {
        /**
         * @member {String} className='Admin.store.SideNav'
         * @protected
         */
        className: 'Admin.store.SideNav',
        /**
         * @member {Boolean} autoLoad=true
         */
        autoLoad: false,
        /**
         * @member {Neo.data.Model} model=SideNavModel
         */
        model: SideNavModel,
        /**
         * @member {String} url='../../../resources/data/sidenavitems.json'
         */
        url: '../../../resources/data/sidenavitems.json'
    }}
}

Neo.applyClassConfig(SideNav);

export default SideNav;
