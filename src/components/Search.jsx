import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useHistory } from "react";
import { useStateValue } from "react";
import { SET_SEARCH_TERM } from "../types";
import styled from 'styled-components';
import { Button } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const SearchInput = styled.div`
display: flex;
align-items: center;
justify-content: space-beetwen;
border: 1px solid lightgray;
height: 45px;
padding:10px 15px;
width:500px;
margin: 0px auto;
border-radius: 999px;
 input {
  display: flex;
  flex-grow: 1
  padding: 8px 13px;
  font-size: medium;
  border: 0;
  outline: 0;
 }
 .searchIcon {
  margin-right: 10px;
 }
 .searchLeft {
  display: flex;
  align-items: center;
  justify-content: right;
  .searchIcon, .searchMic{
  color:gray;
 }
 .searchPhoto{
  color: red;
 }
 }
 `;

 const SearchButton = styled.div`
 margin-top: 20px;
 display:flex;
 justify-content:center;
 button{
  margin: 5px;
  backgroun: red !important;
  border: 1px solid white;
  text-transform: inherit;
  &:hover{
    margin:5px;
    background: red !important;
    color: black;
    border: 1px solid blue;
  }
 }
 `;
const Search = (hide) => {
  const [input, setInput] = useState ("");
  const history = useHistory();
  const [{}, dispatch] =useStateValue();

    const search = e => {
      e.preventDefault ();
      dispatch ({
        type: SET_SEARCH_TERM,
        term: input
      })
      console.log(input);
      history.push("/search");
    }

  return (
    <form onSubmit = {search}>
      <SearchInput>
        <SearchIcon className="searchIcon" />
        <input
          type="text"
          value={input}
          placeholder="Search Google or a type URL"
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="searchLeft">
          <MicIcon className="searchMic" />
          <AddAPhotoOutlinedIcon className="searchPhoto" />
        </div>
      </SearchInput>
      {!hide && (
        <SearchButton>
          <Button type="submit" variant="outline">
            <img src={AddCircleOutlineOutlinedIcon} alt="" />
            <p>Add shortcut</p>
          </Button>
        </SearchButton>
      )}
    </form>
  );
}

export default Search