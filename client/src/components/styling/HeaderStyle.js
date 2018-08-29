import { Row } from 'simple-flexbox';
import styled from "styled-components"
import img from '../../img/coffee.JPG';

export default styled(Row)`
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

`