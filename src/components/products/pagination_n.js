import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

  
export default function Pagination_n() {
  return (
    <div style={{ justifyContent:"center", display:"flex", padding: 50 }}>
      <Pagination count={10} color='secondary' size="large"/>
    </div>
  );
}