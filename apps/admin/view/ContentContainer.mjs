import Base from '../../../node_modules/neo.mjs/src/container/Base.mjs';

/**
 * @class Admin.view.ContentContainer
 * @extends Neo.container.Base
 */
class ContentContainer extends Base {
    static getConfig() {return {
        /**
         * @member {String} className='Admin.view.ContentContainer'
         * @protected
         */
        className: 'Admin.view.ContentContainer',
        /**
         * @member {Object[]} items
         */
        items: [],
        /**
         * @member {Object} layout
         */
        layout: {ntype: 'card', activeIndex: null}
    }}
}

Neo.applyClassConfig(ContentContainer);

export default ContentContainer;
