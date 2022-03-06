import { ChangeEvent, FC } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { Box, InputBase } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

const SearchStyled = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  width: '100%'
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: '100%',
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%'
  }
}));

interface Props {
  onSearch: (term: string) => void;
}

export const SearchForm: FC<Props> = ({ onSearch }) => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 2 }}>
      <SearchStyled>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} onChange={handleChange} />
      </SearchStyled>
    </Box>
  );
};
