export const StyledSearchbox = styled(Searchbox)`
width  : 32rem;
border : 1.7px solid #0072CE;
border-radius : 30px;
display : flex;
background : #c1cfe3;
padding   : 0.5rem 0.5rem;
justify-content: space-between;
input {
    padding : 0.2rem 1rem;
    width  : 30rem
    outline : 0;
    color : #0072CE;
    border : 0;
  }
  ${media.lessThan('medium')`
  width  : 24rem;
  padding : 0.5rem 0.5rem;
  input {
  border-radius : 15px;
    font-size : 0.8rem;
    padding : 0.2rem 0.5rem;
    width  : 23rem
  }
  `};
  ${media.lessThan('small')`
  width  : 100%;
  padding : 0.4rem 0.5rem;
  input {
    font-size : 0.8rem;
    padding : 0.2rem 0.5rem;
    width  : 90%;
  }
  `};
`
