import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { connect } from 'react-redux';
import ListCart from '../listCart/listCart';
import { NavLink } from 'react-router-dom';

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

const ShoppingCart = props => {

  return (
    <NavLink to="/payments">
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={props.amount.length} color="secondary">
          <ShoppingCartIcon>
            <ListCart />
          </ShoppingCartIcon>
        </StyledBadge>
      </IconButton>
    </NavLink>
  );
}

const mapStateToProps = state => ({
  amount: state.amount.amountItem,
})

export default connect(mapStateToProps)(ShoppingCart);