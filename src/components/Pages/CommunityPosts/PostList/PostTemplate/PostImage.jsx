import styled, { css } from 'styled-components';
// import PropTypes from 'prop-types';

const PostImageCont = styled('figure')(
  () => css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 1rem 2rem 1rem;
    background-repeat: no-repeat;
    padding: 0 2.5rem 0 3.5rem;
  `
);
const Image = styled('img')(
  () => css`
    max-width: 100%;
    height: auto;
    @media screen and (min-width: 1024px) {
    }
  `
);
// ban solo es una variable para probar los posts que no tengan imagenes del mock
function PostImage({ urlPost }) {
  return (
    <PostImageCont>
      <Image src={urlPost} />
    </PostImageCont>
  );
}

// PostImage.propTypes = {
//   url: PropTypes.string,
// };

// PostImage.defaultProps = {
//   url: null,
// };

export default PostImage;
