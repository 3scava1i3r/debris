import styled from 'styled-components';
import Navbar from '../Components/Navbar';

const Title = styled.h1`
  font-size: "20px";
  text-align: center;
`;

const Main = styled.h1`
font-size: 1.5rem;
`;

const ClickMe = styled.button`
  

`;




const dashboard = () => {


    return (
      <div>
        <Navbar />
        <Title>hahaha</Title>
        <Main>Click here for a random spaceship shell</Main>
        <ClickMe>Let's check you luck! muhawahhaah</ClickMe>

      </div>
    );

    
}

export default dashboard;