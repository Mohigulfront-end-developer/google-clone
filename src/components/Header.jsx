import { IoApps } from "react-icons/io5";
import { ImLab } from "react-icons/im";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logo from "../../public/assets/google-1-1.svg"
import styled from "styled-components";
import Search from "./Search";

const HomeContainer = styled.div`
   display: flex;
   flex-direction: column;
   height: 100vh;
`;

const HeaderContainer = styled.div`
  padding: 20px 10px;
  color: rgba(60, 64, 67, 0.9);
`;

 const HeaderRight = styled.div`
   display: flex;
   justify-content: right;
   gap: 20px;
   align-items: center;
   font-size: 15px;

   .header-icon {
     width: 20px;
     height: 20px;
   }
   .header-iconAvatar {
     width: 37px;
     height: 37px;
     color: red;
   }
 `;

const BodyContainer = styled.div`
flex: 1;
display: flex;
margin-top: 5%;
flex-direction: column;
img {
  object-fit: contain;
  height: 100px;
  margin-bottom: 5px;
  margin-left: 40%;
}
`;



const Header = () => {
  return (
    <HomeContainer>
      <HeaderContainer>
        <HeaderRight>
          <p>Gmail</p>
          <p>Images</p>
          < ImLab className="header-icon"/>
          <IoApps className="header-icon"/>
          <AccountCircleIcon className="header-iconAvatar"/>
          <p></p>
        </HeaderRight>
      </HeaderContainer>
      <BodyContainer>
        <div className="logo">
          <img src= {Logo} alt=""  style={{width: 300, height: 150}}/>
        </div>
        <div>
          <Search/>
        </div>
      </BodyContainer>
    </HomeContainer>
  );
}

export default Header