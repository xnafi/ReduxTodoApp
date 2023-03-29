import { COLORCHANGED, STATUSCHANGED } from './ActionTypes';
import InitialState from './InitialState'

const Reducer = (state = InitialState, action) => {

    switch (action.type) {
        case STATUSCHANGED:
            return {
                ...state,
                status: action.payload
            }

        case COLORCHANGED:
            const { colour, changeType } = action.payload
            switch (changeType) {
                case 'added':

                    return {
                        ...state,
                        colours: [
                            ...state.colours,
                            colour
                        ]
                    }

                case 'remove':

                    return {
                        ...state,
                        colours: state.colours.filter(exitstingColour => exitstingColour !== colour)
                    }



                default:
                    return state;
            }

        // eslint-disable-next-line no-fallthrough
        default:
            return state;
    }
}
export default Reducer