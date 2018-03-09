/**
 *
 *
 * @export
 * @class Container
 */
export class Container {
    /**
     * Creates an instance of Container.
     * @memberof Container
     */
    constructor() {
        this.alpha = 1.0;
    }
    /**
     *
     *
     * @param {any} alpha
     * @memberof Container
     */
    setBounds(alpha) {
        this.alpha = alpha;
    }
}
