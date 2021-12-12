import styled, {css} from "styled-components";
import PropTypes from "prop-types";

const PostImageCont = styled('figure')(
  ({url})=> css`
    display: flex;    
    justify-content: center;
    align-items: center;
    margin: 1rem 1rem 2rem 1rem;
    background-repeat: no-repeat;
    padding: 0 2.5rem 0 3.5rem;

  `);
const Image = styled('img')(
  ()=> css`
    max-width: 100%;
    height: auto;  
    @media screen and (min-width: 1024px) {    
  }   
  `);
  //ban solo es una variable para probar los posts que no tengan imagenes del mock
export const PostImage = ({urlPost,ban}) =>(
  <PostImageCont> 
      <Image src = { ban%2 === 1 ? urlPost: null}/>  
  </PostImageCont>
);

PostImage.propTypes = {
  url: PropTypes.string
};

PostImage.defaultProps = {
  url: null
};
