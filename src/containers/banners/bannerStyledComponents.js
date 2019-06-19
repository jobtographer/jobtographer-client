import styled from 'styled-components';

export const GeneralNavBar = styled.section`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid darkorange;
  background-color: #FF9505;
  font-size: 2em;

  img {
    border: solid orange .25rem;
    width: 150px;
    height: auto;
    border-radius: 50%;
    margin-right: 50px;
  }
`;

export const Li1 = styled.li`
  a:hover {
    color: white;
  }
  margin: 1rem;
  margin-left: 50px;
`;

export const Li2 = styled.li`
  margin: 1rem;
  margin-left: 50px;
`;

export const UserNavBar = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  float: left;
  width: 10rem;
  height: 500px;
  margin-top: 2rem;
  border: 2px dashed grey;

  img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    margin-left: 2rem;
    margin-top: 1.5rem;
  }
`;

export const GeneralFooter = styled.footer`
  display: flex;
  position: relative;
  top: 150px;
  width: 100%;
  font-size: 1.25em;
  width: 100vw;
  margin: 2rem;
  padding: 1.25rem;
`;
