import {CustomLinkMixin} from './custom-link'
import {DispatchEventMixin} from './dispatch-event'

export const CustomButtonPropMixin = {
    props: {
        disabled: Boolean,
        href: String,
        to: [String, Object],
        exact: Boolean,
        append: Boolean,
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        event: String,
        eventTarget: Object,
        eventArgs: Array,
    }        
}




export const CustomButton = {
    mixins: [CustomLinkMixin, DispatchEventMixin],

}




