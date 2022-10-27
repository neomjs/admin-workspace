import Model from '../../../node_modules/neo.mjs/src/data/Model.mjs';

/**
 * @class Admin.model.SideNav
 * @extends Neo.data.Model
 */
class SideNav extends Model {
    static getConfig() {return {
        /**
         * @member {String} className='Admin.model.SideNav'
         * @protected
         */
        className: 'Admin.model.SideNav',
        /**
         * @member {Object[]} fields
         */
        fields: [{
            name: 'collapsed', // optional, only needed for collapsed non leaf items
            type: 'Boolean'
        }, {
            name: 'id',
            type: 'Integer'
        }, {
            name: 'isLeaf',
            type: 'Boolean'
        }, {
            name: 'name',
            type: 'String'
        }, {
            name: 'parentId',
            type: 'Integer'
        }, {
            name: 'path',
            type: 'String'
        }]
    }}
}

Neo.applyClassConfig(SideNav);

export default SideNav;
