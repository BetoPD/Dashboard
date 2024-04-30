import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link className="my-link" to="">
            <HomeIcon fontSize="medium" />
          </Link>
        </li>
        <li>
          <Link className="my-link" to="/motivo">
            Contexto
          </Link>
        </li>
        <li>
          <Link className="my-link" to="/nosotros">
            ¿Quiénes somos?
          </Link>
        </li>
      </ul>
    </nav>
  );
}
