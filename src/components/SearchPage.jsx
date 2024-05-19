import Logo from "../../public/assets/google-1-1.svg";
import { Link } from "react-router-dom";
import Search from "./Search";
import SearchIcon from "@mui/icons-material/Search";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoImageSharp } from "react-icons/io5";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { IoVideocam } from "react-icons/io5";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import styled from "styled-components";
import { useStateValue } from "react";
import useGoogle from "../useGoogle";

const SearchPageHeader = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: white;
  align-items: flex-start;
  padding: 30px;
  border-bottom: 1px solid lightgray;
  img {
    height: 50px;
    margin-right: 50px;
  }
`;

const SearchPageOptions = styled.div`
  display: flex;
  align-items: center;
  color: gray;
  margin-top: 30px;
  a {
    text-decoration: none;
    color: gray;
    margin-left: 5px;
  }
`;

const Options = styled.div`
  margin-left: ${(props) => (props.right ? "80px" : "0px")};
  display: flex;
  align-items: center;
`;

const SearchPageOption = styled.div`
  display: flex;
  align-items: center;
  margin-rigth: 20px;
`;

const SearchPageResults = styled.div`
  max-width: 650px;
  margin-top: 20px;
  margin-left: 240px;
  margin-bottom: 100px;
  .resultCount {
    color: #70757a;
    font-size: 14px;
  }
  .result {
    margin: 40px 0px;
  }
`;

const SearchPageLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  margin-bottom: 3px;
  img {
    height: 50px;
    width: 50px;
    object-fit: contain;
    margin-left: 10px;
  }
`;

const SearchPageResultTitle = styled.a`
  text-decoration: none;
  h2 {
    font-weight: 500;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const SearchPageResultDesc = styled.div``;

const SearchPage = () => {
  const [{ term }] = useStateValue();
  const { data } = useGoogle(term);
  console.log(data);
  return (
    <div>
      <SearchPageHeader>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <div>
          <Search hide />
          <SearchPageOptions>
            <Options>
              <SearchPageOption>
                <SearchIcon />
                <Link to="/">All</Link>
              </SearchPageOption>
              <SearchPageOption>
                <IoImageSharp />
                <Link to="/">Images</Link>
              </SearchPageOption>
              <SearchPageOption>
                <IoVideocam />
                <Link to="/">Video</Link>
              </SearchPageOption>
              <SearchPageOption>
                <IoNewspaperOutline />
                <Link to="/">News</Link>
              </SearchPageOption>
              <SearchPageOption>
                <RiShoppingBag4Fill />
                <Link to="/">Shopping</Link>
              </SearchPageOption>
              <SearchPageOption>
                <IoEllipsisVerticalSharp />
                <Link to="/">More</Link>
              </SearchPageOption>
            </Options>
            <Options right>
              <SearchPageOption>
                <SearchIcon />
                <Link to="/">Settings</Link>
              </SearchPageOption>
            </Options>
          </SearchPageOptions>
        </div>
      </SearchPageHeader>
      {term && (
        <SearchPageResults>
          <p className="resultCount">
            About {data?.searchInformation.fotmattedTotalResults} results (
            {data?.searchInformation.fotmattedSearchTime} ) for {term} TWD
          </p>
          {data?.items.map((item) => (
            <div className="result">
              <SearchPageLink href={item.link}>
                {item.pagemap?.cse.image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img src={item.pagemap?.cse_image[0]?.src} alt="search" />
                  )}
                {item.displayLink}
              </SearchPageLink>
              <SearchPageResultTitle href="">
                <h2>{item.title}</h2>
              </SearchPageResultTitle>
              <SearchPageResultDesc>{item.snippet}</SearchPageResultDesc>
            </div>
          ))}
        </SearchPageResults>
      )}
    </div>
  );
};

export default SearchPage;
