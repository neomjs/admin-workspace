import Base from '../../../../node_modules/neo.mjs/src/component/Label.mjs';

/**
 * @class Admin.view.content.Label2
 * @extends Neo.component.Base
 */
class Label2 extends Base {
    static getConfig() {return {
        /**
         * @member {String} className='Admin.view.content.Label2'
         * @protected
         */
        className: 'Admin.view.content.Label2',
        /**
         * @member {String} text
         */
        text: 'Label 2'
    }}
}

Neo.applyClassConfig(Label2);

export default Label2;
