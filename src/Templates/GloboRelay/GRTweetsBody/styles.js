import styled, { keyframes } from 'styled-components'
import Colors from '../../../Components/Colors'
import Container from '../../../Components/Grid'

export default styled(Container)`
    :hover {
        border-radius: 3px;
        background-color: ${Colors["Pink-50"]};
        * {
            cursor: pointer;
        }
    }
`

export const DropZone = styled.div`
    background-color: rgba(255,255,255, 0.9);

    position: absolute;
    width: 100%;
    height: 100%;
`
