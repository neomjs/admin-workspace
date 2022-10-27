import Base from '../../../../node_modules/neo.mjs/src/component/Label.mjs';

/**
 * @class Admin.view.content.Label1
 * @extends Neo.component.Base
 */
class Label1 extends Base {
    static getConfig() {return {
        /**
         * @member {String} className='Admin.view.content.Label1'
         * @protected
         */
        className: 'Admin.view.content.Label1',
        /**
         * @member {String} text
         */
        text: 'Label 1'
    }}
}

Neo.applyClassConfig(Label1);

export default Label1;
