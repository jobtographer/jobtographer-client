import styled from 'styled-components';
import white1 from '../../../assets/white.png';
import white2 from '../../../assets/white.jpg';
import orange1 from '../../../assets/orange1.jpg';

export const GeneralNavBar = styled.section`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2em;
  color: white;

   a {
    font-family: 'Coda Caption', sans-serif;
    position: absolute;
    top: 2rem;
    left: 3.1rem;
    color: white;
    text-shadow: 2px 2px 4px #000000;
    font-size: 1.1em;
    text-decoration: none;
    
  }

  img {
    width: 150px;
    height: auto;
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    margin-right: 0rem;
  }
`;

export const WhiteBackground = styled.div`
  background-image: url(${white1});
  background-size: cover;
  background-repeat: no-repeat;
  width: 25vw;
  height: 25%;
  transform: rotate(35deg) translate(-5rem);

  margin: 0;
  padding: 0;
  position: absolute;
  z-index: -105;
`;
export const Splatter = styled.div`
  background-image: url(${white2});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;

  margin: 0;
  padding: 0;
  position: absolute;
  z-index: -110;
`;

export const Li1 = styled.p`
  p {
    color: white;
  }
  a:hover {
    color: white;
  }
  `;

export const UserNavBar = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  background: black;
  clip-path: polygon(0% 0%, 100% 20%, 100% 100%, 0% 100%);
  width: 4rem;
  height: 60vh;

  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 100%;
    margin-top: 6rem;
  }
  a {
    color: white;
    margin-bottom: 1rem;
    text-decoration: none;
    transition: .7s;
    :hover { 
      color: orange; 
    }
  }
`;

export const FooterImage = styled.footer`
  background-image: url(${orange1});
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  top: 0;
  right: 0;
  z-index: -1;
  clip-path: polygon(100% 0, 0 0, 100% 100%);
  width: 16rem;
  height: 16rem;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  position: fixed;
  bottom: 0;
  font-size: 1.25em;
  width: 100vw;
  height: .45rem;
  a {
    font-family: 'Sorts Mill Goudy', serif;
    text-decoration: none;
    color: black;
    margin: 0rem .5rem 0.1rem .5rem;
  }
`;
